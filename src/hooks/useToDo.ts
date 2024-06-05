import { FormEvent, useState } from 'react'
import { DragEndEvent, Over } from '@dnd-kit/core'
import { Task } from '../types/index'
import { useStorage } from './useStorage'

export const useToDo = () => {
  const { getData, saveData } = useStorage()
  const [dataList, setDataList] = useState(getData('data-list') as string[])
  const [dataTask, setDataTask] = useState(getData('data-task') as Task[])

  const handleAddList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formNewList = event.target as HTMLFormElement
    const formData = new FormData(formNewList)
    saveData('data-list', [...dataList, formData.get('new-list') as string])
    setDataList(getData('data-list') as string[])
    formNewList.reset()
  }

  const handleAddTask = (event: FormEvent<HTMLFormElement>, list: string) => {
    event.preventDefault()

    const formNewTask = event.target as HTMLFormElement
    const formData = new FormData(formNewTask)
    const lastId = dataTask.length ? dataTask.sort((a, b) => b.id - a.id)[0].id + 1 : 1
    const newTask = {
      id: lastId,
      title: formData.get('new-task') as string,
      description: '',
      status: list.trim()
    }
    formNewTask.reset()
    saveData('data-task', [...dataTask, newTask])
    setDataTask(getData('data-task') as Task[])
    window.location.reload()
  }

  const getDataTaskByStatus = (status: string): Task[] => {
    return dataTask.filter((list) => list.status === status)
  }

  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event

    if ((over as Over).id && active.data) {
      const currentTask: Task = active.data.current as Task
      const newData = dataTask.map((task) => {
        if (task.id === currentTask.id) {
          task.status = (over as Over).id as string
        }
        return task
      })
      saveData('data-task', newData)
      setDataTask(getData('data-task') as Task[])
    }
  }

  return { dataList, dataTask, getDataTaskByStatus, handleAddList, handleAddTask, handleDrop }
}

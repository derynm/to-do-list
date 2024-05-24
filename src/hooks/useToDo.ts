import { FormEvent, useState } from 'react'
import { DragEndEvent, Over } from '@dnd-kit/core'
import { Task } from '../types/index'
import useStorage from './useStorage'

const useToDo = () => {
  const { getData } = useStorage()
  const [dataList, setDataList] = useState(getData('data-list') as string[])
  const [dataToDo, setDataToDo] = useState(getData('data-to-do') as Task[])

  const { saveData } = useStorage()
  // console.log(dataToDo, 'dataToDo intial')

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
    const lastId = dataToDo.length ? dataToDo.sort((a, b) => b.id - a.id)[0].id + 1 : 1
    const newTask = {
      id: lastId,
      title: formData.get('new-task') as string,
      description: '',
      status: list.trim()
    }
    formNewTask.reset()
    saveData('data-to-do', [...dataToDo, newTask])
    setDataToDo(getData('data-to-do') as Task[])
  }

  const getDataToDoByStatus = (status: string): Task[] => {
    return dataToDo.filter((list) => list.status === status)
  }

  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event

    if ((over as Over).id && active.data) {
      const currentTask: Task = active.data.current as Task
      // console.log(currentTask, 'currentTask')
      const newData = dataToDo.map((task) => {
        if (task.id === currentTask.id) {
          task.status = (over as Over).id as string
        }
        return task
      })
      saveData('data-to-do', newData)
      setDataToDo(getData('data-to-do') as Task[])
    }
  }

  return { dataList, dataToDo, getDataToDoByStatus, handleAddList, handleAddTask, handleDrop }
}

export default useToDo

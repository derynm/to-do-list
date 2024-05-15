import { FormEvent, useState } from 'react'
import { DragEndEvent, Over } from '@dnd-kit/core'
import { ListTask, Task } from '../types/index'
import useStorage from './useStorage'

const useToDo = () => {
  const { getData } = useStorage()
  const [dataToDo, setDataToDo] = useState(getData())
  const { saveData } = useStorage()

  const handleAddList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formNewList = event.target as HTMLFormElement
    const formData = new FormData(formNewList)
    const lastId = dataToDo.length ? dataToDo[dataToDo.length - 1].id + 1 : 1
    const newList: ListTask = {
      id: lastId,
      name: formData.get('new-list') as string,
      items: []
    }
    setDataToDo([...dataToDo, newList])
    saveData([...dataToDo, newList])
    formNewList.reset()
  }

  const handleAddTask = (event: FormEvent<HTMLFormElement>, list: ListTask) => {
    event.preventDefault()

    const formNewTask = event.target as HTMLFormElement
    const formData = new FormData(formNewTask)
    const lastId = list.items.length ? list.items[list.items.length - 1].id + 1 : 1
    const newTask = {
      id: lastId,
      title: formData.get('new-task') as string,
      description: '',
      status: list.name.trim()
    }
    const newListIndex = dataToDo.findIndex((list) => list.name === newTask.status)
    dataToDo[newListIndex].items.push(newTask)
    saveData(dataToDo)
    setDataToDo(getData())
  }

  const handleDrop = (event: DragEndEvent) => {
    const { active, over } = event

    if ((over as Over).id && active.data) {
      const currentTask: Task = active.data.current as Task
      currentTask.status = (over as Over).id as string

      const newDataToDo = dataToDo.map((list) => ({
        ...list,
        items: list.items.filter((item) => item.id !== currentTask.id)
      }))

      const newListIndex = newDataToDo.findIndex((list) => list.name === (over as Over).id)
      if (newListIndex !== -1) {
        newDataToDo[newListIndex].items.push(currentTask)
        setDataToDo(newDataToDo)
        saveData(newDataToDo)
      }
    }
  }

  return { dataToDo, handleAddList, handleDrop, handleAddTask }
}

export default useToDo

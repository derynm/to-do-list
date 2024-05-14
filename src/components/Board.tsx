import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { ListTask } from '../types'
import ListCard from './ListCard'

function Board({ initialDataToDo }: { initialDataToDo: ListTask[] }) {
  const [dataToDo, setDataToDo] = useState(initialDataToDo)

  const handleDrop = (event) => {
    const { active, over } = event

    if (over.id && active.data) {
      const currentTask = active.data.current
      currentTask.status = over.id

      const newDataToDo = dataToDo.map((list) => ({
        ...list,
        items: list.items.filter((item) => item.id !== currentTask.id)
      }))

      const newListIndex = newDataToDo.findIndex((list) => list.name === over.id)
      if (newListIndex !== -1) {
        newDataToDo[newListIndex].items.push(currentTask)
        setDataToDo(newDataToDo)
      }
    }
  }
  return (
    <div className="flex w-full flex-1 snap-x gap-3 overflow-x-auto bg-slate-50 p-4">
      <DndContext onDragEnd={handleDrop}>
        {dataToDo.map((list) => (
          <ListCard key={list.id} list={list} />
        ))}
      </DndContext>
    </div>
  )
}

export default Board

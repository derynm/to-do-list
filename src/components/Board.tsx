import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import ListCard from './ListCard'
import useToDo from '../hooks/useToDo'

// import { ListTask } from '../types'

function Board() {
  const { dataList, getDataToDoByStatus, handleAddList, handleDrop } = useToDo()

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  return (
    <div className="flex w-full flex-1 snap-x gap-3 overflow-x-auto bg-slate-50 p-4">
      <DndContext sensors={sensors} onDragEnd={handleDrop}>
        {dataList.map((list, index) => (
          <ListCard key={index} list={list} task={getDataToDoByStatus(list)} />
        ))}
      </DndContext>
      <div className=" h-fit w-full max-w-80 shrink-0 rounded-md bg-slate-800 p-2 text-white">
        <form className="flex w-full gap-2" onSubmit={handleAddList}>
          <input
            type="text"
            placeholder="Add List"
            className="w-full rounded bg-slate-600 p-1"
            required
            name="new-list"
          />
          <button className="rounded bg-slate-500 p-1 text-sm">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Board

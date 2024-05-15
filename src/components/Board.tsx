import { DndContext } from '@dnd-kit/core'
import ListCard from './ListCard'
import useToDo from '../hooks/useToDo'

function Board() {
  const { dataToDo, handleAddList, handleDrop } = useToDo()

  return (
    <div className="flex w-full flex-1 snap-x gap-3 overflow-x-auto bg-slate-50 p-4">
      <DndContext onDragEnd={handleDrop}>
        {dataToDo.map((list) => (
          <ListCard key={list.id} list={list} />
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

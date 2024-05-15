import { useDroppable } from '@dnd-kit/core'
import CardTask from './CardTask'
import { ListTask } from '../types/index'
import useToDo from '../hooks/useToDo'

function ListCard({ list }: { list: ListTask }) {
  const { setNodeRef } = useDroppable({
    id: `${list.name}`,
    data: list.items
  })

  const { handleAddTask } = useToDo()

  return (
    <div
      className="h-fit w-full max-w-80 shrink-0 snap-center rounded-lg bg-slate-400 p-2"
      ref={setNodeRef}>
      <p className="text-lg font-semibold">{list.name}</p>
      <div className="space-y-2">
        {list.items.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className=" mt-5 h-fit w-full max-w-80 shrink-0 rounded-md text-white">
        <form className="flex w-full gap-2" onSubmit={(event) => handleAddTask(event, list)}>
          <input
            type="text"
            placeholder="Add Task"
            className="w-full rounded bg-slate-600 p-1"
            required
            name="new-task"
          />
          <button className="rounded bg-slate-500 p-1 text-sm">Add</button>
        </form>
      </div>
    </div>
  )
}

export default ListCard

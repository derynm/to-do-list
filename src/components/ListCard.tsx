import { useDroppable } from '@dnd-kit/core'
import CardTask from './CardTask'
import { ListTask } from '../types/index'

function ListCard({ list }: { list: ListTask }) {
  const { setNodeRef } = useDroppable({
    id: `${list.name}`,
    data: list.items
  })
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
    </div>
  )
}

export default ListCard

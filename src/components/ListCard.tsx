import CardTask from './CardTask'
import { List } from '../types/index'

function ListCard({ list }: { list: List }) {
  return (
    <div className="h-fit w-full max-w-80 shrink-0 snap-center rounded-lg bg-slate-400 p-2">
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

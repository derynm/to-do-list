import { Task } from '../types/index'

function CardTask({ task }: { task: Task }) {
  return (
    <div className="rounded-md bg-slate-800 p-2 text-white">
      <p>{task.title}</p>
    </div>
  )
}

export default CardTask

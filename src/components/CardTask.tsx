import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Task } from '../types/index'

function CardTask({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `task-${task.id}`,
    data: task
  })
  const style = {
    transform: CSS.Translate.toString(transform)
  }
  return (
    <div
      className="rounded-md bg-slate-800 p-2 text-white"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}>
      <p>{task.title}</p>
    </div>
  )
}

export default CardTask

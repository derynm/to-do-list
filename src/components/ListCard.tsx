import { useDroppable } from '@dnd-kit/core'
import { CardTask } from './CardTask'
import { Task } from '../types/index'
import { useToDo } from '../hooks/useToDo'
import { useState } from 'react'
import { LuPlusCircle } from 'react-icons/lu'

export function ListCard({ list, task }: { list: string; task: Task[] }) {
  const { setNodeRef } = useDroppable({
    id: list,
    data: task
  })

  const { handleAddTask } = useToDo()
  const [isInputShow, setIsInputShow] = useState<boolean>(false)

  return (
    <div
      className="h-fit w-full max-w-80 shrink-0 snap-center rounded-lg bg-slate-400 p-2"
      ref={setNodeRef}>
      <p className="text-lg font-semibold">{list}</p>
      <div className="space-y-2">
        {task.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className=" mt-5 h-fit w-full max-w-80 shrink-0 rounded-md text-white">
        {isInputShow ? (
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
        ) : (
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setIsInputShow(true)}>
            <p>Add New Task</p>
            <LuPlusCircle />
          </div>
        )}
      </div>
    </div>
  )
}

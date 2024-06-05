import { useDroppable } from '@dnd-kit/core'
import { AiOutlineClose } from 'react-icons/ai'
import { LuPlusCircle } from 'react-icons/lu'

import { CardTask } from './CardTask'
import { Task } from '../types/index'
import { useToDo } from '../hooks/useToDo'
import { useState } from 'react'

export function ListCard({ list, task }: { list: string; task: Task[] }) {
  const { setNodeRef } = useDroppable({
    id: list,
    data: task
  })

  const { handleAddTask, handleDeleteList } = useToDo()
  const [isInputShow, setIsInputShow] = useState<boolean>(false)

  return (
    <div
      className="h-fit w-full max-w-80 shrink-0 snap-center rounded-lg bg-slate-400 p-2"
      ref={setNodeRef}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-lg font-semibold">{list}</p>
        <i
          onClick={() => handleDeleteList(list)}
          className="rounded-full p-2 transition-colors duration-700 hover:bg-slate-600">
          <AiOutlineClose className="cursor-pointer" />
        </i>
      </div>
      <div className="space-y-2">
        {task.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
      <div className=" mt-5 h-fit w-full max-w-80 shrink-0 rounded-md text-white">
        {isInputShow ? (
          <form className="w-full space-y-2" onSubmit={(event) => handleAddTask(event, list)}>
            <input
              type="text"
              placeholder="Add Task"
              className="w-full rounded bg-slate-600 p-1"
              required
              name="new-task"
            />
            <div className="flex items-center justify-end gap-2">
              <i
                onClick={() => setIsInputShow(false)}
                className="flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-700 hover:bg-slate-600">
                <AiOutlineClose className="cursor-pointer text-slate-800" />
              </i>
              <button type="submit" className="rounded-md bg-slate-600 px-2 py-1 text-sm">
                Add
              </button>
            </div>
          </form>
        ) : (
          <div
            className="flex cursor-pointer items-center justify-between rounded-md  px-3 py-1 text-slate-800 transition-colors duration-700 hover:bg-slate-600 "
            onClick={() => setIsInputShow(true)}>
            <p className="font-semibold">Add New Task</p>
            <LuPlusCircle />
          </div>
        )}
      </div>
    </div>
  )
}

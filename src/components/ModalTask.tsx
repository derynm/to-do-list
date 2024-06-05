import { AiOutlineClose } from 'react-icons/ai'

import { Task } from '../types/index'
import { useToDo } from '../hooks/useToDo'

export function ModalTask({ task, toggle }: { task: Task; toggle: () => void }) {
  const { handleDeleteTask, handleEditTask } = useToDo()

  return (
    <div className="absolute -top-2 left-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-35">
      <div className="w-full max-w-96 shrink-0 rounded-lg bg-white p-4 text-black">
        <div className="flex justify-end">
          <AiOutlineClose onClick={() => toggle()} className="cursor-pointer" />
        </div>
        <form
          className="space-y-3"
          onSubmit={(event) => {
            handleEditTask(event, task)
          }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={task.title}
              className="rounded-lg border-2 border-white p-2 transition-all duration-300 hover:border-slate-200 focus:bg-slate-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={task.description}
              className="rounded-lg border-2 border-white p-2 transition-all duration-300 hover:border-slate-200 focus:bg-slate-300"></textarea>
          </div>

          <div className="flex justify-end gap-4">
            <button
              className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white"
              onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

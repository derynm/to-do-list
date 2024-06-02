import { Task } from '../types/index'

function ModalTask({ task, toggle }: { task: Task; toggle: () => void }) {
  return (
    <div className="absolute -top-2 left-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-35">
      <div className="w-full max-w-96 shrink-0 rounded-lg bg-white p-4 text-black">
        <div className="flex justify-end">
          <button onClick={() => toggle()} className="float-right">
            Close
          </button>
        </div>
        <form>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={task.title}
              className="rounded-lg border-2 border-white p-2 transition-all duration-300 hover:border-slate-200"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalTask

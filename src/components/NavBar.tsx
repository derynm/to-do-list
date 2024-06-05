import { AiOutlineHistory } from 'react-icons/ai'

export function NavBar() {
  return (
    <nav className="flex items-center gap-5 bg-slate-500 p-4 text-white">
      <a href="/" className="text-2xl font-semibold">
        To Do List
      </a>
      <a
        href="/activity"
        className="flex items-center gap-2 rounded-lg p-2 text-xl hover:bg-slate-800">
        <AiOutlineHistory />
        Activity
      </a>
    </nav>
  )
}

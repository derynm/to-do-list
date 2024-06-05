import { AiOutlineHistory } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <nav className="flex items-center gap-5 bg-slate-500 p-4 text-white">
      <NavLink to="/" className="text-2xl font-semibold">
        To Do List
      </NavLink>
      <NavLink
        to="/activity"
        className="flex items-center gap-2 rounded-lg p-2 text-xl hover:bg-slate-800">
        <AiOutlineHistory />
        Activity
      </NavLink>
    </nav>
  )
}

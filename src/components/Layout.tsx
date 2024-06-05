import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Outlet />
    </div>
  )
}

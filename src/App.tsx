import { Board } from './components/Board'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Board />
    </div>
  )
}

export default App

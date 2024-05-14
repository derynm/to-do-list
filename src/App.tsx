import Board from './components/Board'
import NavBar from './components/NavBar'
import useStorage from './hooks/useStorage'

function App() {
  const { getData, saveData } = useStorage()
  saveData([
    {
      name: 'toDo',
      id: '1',
      items: [
        { id: 1, title: 'Task 1', description: 'Description 1', status: 'toDo' },
        { id: 2, title: 'Task 2', description: 'Description 2', status: 'toDo' },
        { id: 3, title: 'Task 3', description: 'Description 3', status: 'toDo' }
      ]
    },
    {
      name: 'inProgress',
      id: '2',
      items: [
        { id: 4, title: 'Task 4', description: 'Description 4', status: 'inProgress' },
        { id: 5, title: 'Task 5', description: 'Description 5', status: 'inProgress' }
      ]
    },
    {
      name: 'done',
      id: '3',
      items: [{ id: 6, title: 'Task 6', description: 'Description 6', status: 'done' }]
    }
  ])
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Board initialDataToDo={getData()} />
    </div>
  )
}

export default App

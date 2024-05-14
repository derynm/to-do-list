import ListCard from './ListCard'

function Board() {
  const list = [
    {
      name: 'toDo',
      id: '1',
      items: [
        { id: 1, title: 'Task 1', description: 'Description 1', status: 'toDo' },
        { id: 2, title: 'Task 2', description: 'Description 2', status: 'toDo' },
        { id: 3, title: 'Task 3', description: 'Description 3', status: 'toDo' }
      ]
    }
  ]

  return (
    <div className="flex w-full flex-1 snap-x gap-3 overflow-x-auto bg-slate-50 p-4">
      {list.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  )
}

export default Board

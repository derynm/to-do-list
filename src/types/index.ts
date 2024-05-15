interface Task {
  id: number
  title: string
  description: string
  status: string
}

interface ListTask {
  id: number
  name: string
  items: Task[]
}

export type { Task, ListTask }

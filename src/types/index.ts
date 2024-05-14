interface Task {
  id: number
  title: string
  description: string
  status: string
}

interface List {
  id: string
  name: string
  items: Task[]
}

export type { Task, List }

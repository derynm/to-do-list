interface Task {
  id: number
  title: string
  description: string
  status: string
}

interface List {
  id: number
  name: string
  items: Task[]
}

interface Activity {
  id: number
  action: string
  from: string
  to: string
  task: string
  time: string
}
export type { Task, List, Activity }

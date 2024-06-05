import { Task, Activity } from '../types/index'

export const useStorage = () => {
  const getData = (name: string): Task[] | string[] | Activity[] => {
    return JSON.parse(localStorage.getItem(name) || '[]')
  }

  const saveData = (name: string, data: Task[] | Activity[] | string[]) => {
    localStorage.setItem(name, JSON.stringify(data))
  }

  return { getData, saveData }
}

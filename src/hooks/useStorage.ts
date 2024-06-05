import { Task } from '../types/index'

export const useStorage = () => {
  const getData = (name: string): Task[] | string[] => {
    return JSON.parse(localStorage.getItem(name) || '[]')
  }

  const saveData = (name: string, data: Task[] | string[]) => {
    localStorage.setItem(name, JSON.stringify(data))
  }

  return { getData, saveData }
}

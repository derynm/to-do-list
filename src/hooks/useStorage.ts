import { ListTask } from '../types/index'

const useStorage = () => {
  const getData = (): ListTask[] => {
    return JSON.parse(localStorage.getItem('data') || '[]')
  }

  const saveData = (data: ListTask[]) => {
    console.log(data)
    localStorage.setItem('data', JSON.stringify(data))
  }

  return { getData, saveData }
}

export default useStorage

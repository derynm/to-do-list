import { List } from '../types/index'

const useStorage = () => {
  const getData = (): List[] => {
    return JSON.parse(localStorage.getItem('data') || '[]')
  }

  const saveData = (data: List[]) => {
    localStorage.setItem('data', JSON.stringify(data))
  }

  return { getData, saveData }
}

export default useStorage

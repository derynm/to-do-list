import dayjs from 'dayjs'
import { useState } from 'react'
import { Activity } from '../types/index'
import { useStorage } from './useStorage'

export const useActivity = () => {
  const { getData, saveData } = useStorage()

  const [dataActivity, setDataActivity] = useState(getData('data-activity') as Activity[])

  const createNewActivity = (action: string, from: string, to: string, task: string) => {
    const history = {
      id: Math.floor(Math.random() * 10000),
      action,
      from,
      to,
      task,
      time: dayjs().format('YYYY MMM DD HH:mm')
    }
    saveData('data-activity', [...dataActivity, history])
    setDataActivity(getData('data-activity') as Activity[])
  }

  return { dataActivity, createNewActivity }
}

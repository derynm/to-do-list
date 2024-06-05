import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Task } from '../types/index'
import { ModalTask } from './ModalTask'
import { useState } from 'react'
import { LuGripVertical } from 'react-icons/lu'

export function CardTask({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable({
    id: task.id,
    data: task
  })
  const style = {
    transform: CSS.Translate.toString(transform)
  }

  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    console.log('first')
    setShowModal(!showModal)
  }
  return (
    <>
      <div
        className={`flex justify-between rounded-md bg-slate-800 p-2 text-white ${active?.id === task.id && 'border-2 border-blue-400'}`}
        onClick={toggleModal}
        ref={setNodeRef}
        style={style}>
        <p>{task.title}</p>

        <button {...listeners} {...attributes}>
          <LuGripVertical />
        </button>
      </div>
      {showModal && <ModalTask task={task} toggle={toggleModal} />}
    </>
  )
}

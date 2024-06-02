import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Task } from '../types/index'
import ModalTask from './ModalTask'
import { useState } from 'react'

function CardTask({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `task-${task.id}`,
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
        className="rounded-md bg-slate-800 p-2 text-white"
        onClick={toggleModal}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}>
        <p>{task.title}</p>
      </div>
      {showModal && <ModalTask task={task} toggle={toggleModal} />}
    </>
  )
}

export default CardTask

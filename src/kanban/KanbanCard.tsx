import { useState } from 'react';
import { KanbanTask, Id } from './types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  task: KanbanTask
  updateTask: (id: Id, content: string) => void
  deleteTask: (id: Id) => void
}

const KanbanCard = (props: Props) => {
  const { task, updateTask, deleteTask } = props;
  const [mouseOver, setMouseOver] = useState(false);

  const { 
    attributes: cardAttributes, 
    listeners: cardListeners, 
    setNodeRef: setCardNodeRef, 
    transform: cardTransform, 
    transition: cardTransition, 
    isDragging: isCardDragging } = useSortable({
    id: task.id,
    data: { type: "Task", task },
    disabled: false,
  });

  const style = {
    cardTransition,
    transform: CSS.Transform.toString(cardTransform),
    opacity: isCardDragging ? 0.5 : 1,
  }

  if (isCardDragging) {
    return (
      <div
        className="card text-sm"
        ref={setCardNodeRef}
        style={{ 
          ...style, opacity: 0.5, padding: '10px', height: '80px', minHeight: '80px', width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'start', cursor: 'pointer',
          position: 'relative',
        }}
        {...cardAttributes}
        {...cardListeners}
      >
        {task.content}
      </div>
    )
  }

  return (
    <div
      className="card mb-2"
      ref={setCardNodeRef}
      style={{ 
        ...style, padding: '10px', height: '80px', minHeight: '80px', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'start', cursor: 'pointer',
        position: 'relative',
    }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      {...cardAttributes}
      {...cardListeners}
    >
      <p className="m-0 text-sm">{task.content}</p>
    </div>
  )
}

export default KanbanCard;
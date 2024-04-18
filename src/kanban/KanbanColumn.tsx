import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Id, KanbanColumn as IColumn, KanbanTask as ITask } from './types';
import { CSS } from '@dnd-kit/utilities';
import { useMemo, useState } from 'react';
import KanbanCard from './KanbanCard';

type Props = {
  column: IColumn
  tasks: ITask[]
  updateColumn: (id: Id, title: string) => void
  updateTask: (id: Id, content: string) => void
  deleteTask: (id: Id) => void
  color: string
}

const KanbanColumn = (props: Props) => {
  const { column, tasks, updateColumn, updateTask, deleteTask, color } = props;

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: { type: "Column", column },
    disabled: false,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // opacity: isDragging ? 0.5 : 1
  };

  if (isDragging) {
    return (
      <div
        className="card"
        ref={setNodeRef}
        style={{
          ...style, 
          display: 'inline-block',
          opacity: 0.3,
          width: '330px',
          height: '74vh',
          verticalAlign: 'top',
          whiteSpace: 'normal',
          backgroundColor: 'silver',
          }}
        ></div>
    );
  }

  return (
    <div
      className="card py-3 px-3"
      ref={setNodeRef}
      style={{
        display: 'inline-block',
        width: '330px',
        height: '80vh',
        verticalAlign: 'top',
        whiteSpace: 'normal',
        backgroundColor: '#f0f0f0',
      }}
    >
      {/* title */}
      <div
        className="px-2"
        style={{
          alignItems: 'start',
          justifyContent: 'space-between',
          width: '100%',
          height: '3vh',
          display: 'flex',
          flexDirection: 'row',
          cursor: 'grab',
        }}
        {...attributes}
        {...listeners}
      >
        <div className="text-lg font-bold" style={{ color: "gray"}}>
          {column.title}
        </div>
        <div className="flex gap-2">
          <div className="text-xs">
            ({tasks.length})
          </div>
        </div>
      </div>
      <div 
        className="p-1 mb-2" 
        style={{
          width: '100%',
          borderRadius: '10px',
          backgroundColor: color,
        }}
      />
      {/* tasks */}
      <div 
        className="flex flex-col gap-4 p-2" 
        style={{ width: '100%', height: '73vh', overflowY: 'scroll', overflowX: 'hidden' }}
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* footer */}
    </div>
  );
}

export default KanbanColumn;
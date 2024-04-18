import React from 'react';
import './App.css';
import KanbanBoard from './kanban/KanbanBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ borderRadius: '15px', backgroundColor: 'white' }}>
          <div className="text-xl m-3 mx-4" style={{ color: 'gray' }}>Board</div>
          <KanbanBoard
            columns={[
              { id: "1", title: "To Do", color: "#007bff" },
              { id: "2", title: "In Progress", color: "#ffc107" },
              { id: "3", title: "Done", color: "#28a745" },
              { id: "4", title: "Blocked", color: "#dc3545" },
            ]}
            tasks={[
              { id: "11", columnId: "1", title: "Task 1", content: "Content 1" },
              { id: "12", columnId: "1", title: "Task 2", content: "Content 2" },
              { id: "13", columnId: "2", title: "Task 3", content: "Content 3"},
              { id: "14", columnId: "2", title: "Task 4", content: "Content 4" },
              { id: "15", columnId: "3", title: "Task 5", content: "Content 5" },
              { id: "16", columnId: "3", title: "Task 6", content: "Content 6" },
              { id: "17", columnId: "3", title: "Task 7", content: "Content 7" },
              { id: "18", columnId: "3", title: "Task 8", content: "Content 8" },
              { id: "19", columnId: "3", title: "Task 9", content: "Content 9" },
              { id: "110", columnId: "3", title: "Task 10", content: "Content 10" },
              { id: "111", columnId: "4", title: "Task 11", content: "Content 11" },
              { id: "112", columnId: "4", title: "Task 12", content: "Content 12" },
              { id: "113", columnId: "4", title: "Task 13", content: "Content 13" },
            ]}
            updateColumn={() => {}}
            updateTask={() => {}}
            deleteTask={() => {}}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

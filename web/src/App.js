import React, { useState } from 'react';
import TaskList from '.components/TaskList';
import TaskForm from '.components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList />
    </div>
  );
}

export default App;
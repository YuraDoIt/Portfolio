import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList refreshTrigger={refreshTrigger} />
    </div>
  );
}

export default App;
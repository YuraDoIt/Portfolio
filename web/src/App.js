import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleTasksLoaded = (loadedTasks) => {
    setTasks(loadedTasks);
    setTotalTasks(loadedTasks.length);
  };

  const handleTaskDeleted = (deletedTaskId) => {
    const updatedTasks = tasks.filter(task => task.id !== deletedTaskId);
    setTasks(updatedTasks);
    setTotalTasks(updatedTasks.length);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Task Manager</h1>
          <p className="app-subtitle">Organize your tasks efficiently</p>
        </div>
      </header>

      {/* Main Body */}
      <main className="app-main">
        <div className="container">
          <div className="content-wrapper">
            {/* Task Form Section */}
            <section className="form-section">
              <TaskForm onTaskCreated={handleTaskCreated} />
            </section>

            {/* Task List Section */}
            <section className="list-section">
              <TaskList 
                refreshTrigger={refreshTrigger}
                onTasksLoaded={handleTasksLoaded}
                onTaskDeleted={handleTaskDeleted}
              />
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 Task Manager. Built with React & NestJS.</p>
          <div className="footer-links">
            <span>Total Tasks: {totalTasks}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
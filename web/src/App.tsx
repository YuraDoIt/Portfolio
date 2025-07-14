import React, { useState } from "react";
import TaskList from "./components/Task/TaskList";
import TaskForm from "./components/Task/TaskForm";
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css";
import { Task } from "./types";

function App(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState<string>("portfolio"); // Default to portfolio
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [totalTasks, setTotalTasks] = useState<number>(0);

  const handleTaskCreated = (newTask: Task): void => {
    setTasks([...tasks, newTask]);
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleTasksLoaded = (loadedTasks: Task[]): void => {
    setTasks(loadedTasks);
    setTotalTasks(loadedTasks.length);
  };

  const handleTaskDeleted = (deletedTaskId: number): void => {
    const updatedTasks = tasks.filter((task) => task.id !== deletedTaskId);
    setTasks(updatedTasks);
    setTotalTasks(updatedTasks.length);
  };

  const renderPage = (): React.JSX.Element => {
    switch (currentPage) {
      case "tasks":
        return (
          <div className="task-manager-page">
            <div className="container">
              <div className="content-wrapper">
                <section className="form-section">
                  <TaskForm onTaskCreated={handleTaskCreated} />
                </section>
                <section className="list-section">
                  <TaskList
                    refreshTrigger={refreshTrigger}
                    onTasksLoaded={handleTasksLoaded}
                    onTaskDeleted={handleTaskDeleted}
                  />
                </section>
              </div>
            </div>
          </div>
        );
      case "portfolio":
        return <Portfolio />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="App">
      {/* Navigation Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="nav-container">
            <h1 className="app-title">Portfolio Yurii</h1>
            <nav className="main-nav">
              <button
                className={`nav-btn ${
                  currentPage === "portfolio" ? "active" : ""
                }`}
                onClick={() => setCurrentPage("portfolio")}
              >
                Portfolio
              </button>
              <button
                className={`nav-btn ${currentPage === "tasks" ? "active" : ""}`}
                onClick={() => setCurrentPage("tasks")}
              >
                Task Manager
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">{renderPage()}</main>

      {/* Footer - Only show for Task Manager */}
 (
        <footer className="app-footer">
          <div className="footer-content">
            <p>
              &copy; 2025 Portfolio . Built with React & NestJS.
            </p>
            <div className="footer-links">
              <span>Total Tasks: {totalTasks}</span>
            </div>
          </div>
        </footer>
      )
    </div>
  );
}

export default App; 
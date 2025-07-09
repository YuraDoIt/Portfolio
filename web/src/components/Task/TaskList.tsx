import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST } from "../../const/environment";
import { TaskListProps, Task, TasksResponse } from "../../types";

const TaskList: React.FC<TaskListProps> = ({ refreshTrigger, onTasksLoaded, onTaskDeleted }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchTasks = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get<TasksResponse>(`${API_HOST}/tasks`);

      // Handle the backend response format: { tasks: Task[], total: number }
      let tasksData: Task[] = [];
      if (response.data && response.data.tasks) {
        // Backend returns { tasks: Task[], total: number }
        tasksData = Array.isArray(response.data.tasks)
          ? response.data.tasks
          : [];
      } else if (Array.isArray(response.data)) {
        // Fallback: if response.data is directly an array
        tasksData = response.data as Task[];
      }

      setTasks(tasksData);
      setError("");

      // Notify parent component about loaded tasks
      if (onTasksLoaded) {
        onTasksLoaded(tasksData);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to load tasks. Please try again.");
      setTasks([]); // Ensure tasks is always an array

      // Notify parent component about empty tasks on error
      if (onTasksLoaded) {
        onTasksLoaded([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refreshTrigger]);

  const deleteTask = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_HOST}/tasks/${id}`);
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);

      // Notify parent component about deleted task
      if (onTaskDeleted) {
        onTaskDeleted(id);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Failed to delete task. Please try again.");
    }
  };

  // Ensure tasks is always an array before filtering
  const safeTasks: Task[] = Array.isArray(tasks) ? tasks : [];

  // Filter tasks based on search term
  const filteredTasks: Task[] = safeTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading-message">Loading tasks...</div>;
  }

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {error && <p className="error-message">{error}</p>}

      {/* Search Field */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {safeTasks.length === 0 ? (
        <p className="empty-message">
          No tasks found. Create your first task above!
        </p>
      ) : filteredTasks.length === 0 ? (
        <p className="no-results">No tasks match your search: "{searchTerm}"</p>
      ) : (
        <div className="tasks-container">
          <p className="results-info">
            Showing {filteredTasks.length} of {safeTasks.length} tasks
            {searchTerm && ` for "${searchTerm}"`}
          </p>
          <ul className="tasks-ul">
            {filteredTasks.map((task) => (
              <li key={task.id} className="task-item">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList; 
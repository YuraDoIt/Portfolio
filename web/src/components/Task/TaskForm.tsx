import React, { useState } from "react";
import axios from "axios";
import { TaskFormProps, Task } from "../../types";
import { API_HOST } from "../../const/environment";

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post<Task>(`${API_HOST}/tasks`, {
        title,
        description,
      });

      // Clear form
      setTitle("");
      setDescription("");

      // Notify parent component about the new task
      if (onTaskCreated) {
        onTaskCreated(response.data);
      }

      console.log("Task created successfully:", response.data);
    } catch (error) {
      console.error("Error creating task:", error);
      setError("Failed to create task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            required
            disabled={loading}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            required
            disabled={loading}
            rows={4}
            className="form-textarea"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`submit-btn ${loading ? "loading" : ""}`}
        >
          {loading ? "Creating..." : "Add Task"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TaskForm; 
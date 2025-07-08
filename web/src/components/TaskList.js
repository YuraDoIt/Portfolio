import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ refreshTrigger }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/tasks');
      setTasks(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to load tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refreshTrigger]);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Failed to delete task. Please try again.');
    }
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h2>Task List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Search Field */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {tasks.length === 0 ? (
        <p>No tasks found. Create your first task above!</p>
      ) : filteredTasks.length === 0 ? (
        <p>No tasks match your search: "{searchTerm}"</p>
      ) : (
        <div>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Showing {filteredTasks.length} of {tasks.length} tasks
            {searchTerm && ` for "${searchTerm}"`}
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredTasks.map(task => (
              <li key={task.id} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{task.title}</h3>
                <p style={{ margin: '0 0 15px 0', color: '#666' }}>{task.description}</p>
                <button 
                  onClick={() => deleteTask(task.id)}
                  style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
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
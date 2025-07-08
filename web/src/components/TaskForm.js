import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        console.log("title", title)
      const response = await axios.post('http://localhost:3001/tasks', { 
        title, 
        description 
      });
      
      onTaskCreated(response.data);
      setTitle('');
      setDescription('');
      console.log('Task created successfully:', response.data);
    } catch (error) {
      console.error('Error creating task:', error);
      setError('Failed to create task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>    
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
            style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: '1px solid #ccc',
            }}
        />
        <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            disabled={loading}
            style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minHeight: '80px',  // щоб textarea була достатньо високою
            resize: 'vertical',  // дозволяє змінювати висоту, але не ширину
            }}
        />
        <button
            type="submit"
            disabled={loading}
            style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: loading ? 'not-allowed' : 'pointer',
            }}
        >
            {loading ? 'Creating...' : 'Add Task'}
        </button>
        </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TaskForm;
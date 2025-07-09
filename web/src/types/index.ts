// Task related types
export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TaskFormProps {
  onTaskCreated: (task: Task) => void;
}

export interface TaskListProps {
  refreshTrigger: number;
  onTasksLoaded?: (tasks: Task[]) => void;
  onTaskDeleted?: (id: number) => void;
}

// Portfolio related types
export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

// API response types
export interface TasksResponse {
  tasks: Task[];
  total: number;
}

export interface ApiError {
  message: string;
  status?: number;
} 
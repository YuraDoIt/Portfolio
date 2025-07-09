import { Skill, Project, Experience, Education } from "../../../types";

export const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "NestJS", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "Git", level: 85, category: "DevOps" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "Full-stack task management application built with React and NestJS. Features include task creation, search, and real-time updates.",
    technologies: ["React", "NestJS", "TypeScript", "Axios"],
    image: "task-manager",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "e-commerce",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    image: "weather-app",
    github: "#",
    live: "#",
  },
];

export const experience: Experience[] = [
  {
    company: "Tech Solutions Inc.",
    position: "Full Stack Developer",
    period: "2023 - Present",
    description:
      "Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Led development of 3 major features",
      "Improved application performance by 40%",
      "Mentored 2 junior developers",
    ],
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "2022 - 2023",
    description:
      "Built responsive user interfaces and implemented modern web technologies. Worked closely with designers to create intuitive user experiences.",
    achievements: [
      "Built 5+ responsive web applications",
      "Implemented CI/CD pipelines",
      "Reduced bundle size by 30%",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2018 - 2022",
    description:
      "Focused on software engineering, algorithms, and web development.",
  },
]; 
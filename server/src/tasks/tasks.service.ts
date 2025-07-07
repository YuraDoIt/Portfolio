import { Injectable } from "@nestjs/common"
import { v4 as uuid } from "uuid"

import { Task } from "./task.entity"

@Injectable()
export class TasksService {
	private tasks: Task[] = []

	getAllTasks(): Task[] {
		return this.tasks
	}

	createTask(title: string, description: string): Task {
		const task: Task = {
			id: uuid(),
			title,
			description,
			completed: false
		}
		this.tasks.push(task)
		return task
	}

	deleteTask(id: string): void {
		this.tasks = this.tasks.filter(task => task.id !== id)
	}
}

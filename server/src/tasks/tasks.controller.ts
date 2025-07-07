import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"

import { Task } from "./task.entity"
import { TasksService } from "./tasks.service"

@Controller("tasks")
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	getAllTasks(): Task[] {
		return this.tasksService.getAllTasks()
	}

	@Post()
	createTask(
		@Body("title") title: string,
		@Body("description") description: string
	): Task {
		return this.tasksService.createTask(title, description)
	}

	@Delete(":id")
	deleteTask(@Param("id") id: string): void {
		this.tasksService.deleteTask(id)
	}
}

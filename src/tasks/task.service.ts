import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { CreateTasksDto } from "./dto/create-tasks.dto";
import { InjectModel } from "@nestjs/mongoose";
import { TaskDocument, Tasks } from "./schemas/tasks.schema";
import { UpdateTasksDto } from "./dto/update-tasks.dto";

@Injectable()
export class TaskService{

  constructor(@InjectModel(Tasks.name) private taskModel: Model<TaskDocument>) {
  }


  async getAll(): Promise< Tasks[]>{
    return this.taskModel.find().exec()
  }

  getById(id: string){
    return this.taskModel.findById(id)
  }

  create(taskDto: CreateTasksDto): Promise<Tasks>{
    const newTask = new this.taskModel(taskDto)
    return newTask.save()
  }

  async remove (id: string): Promise<Tasks> {
    return this.taskModel.findByIdAndRemove(id)
  }

  async update (id: string, taskDto: UpdateTasksDto): Promise<Tasks>{
    return this.taskModel.findByIdAndUpdate(id, taskDto, {new: true})
  }
}
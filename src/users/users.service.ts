import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { Users, UsersDocument } from "./schemas/users.schemas";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";
import { InjectModel } from "@nestjs/mongoose";



@Injectable()
export class UsersService{

  constructor(@InjectModel(Users.name) private userModule: Model<UsersDocument>) {
  }

  async getUsers(): Promise<Users[]>{
    return this.userModule.find().exec()
  }
  async getUserId(id:string): Promise<Users>{
    return this.userModule.findById(id)
  }

  async createUser(userDto: CreateUsersDto): Promise<Users>{
    const newUser = new this.userModule(userDto)
    return newUser.save()
  }

  async removeUserId (id: string): Promise<Users>{
    return this.userModule.findByIdAndRemove(id)
  }

  async updateUser(id: string, userDto: UpdateUsersDto): Promise<Users>{
    return this.userModule.findByIdAndUpdate(id, userDto, {new: true})
  }



}
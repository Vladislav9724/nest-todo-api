import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";
import { Users } from "./schemas/users.schemas";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  getUsers(): Promise<Users[]>{
    return this.usersService.getUsers()
  }

  @Get(':id')
  getUserId(@Param('id') id: string): Promise<Users>{
    return this.usersService.getUserId(id)
  }

  @Post()
  createUser(@Body() createUserDto: CreateUsersDto): Promise<Users>{
    return this.usersService.createUser(createUserDto)
  }

  @Delete('id')
  remove(@Param('id')id: string): Promise<Users>{
    return this.usersService.removeUserId(id)
  }

  @Put('id')
  updateUserId(@Body() updateUser: UpdateUsersDto, @Param('id')id: string): Promise<Users>{
    return this.usersService.updateUser(id, updateUser)
  }

}
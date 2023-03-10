import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getUsers() {
        const users = await this.userService.findUsers();
        return users;

        // this.userService.findUsers()
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
        this.userService.updateUser(id, updateUserDto)
      return "Data Updated";
    }

    @Delete(':id')
     deleteUserById(@Param('id', ParseIntPipe) id: number){
        this.userService.deleteUser(id)
      return "Data Deleted";
    }

    @Post('profiles')
    createUserProfile(@Body() createUserProfileDto: CreateUserProfileDto) {
      
    }
}

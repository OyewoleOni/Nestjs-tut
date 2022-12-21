import { Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.fiter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.usersService.getUsers();
    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('username/:username')
    getByUsername(@Param('username') username: string){
        const user = this.usersService.getUserByUsername(username);
        if(user) return new SerializedUser(user);
        else throw new NotFoundException('User Not Found')
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('/id/:id')
    getById(@Param('id', ParseIntPipe) id: number){
        const user = this.usersService.getUserById(id);
        if(user) return new SerializedUser(user);
        else{
            throw new UserNotFoundException()
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.createUser(createUserDto);
    }
}

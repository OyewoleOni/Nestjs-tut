import { ClassSerializerInterceptor, Controller, Get, NotFoundException, Param, UseInterceptors } from '@nestjs/common';
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
    @Get('/:username')
    getByUsername(@Param('username') username: string){
        const user = this.usersService.getUserByUsername(username);
        if(user) return new SerializedUser(user);
        else throw new NotFoundException('User Not Found')
    }
}

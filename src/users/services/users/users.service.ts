import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: User[] =[
        {
            username: "oni",
            password: "oni"
        },
        {
            username: "ayo",
            password: "ayo"
        },
        {
            username: "oye",
            password: "oye"
        }

    ]

    getUsers(){
        return this.users.map((user) => new SerializedUser(user))
    }

    getUserByUsername(username: string){
        return this.users.find((user) => user.username === username)
    }
}

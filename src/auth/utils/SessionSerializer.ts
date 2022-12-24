import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/typeorm";
import { UsersService } from "src/users/services/users/users.service";

export class SessionSerializer extends PassportSerializer{
    serializeUser(user: User, done: Function) {
        console.log('Serialize User');
       done(null, user)
    }
    async deserializeUser(payload: User, done: Function) {
       console.log('DeSerialize User');
       console.log(payload);
       const userDB = await this.userSevice.findUserById(payload.id)
       console.log(userDB);
       return userDB ? done(null, userDB): done(null, null);
    }
    
    constructor(
        @Inject('USER_SERVICE') private readonly userSevice: UsersService
        ){
            super()
    }   
}
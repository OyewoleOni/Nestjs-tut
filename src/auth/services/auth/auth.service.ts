import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService){}

   async validateUser(username: string, password: string){
    console.log('Inside validateUser');
        const userDB = await this.userService.findUserByUsername(username);
        if(userDB){
            const matched = comparePassword(password, userDB.password);
            if(matched){
                console.log('User Validation Success!');
                return userDB;
            } else{
                console.log('Password do not match!');
                return null;
            }
            
        } 
        console.log('User Validation Failed!');
        return null;
        
       
    }
}

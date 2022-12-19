import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
     users = [
        {
            id:1,
            email: 'oni@gmail.com',
            createdAt: new Date()
        },
        {
            id:2,
            email: 'ayo@gmail.com',
            createdAt: new Date()
        },
        {
            id:3,
            email: 'oye@gmail.com',
            createdAt: new Date()
        }
     ]

    getCustomers(){
       return this.users;
    }

    getCustomerById(id: number){
        return this.users.find(user => user.id === id);
    }

}

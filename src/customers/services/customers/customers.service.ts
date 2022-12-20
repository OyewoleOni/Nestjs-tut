import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/create-customer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers : Customer[] = [
        {
            id:1,
            email: 'oni@gmail.com',
            name: 'Oni',
            createdAt: new Date()
        },
        {
            id:2,
            email: 'ayo@gmail.com',
            name: 'Ayo',
            createdAt: new Date()
        },
        {
            id:3,
            email: 'oye@gmail.com',
            name: 'Oye',
            createdAt: new Date()
        }
     ]

    getCustomers(){
       return this.customers;
    }

    getCustomerById(id: number){
        return this.customers.find(user => user.id === id);
    }

    createCustomer(createCustomerDto : CreateCustomerDto){
        createCustomerDto.id = this.customers.length + 1
        this.customers.push(createCustomerDto);
    }

}

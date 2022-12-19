import { Controller, Get, NotFoundException, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private readonly customerService: CustomersService){}

    @Get()
    getCustomers(){
        return this.customerService.getCustomers();
    }

    @Get(':id')
    findCustomer(@Param('id', ParseIntPipe) id: number,
                 @Res() res: Response    
                 ){
        const customer = this.customerService.getCustomerById(id);
        if(customer){
            res.send(customer)
        } else{
            res.status(400).send({msg: 'Customer not Found!'});
        }
    }

    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id){
        const customer = this.customerService.getCustomerById(id);
        if(!customer){
             throw new NotFoundException('Customer Not Found');
        }
        return customer;
    }

}

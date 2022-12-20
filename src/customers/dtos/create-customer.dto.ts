import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./create-address.dto";

export class CreateCustomerDto{

    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    createdAt: Date;

    @ValidateNested()
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}
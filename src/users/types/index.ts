import { Exclude } from "class-transformer";

export interface User{
    id: number;
    username: string;
    password: string;
}

export class SerializedUser{

    constructor(partial: Partial<SerializedUser>){
        Object.assign(this, partial);
    }
    id: number;
    username: string;

    @Exclude()
    password: string;
}
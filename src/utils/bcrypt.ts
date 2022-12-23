import * as bycrpt from 'bcrypt';

export function encodePassword(rawPassword: string){
    const SALT = bycrpt.genSaltSync();
    return bycrpt.hashSync(rawPassword, SALT);
}

export function comparePassword(rawPassword: string, hashPassword: string){
    return bycrpt.compareSync(rawPassword, hashPassword);
}
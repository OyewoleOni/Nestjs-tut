import { Controller, Post, Get, Session, UseGuards, Req } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { Request as ExpressRequest} from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/local-guard';


@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
        
    }
    @Get('')
    async getAuthSession(@Session() session: Record<string, any>){
        console.log(session);
        console.log(session.id);
        session.authenticated = true;
        return session;
    }

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    getAuthStatus(@Req() req: ExpressRequest){
        return req.user
    }
}

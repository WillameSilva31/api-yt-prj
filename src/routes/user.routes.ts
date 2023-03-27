import { Router } from 'express'
import { login } from '../middleware/login';
import { UserRepository } from '../modules/user/repositories/UserRepository';

const userRoutes = Router();
const userRepository = new UserRepository() ;

userRoutes.post('/sign-up', (request:any, response:any)=>{
    userRepository.create(request, response);   
})

userRoutes.post('/sign-in',(request:any,response:any)=>{
    userRepository.login(request, response);
})

userRoutes.get('/get-user', login, (request:any,response:any)=>{
    userRepository.getUser(request,response);
})

export {userRoutes};

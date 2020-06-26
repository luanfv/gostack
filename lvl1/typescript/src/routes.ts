import { Request, Response } from 'express';
import CreateUser from './services/CreateUser'

export const helloTypescript = (request: Request, response: Response) => {
    const user = CreateUser({ 
        email: 'luanfv@gmail.com',
        password: '123456',
        techs: ['ReactJS', 'React Native', 'NodeJS', { name: 'React Native', expertise: 66 }],
    });
    
    return response.json(user);
}
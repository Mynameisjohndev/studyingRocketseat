import { Request, Response } from 'express';
import { createUser } from './services/createUser';

export function HelloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'joao@gmail.com',
        password: 'as0hd90pasd98',
        techs: [
        'React', 
        'Node', 
        'React Native',
        { title: 'Javascript', experience: 100 }
    ],
    });
    console.log(user);
    return response.json({message: 'Hello World'})
};
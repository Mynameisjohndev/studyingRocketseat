import { Request, Response } from 'express';

export function HelloWorld(request: Request, response: Response){
    return response.json({message: 'Hello World'})
};
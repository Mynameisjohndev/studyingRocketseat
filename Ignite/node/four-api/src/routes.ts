import { Request, Response } from "express";
import CreateCourseService from './CreateCourseService';

export function CreateCourse(request: Request, response: Response){
    CreateCourseService.execute({
        name: "NODE",
        duration: 10,
        educator: "João"
    });
    CreateCourseService.execute({
        name: "REACT",
        educator: "João"
    });
    return response.send();
}
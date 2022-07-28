import { ICreateCarDTO } from "@modules/dtos/ICreateCarDTO"
import { Car } from "../infra/typeorm/entities/cars";

interface ICarsRepository{
    create(data: ICreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
    findAvaliable(
        category_id?: string, 
        brand?: string, 
        name?:string
    ): Promise<Car[]>;
    findById(id:String): Promise<Car>;
}

export { ICarsRepository }
import { ICarsRepository } from '@modules/cars/repositories/ICarRepository';
import { ICreateCarDTO } from '@modules/dtos/ICreateCarDTO';
import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/cars';

class CarsRepository implements ICarsRepository{
    
    private repository: Repository<Car>

    constructor(){
        this.repository = getRepository(Car);       
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne(id);
        return car;
    }

    async findAvaliable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository
        .createQueryBuilder("c")
        .where("avaliable = :avaliable", { avaliable: true })

        if(brand){
            carsQuery.andWhere("c.brand = :brand", { brand })
        }
        if(category_id){
            carsQuery.andWhere("c.category_id = :category_id", { category_id })
        }
        if(name){
            carsQuery.andWhere("c.name = :name", { name })
        }

        const cars = await carsQuery.getMany();
        return cars;
    }

    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name,
        specifications,
        id
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name,
            specifications,
            id
        })

        await this.repository.save(car)

        return car;
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({license_plate})

        return car;
    }

}

export { CarsRepository }
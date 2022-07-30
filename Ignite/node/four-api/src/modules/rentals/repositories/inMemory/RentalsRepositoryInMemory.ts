import { ICreateRentalDto } from "@modules/rentals/dto/ICreateDto";
import { Rentals } from "@modules/rentals/infra/typeorm/entities/Rentals";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository{

        
    remtals: Rentals[] = [];
    
    async create({ car_id, user_id, expected_return_date }: ICreateRentalDto): Promise<Rentals> {
        const rental = new Rentals();
        Object.assign(rental,{
            car_id, 
            user_id, 
            expected_return_date,
            start_date: new Date()
        })
        this.remtals.push(rental);
        return rental;
    }
    
    async findOpenRentalByCar(car_id: string): Promise<Rentals> {
        return this.remtals.find(rental => rental.car_id === car_id && !rental.end_date)
    }

    async findOpenRentalByUser(user_id: string): Promise<Rentals> {
        return this.remtals.find(rental => rental.user_id === user_id && !rental.end_date )
    }


}

export { RentalsRepositoryInMemory }
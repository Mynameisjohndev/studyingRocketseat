import { Rentals } from "@modules/rentals/infra/typeorm/entitiees/Rentals";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository{
 
    remtals: Rentals[] = [];

    async findOpenRentalByCar(car_id: string): Promise<Rentals> {
        return this.remtals.find(rental => rental.car_id === car_id && rental.end_date == null)
    }

    async findOpenRentalByUser(user_id: string): Promise<Rentals> {
        return this.remtals.find(rental => rental.user_id === user_id && rental.end_date == null)
    }


}

export { RentalsRepositoryInMemory }
import { v4 as uuidV4 } from 'uuid';

class Rentals{

    id: string;

    car_id: string;

    user_id:string

    start_date: Date;

    end_date: Date;

    expected_return_date: Date;

    total: Date;

    created_at: Date;

    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }

}


export { Rentals }
import { v4 as uuidv4 } from "uuid";

class Car{
    id:string;

    name: string;

    description: string;

    avaliable: boolean;

    daily_rate: number;

    lincese_plate: string;

    fine_amount: number;

    brand: string;

    category_id: string;
    
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
            this.avaliable = true;
            this.created_at = new Date();
        }
    }

}

export { Car };
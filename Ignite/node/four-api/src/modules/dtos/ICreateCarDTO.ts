interface ICreateCarDTO{
    name: string;
    description: string;
    daily_rate: number;
    lincese_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

export { ICreateCarDTO };
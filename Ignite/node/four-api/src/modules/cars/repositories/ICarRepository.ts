import { ICreateCarDTO } from "@modules/dtos/ICreateCarDTO"

interface ICarsRepository{
    create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository }
import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    exeute({ description, name }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Spacification already existis!");
        }

        this.specificationRepository.create({
            description,
            name,
        });
    }
}

export { CreateSpecificationService };

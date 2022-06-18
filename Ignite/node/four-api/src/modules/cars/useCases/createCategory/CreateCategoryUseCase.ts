import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already existis!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
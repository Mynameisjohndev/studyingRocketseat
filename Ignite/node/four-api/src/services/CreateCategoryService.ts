import { CategoryRepositoryy } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoryRepository: CategoryRepositoryy) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already existis!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryService };

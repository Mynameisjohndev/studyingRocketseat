import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/entities/category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };

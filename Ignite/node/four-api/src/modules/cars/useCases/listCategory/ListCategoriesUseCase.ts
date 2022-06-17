import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoryRepository.list();
        console.log(categories);
        return categories;
    }
}

export { ListCategoriesUseCase };

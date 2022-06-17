import { CategoryRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const createCategoryRepositories = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(
    createCategoryRepositories
);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };

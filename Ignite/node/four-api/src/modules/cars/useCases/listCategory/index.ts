import { CategoryRepositoryy } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const createCategoryRepositories = new CategoryRepositoryy();
const listCategoriesUseCase = new ListCategoriesUseCase(
    createCategoryRepositories
);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };

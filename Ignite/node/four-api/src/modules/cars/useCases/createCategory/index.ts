import { CategoryRepositoryy } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const createCategoryRepositories = new CategoryRepositoryy();
const createCategoryUseCase = new CreateCategoryUseCase(
    createCategoryRepositories
);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController, createCategoryUseCase };

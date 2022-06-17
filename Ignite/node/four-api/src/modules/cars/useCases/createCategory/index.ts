import { CategoryRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const createCategoryRepositories = CategoryRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(
    createCategoryRepositories
);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController, createCategoryUseCase };

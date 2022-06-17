import { Category } from "../model/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgreCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        // throw new Error("Method not implemented.");
        console.log(name);
        return null;
    }
    list(): Category[] {
        // throw new Error("Method not implemented.");
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
        // throw new Error("Method not implemented.");
    }
}

export { PostgreCategoriesRepository };

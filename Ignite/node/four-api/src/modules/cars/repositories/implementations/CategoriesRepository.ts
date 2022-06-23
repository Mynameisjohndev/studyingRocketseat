import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository {
    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: CategoryRepository;

    private repository: Repository<Category>;

    private constructor() {
        this.repository = getRepository(Category);
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return this.INSTANCE;
    }

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = this.repository.findOne({ name });
        return category;
    }
}

export { CategoryRepository };

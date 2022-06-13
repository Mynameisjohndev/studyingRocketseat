import { Router } from "express";

import { CategoryRepositoryy } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoryRepositoryy = new CategoryRepositoryy();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const categoryAlreadyExists = categoryRepositoryy.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already Exists" });
    }

    categoryRepositoryy.create({ name, description });
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoryRepositoryy.list();
    return response.status(201).json(all);
});

export { categoriesRoutes };

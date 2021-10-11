import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, desciption } = request.body;

    const categpory = {
        name,
        desciption,
        id: uuidV4(),
    };

    categories.push(categpory);

    return response.status(201).send();
});

export { categoriesRoutes };

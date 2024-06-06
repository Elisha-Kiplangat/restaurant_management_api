import {Hono} from 'hono'
import {categoryController} from './category.controller'

export const categoryRouter = new Hono();

categoryRouter.get('category', categoryController);

export default categoryRouter;
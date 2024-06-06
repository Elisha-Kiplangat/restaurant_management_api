import {Hono} from 'hono'
import {menuItemController} from './category.controller'

export const menuItemRouter = new Hono();

menuItemRouter.get('menuItem', menuItemController);

export default menuItemRouter;
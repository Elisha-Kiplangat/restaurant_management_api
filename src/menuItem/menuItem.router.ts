import {Hono} from 'hono'
import {menuItemController} from './menuItem.controller'

export const menuItemRouter = new Hono();

menuItemRouter.get('orders', menuItemController);

export default menuItemRouter;
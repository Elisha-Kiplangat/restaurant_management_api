import {Hono} from 'hono'
import {ordersController} from './orders.controller'

export const ordersRouter = new Hono();

ordersRouter.get('orders', ordersController);

export default ordersRouter;
import {Hono} from 'hono'
import {restaurantController} from './restaurant.controller'

export const restaurantRouter = new Hono();

restaurantRouter.get('/restaurant', restaurantController);
import { Context } from "hono";
import { restaurantService } from "./restaurant.service";

export const restaurantController = async (c: Context) => {
    try{
        const restaurants = await restaurantService();
        return c.json(restaurants);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
    
}

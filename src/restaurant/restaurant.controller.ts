import { Context } from "hono";
import { restaurantService } from "./restaurant.service";

// export const restaurantController = async (c: Context) => {
//     try{
//         const restaurants = await restaurantService();
//         return c.json(restaurants);
//     } catch (err: any) {
//         console.error(err)
//         return c.json({error: 'Internal Server Error'}, 500)
//     }
    
// }

export const restaurantController = async (c: Context) => {
    try {

        const limit = Number(c.req.query('limit'))

        const data = await restaurantService();
        if (data == null || data.length == 0) {
            return c.text("User not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
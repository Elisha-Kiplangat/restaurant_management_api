import db from "../drizzle/db"
import { restaurantTable, restaurantselect, orderselect, userselect } from "../drizzle/schema"

// export const restaurantService = async (): Promise <restaurantselect[]> => {
//     return await db.query.restaurantTable.findMany();
// }

export const restaurantService = async (): Promise<restaurantselect[]> => {
    try {
        const restaurants = await db.query.restaurantTable.findMany();
        console.log('Restaurants fetched:', restaurants);
        return restaurants;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}
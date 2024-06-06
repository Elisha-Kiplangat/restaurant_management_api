import db from "../drizzle/db"
import { restaurantTable, restaurantselect } from "../drizzle/schema"

export const restaurantService = async (): Promise <restaurantselect[]> => {
    return await db.query.restaurantTable.findMany();
}
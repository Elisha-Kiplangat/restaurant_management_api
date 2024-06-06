import db from "../drizzle/db"
import { orderselect } from "../drizzle/schema"


export const orderService = async (): Promise<orderselect[]> => {
    try {
        const orders = await db.query.orderTable.findMany();
        console.log('Orders fetched:', orders);
        return orders;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
}
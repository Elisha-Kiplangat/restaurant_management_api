import { Context } from "hono";
import { orderService } from "./orders.service";

export const ordersController = async (c: Context) => {
    try{
        const orders = await orderService();
        return c.json(orders);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
}
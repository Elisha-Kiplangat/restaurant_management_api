import { Context } from "hono";
import { menuItemService } from "./menuItem.service";

export const menuItemController = async (c: Context) => {
    try{
        const menuItem = await menuItemService();
        return c.json(menuItem);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
}
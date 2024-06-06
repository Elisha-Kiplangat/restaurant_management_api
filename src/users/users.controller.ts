import { Context } from "hono";
import { userService } from "./users.service";

export const userController = async (c: Context) => {
    try{
        const users = await userService();
        return c.json(users);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
    
}
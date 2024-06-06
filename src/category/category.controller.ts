import { Context } from "hono";
import { categoryService } from "./category.service";

export const categoryController = async (c: Context) => {
    try{
        const category = await categoryService();
        return c.json(category);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
}
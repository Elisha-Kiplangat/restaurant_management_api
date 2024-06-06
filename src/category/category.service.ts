import db from "../drizzle/db"
import { categoryselect } from "../drizzle/schema"


export const categoryService = async (): Promise<categoryselect[]> => {
    try {
        const category = await db.query.categoryTable.findMany();
        console.log('categorys fetched:', category);
        return category;
    } catch (error) {
        console.error('Error fetching categorys:', error);
        throw error;
    }
}
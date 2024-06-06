import db from "../drizzle/db"
import { MenuItemselect } from "../drizzle/schema"


export const menuItemService = async (): Promise<MenuItemselect[]> => {
    try {
        const menuItem = await db.query.menu_itemTable.findMany();
        console.log('Menu items fetched:', menuItem);
        return menuItem;
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error;
    }
}
import db from "./drizzle/db";
import { eq,gt,like } from "drizzle-orm";
import { restaurantTable, categoryTable, orderTable, menu_itemTable, cityTable } from "./drizzle/schema";
import { MenuItemselect, restaurantselect, cityselect, orderselect, categoryselect, stateselect, addressselect, status_catalogselect, userselect , driverselect } from "./drizzle/schema";

//query
const getMenu = async (): Promise<MenuItemselect[] | null> => {
    return await db.query.menu_itemTable.findMany();
}


// query 2
const getRest = async (): Promise<restaurantselect[] | null> => {
    return await db.select().from(restaurantTable);
}

async function main() {
    console.log(await getMenu());
    // console.log(await getRest());
}
main();
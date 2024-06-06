import db from "../drizzle/db"
import { userselect, userInsert, userTable } from "../drizzle/schema"


export const userService = async (): Promise<userselect[]> => {
    try {
        const users = await db.query.userTable.findMany();
        console.log('Users fetched:', users);
        return users;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}

export const addUserService = async (user: userInsert) => {
    await db.insert(userTable).values(user)
    return "User added successfully";
}
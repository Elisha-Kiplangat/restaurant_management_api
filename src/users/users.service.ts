import db from "../drizzle/db"
import { userselect, userInsert, userTable } from "../drizzle/schema"
import {eq} from "drizzle-orm";


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

export const updateUserService = async (id: number, user: userInsert) => {
    await db.update(userTable).set(user).where(eq(userTable.id, id));
    return "User update successfully";
}

export const deleteUserService = async (id: number) => {
    await db.delete(userTable).where(eq(userTable.id, id));
    return "User deleted successfully"
}
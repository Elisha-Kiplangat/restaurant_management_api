import { Context } from "hono";
import { userService, addUserService,updateUserService, deleteUserService } from "./users.service";

export const userController = async (c: Context) => {
    try{
        const users = await userService();
        return c.json(users);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
    
}

//add user

export const addUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const createdUser = await addUserService(user);

        if (!createdUser) return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//delete
// export const updateUser = async (c:Context) => {
//     try{

//     } catch(error: any){
//         return c.json({error:error?.message}, 400)
//     }
// }

import {Hono} from 'hono'
import {userController, addUser} from './users.controller'
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validator";

export const userRouter = new Hono();

userRouter.get('users', userController);

userRouter.post("users", zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), addUser)

export default userRouter;
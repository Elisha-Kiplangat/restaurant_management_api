import {Hono} from 'hono'
import {userController} from './users.controller'

export const userRouter = new Hono();

userRouter.get('users', userController);

export default userRouter;
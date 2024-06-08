import {Hono} from 'hono'
import {commentController, addComment} from './comments.controller'
import { zValidator } from "@hono/zod-validator";
import { commentSchema } from "../validator";

export const commentRouter = new Hono();

commentRouter.get('commentss', commentController);

commentRouter.post("comments", zValidator('json', commentSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), addComment)

export default commentRouter;
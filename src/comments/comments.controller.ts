import { Context } from "hono";
import { commentService, addCommentService,updateCommentService, deleteCommentService } from "./comments.service";

export const commentController = async (c: Context) => {
    try{
        const comments = await commentService();
        return c.json(comments);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
    
}

//add user

export const addComment: any = async (c: Context) => {
    try {
        const comment = await c.req.json();
        const createdComment = await addCommentService(comment);

        if (!createdComment) return c.text("Comment not created", 404);
        return c.json({ msg: createdComment }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
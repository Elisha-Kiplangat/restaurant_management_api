import { Context } from "hono";
import { stateService, addStateService } from "./state.service";

export const stateController = async (c: Context) => {
    try{
        const state = await stateService();
        return c.json(state);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 500)
    }
    
}

//add user

export const addState = async (c: Context) => {
    try {
        const state = await c.req.json();
        const createdState = await addStateService(state);

        if (!createdState) return c.text("User not created", 404);
        return c.json({ msg: createdState }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
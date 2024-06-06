import {Hono} from 'hono'
import {stateController, addState} from './state.controller'
import { zValidator } from "@hono/zod-validator";
import { stateSchema } from "../validator";

export const stateRouter = new Hono();

stateRouter.get('states', stateController);

stateRouter.post("states", zValidator('json', stateSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), addState)

export default stateRouter;
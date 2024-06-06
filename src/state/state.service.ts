import db from "../drizzle/db"
import { stateselect, stateInsert, stateTable } from "../drizzle/schema"


export const stateService = async (): Promise<stateselect[]> => {
    try {
        const state = await db.query.stateTable.findMany();
        console.log('States fetched:', state);
        return state;
    } catch (error) {
        console.error('Error fetching states:', error);
        throw error;
    }
}

export const addStateService = async (state: stateInsert) => {
    await db.insert(stateTable).values(state)
    return "State added successfully";
}

export const updateStateService = async (state: stateInsert) => {
    // await db.update(stateTable).set(state).where( state.id);
    return "State updated successfully";
}

// export const deleteStateService = async (id: number) => {
//     await db.delete(stateTable).where(stateTable.id.equals(id));
//     await db.query.stateTable.delete({where: {id: id}})
//     return "State deleted successfully";
//}
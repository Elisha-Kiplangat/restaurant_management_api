import db from "./drizzle/db";
import { eq,gt,like } from "drizzle-orm";
import { ProfilesTable, UsersTable } from "./drizzle/schema";
import { TIUser, TSUser, TIProfile, TSProfile } from "./drizzle/schema";

//query
const getUsers = async (): Promise<TSUser[] | null> => {
    return await db.query.UsersTable.findMany();
}
//
// const getuser = async (id: number) => {
//     return await db.query.UsersTable.findFirst();
// }

// query 2
const getProfiles = async (): Promise<TSProfile[] | null> => {
    return await db.select().from(ProfilesTable);
}



//insert
const createUserProfile = async (user: TIProfile) => {
    await db.insert(ProfilesTable).values({
        userId: user.userId,
        bio: user.bio
    }).returning()
}

//insert
const createUser = async (user: TIUser) => {
    await db.insert(UsersTable).values({
        address: user.address,
        fullname: user.fullname,
        phone: user.phone,
        score: user.score
    }).returning()
}

//update

const updateUserProfile = async (bio: string, user_id: number) => {
    await db.update(ProfilesTable).set({ bio }).where(eq(ProfilesTable.id, user_id)).returning({ id: ProfilesTable.id })
}
//delete
const deleteUserProfile = async (user_id: number) => {
    return db.delete(ProfilesTable).where(eq(ProfilesTable.id, user_id))
}

// filters
// search user with a score greater than a value
const getUsersWithQuery = async (param: number) => {
    return await db.query.UsersTable.findMany({
        where: gt(UsersTable.score, param)     // lt, lte, gt, gte, eq, neq, like, ilike, in, nin ,between     
    });
}
//search user with a a name
const searchUsers = async (param: string) => {
    return await db.query.UsersTable.findMany({
        where: like(UsersTable.fullname, `%${param}%`)     // lt, lte, gt, gte, eq, neq, like, ilike, in, nin ,between     
    });
}
//
const getUsersWithQuery2 = async (param: number) => {
    return await db.select().from(UsersTable).where(gt(UsersTable.score, param));  //  lt, lte, gt, gte, eq, neq, like, ilike, in, nin, between
}
const searchUsers2 = async (param: string) => {
    return await db.select().from(UsersTable).where(like(UsersTable.fullname, `%${param}%`));  //  lt, lte, gt, gte, eq, neq, like, ilike, in, nin, between
}



async function main() {
    // console.log(await updateUserProfile("I am a senior developer", 1))
    // await deleteUserProfile(3)
    // console.log(await getProfiles());
    // await createUser({ address: "Lagos", fullname: "John Doe", phone: "08012345678", score: 100 })
    console.log(await getUsers())
    // console.log((await createUserProfile({ userId: 1, bio: "I am a developer" })))
}
main();


import { pgTable, text, varchar, serial, boolean, real, timestamp, primaryKey, integer, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';



// Tables
// menu_item table

export const menu_itemTable = pgTable("menu_item", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    restaurant_id: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    category_id: integer("category").notNull().references(() => categoryTable.id, { onDelete: "cascade" }),
    description: text("description").notNull(),
    ingredients: text("ingredients").notNull(),
    price: real("price").notNull(),
    active: boolean("active").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // category: relations.belongsTo(categoryTable, "category_id"),
    // restaurant: relations.belongsTo(restaurantTable, "restaurant_id"),
    // order_menu_item: relations.hasMany(order_menu_itemTable, "menu_item_id")

})

//Category table

export const categoryTable = pgTable("category", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    // menu_item: relations.hasMany(menu_itemTable, "category_id")
})

//Restaurant table

export const restaurantTable = pgTable("restaurant", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    address: varchar("street_address", { length: 255 }).notNull(),
    zip: varchar("zip_code", { length: 255 }).notNull(),
    CityId: integer("city_id").notNull().references(() => cityTable.id, { onDelete: "cascade" }),
    created_at: timestamp("createdAt").notNull(),
    updated_at: timestamp("updatedAt").notNull(),
    // menu_item: relations.hasMany(menu_itemTable, "restaurant_id"),
    // orders: relations.hasMany(orderTable, "restaurant_id"),
    // city: relations.belongsTo(cityTable, "cityId"),
    // restaurantOwner: relations.hasMany(restaurantOwnerTable, "restaurant_id")
})

//City table

export const cityTable = pgTable("city", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    stateId: integer("state_id").notNull().references(() => stateTable.id, { onDelete: "cascade" }),
    // address: relations.hasMany(restaurantTable, "city_id")
    // state: relations.belongsTo(stateTable, "stateId")
    // restaurant: relations.hasMany(restaurantTable, "city_id")
})

//State table

export const stateTable = pgTable("state", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    code: varchar("code", { length: 255 }).notNull(),
    // city: relations.hasMany(cityTable, "state_id")
})

//Address table

export const addressTable = pgTable("address", {
    id: serial("id").primaryKey(),
    streetAddress1: varchar("street_address_1", { length: 255 }).notNull(),
    streetAddress2: varchar("street_address_2", { length: 255 }).notNull(),
    zipCode: varchar("zip_code", { length: 255 }).notNull(),
    deliveryInstructions: text("delivery_instructions").notNull(),
    userId: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    cityId: integer("city_id").notNull().references(() => cityTable.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // city: relations.belongsTo(cityTable, "cityId"),
    // users: relations.belongsTo(usersTable, "userId"),
    // orders: relations.hasMany(ordersTable, "address_id")
})

//Order menu item table

export const order_menu_itemTable = pgTable("order_menu_item", {
    id: serial("id").primaryKey(),
    order_id: integer("order_id").notNull().references(() => orderTable.id, { onDelete: "cascade" }),
    menu_item_id: integer("menu_item_id").notNull().references(() => menu_itemTable.id, { onDelete: "cascade" }),
    quantity: integer("quantity").notNull(),
    itemPrice: real("item_price").notNull(),
    price: real("price").notNull(),
    comment: text("comment").notNull(),
    // menu_item: relations.belongsTo(menu_itemTable, "menu_item_id"),
    // order: relations.belongsTo(orderTable, "order_id")
})

//Orders table

export const orderTable = pgTable("order", {
    id: serial("id").primaryKey(),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    estimatedDeliveryTime: timestamp("estimated_delivery_time").notNull(),
    actualDeliveryTime: timestamp("actual_delivery_time"),
    // deliveryAddressId: integer("delivery_address_id").notNull().references(() => addressTable.id, { onDelete: "cascade" }),
    userId: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    // driverId: integer("driver_id").references(() => driverTable.id, { onDelete: "cascade" }),
    price: real("price").notNull(),
    discount: real("discount").notNull(),
    finalPrice: real("final_price").notNull(),
    comment: text("comment"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // comments: relations.hasMany(CommentTable, "comment_id"),
    // order_menu_item: relations.hasMany(order_menu_itemTable, "order_id"),
    // orderStatus: relations.hasMany(orderStatusTable, "order_id"),
    // address: relations.belongsTo(addressTable, "address_id"),
    // driver: relations.belongsTo(driverTable, "driver_id"),
    // restaurant: relations.belongsTo(restaurantTable, "restaurant_id"),
    // users: relations.belongsTo(usersTable, "user_id")
})

//Order status table

export const orderStatusTable = pgTable("order_status", {
    id: serial("id").primaryKey(),
    orderId: integer("order_id").notNull().references(() => orderTable.id, { onDelete: "cascade" }),
    statusCatalogId: varchar("status_catalog_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull(),
    // orders: relations.belongsTo(orderTable, "order_id"),
    // statusCatalog: relations.belongsTo(statusCatalogTable, "status_catalog_id")

})

//Status catalog table

export const statusCatalogTable = pgTable("status_catalog", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    // orderStatus: relations.hasMany(orderStatusTable, "status_catalog_id")
})

//restaurant owner table

export const restaurantOwnerTable = pgTable("restaurant_owner", {
    id: serial("id").primaryKey(),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    ownerId: integer("owner_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    // restaurant: relations.belongsTo(restaurantTable, "restaurant_id"),
    // users: relations.belongsTo(userTable, "user_id")
})

//User table

export const userTable = pgTable("user", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // address: relations.hasMany(addressTable, "user_id"),
    // orders: relations.hasMany(orderTable, "user_id"),
    // restaurantOwner: relations.hasMany(restaurantOwnerTable, "owner_id")
})

//Driver table

export const driverTable = pgTable("driver", {
    id: serial("id").primaryKey(),
    carMake: varchar("car_make", { length: 255 }).notNull(),
    carModel: varchar("car_model", { length: 255 }).notNull(),
    carYear: varchar("car_year", { length: 255 }).notNull(),
    userId: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    oline: boolean("online").notNull(),
    delivering: boolean("delivering").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // orders: relations.hasMany(orderTable, "driver_id"),
    // users: relations.belongsTo(userTable, "user_id")
})

//Comment table

export const CommentTable = pgTable("comment", {
    id: serial("id").primaryKey(),
    ordderId: integer("order_id").notNull().references(() => orderTable.id, { onDelete: "cascade" }),
    userId: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    commentText: text("comment_text").notNull(),
    isComplaint: boolean("is_complaint").notNull(),
    isPraise: boolean("is_praise").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // order: relations.belongsTo(orderTable, "order_id"),
    // users: relations.belongsTo(userTable, "user_id")
})



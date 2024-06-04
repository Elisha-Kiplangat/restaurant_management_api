import { pgTable, text, varchar, serial, boolean, real, timestamp, primaryKey, integer, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';



// Tables

// menu_item table

export const menu_itemTable = pgTable("menu_item", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    restaurant_id: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    category_id: integer("category_id").notNull().references(() => categoryTable.id, { onDelete: "cascade" }),
    description: text("description").notNull(),
    ingredients: text("ingredients").notNull(),
    price: real("price").notNull(),
    active: boolean("active").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // category: integer("category").notNull().references(() => categoryTable.name, { onDelete: "cascade" }),
    // restaurant: integer("restaurant").notNull().references(() => restaurantTable.name, { onDelete: "cascade" }),
    // orderMenuItem: integer("order_menu_item").notNull().references(() => order_menu_itemTable.id, { onDelete: "cascade" }),
    

})
// menu item table relations

export const menuItemTableRelation = relations(MenuItemTable, ({ one, many }) => ({
    restaurant: one(RestaurantTable, {
        fields: [menu_ItemTable.restaurant_id],
        references: [restaurantTable.id],
    }),
    category: one(categoryTable, {
        fields: [menu_ItemTable.category_id],
        references: [categoryTable.id],
    }),
    orderMenuItems: many(order_menu_itemTable),
}));

//Category table

export const categoryTable: any = pgTable("category", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    // menu_item: varchar("menu_item", { length: 255 }).notNull().references(() => menu_itemTable.name),
    
})

//category table relations
export const categoryTableRelation = relations(CategoryTable, ({ many }) => ({
    menuItems: many(menu_itemTable),
}));

//Restaurant table

export const restaurantTable = pgTable("restaurant", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    address: varchar("street_address", { length: 255 }).notNull(),
    zip: varchar("zip_code", { length: 255 }).notNull(),
    CityId: integer("city_id").notNull().references(() => cityTable.id, { onDelete: "cascade" }),
    created_at: timestamp("createdAt").notNull(),
    updated_at: timestamp("updatedAt").notNull(),
    // menu_item: varchar("menu_item", { length: 255 }).notNull().references(() => menu_itemTable.name),
    // orders: varchar("orders", { length: 255 }).notNull().references(() => orderTable.id),
    // city: varchar("city", { length: 255 }).notNull().references(() => cityTable.name),
    // restaurantOwner: varchar("restaurant_owner", { length: 255 }).notNull().references(() => restaurantOwnerTable.id),
   })

//restaurant table relation

export const restaurantTableRelation = relations(restaurantTable, ({ one, many }) => ({
    address: one(addressTable, {
        fields: [restaurantTable.address_id],
        references: [addressTable.id],
    })
}));

//City table

export const cityTable = pgTable("city", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    stateId: integer("state_id").notNull().references(() => stateTable.id, { onDelete: "cascade" }),
    // address: varchar("address", { length: 255 }).notNull().references(() => addressTable.id),
    // state: varchar("state", { length: 255 }).notNull().references(() => stateTable.name),
    // restaurant: varchar("restaurant", { length: 255 }).notNull().references(() => restaurantTable.id),
    
})

//State table

export const stateTable = pgTable("states", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    code: varchar("code", { length: 255 }).notNull(),
    // city: varchar("city", { length: 255 }).notNull().references(() => cityTable.name),
 
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
    // city: varchar("city", { length: 255 }).notNull().references(() => cityTable.name),
    // users: varchar("users", { length: 255 }).notNull().references(() => userTable.id),
    // orders: varchar("orders", { length: 255 }).notNull().references(() => orderTable.id),
    
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
    // menu_item: varchar("menu_item", { length: 255 }).notNull().references(() => menu_itemTable.name),
    // order: varchar("order", { length: 255 }).notNull().references(() => orderTable.id),

})

//Orders table

export const orderTable = pgTable("orders", {
    id: serial("id").primaryKey(),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    estimatedDeliveryTime: timestamp("estimated_delivery_time").notNull(),
    actualDeliveryTime: timestamp("actual_delivery_time"),
    deliveryAddressId: integer("delivery_address_id").notNull().references(() => addressTable.id, { onDelete: "cascade" }),
    userId: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    driverId: integer("driver_id").references(() => driverTable.id, { onDelete: "cascade" }),
    price: real("price").notNull(),
    discount: real("discount").notNull(),
    finalPrice: real("final_price").notNull(),
    comment: text("comment"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // comments: varchar("comments", { length: 255 }).notNull().references(() => CommentTable.commentText),
    // order_menu_item: varchar("order_menu_item", { length: 255 }).notNull().references(() => order_menu_itemTable.order_id),
    // orderStatus: varchar("order_status", { length: 255 }).notNull().references(() => orderStatusTable.id),
    // address: varchar("address", { length: 255 }).notNull().references(() => addressTable.id),
    // driver: varchar("driver", { length: 255 }).notNull().references(() => driverTable.id),
    // restaurant: varchar("restaurant", { length: 255 }).notNull().references(() => restaurantTable.id),
    // users: varchar("users", { length: 255 }).notNull().references(() => userTable.id),
    
})

//Order status table

export const orderStatusTable = pgTable("order_status", {
    id: serial("id").primaryKey(),
    orderId: integer("order_id").notNull().references(() => orderTable.id, { onDelete: "cascade" }),
    statusCatalogId: varchar("status_catalog_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull(),
    // orders: varchar("orders", { length: 255 }).notNull().references(() => orderTable.id),
    // statusCatalog: varchar("status_catalog", { length: 255 }).notNull().references(() => statusCatalogTable.id),
    
})

//Status catalog table

export const statusCatalogTable = pgTable("status_catalog", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    // orderStatus: varchar("order_status", { length: 255 }).notNull().references(() => orderStatusTable.status_catalog_id),
   
})

//restaurant owner table

export const restaurantOwnerTable = pgTable("restaurant_owner", {
    id: serial("id").primaryKey(),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    ownerId: integer("owner_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    // restaurant: varchar("restaurant", { length: 255 }).notNull().references(() => restaurantTable.id),
    // users: varchar("users", { length: 255 }).notNull().references(() => userTable.id),
    
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
    // address: varchar("address", { length: 255 }).notNull().references(() => addressTable.id),
    // orders: varchar("orders", { length: 255 }).notNull().references(() => orderTable.id),
    // restaurantOwner: varchar("restaurant_owner", { length: 255 }).notNull().references(() => restaurantOwnerTable.id),

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
    // orders: varchar("orders", { length: 255 }).notNull().references(() => statusCatalogTable.name),
    // users: varchar("users", { length: 255 }).notNull().references(() => userTable.name),
    
})

//Comment table

export const CommentTable = pgTable("comment", {
    id: serial("id").primaryKey(),
    orderId: integer("order_id").notNull().references(() => orderTable.id, { onDelete: "cascade" }),
    userId: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }),
    commentText: text("comment_text").notNull(),
    isComplaint: boolean("is_complaint").notNull(),
    isPraise: boolean("is_praise").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    // orders: varchar("orders", { length: 255 }).notNull().references(() => statusCatalogTable.name),
    // users: varchar("users", { length: 255 }).notNull().references(() => userTable.name),

})



import {
  int,
  sqliteTable,
  text,
  real,
  blob,
  sql,
} from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const collection = sqliteTable("collection", {
  uid: int("uid").primaryKey({ autoIncrement: true }),
  setcode: text("setcode").notNull(),
  setnumber: text("setnumber").notNull(),
  pulledAt: blob("pulled", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  foil: int("foil", { mode: "boolean" }).notNull().default(false),
  sfid: int("sfid").notNull(),
  price: real("price").notNull(),
});

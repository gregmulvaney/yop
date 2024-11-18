import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const docsTable = pgTable("docs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull()
})

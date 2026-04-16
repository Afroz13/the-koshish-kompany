import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactsTable = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactsTable)
  .omit({ id: true, created_at: true })
  .extend({
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[+]?[\d\s\-(). ]{8,20}$/, "Invalid phone number"),
    name: z.string().min(2, "Name too short"),
    message: z.string().min(10, "Message too short"),
  });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactsTable.$inferSelect;

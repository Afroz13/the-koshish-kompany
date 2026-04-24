import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const testimonialsTable = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  occupation: text("occupation").notNull(),
  city: text("city").notNull(),
  content: text("content").notNull(),
  rating: text("rating").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonialsTable)
  .omit({ id: true, created_at: true })
  .extend({
    name: z.string().min(2, "Name too short").max(80, "Name too long"),
    occupation: z.string().min(2, "Occupation required").max(80, "Occupation too long"),
    city: z.string().min(2, "City required").max(80, "City too long"),
    content: z.string().min(10, "Feedback too short").max(800, "Feedback too long"),
    rating: z.string().regex(/^[1-5]$/, "Rating must be 1-5"),
  });

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonialsTable.$inferSelect;

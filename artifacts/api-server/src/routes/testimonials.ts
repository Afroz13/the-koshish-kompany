import { Router } from "express";
import { desc } from "drizzle-orm";
import { db, insertTestimonialSchema, testimonialsTable } from "@workspace/db";

const router = Router();

router.get("/testimonials", async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(testimonialsTable)
      .orderBy(desc(testimonialsTable.created_at));
    res.status(200).json({ success: true, testimonials: rows });
  } catch (err) {
    req.log.error({ err }, "Failed to load testimonials");
    res.status(500).json({ success: false, message: "Failed to load testimonials" });
  }
});

router.post("/testimonials", async (req, res) => {
  try {
    const parseResult = insertTestimonialSchema.safeParse(req.body);

    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: parseResult.error.issues,
      });
      return;
    }

    const [inserted] = await db
      .insert(testimonialsTable)
      .values(parseResult.data)
      .returning();

    req.log.info({ id: inserted.id, name: inserted.name }, "New testimonial submitted");

    res.status(200).json({
      success: true,
      message: "Thank you for your feedback!",
      testimonial: inserted,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save testimonial");
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

export default router;

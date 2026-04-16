import { Router } from "express";
import { db, insertContactSchema, contactsTable } from "@workspace/db";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const parseResult = insertContactSchema.safeParse(req.body);

    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: parseResult.error.issues,
      });
      return;
    }

    const { name, email, phone, message } = parseResult.data;

    await db.insert(contactsTable).values({ name, email, phone, message });

    req.log.info({ name, email }, "New contact form submission");

    res.status(200).json({
      success: true,
      message: "Thank you for reaching out! We'll get back to you within 24 hours.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

export default router;

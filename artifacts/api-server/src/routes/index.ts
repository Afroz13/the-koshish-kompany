import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import testimonialsRouter from "./testimonials";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(testimonialsRouter);

export default router;

import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import servicesRouter from "./services";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(servicesRouter);

export default router;

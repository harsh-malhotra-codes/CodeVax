import { Router, type IRouter } from "express";
import { ContactRequest, ContactResponse } from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", (req, res) => {
  const parsed = ContactRequest.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid contact submission",
      issues: parsed.error.flatten(),
    });
  }

  logger.info({ contact: parsed.data }, "Received contact submission");

  const data = ContactResponse.parse({
    status: "ok",
    message: "Thanks for reaching out. We will get back to you soon.",
    submittedAt: new Date().toISOString(),
  });

  return res.status(201).json(data);
});

export default router;

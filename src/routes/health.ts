import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

router.get("/fail", (_req, res) => {
  res.status(500).json({
    status: "error"
  });
});

export default router;

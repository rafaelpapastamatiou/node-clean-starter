import { Router } from "express";

import { testRoutes } from "./routes/test.routes";

export const router = Router();

router.use("/test", testRoutes);

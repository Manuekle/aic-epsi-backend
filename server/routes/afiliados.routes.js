import { Router } from "express";

import {
  getAfiliados,
  getAfiliado,
  createAfiliado,
  updateAfiliado,
  deleteAfiliado,
} from "../controllers/afiliados.controller.js";

const router = Router();

//* GET
router.get("/afiliados", getAfiliados);
router.get("/afiliados/:id", getAfiliado);
//? POST
router.post("/afiliados", createAfiliado);
//TODO: UPDATE
router.put("/afiliados/:id", updateAfiliado);
//! DELETE
router.delete("/afiliados/:id", deleteAfiliado);

export default router;

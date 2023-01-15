import { Router } from "express";

import {
  getAutorizaciones,
  getAutorizacion,
  createAutorizacion
  // updateAutorizacion,
  // deleteAutorizacion,
} from "../controllers/autorizacion.controller.js";

const router = Router();

//* GET
router.get("/autorizacion", getAutorizaciones);
router.get("/autorizacion/:id", getAutorizacion);
//? POST
router.post("/autorizacion", createAutorizacion);
// //TODO: UPDATE
// router.put("/autorizacion/:id", updateAutorizacion);
// //! DELETE
// router.delete("/autorizacion/:id", deleteAutorizacion);

export default router;

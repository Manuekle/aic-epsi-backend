import { Router } from "express";

import {
  getIndigenas,
  getIndigena,
  createIndigena,
  // updateAutorizacion,
  // deleteAutorizacion,
} from "../controllers/indigena.controller.js";

const router = Router();

//* GET
router.get("/indigena", getIndigenas);
router.get("/indigena/:id", getIndigena);
//? POST
router.post("/indigena", createIndigena);
// //TODO: UPDATE
// router.put("/autorizacion/:id", updateAutorizacion);
// //! DELETE
// router.delete("/autorizacion/:id", deleteAutorizacion);

export default router;

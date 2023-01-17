import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { PORT, HOSTNAME } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import afiliadosRoutes from "./routes/afiliados.routes.js";
import autorizacionRoutes from "./routes/autorizacion.routes.js";
import indigenaRoutes from "./routes/indigena.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(afiliadosRoutes);
app.use(autorizacionRoutes);
app.use(indigenaRoutes);

app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT, HOSTNAME);
console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
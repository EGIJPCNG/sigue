import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // <-- Declarar app antes de usarlo

app.use(morgan("dev"));
app.use(authRoutes);

// Servir archivos estáticos de React (Vite build)
app.use(express.static(path.join(__dirname, "../dist")));

// Redirigir todas las rutas que no sean API al index.html de React
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

export default app;

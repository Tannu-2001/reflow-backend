import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js"; 
import projectsRouter from "./src/routes/projects.js";
import contactRouter from "./src/routes/contact.js";
import errorHandler from "./src/middleware/errorHandler.js"; 
import serviceRouter from "./src/routes/service.js"

dotenv.config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

connectDB();

app.get("/", (req, res) => res.send("Backend API is running"));

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/services", serviceRouter);

if (errorHandler) app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
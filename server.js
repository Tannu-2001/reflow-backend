import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js"; 
import projectsRouter from "./src/routes/projects.js";
import contactRouter from "./src/routes/contact.js";
import serviceRouter from "./src/routes/service.js";
import errorHandler from "./src/middleware/errorHandler.js"; 

dotenv.config();
const app = express();

/* ✅ CORS FIX */
const allowedOrigins = [
  "http://localhost:5173",
  "https://reflow-frontend.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Postman / server requests (no origin)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

connectDB();

app.get("/", (req, res) => res.send("Backend API is running"));

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/services", serviceRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
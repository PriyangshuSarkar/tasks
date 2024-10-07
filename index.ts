import express, { type Express, json } from "express";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use("/tasks", taskRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

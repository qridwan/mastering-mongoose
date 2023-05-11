import express, { Application, json } from "express";
import cors from "cors";

import userRoute from "./app/modules/user/user.route";

const app: Application = express();

app.use(cors());
app.use(json());

app.use("/api/v1/user", userRoute);

export default app;

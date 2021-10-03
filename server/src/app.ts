import Express, { json, urlencoded } from "express";
import cors from "cors";
import router from "./router";

const app = Express();

app.use(cors());
app.use(json({ limit: "30mb" }));
app.use(urlencoded({ limit: "30mb", extended: true }));

app.use(router);

export default app;

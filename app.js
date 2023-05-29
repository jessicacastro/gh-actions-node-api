import bodyParser from "body-parser";
import express from "express";

import eventRoutes from "./routes/events.js";

const app = express();

app.use(bodyParser.json());

app.get("/test", (request, response) =>
  response.json({ message: "API Works! 🚀" })
);

app.use(eventRoutes);

app.listen(process.env.PORT);

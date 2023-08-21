import express, { Express, Request, Response } from 'express';
import { clearRouter, personRouter, recommendationRouter, relationshipRouter } from "./routers";
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

app.use(express.json());

const port = process.env.PORT;

app.use(personRouter);
app.use(relationshipRouter);
app.use(recommendationRouter);
app.use(clearRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export { app };
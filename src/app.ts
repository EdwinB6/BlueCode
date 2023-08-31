"use strict";

import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import path from 'path';

dotenv.config();

// Starting app
const app: Express = express();
const port: number = 8000;

const staticPath: string = path.join(__dirname, 'public');

app.use(express.static(staticPath));

app.use((req: Request, res: Response) => {
    res.status(404);
    res.send('<h1>Error 404 not found</h1>');
});

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});

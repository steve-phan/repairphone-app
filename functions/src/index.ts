import * as functions from 'firebase-functions';

import express from 'express';
import cors from 'cors';
import { route } from './routes';
const app = express();

app.use(cors());

const handler = functions.region('europe-west3');

route(app);

export const api = handler.https.onRequest(app);

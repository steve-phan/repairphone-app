import * as functions from 'firebase-functions';

import express from 'express';

const app = express();

export const helloWorld = functions
  .region('europe-west3')
  .https.onRequest((request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
  });

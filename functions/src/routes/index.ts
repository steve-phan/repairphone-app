import { Express } from 'express';

import { signup, deleteAll } from './users';

export const route = (app: Express) => {
  // users routes
  app.post('/signup', signup);
  app.get('/delete', deleteAll);
};

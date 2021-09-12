import { Express } from 'express';
import usersRouter from './users';

export const route = (app: Express) => {
  app.use('/user', usersRouter);
};

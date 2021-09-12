import { Request, Response, NextFunction } from 'express';

const usersRouter = (req: Request, res: Response, next: NextFunction): void => {
  res.send('Building a  APP for traking repair status');
};

export default usersRouter;

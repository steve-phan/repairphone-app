import { Request, Response, NextFunction } from 'express';

import { db, auth } from '../admin';

// Sign users up
export const signup = (req: Request, res: Response) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    // confirmPassword: req.body.confirmPassword,
    // handle: req.body.handle,
    displayName: req.body.displayName,
  };
  // console.log(newUser);
  // res.status(200).json(newUser);
  auth
    .createUser({
      email: newUser.email,
      password: newUser.password,
      displayName: newUser.displayName,
    })
    .then((userRecord) => {
      res.status(200).json(userRecord);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
export const deleteAll = (req: Request, res: Response) => {
  auth
    .listUsers(100)
    .then((data) => {
      const uidList = data.users.map((user) => user.uid);
      auth.deleteUsers(uidList);
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(err));
};

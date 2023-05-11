import express, { NextFunction, Response, Request } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";
// import createUserToDB from "./user.service";
export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(200).json(users);
};
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json(user);
};

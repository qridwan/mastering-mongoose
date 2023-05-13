import express, { NextFunction, Response, Request } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserById,
  getUsersFromDB,
} from "./user.service";
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
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const findUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getAdmins = async (req: Request, res: Response) => {
  const admins = await getAdminUsersFromDB();
  res.status(200).json({
    status: "success",
    data: admins,
  });
};

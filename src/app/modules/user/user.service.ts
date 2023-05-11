import { IUser } from "./user.interface";
import { User } from "./user.model";
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
export const createUserToDB = async (payLoad: IUser): Promise<IUser> => {
  const user = new User(payLoad);
  await user.save();
  return user;
};

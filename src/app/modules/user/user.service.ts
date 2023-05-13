import { IUser } from "./user.interface";
import { User } from "./user.model";
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};
export const createUserToDB = async (payLoad: IUser): Promise<IUser> => {
  const user = new User(payLoad);
  await user.save();
  return user;
};

export const getUserById = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1 }
  );
  return user;
};

export const getAdminUsersFromDB = async () => {
  const adminUsers = await User.getAdminUsers();
  return adminUsers;
};

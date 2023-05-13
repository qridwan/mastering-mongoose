import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

/*===================================
         Creating schema using Interface
  ====================================*/

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  email: { type: String, required: false },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
  },
  contactNo: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  dataOfBirth: { type: String, required: true },
  emergencyContactNo: { type: Number, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" }, { password: 0 });
  return admins;
});
userSchema.method("fullName", function fullName(): string {
  return this.firstName + " " + this.lastName;
});
/*===================================
         Creating Model
  ====================================*/

export const User = model<IUser, UserModel>("User", userSchema);

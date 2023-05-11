import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

/*===================================
         Creating schema using Interface
  ====================================*/

const userSchema = new Schema<IUser>({
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

/*===================================
         Creating Model
  ====================================*/

export const User = model<IUser>("User", userSchema);

export interface IUser {
  id: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dataOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: number;
  emergencyContactNo: number;
  presentAddress: string;
  permanentAddress: string;
}

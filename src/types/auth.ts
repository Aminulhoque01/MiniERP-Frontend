export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name:string;
  email: string;
  password: string;
  role: "admin" | "manager" | "employee";
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: {
      _id: string;
      name: string;
      email: string;
      role: "admin" | "manager" | "employee";
    };
  };
}
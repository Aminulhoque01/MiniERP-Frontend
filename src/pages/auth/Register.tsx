import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { RegisterInput } from "../../types/auth";

import {
  FiMail,
  FiLock,
  FiUser,
  FiEye,
  FiEyeOff,
  FiBriefcase,
} from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [registerUser, { isLoading }] =
    useRegisterMutation();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<RegisterInput>();

  const onSubmit = async (data: RegisterInput) => {
    try {
      const res: any = await registerUser(data).unwrap();

      toast.success(res.message);

      reset();

      navigate("/login");
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 flex items-center justify-center p-5">

      <div className="grid lg:grid-cols-2 w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center px-14 text-white bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800">

          <h1 className="text-5xl font-bold mb-6">
            Welcome 👋
          </h1>

          <p className="text-lg text-blue-100 leading-8">
            Manage your employees, attendance,
            payroll, projects and reports from one
            powerful ERP Dashboard.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="w-80 mx-auto mt-10"
          />

        </div>

        {/* Right Side */}

        <div className="p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Register to continue
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Name */}

            <div>

              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>

              <div className="relative mt-2">

                <FiUser className="absolute left-4 top-4 text-gray-400 text-xl" />

                <input
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>

              <div className="relative mt-2">

                <FiMail className="absolute left-4 top-4 text-gray-400 text-xl" />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-sm font-medium text-gray-600">
                Password
              </label>

              <div className="relative mt-2">

                <FiLock className="absolute left-4 top-4 text-gray-400 text-xl" />

                <input
                  {...register("password")}
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="********"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4 text-xl text-gray-500"
                >
                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </button>

              </div>

            </div>

            {/* Role */}

            <div>

              <label className="text-sm font-medium text-gray-600">
                Select Role
              </label>

              <div className="relative mt-2">

                <FiBriefcase className="absolute left-4 top-4 text-gray-400 text-xl" />

                <select
                  {...register("role")}
                  defaultValue="employee"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition appearance-none"
                >
                  <option value="employee">
                    Employee
                  </option>

                  <option value="manager">
                    Manager
                  </option>

                  <option value="admin">
                    Admin
                  </option>

                </select>

              </div>

            </div>

            <button
              disabled={isLoading}
              className="w-full h-14 rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-[1.02] transition text-white font-semibold shadow-xl"
            >
              {isLoading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;
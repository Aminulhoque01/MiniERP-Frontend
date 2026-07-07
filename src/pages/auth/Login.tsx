import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/authApi";
import { useAppDispatch } from "../../app/hooks";
import { setCredentials } from "../../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { LoginInput } from "../../types/auth";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm<LoginInput>();

  const [showPassword, setShowPassword] =
    useState(false);

  const [login, { isLoading }] =
    useLoginMutation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data: LoginInput) => {
    try {
      const res: any = await login(data).unwrap();

      dispatch(
        setCredentials({
          token: res.data.accessToken,
          user: res.data.user,
        })
      );

      toast.success(res.message);

      navigate("/dashboard");
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-5">

      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* Left */}

        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white p-12">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="ERP"
            className="w-64 mb-8"
          />

          <h1 className="text-4xl font-bold mb-5">
            Mini ERP System
          </h1>

          <p className="text-blue-100 text-center leading-8">
            Manage Employees, Attendance,
            Payroll, Sales & Inventory in one
            beautiful dashboard.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-10">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md"
          >

            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mb-8">
              Login to continue
            </p>

            {/* Email */}

            <div className="mb-5">

              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>

              <div className="relative mt-2">

                <FiMail className="absolute left-4 top-4 text-xl text-gray-400" />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition"
                />

              </div>

            </div>

            {/* Password */}

            <div className="mb-3">

              <label className="text-sm font-medium text-gray-600">
                Password
              </label>

              <div className="relative mt-2">

                <FiLock className="absolute left-4 top-4 text-xl text-gray-400" />

                <input
                  {...register("password")}
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="********"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-4 text-gray-500 text-xl"
                >
                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </button>

              </div>

            </div>

             


            <button
              disabled={isLoading}
              className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              {isLoading
                ? "Signing In..."
                : "Login"}
            </button>

            <p className="text-center mt-8 text-gray-600">

              Don't have an account?

              <Link
                to="/register"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;
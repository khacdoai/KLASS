import { useForm, type SubmitHandler } from "react-hook-form";
import { login } from "../services";
import { useContext } from "react";
import AuthContext from "../context";

const LoginPage = () => {
  interface IFormInput {
    userName: string;
    password: string;
  }

  const { setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const result = await login(data.userName, data.password);

      const authenticatedUser = {
        id: result.loggedInUser.id,
        email: result.loggedInUser.email,
        access_token: result.access_token,
      };

      setUser(authenticatedUser);
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      localStorage.setItem("access_token", result.access_token);

      window.location.href = "/task";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700">Welcome Back 👋</h2>
        <p className="text-sm text-center text-gray-500">Sign in to your account</p>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <div className="mt-1 relative">
            <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
            <input
              {...register("userName", { required: "Username is required" })}
              type="text"
              id="username"
              value={'tungnt@softech.vn'}
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="your_username"
            />
          </div>
          {errors.userName && (
            <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative">
            <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              value={'123456789'}
              id="password"
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="••••••••"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-sm"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

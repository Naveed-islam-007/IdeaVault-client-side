"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      window.location.href = "/";
    } else {
      console.log(error);
      alert(error?.message || "Login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

            {/* Password */}
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Login
            </button>

          </form>

          <div className="divider">OR</div>

          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
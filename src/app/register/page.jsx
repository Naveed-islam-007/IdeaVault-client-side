"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const RegisterPage = () => {
  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      window.location.href = "/";
    } else {
      console.log(error); // 👈 IMPORTANT for debugging
      alert(error?.message || "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          <form onSubmit={handleRegister} className="space-y-4">

            {/* Name */}
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

            {/* Photo URL */}
            <input
              name="image"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />

            {/* Password */}
            <input
              name="password"
              type="password"
              placeholder="Create password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Register
            </button>

          </form>

          <div className="divider">OR</div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
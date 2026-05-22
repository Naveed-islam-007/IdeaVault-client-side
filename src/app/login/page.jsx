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

  // 👇 Google login handler
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        console.log(error);
        alert(error?.message || "Google login failed");
      }
    } catch (err) {
      console.log(err);
      alert("Google login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

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

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
           
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Dont have an account?{" "}
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
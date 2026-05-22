"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user=session?.user

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/"); 
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">

    
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ideas">Ideas</Link></li>
            <li><Link href="/add-idea">Add Idea</Link></li>
            <li><Link href="/my-ideas">My Ideas</Link></li>
            <li><Link href="/my-interactions">My Interactions</Link></li>
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-4xl font-bold">
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Idea
          </span>
          <span className="text-gray-900">Vault</span>
        </Link>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/ideas">Ideas</Link></li>
          <li><Link href="/add-idea">Add Idea</Link></li>
          <li><Link href="/my-ideas">My Ideas</Link></li>
          <li><Link href="/my-interactions">My Interactions</Link></li>
        </ul>
      </div>

      
      <div className="navbar-end gap-3">

        {user ? (
          <div className="flex items-center gap-3">

            <Image
              src={user.image || "/default.png"}
              alt="user"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />

            <div className="hidden md:block">
              <p className="text-sm font-bold">
                {user.name}
              </p>
              <p className="text-xs opacity-70">
                {user.email}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-error btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn bg-orange-500 btn-sm">
              Register
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">

        
            <div className="navbar-start">
                <div className="dropdown">
                 
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                  
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li className='text-xl font-bold'><Link href={"/"}>Home</Link></li>
                        <li className='text-xl font-bold'><Link href={"/ideas"}>Ideas</Link></li>
                        <li className='text-xl font-bold'><Link href={"/add-idea"}>Add Idea</Link></li>
                        <li className='text-xl font-bold'><Link href={"/my-ideas"}>My Ideas</Link></li>
                        <li className='text-xl font-bold'><Link href={"/my-interactions"}>My Interactions</Link></li>
                    </ul>
                </div>

                {/* Logo */}
                <Link href="/" className="btn btn-ghost text-4xl font-bold">
               <span className='bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'>Idea</span><span className='text-gray-900'>Vault</span>
                </Link>
            </div>

            {/* ── Desktop nav links ── */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/ideas">Ideas</Link></li>
                    <li><Link href="/add-idea">Add Idea</Link></li>
                    <li><Link href="/my-ideas">My Ideas</Link></li>
                    <li><Link href="/my-interactions">My Interactions</Link></li>
                </ul>
            </div>

            {/* ── Right side ── */}
            <div className="navbar-end gap-2">
               

                {/* Logged OUT state — swap with conditional above once auth is ready */}
                <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
                <Link href="/register" className="btn bg-orange-500 btn-sm">Register</Link>
            </div>

        </div>
    );
};

export default Navbar;

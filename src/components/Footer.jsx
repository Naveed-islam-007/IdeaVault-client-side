"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Brand */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="text-white">Idea</span>
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Vault</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-400">
            The platform where founders, makers, and dreamers share startup ideas,
            get feedback, and turn concepts into reality — together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Get the latest startup ideas and community updates in your inbox.
            </p>
            <div className="flex items-center bg-gray-800 px-4 py-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-500"
              />
              <span className="text-orange-400 text-lg cursor-pointer hover:text-orange-300 transition-colors">↗</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">PLATFORM</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/ideas" className="hover:text-white transition-colors">All Ideas</Link></li>
              <li><Link href="/ideas?category=tech" className="hover:text-white transition-colors">Tech Ideas</Link></li>
              <li><Link href="/ideas?category=ai" className="hover:text-white transition-colors">AI Ideas</Link></li>
              <li><Link href="/ideas?category=health" className="hover:text-white transition-colors">Health Ideas</Link></li>
              <li><Link href="/add-idea" className="hover:text-white transition-colors">Submit an Idea</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">ACCOUNT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link href="/my-ideas" className="hover:text-white transition-colors">My Ideas</Link></li>
              <li><Link href="/my-interactions" className="hover:text-white transition-colors">My Interactions</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-widest text-sm">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">+880 171 234 5678</li>
              <li className="hover:text-white transition-colors cursor-pointer">hello@ideavault.io</li>
              <li className="mt-4 text-gray-500">Mon – Fri, 9am – 6pm</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} IdeaVault. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors cursor-pointer"
              aria-label="X (Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [extraOpen, setExtraOpen] = useState(false);
  return (
    <nav className="bg-base-100 shadow-sm fixed w-full z-30 h-16 top: 0">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Navbar Start */}
          <div>
            <Link href="/" className="text-xl font-bold btn btn-ghost">
              School Manage
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-200">
              Home
            </Link>
            <Link
              href="/noticeboard"
              className="px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Notice-Board
            </Link>
            <div className="hidden lg:flex lg:space-x-4 relative">
              <button
                onClick={() => setExtraOpen(!extraOpen)}
                className="px-3 py-2 rounded-md hover:bg-gray-200 flex items-center"
              >
                Extra Feature
              </button>

              {extraOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-50">
                  <Link
                    href="/calendar"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setExtraOpen(false)} // ✅ click করলে menu বন্ধ হবে
                  >
                    Calendar
                  </Link>
                  <Link
                    href="/library"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setExtraOpen(false)}
                  >
                    Library
                  </Link>
                  <Link
                    href="/transport"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setExtraOpen(false)}
                  >
                    Transport
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Contact
            </Link>
            <Link
              href="/aboute"
              className="px-3 py-2 rounded-md hover:bg-gray-200"
            >
              About
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 rounded-md hover:bg-gray-200"
            >
              Profile / Account
            </Link>
            <Link href="/login" className="btn ml-2">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 shadow-lg">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </Link>
          <Link
            href="/notice-board"
            className="block px-4 py-2 hover:bg-gray-200"
          >
            Notice-Board
          </Link>

          <div className="block px-4 py-2">
            <details>
              <summary className="cursor-pointer">Extra Feature</summary>
              <Link
                href="/calendar"
                className="block pl-4 py-2 hover:bg-gray-200"
              >
                Calendar
              </Link>
              <Link
                href="/library"
                className="block pl-4 py-2 hover:bg-gray-200"
              >
                Library
              </Link>
              <Link
                href="/transport"
                className="block pl-4 py-2 hover:bg-gray-200"
              >
                Transport
              </Link>
            </details>
          </div>

          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-200">
            About
          </Link>
          <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">
            Profile / Account
          </Link>
          <Link href="/login" className="block px-4 py-2 hover:bg-gray-200">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

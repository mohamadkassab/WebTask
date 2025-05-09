"use client";
import { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Background blur overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-[999]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] pointer-events-none">
          <div
            className="bg-white rounded-xl shadow-xl p-8 w-[300px] max-w-sm text-center relative pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li className="text-lg cursor-pointer hover:text-hover">
                <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
                  Landing one
                </Link>
              </li>
              <li className="text-lg cursor-pointer hover:text-hover">
                <Link href="/landing2" className="hover:underline" onClick={() => setMenuOpen(false)}>
                  Landing two
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="w-full h-navbar flex justify-between px-4 py-6 items-center absolute inset-0 z-[1001]">
        <div className="w-fit cursor-pointer hover:brightness-120">
          <Image src="/logo.png" height={50} width={100} alt="Darc logo" />
        </div>
        <div
          className="w-fit cursor-pointer hover:brightness-120"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon sx={{ color: "var(--color-menu-button)" }} />
        </div>
      </nav>
    </>
  );
}

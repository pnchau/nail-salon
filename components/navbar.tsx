// ============================
// file: components/NavBar.tsx
// ============================
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const linkBase = "font-medium transition-colors text-sm sm:text-base";
    const active = "text-gray-700";
    const idle = "hover:text-gray-700";

    const NavLinks = () => (
        <>
            <Link href="/" className={`${linkBase} ${pathname === "/" ? active : idle}`}>Home</Link>
            <Link href="/menu" className={`${linkBase} ${pathname?.startsWith("/menu") ? active : idle}`}>Menu</Link>
            <Link href="/gallery" className={`${linkBase} ${pathname?.startsWith("/gallery") ? active : idle}`}>Gallery</Link>
        </>
    );

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b h-16 text-black">
            <div className="mx-auto max-w-6xl px-4 h-full flex items-center gap-3">
                {/* logo */}
                <Link
                    href="/"
                    className="font-extrabold tracking-tight whitespace-nowrap text-base sm:text-xl md:text-2xl drop-shadow-md mr-3 sm:mr-6"
                >
                    Brittany Nails and Spa
                </Link>

                {/* desktop links */}
                <nav className="hidden sm:flex items-center gap-4 md:gap-6 ml-auto">
                    <NavLinks />
                </nav>

                {/* mobile hamburger */}
                <button
                    aria-label="Open menu"
                    className="ml-auto sm:hidden p-2 border rounded"
                    onClick={() => setOpen((v) => !v)}
                >
                    {/* simple icon */}
                    <span className="block w-5 h-[2px] bg-black mb-1" />
                    <span className="block w-5 h-[2px] bg-black mb-1" />
                    <span className="block w-5 h-[2px] bg-black" />
                </button>
            </div>

            {/* mobile menu panel */}
                <div
                    className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        open ? "max-h-40 opacity-100 border-t" : "max-h-0 opacity-0 border-t-0"
                    } bg-white`}
                    onClick={() => setOpen(false)}
                >
                    <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
                        <NavLinks />
                    </div>
                </div>
        </header>
    );
}
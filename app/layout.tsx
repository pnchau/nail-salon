// ============================
// file: app/layout.tsx
// ============================
// app/layout.tsx
"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import { NavBar } from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col text-neutral-900 overflow-x-hidden bg-orange-200 font-playfair">
        <NavBar />
        <main className={isHome ? "flex-grow" : "flex-grow mx-auto max-w-6xl px-4 pb-16 pt-6"}>
            {children}
        </main>

        {/* put the footer back */}
        <footer className="border-t bg-white h-16">
            <div className="mx-auto max-w-6xl px-4 h-full flex items-center justify-between text-sm text-neutral-600">
                <p>© {new Date().getFullYear()} Brittany Nails and Spa. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/brittanynailsleaguetx/?hl=en" className="hover:text-neutral-900">Instagram</a>
                    <a href="https://www.facebook.com/Brittanynailinleaguetx/" className="hover:text-neutral-900">Facebook</a>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}

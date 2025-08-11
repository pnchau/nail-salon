// --- Project structure (App Router) ---
// app/
//   layout.tsx
//   page.tsx            (Landing)
//   menu/page.tsx       (Menu page)
//   gallery/page.tsx    (Gallery page)
// components/
//   NavBar.tsx
// lib/
//   data.ts             (Shared MENU + GALLERY)
// styles via Tailwind

// ============================
// file: app/page.tsx (Landing)
// ============================
import CallButton from "@/components/CallButton";

export default function LandingPage() {
    return (
        <>
            {/* Full-bleed hero */}
                <div
                    aria-hidden
                    className="fixed inset-0 -z-10 bg-[url('/CustomNailSalon.png')] bg-cover bg-center bg-no-repeat bg-fixed"
                />

                <section className="flex items-center justify-center px-4 text-center min-h-[calc(100svh-64px-64px)]">
                    <div className="max-w-3xl -mt-72">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md text-white">
                            Welcome to <br />
                            <span className="text-black">Brittany Nails and Spa</span>
                        </h1>

                        <p className="mt-4 text-black drop-shadow-md">
                            1600 League City Pkwy Suite P, League City, TX 77573
                        </p>

                        {/* Call button */}
                        <CallButton />
                    </div>
                </section>
        </>
    );
}
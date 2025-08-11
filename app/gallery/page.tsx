// ============================
// file: app/gallery/page.tsx
// ============================
import { GALLERY } from "@/lib/data";

export default function GalleryPage() {
    return (
        <section className="py-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Gallery</h1>
            <p className="mt-2 text-neutral-600">A few of our recent sets.</p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                {GALLERY.map((img, idx) => (
                    <figure key={idx} className="group relative overflow-hidden rounded-2xl shadow">
                        <img
                            src={img.src + "?auto=format&fit=crop&w=1200&q=60"}
                            alt={img.alt}
                            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-xs">
                            {img.alt}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
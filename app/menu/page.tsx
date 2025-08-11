// ============================
// file: app/menu/page.tsx
// ============================
import { MENU } from "@/lib/data";

export default function MenuPage() {
    return (
        <section className="py-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Menu</h1>
            <p className="mt-2 text-neutral-600">Transparent pricing. Premium care.</p>

            <div className="mt-8 grid md:grid-cols-5 gap-6">
                {MENU.map((cat) => (
                    <div key={cat.title} className="border-2 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold">{cat.title}</h3>
                        <ul className="mt-4 space-y-4">
                            {cat.items.map((item) => (
                                <li key={item.name} className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        {item.description && (
                                            <p className="text-sm text-neutral-600">{item.description}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-sm text-neutral-600">
                * Prices may vary based on length, design complexity, or add‑ons.
            </div>
        </section>
    );
}
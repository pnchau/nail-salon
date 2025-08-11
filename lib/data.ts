// ============================
// file: lib/data.ts
// ============================
export type MenuItem = { name: string; description?: string; price: number };
export type MenuCategory = { title: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
    {
        title: "Full Sets",
        items: [
            { name: "Solar", description: "Soak, scrub, polish", price: 35 },
            { name: "Solar Pink & White", description: "Callus care + mask", price: 55 },
            { name: "Color Powder", description: "Gel finish", price: 60 },
            { name: "Ombre(two colors)", description: "Gel finish", price: 60 },
            { name: "Dipping Powder", description: "Regular, French, Ombre with cuticle care", price: 60 },
            { name: "Full set with shellac", description: "Gel finish", price: 60 },
        ],
    },
    {
        title: "Builder Gel Nails & Gel-X (New!)",
        items: [
            { name: "Full Set Builder Gel", description: "Shape, cuticle care, polish", price: 25 },
            { name: "Full Set Gel-X", description: "Shape, cuticle care, polish", price: 25 },
            { name: "Refill Builder Gel", description: "Long‑lasting gel polish", price: 40 },
        ],
    },
    {
        title: "Manicure",
        items: [
            { name: "Classic Manicure", description: "Shape, cuticle care, polish", price: 25 },
            { name: "Gel Manicure", description: "Long‑lasting gel polish", price: 40 },
            { name: "Spa Manicure", description: "Exfoliation + massage", price: 55 },
        ],
    },
    {
        title: "Pedicure",
        items: [
            { name: "Classic Pedicure", description: "Soak, scrub, polish", price: 35 },
            { name: "Deluxe Pedicure", description: "Callus care + mask", price: 55 },
            { name: "Super Deluxe Pedicure", description: "Sea salt, paraffin wax, hot stone, mask", price: 55 },
            { name: "Gel Pedicure", description: "Gel finish", price: 60 },
        ],
    },
    {
        title: "Waxing",
        items: [
            { name: "Face Wax", description: "", price: 60 },
            { name: "Eyebrow Wax", description: "", price: 60 },
            { name: "Lip Wax", description: "", price: 40 },
            { name: "Chin Wax", description: "", price: 50 },
            { name: "Leg Wax", description: "", price: 5 },
        ],
    },
];

export const GALLERY: { src: string; alt: string }[] = [
    { src: "/nails1.jpg", alt: "" },
    { src: "/nails2.jpg", alt: "" },
    { src: "/nails3.jpg", alt: "" },
    { src: "/nails4.jpg", alt: "" },
    { src: "/nails5.jpg", alt: "" },
    { src: "/nails6.jpg", alt: "" },

];
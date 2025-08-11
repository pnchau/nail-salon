// ============================
// file: lib/data.ts
// ============================
export type MenuItem = { name: string; description?: string; price: number };
export type MenuCategory = { title: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
    {
        title: "Full Sets",
        items: [
            { name: "Solar", description: "Beautiful, durable nails with a flawless finish", price: 35 },
            { name: "Solar Pink & White", description: "Elegant two-tone look for a classic style", price: 55 },
            { name: "Color Powder", description: "Vibrant color that lasts and resists chipping", price: 60 },
            { name: "Ombre (two colors)", description: "Smooth color fade for a stylish statement", price: 60 },
            { name: "Dipping Powder", description: "Lightweight nails with stunning color", price: 60 },
            { name: "Full Set with Shellac", description: "Glossy, long-lasting gel shine", price: 60 },
        ],
    },
    {
        title: "Builder Gel Nails & Gel-X (New!)",
        items: [
            { name: "Full Set Builder Gel", description: "Strong yet natural-looking nails", price: 25 },
            { name: "Full Set Gel-X", description: "Lightweight and durable nail extensions", price: 25 },
            { name: "Refill Builder Gel", description: "Freshen up and extend the life of your nails", price: 40 },
        ],
    },
    {
        title: "Manicure",
        items: [
            { name: "Classic Manicure", description: "Clean, shaped nails with a polished look", price: 25 },
            { name: "Gel Manicure", description: "Chip-resistant shine that lasts for weeks", price: 40 },
            { name: "Spa Manicure", description: "Pampering treatment for soft, beautiful hands", price: 55 },
        ],
    },
    {
        title: "Pedicure",
        items: [
            { name: "Classic Pedicure", description: "Relaxing foot care for a fresh, clean look", price: 35 },
            { name: "Deluxe Pedicure", description: "Extra hydration and care for your feet", price: 55 },
            { name: "Super Deluxe Pedicure", description: "Indulgent spa experience for total relaxation", price: 55 },
            { name: "Gel Pedicure", description: "Shiny, long-lasting color for your toes", price: 60 },
        ],
    },
    {
        title: "Waxing",
        items: [
            { name: "Face Wax", description: "Smooth, hair-free skin for a fresh look", price: 60 },
            { name: "Eyebrow Wax", description: "Perfectly shaped brows to frame your face", price: 60 },
            { name: "Lip Wax", description: "Quick, gentle hair removal for a smooth finish", price: 40 },
            { name: "Chin Wax", description: "Smooth skin and a polished appearance", price: 50 },
            { name: "Leg Wax", description: "Silky, smooth legs you’ll love to show off", price: 5 },
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
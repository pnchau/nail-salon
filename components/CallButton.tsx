"use client";
import { useState } from "react";

export default function CallButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
            {/* Mobile: real call link */}
            <a
                href="tel:+18325551234"
                className="block sm:hidden px-6 py-3 border border-black text-black font-semibold rounded-none hover:bg-black hover:text-white transition-colors text-center"
            >
                Book an Appointment
            </a>

            {/* Desktop: open modal */}
            <button
                onClick={() => setShowModal(true)}
                className="hidden sm:block px-6 py-3 border border-black text-black font-semibold rounded-none hover:bg-black hover:text-white transition-colors"
            >
                Book an Appointment
            </button>

            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowModal(false)} // closes if you click outside the card
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center"
                        onClick={(e) => e.stopPropagation()} // stops click from closing when clicking inside
                    >
                        <h2 className="text-xl font-bold mb-4">Call Us</h2>
                        <p className=" text-black text-lg font-semibold mb-6">
                            <a href="tel:+12813380302" className="hover:underline">
                                (281) 338-0302
                            </a>
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-black text-white rounded-none hover:bg-neutral-800 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

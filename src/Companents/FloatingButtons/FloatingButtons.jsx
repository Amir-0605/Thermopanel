import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">

            {/* WhatsApp */}

            <a
                href="https://wa.me/77076483177"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
                <FaWhatsapp className="text-2xl sm:text-3xl" />

                <span className="hidden sm:block absolute right-20 whitespace-nowrap bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    Написать в WhatsApp
                </span>
            </a>

            {/* Звонок */}

            <a
                href="tel:+77783548447"
                className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500 text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
                <FaPhone className="text-xl sm:text-2xl" />

                <span className="hidden sm:block absolute right-20 whitespace-nowrap bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    Позвонить
                </span>
            </a>

        </div>
    );
};

export default FloatingButtons;
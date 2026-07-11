import React from "react";
import {
    FaWhatsapp,
    FaInstagram,
    FaTelegramPlane,
    FaTiktok,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-4 py-6 overflow-y-auto">

            <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 md:p-8 relative animate-[fadeIn_.3s]">

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-2xl hover:text-red-500 transition"
                >
                    <FaXmark />
                </button>

                <h2 className="text-2xl sm:text-3xl font-bold text-center">
                    Связаться с нами
                </h2>

                <p className="text-center text-gray-500 mt-3 mb-8 text-sm sm:text-base">
                    Выберите удобный способ связи
                </p>

                <div className="space-y-4">

                    <a
                        href="https://wa.me/77076483177"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-green-50 hover:bg-green-100 rounded-2xl p-4 sm:p-5 transition"
                    >
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-3xl sm:text-4xl text-green-500" />

                            <div>
                                <h3 className="font-bold text-sm sm:text-base">
                                    WhatsApp
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-500">
                                    Написать сообщение
                                </p>
                            </div>

                        </div>

                        <span className="text-xl">→</span>

                    </a>

                    <a
                        href="https://t.me/erkin9296"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 rounded-2xl p-4 sm:p-5 transition"
                    >
                        <div className="flex items-center gap-4">

                            <FaTelegramPlane className="text-3xl sm:text-4xl text-blue-500" />

                            <div>
                                <h3 className="font-bold text-sm sm:text-base">
                                    Telegram
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-500">
                                    Написать сообщение
                                </p>
                            </div>

                        </div>

                        <span className="text-xl">→</span>

                    </a>

                    <a
                        href="https://www.instagram.com/termo_panel1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-pink-50 hover:bg-pink-100 rounded-2xl p-4 sm:p-5 transition"
                    >
                        <div className="flex items-center gap-4">

                            <FaInstagram className="text-3xl sm:text-4xl text-pink-500" />

                            <div>
                                <h3 className="font-bold text-sm sm:text-base">
                                    Instagram
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-500">
                                    Перейти в профиль
                                </p>
                            </div>

                        </div>

                        <span className="text-xl">→</span>

                    </a>

                    <a
                        href="https://www.tiktok.com/@termo.panel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-2xl p-4 sm:p-5 transition"
                    >
                        <div className="flex items-center gap-4">

                            <FaTiktok className="text-3xl sm:text-4xl" />

                            <div>
                                <h3 className="font-bold text-sm sm:text-base">
                                    TikTok
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-500">
                                    Смотреть видео
                                </p>
                            </div>

                        </div>

                        <span className="text-xl">→</span>

                    </a>

                </div>

                <p className="text-center text-xs sm:text-sm text-gray-500 mt-8">
                    Работаем ежедневно с 08:00 до 19:00
                </p>

            </div>

        </div>
    );
};

export default ContactModal;
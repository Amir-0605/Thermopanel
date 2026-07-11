import React from "react";
import {
    FaPhone,
    FaWhatsapp,
    FaLocationDot,
    FaInstagram,
    FaTiktok,
    FaTelegram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1F2937] text-white pt-16 sm:pt-20 pb-8">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                {/* Логотип */}

                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                        TermoPanel
                    </h2>

                    <p className="text-gray-400 leading-7 sm:leading-8 mt-5 text-sm sm:text-base">
                        Продажа и профессиональный монтаж термопанелей в Алматы.
                        Мы помогаем сделать ваш дом теплым, красивым и долговечным.
                    </p>
                </div>

                {/* Навигация */}

                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
                        Навигация
                    </h3>

                    <ul className="space-y-3 sm:space-y-4 text-gray-400">

                        <li>
                            <a href="#" className="hover:text-orange-500 transition">
                                Главная
                            </a>
                        </li>

                        <li>
                            <a href="#ourservices" className="hover:text-orange-500 transition">
                                Наши услуги
                            </a>
                        </li>

                        <li>
                            <a href="#catalog" className="hover:text-orange-500 transition">
                                Каталог
                            </a>
                        </li>

                        <li>
                            <a href="#ourprojects" className="hover:text-orange-500 transition">
                                Наши работы
                            </a>
                        </li>

                        <li>
                            <a href="#about" className="hover:text-orange-500 transition">
                                О компании
                            </a>
                        </li>

                    </ul>
                </div>

                {/* Контакты */}

                <div>

                    <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
                        Контакты
                    </h3>

                    <div className="space-y-5">

                        <div className="flex items-center gap-3">
                            <FaPhone className="text-orange-500 flex-shrink-0" />
                            <span className="text-gray-400 text-sm sm:text-base break-all">
                                +7 778 354 84 47
                            </span>
                        </div>

                        <a
                            href="https://wa.me/77076483177"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            <FaWhatsapp className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-400 text-sm sm:text-base">
                                WhatsApp
                            </span>
                        </a>

                        <div className="flex items-center gap-3">
                            <FaLocationDot className="text-orange-500 flex-shrink-0" />
                            <span className="text-gray-400 text-sm sm:text-base">
                                г. Алматы Жаналык
                            </span>
                        </div>

                    </div>

                </div>

                {/* Социальные сети */}

                <div>

                    <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
                        Мы в соцсетях
                    </h3>

                    <div className="flex gap-4 sm:gap-5">

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/termo_panel1"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition duration-300 hover:scale-110"
                        >
                            <FaInstagram size={22} />
                        </a>

                        <a
                            href="https://www.tiktok.com/@termo.panel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition duration-300 hover:scale-110"
                        >
                            <FaTiktok size={20} />
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/erkin9296"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition duration-300 hover:scale-110"
                        >
                            <FaTelegram size={22} />
                        </a>

                    </div>

                    <a
                        href="#contact"
                        className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 py-3 px-4 rounded-xl font-semibold transition duration-300 text-sm sm:text-base"
                    >
                        Получить консультацию
                    </a>

                </div>

            </div>

            {/* Линия */}

            <div className="border-t border-gray-700 mt-12 sm:mt-16 pt-6 sm:pt-8">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">

                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        © 2026 TermoPanel. Все права защищены.
                    </p>

                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        Разработано с ❤️ для современных фасадов.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
import React, { useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import bgImg from '../assets/bg-img.png'
import logo from '../assets/termopanel.png'
import { FaWhatsapp } from 'react-icons/fa'
import { FaBars, FaXmark } from "react-icons/fa6";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className="pt-28 md:pt-36 lg:pt-40 bg-cover bg-center min-h-screen w-full"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="container mx-auto px-4 md:px-6">

                <header
                    className="fixed top-3 md:top-5 left-3 right-3 md:left-6 md:right-6 lg:left-10 lg:right-10 z-50
                    flex items-center justify-between
                    py-4 px-4 md:px-6
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                    rounded-2xl shadow-lg"
                >

                    <img
                        src={logo}
                        alt="logo"
                        className="w-28 h-14 md:w-36 md:h-18 lg:w-40 lg:h-20"
                    />

                    {/* Меню */}
                    <nav className="hidden lg:flex gap-8">

                        <a href="#" className="cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105 p-2">
                            Главная
                        </a>

                        <a href="#ourservices" className="cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105 p-2">
                            Наши услуги
                        </a>

                        <a href="#catalog" className="cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105 p-2">
                            Каталог
                        </a>

                        <a href="#ourprojects" className="cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105 p-2">
                            Наши работы
                        </a>

                        <a href="#reviews" className="cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105 p-2">
                            Отзывы
                        </a>

                        <a href="#about" className="cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105 p-2">
                            О нас
                        </a>

                    </nav>

                    {/* Контакты */}
                    <div className="hidden lg:flex items-center gap-5">

                        <div className="flex gap-3 items-center">

                            <FiPhone className="text-xl" />

                            <span>

                                <h4 className="font-semibold">
                                    +7 778 354 84 47
                                </h4>

                                <p className="text-sm">
                                    Ежедневно 8:00–19:00
                                </p>

                            </span>

                        </div>

                        <a
                            href="https://wa.me/77076483177"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 flex items-center gap-2 text-white px-4 py-3 rounded-xl cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-105"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>


                    </div>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden block text-3xl text-black"
                    >
                        <FaBars />
                    </button>

                </header>

                {menuOpen && (
                    <div className="fixed inset-0 z-[60] bg-black/60">

                        <div className="absolute top-0 right-0 w-72 h-full bg-white p-8 shadow-2xl">

                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-3xl mb-8"
                            >
                                <FaXmark />
                            </button>

                            <nav className="flex flex-col gap-6 text-lg font-semibold">

                                <a href="#" onClick={() => setMenuOpen(false)}>
                                    Главная
                                </a>

                                <a href="#ourservices" onClick={() => setMenuOpen(false)}>
                                    Наши услуги
                                </a>

                                <a href="#catalog" onClick={() => setMenuOpen(false)}>
                                    Каталог
                                </a>

                                <a href="#ourprojects" onClick={() => setMenuOpen(false)}>
                                    Наши работы
                                </a>

                                <a href="#reviews" onClick={() => setMenuOpen(false)}>
                                    Отзывы
                                </a>

                                <a href="#about" onClick={() => setMenuOpen(false)}>
                                    О нас
                                </a>

                                <a href="#contact" onClick={() => setMenuOpen(false)}>
                                    Контакты
                                </a>

                            </nav>

                            <div className="mt-10 border-t pt-8">

                                <p className="font-bold">
                                    +7 778 354 84 47
                                </p>

                                <p className="text-gray-500 mt-2">
                                    Ежедневно 8:00–19:00
                                </p>

                                <a
                                    href="https://wa.me/77076483177"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-3"
                                >
                                    <FaWhatsapp />
                                    WhatsApp
                                </a>

                            </div>

                        </div>

                    </div>
                )}
                {/* Hero */}
                <div className="flex flex-col justify-center min-h-[80vh] text-center lg:text-left">

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                        Продажа и монтаж <br /> термопанелей
                        <br className="hidden lg:block" />
                        в Алматы
                    </h1>

                    <h3 className="text-lg sm:text-xl lg:text-2xl pt-6 leading-relaxed">

                        Качественные материалы,
                        профессиональный

                        <br className="hidden lg:block" />

                        монтаж и быстрая доставка
                        по всем районам Алматы.

                        <br className="hidden lg:block" />

                        Создаем теплые, красивые и
                        долговечные фасады <br />
                        с гарантией качества.

                    </h3>

                    <div className="pt-10 lg:pt-10 flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center lg:justify-start">

                        <a
                            href="#contact"
                            className="text-center p-4 rounded-xl bg-orange-500 hover:bg-orange-600 cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105"
                        >
                            Получите бесплатную консультацию
                        </a>

                        <a
                            href="tel:+77783548447"
                            className="text-center p-4 rounded-xl bg-green-500 hover:bg-green-600 text-white cursor-pointer transition-transform duration-300 hover:shadow-sm hover:scale-105"
                        >
                            Позвонить
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero
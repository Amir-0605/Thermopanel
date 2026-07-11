import React, { useState } from 'react'
import { FaAward, FaHeart } from 'react-icons/fa'
import { FaClockRotateLeft } from 'react-icons/fa6'
import ContactModal from "../ContactModal/ContactModal";

const About = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">

                <section id="about" className="py-16 md:py-20 lg:py-24">

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        {/* Левая часть */}

                        <div className="text-center lg:text-left">

                            <span className="text-orange-500 font-semibold uppercase tracking-widest">
                                О компании
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                                Надежный партнер в сфере термопанелей
                            </h1>

                            <p className="text-gray-600 text-base md:text-lg leading-8 mt-8">
                                Мы занимаемся продажей и профессиональным монтажом термопанелей в Алматы.
                                Наша цель — помочь каждому клиенту сделать дом теплее, красивее и долговечнее.
                                Используем только качественные материалы и соблюдаем современные технологии монтажа.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                                <a
                                    href="#contact"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition-all duration-300 text-center"
                                >
                                    Получить консультацию
                                </a>

                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
                                >
                                    Связаться с нами
                                </button>

                            </div>

                        </div>

                        {/* Правая часть */}

                        <div className="grid gap-6">

                            <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                    <FaClockRotateLeft className="text-3xl text-orange-500 group-hover:text-white" />
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold mt-5">
                                    История
                                </h2>

                                <p className="text-gray-500 mt-3 leading-7">
                                    За годы работы мы успешно реализовали множество проектов по утеплению и отделке фасадов.
                                </p>

                            </div>

                            <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                    <FaAward className="text-3xl text-orange-500 group-hover:text-white" />
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold mt-5">
                                    Опыт
                                </h2>

                                <p className="text-gray-500 mt-3 leading-7">
                                    Наши специалисты выполняют монтаж любой сложности с соблюдением всех строительных стандартов.
                                </p>

                            </div>

                            <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                    <FaHeart className="text-3xl text-orange-500 group-hover:text-white" />
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold mt-5">
                                    Ценности
                                </h2>

                                <p className="text-gray-500 mt-3 leading-7">
                                    Честность, качество, ответственность и индивидуальный подход к каждому клиенту.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                <ContactModal
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                />

            </div>
        </div>
    )
}

export default About
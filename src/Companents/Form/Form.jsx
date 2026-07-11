import React, { useState } from 'react'
import { FaClock, FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Forma = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `Здравствуйте!

Хочу оставить заявку.

Имя: ${name}

Телефон: ${phone}

Комментарий:
${message}`;

        window.open(
            `https://wa.me/77076483177?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );
    };

    return (
        <div>
            <section id='contact' className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Получите бесплатную консультацию
                            <br className="hidden sm:block" />
                            и расчет стоимости
                        </h1>

                        <p className="text-base sm:text-lg text-gray-500 mt-5">
                            Оставьте заявку и наш специалист свяжется с вами в ближайшее время.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                        {/* Форма */}

                        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10">

                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div>
                                    <label className="block mb-2 font-semibold">
                                        Имя
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Введите ваше имя"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl p-3 sm:p-4 outline-none focus:border-orange-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-semibold">
                                        Телефон
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="+7 (___) ___-__-__"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl p-3 sm:p-4 outline-none focus:border-orange-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-semibold">
                                        Комментарий
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Напишите ваш вопрос..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl p-3 sm:p-4 resize-none outline-none focus:border-orange-500 transition"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition duration-300 hover:scale-[1.02]"
                                >
                                    Отправить заявку
                                </button>

                            </form>

                        </div>

                        {/* Контакты */}

                        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10">

                            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
                                Контактная информация
                            </h2>

                            <div className="space-y-6 sm:space-y-8">

                                <div className="flex items-center gap-4 sm:gap-5">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-orange-500 text-xl sm:text-2xl" />
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">Телефон</p>
                                        <h3 className="font-bold text-base sm:text-lg break-all">
                                            +7 778 354 84 47
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-5">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <FaWhatsapp className="text-green-600 text-xl sm:text-2xl" />
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">WhatsApp</p>
                                        <h3 className="font-bold text-base sm:text-lg break-all">
                                            +7 707 648 31 77
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-5">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <FaLocationDot className="text-orange-500 text-xl sm:text-2xl" />
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">Адрес</p>
                                        <h3 className="font-bold text-base sm:text-lg">
                                            г. Алматы Жаналык
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-5">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <FaClock className="text-orange-500 text-xl sm:text-2xl" />
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm sm:text-base">Часы работы</p>
                                        <h3 className="font-bold text-base sm:text-lg">
                                            Пн–Вс • 08:00 – 19:00
                                        </h3>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10 sm:mt-12">

                                <h3 className="font-bold text-lg sm:text-xl mb-5">
                                    Мы в социальных сетях
                                </h3>

                                <div className="flex gap-4 sm:gap-5">

                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.instagram.com/termo_panel1"
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
                                    >
                                        <FaInstagram size={24} />
                                    </a>

                                    <a
                                        href="https://www.tiktok.com/@termo.panel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
                                    >
                                        <FaTiktok size={20} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Forma
import React from "react";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";

const Map = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Где мы находимся
                    </h1>

                    <p className="text-base sm:text-lg text-gray-500 mt-4 md:mt-5">
                        Посетите наш офис или свяжитесь с нами удобным способом.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Информация */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 flex items-center justify-center">
                                <FaLocationDot className="text-orange-500 text-xl md:text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg md:text-xl">
                                    Адрес
                                </h3>

                                <p className="text-gray-500 text-sm md:text-base">
                                    г. Алматы Жаналык
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 flex items-center justify-center">
                                <FaPhone className="text-orange-500 text-xl md:text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg md:text-xl">
                                    Телефон
                                </h3>

                                <p className="text-gray-500 text-sm md:text-base">
                                    +7 778 354 84 47
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 flex items-center justify-center">
                                <FaClock className="text-orange-500 text-xl md:text-2xl" />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg md:text-xl">
                                    Режим работы
                                </h3>

                                <p className="text-gray-500 text-sm md:text-base">
                                    Пн–Вс: 08:00 – 19:00
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Карта */}

                    <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg border border-gray-200">

                        <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=43.566900,77.035225&z=18&output=embed"
                            width="100%"
                            height="500"
                            loading="lazy"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
                            allowFullScreen
                        ></iframe>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Map;
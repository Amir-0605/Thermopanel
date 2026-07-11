import React from "react";
import { FaShieldHalved, FaCertificate } from "react-icons/fa6";

const Guarantee = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Гарантии качества
                    </h1>

                    <p className="text-base sm:text-lg text-gray-500 mt-5">
                        Мы уверены в качестве материалов и профессионализме наших специалистов.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                    {/* Гарантия */}

                    <div className="group bg-orange-500 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition">

                            <FaShieldHalved className="text-3xl sm:text-4xl" />

                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Гарантия качества
                        </h2>

                        <p className="mt-5 leading-7 sm:leading-8 text-orange-50 text-sm sm:text-base">
                            Мы используем только качественные термопанели и
                            предоставляем официальную гарантию на материалы и
                            выполненные монтажные работы.
                        </p>

                        <ul className="mt-8 space-y-3 text-sm sm:text-base">

                            <li>✔️ Проверенные материалы</li>

                            <li>✔️ Гарантия на монтаж</li>

                            <li>✔️ Соблюдение технологий установки</li>

                        </ul>

                    </div>

                    {/* Сертификаты */}

                    <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-orange-500 transition">

                            <FaCertificate className="text-3xl sm:text-4xl text-orange-500 group-hover:text-white transition" />

                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Сертифицированная продукция
                        </h2>

                        <p className="mt-5 leading-7 sm:leading-8 text-gray-500 text-sm sm:text-base">
                            Вся продукция соответствует современным стандартам
                            качества и подходит для эксплуатации в климатических
                            условиях Казахстана.
                        </p>

                        <ul className="mt-8 space-y-3 text-gray-700 text-sm sm:text-base">

                            <li>✔️ Сертифицированные материалы</li>

                            <li>✔️ Высокая теплоизоляция</li>

                            <li>✔️ Долговечность и надежность</li>

                        </ul>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Guarantee;
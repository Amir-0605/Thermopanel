import React from 'react'
import {
    FaBoxOpen,
    FaCalculator,
    FaClock,
    FaComments,
    FaFileSignature,
    FaGift,
    FaHammer,
    FaRulerCombined
} from 'react-icons/fa'

import {
    FaBuildingShield,
    FaFileCirclePlus,
    FaHandsBubbles,
    FaHouse,
    FaHouseCircleCheck,
    FaLocationDot,
    FaMoneyBillTrendUp,
    FaShieldHalved,
    FaTemperatureArrowDown,
    FaTruckFast
} from 'react-icons/fa6'

const Delivery = () => {
    return (
        <div>

            <div className="py-16 md:py-20 lg:py-24 bg-gray-50">

                <div className="text-center px-4">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Как мы работаем
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-gray-500">
                        Всего 8 простых шагов от заявки до готового фасада.
                    </p>

                </div>

                <div className="relative max-w-7xl mx-auto mt-12 md:mt-20 px-4">

                    {/* Линия */}

                    <div className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-orange-200 rounded-full"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 relative z-10">

                        {/* 1 */}

                        <div className="group flex flex-col items-center text-center">

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">

                                <FaFileCirclePlus className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />

                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                1
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Заявка
                            </h3>

                        </div>

                        {/* 2 */}

                        <div className="group flex flex-col items-center text-center">

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">

                                <FaComments className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />

                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                2
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Консультация
                            </h3>

                        </div>

                        {/* 3 */}

                        <div className="group flex flex-col items-center text-center">

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">

                                <FaRulerCombined className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />

                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                3
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Замер
                            </h3>

                        </div>

                        {/* 4 */}

                        <div className="group flex flex-col items-center text-center">

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">

                                <FaCalculator className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />

                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                4
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Расчет
                            </h3>

                        </div>

                        {/* 5 */}

                        <div className="group flex flex-col items-center text-center">

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">

                                <FaFileSignature className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />

                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                5
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Договор
                            </h3>

                        </div>

                        {/* 6 */}
                        <div className="group flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">
                                <FaTruckFast className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                6
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Доставка
                            </h3>
                        </div>

                        {/* 7 */}
                        <div className="group flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">
                                <FaHammer className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                7
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Монтаж
                            </h3>
                        </div>

                        {/* 8 */}
                        <div className="group flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-all duration-300">
                                <FaHouseCircleCheck className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                            </div>

                            <span className="mt-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                8
                            </span>

                            <h3 className="font-semibold mt-3 text-sm md:text-base">
                                Сдача объекта
                            </h3>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-16 md:py-20 bg-gray-50">

                <div className="text-center px-4">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Доставка по Алматы
                    </h1>

                    <p className="text-gray-500 mt-4 text-base md:text-lg">
                        Быстро доставляем термопанели во все районы города с соблюдением сроков и сохранностью материалов.
                    </p>

                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-10 md:pt-14 px-4">

                    {/* Районы */}
                    <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 border border-gray-100">

                        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                            <FaLocationDot className="text-orange-500" />
                            Доставка по всем районам
                        </h2>

                        <div className="grid grid-cols-2 gap-3 md:gap-4 text-gray-700">

                            <span className="text-base md:text-xl">📍 Алмалинский</span>
                            <span className="text-base md:text-xl">📍 Алатауский</span>
                            <span className="text-base md:text-xl">📍 Ауэзовский</span>
                            <span className="text-base md:text-xl">📍 Бостандыкский</span>
                            <span className="text-base md:text-xl">📍 Жетысуский</span>
                            <span className="text-base md:text-xl">📍 Медеуский</span>
                            <span className="text-base md:text-xl">📍 Наурызбайский</span>
                            <span className="text-base md:text-xl">📍 Турксибский</span>

                        </div>

                    </div>

                    <div className="flex flex-col gap-4 md:gap-6">

                        <div className="flex items-center gap-4 md:gap-5 bg-white rounded-3xl shadow-sm p-5 md:p-6 border border-gray-100 hover:shadow-lg transition duration-300">

                            <FaTruckFast className="text-3xl md:text-4xl text-orange-500 flex-shrink-0" />

                            <div>

                                <h3 className="font-bold text-lg md:text-xl">
                                    Быстрая доставка
                                </h3>

                                <p className="text-sm md:text-base text-gray-500">
                                    Доставляем материалы точно в согласованное время.
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4 md:gap-5 bg-white rounded-3xl shadow-sm p-5 md:p-6 border border-gray-100 hover:shadow-lg transition duration-300">

                            <FaGift className="text-3xl md:text-4xl text-orange-500 flex-shrink-0" />

                            <div>

                                <h3 className="font-bold text-lg md:text-xl">
                                    Бесплатная доставка по всему Алматы без скрытых платежей.
                                </h3>

                            </div>

                        </div>

                        <div className="flex flex-col gap-4 sm:gap-6">

                            <div className="flex sm:flex-row items-center sm:items-center gap-4 sm:gap-5 bg-white rounded-3xl shadow-sm p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition duration-300">
                                <FaBoxOpen className="text-3xl sm:text-4xl text-orange-500 flex-shrink-0" />
                                <div className="sm:text-left">
                                    <h3 className="font-bold text-lg sm:text-xl">
                                        Аккуратная транспортировка
                                    </h3>
                                    <p className="text-gray-500 text-sm sm:text-base">
                                        Бережно перевозим термопанели без повреждений.
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:flex-row items-center sm:items-center gap-4 sm:gap-5 bg-white rounded-3xl shadow-sm p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition duration-300">
                                <FaClock className="text-3xl sm:text-4xl text-orange-500 flex-shrink-0" />
                                <div className="sm:text-left">
                                    <h3 className="font-bold text-lg sm:text-xl">
                                        Удобное время
                                    </h3>
                                    <p className="text-gray-500 text-sm sm:text-base">
                                        Согласовываем дату и время доставки заранее.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">

                    <div className="text-center px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Преимущества термопанелей
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-gray-500">
                            Современное решение для красивого, теплого и долговечного фасада.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">

                        <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <FaTemperatureArrowDown className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mt-6">
                                Отличное утепление
                            </h2>
                            <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                                Сохраняет тепло зимой и прохладу летом, снижая теплопотери дома.
                            </p>
                        </div>

                        <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <FaHouse className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mt-6">
                                Красивый внешний вид
                            </h2>
                            <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                                Большой выбор цветов и фактур для стильного оформления фасада.
                            </p>
                        </div>

                        <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <FaMoneyBillTrendUp className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mt-6">
                                Экономия на отоплении
                            </h2>
                            <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                                Благодаря высокой теплоизоляции снижаются расходы на отопление.
                            </p>
                        </div>

                        <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <FaShieldHalved className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mt-6">
                                Долговечность
                            </h2>
                            <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                                Термопанели устойчивы к влаге, морозу и перепадам температуры.
                            </p>
                        </div>

                        <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <FaBuildingShield className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mt-6">
                                Защита фасада
                            </h2>
                            <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                                Защищает стены от осадков, влаги и механических воздействий.
                            </p>
                        </div>

                        <div className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <FaHandsBubbles className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mt-6">
                                Простота ухода
                            </h2>
                            <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                                Поверхность легко очищается и сохраняет привлекательный внешний вид долгие годы.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Delivery
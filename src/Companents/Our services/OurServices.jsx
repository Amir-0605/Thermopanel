import React from 'react'
import { FaCalculator, FaCoins, FaComments, FaHammer, FaMedal, FaRulerCombined } from 'react-icons/fa'
import { FaBoxesStacked, FaCubesStacked, FaHouse, FaShieldHalved, FaTruckFast } from 'react-icons/fa6'

const OurServices = () => {
    return (
        <div className='bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6'>
                <section id='ourservices' className='pb-10'>

                    <div className='text-center pt-10'>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            Почему выбирают нас
                        </h1>
                    </div>

                    <div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 pt-10'>

                        <span className='flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[150px] sm:w-44 lg:w-48'>
                            <FaCubesStacked className='text-3xl sm:text-4xl text-orange-500' />
                            <p className='text-center text-sm sm:text-base font-medium text-gray-800'>
                                Качественные материалы
                            </p>
                        </span>

                        <span className='flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[150px] sm:w-44 lg:w-48'>
                            <FaMedal className='text-3xl sm:text-4xl text-orange-500' />
                            <p className='text-center text-sm sm:text-base font-medium text-gray-800'>
                                Опыт работы
                            </p>
                        </span>

                        <span className='flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[150px] sm:w-44 lg:w-48'>
                            <FaShieldHalved className='text-3xl sm:text-4xl text-orange-500' />
                            <p className='text-center text-sm sm:text-base font-medium text-gray-800'>
                                Гарантия
                            </p>
                        </span>

                        <span className='flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[150px] sm:w-44 lg:w-48'>
                            <FaCoins className='text-3xl sm:text-4xl text-orange-500' />
                            <p className='text-center text-sm sm:text-base font-medium text-gray-800'>
                                Доступные цены
                            </p>
                        </span>

                        <span className='flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[150px] sm:w-44 lg:w-48'>
                            <FaTruckFast className='text-3xl sm:text-4xl text-orange-500' />
                            <p className='text-center text-sm sm:text-base font-medium text-gray-800'>
                                Быстрая доставка
                            </p>
                        </span>

                        <span className='flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[150px] sm:w-44 lg:w-48'>
                            <FaHammer className='text-3xl sm:text-4xl text-orange-500' />
                            <p className='text-center text-sm sm:text-base font-medium text-gray-800'>
                                Профессиональный монтаж
                            </p>
                        </span>

                    </div>

                    <div className='pt-10'>

                        <div className="py-16 md:py-20">

                            <div className="text-center">
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                    Наши услуги
                                </h1>
                            </div>

                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-10 md:pt-14">

                                <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                                        <FaBoxesStacked className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-6">
                                        Продажа термопанелей
                                    </h2>

                                    <p className="text-gray-500 mt-3 leading-7 text-sm md:text-base">
                                        Широкий выбор качественных термопанелей различных цветов и фактур.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                                        <FaHammer className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-6">
                                        Монтаж термопанелей
                                    </h2>

                                    <p className="text-gray-500 mt-3 leading-7 text-sm md:text-base">
                                        Профессиональный монтаж с соблюдением всех строительных технологий.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                                        <FaHouse className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-6">
                                        Утепление фасадов
                                    </h2>

                                    <p className="text-gray-500 mt-3 leading-7 text-sm md:text-base">
                                        Эффективное утепление фасадов для экономии тепла и защиты дома.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                                        <FaComments className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-6">
                                        Консультация
                                    </h2>

                                    <p className="text-gray-500 mt-3 leading-7 text-sm md:text-base">
                                        Поможем подобрать оптимальное решение для вашего дома.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                                        <FaCalculator className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-6">
                                        Бесплатный расчет
                                    </h2>

                                    <p className="text-gray-500 mt-3 leading-7 text-sm md:text-base">
                                        Рассчитаем стоимость материалов и монтажа совершенно бесплатно.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                                        <FaRulerCombined className="text-2xl md:text-3xl text-orange-500 group-hover:text-white" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-6">
                                        Замер объекта
                                    </h2>

                                    <p className="text-gray-500 mt-3 leading-7 text-sm md:text-base">
                                        Выполним точный замер объекта для правильного расчета материалов.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default OurServices
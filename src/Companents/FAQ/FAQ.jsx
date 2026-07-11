import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [active, setActive] = useState(null);

    const faqData = [
        {
            question: "Сколько стоит монтаж?",
            answer:
                "Стоимость монтажа рассчитывается индивидуально и зависит от площади фасада, выбранных материалов и сложности работ.",
        },
        {
            question: "Сколько времени занимает работа?",
            answer:
                "В среднем монтаж занимает от 2 до 7 дней в зависимости от площади объекта.",
        },
        {
            question: "Есть ли гарантия?",
            answer:
                "Да. Мы предоставляем гарантию как на материалы, так и на выполненные монтажные работы.",
        },
        {
            question: "Сколько длится доставка?",
            answer:
                "По Алматы доставка обычно осуществляется в течение 1 рабочего дня в согласованное время.",
        },
        {
            question: "Какие способы оплаты доступны?",
            answer:
                "Принимаем наличный и безналичный расчет, а также банковские переводы.",
        },
    ];

    return (
        <div>

            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">

                <div className="max-w-5xl mx-auto px-4 sm:px-6">

                    <div className="text-center mb-10 sm:mb-14">

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Часто задаваемые вопросы
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-gray-500">
                            Ответы на самые популярные вопросы наших клиентов.
                        </p>

                    </div>

                    <div className="space-y-4 sm:space-y-5">

                        {faqData.map((item, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                            >

                                <button
                                    onClick={() =>
                                        setActive(active === index ? null : index)
                                    }
                                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-8 py-5 sm:py-6 cursor-pointer hover:bg-orange-50 transition"
                                >

                                    <h2 className="text-base sm:text-xl font-semibold text-left flex-1">
                                        {item.question}
                                    </h2>

                                    <FaChevronDown
                                        className={`text-orange-500 text-lg sm:text-xl flex-shrink-0 transition-transform duration-300 ${active === index ? "rotate-180" : ""
                                            }`}
                                    />

                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${active === index
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">

                                        <p className="px-5 sm:px-8 pb-5 sm:pb-6 text-sm sm:text-base text-gray-600 leading-7 sm:leading-8">
                                            {item.answer}
                                        </p>

                                    </div>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    )
}

export default FAQ
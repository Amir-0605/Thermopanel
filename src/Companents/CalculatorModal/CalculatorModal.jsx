import { useEffect, useMemo, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const prices = {
    "2 см": 3500,
    "3 см": 4000,
    "5 см": 5000,
};

const CalculatorModal = ({ isOpen, onClose, selectedThickness }) => {
    const [area, setArea] = useState("");

    useEffect(() => {
        if (!isOpen) setArea("");
    }, [isOpen]);

    const total = useMemo(() => {
        const value = Number(area);

        if (!value || value <= 0) return 0;

        return value * prices[selectedThickness];
    }, [area, selectedThickness]);

    if (!isOpen) return null;

    const whatsappMessage = `Здравствуйте!

Хочу заказать термопанели.

🏠 Площадь дома: ${area} м²
📏 Толщина: ${selectedThickness}
💰 Предварительная стоимость: ${total.toLocaleString()} ₸

Прошу связаться со мной для уточнения деталей заказа.`;

    const unknownAreaMessage = `Здравствуйте!

Хочу заказать термопанели.

Я не знаю площадь своего дома.

Прошу направить специалиста для бесплатного замера дома и расчета точной стоимости.

📏 Выбранная толщина: ${selectedThickness}

Пожалуйста, свяжитесь со мной для согласования даты и времени.`;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 py-6 overflow-y-auto">

            <div className="bg-white rounded-3xl w-full max-w-md p-5 sm:p-6 md:p-8 relative">

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-2xl hover:text-red-500 transition"
                >
                    <FaXmark />
                </button>

                <h2 className="text-2xl sm:text-3xl font-bold text-center">
                    Бесплатный расчет
                </h2>

                <p className="text-center text-gray-500 mt-3 text-sm sm:text-base">
                    Введите площадь вашего дома
                </p>

                <div className="mt-8">

                    <label className="font-semibold">
                        Площадь (м²)
                    </label>

                    <input
                        type="number"
                        placeholder="Например: 120"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full border mt-2 rounded-xl p-3 md:p-4 outline-none focus:border-orange-500"
                    />

                </div>

                <div className="mt-6">

                    <p className="font-semibold">
                        Выбранная толщина
                    </p>

                    <div className="mt-2 bg-orange-100 text-orange-600 font-bold rounded-xl py-3 text-center">
                        {selectedThickness}
                    </div>

                </div>

                <div className="mt-8 bg-gray-100 rounded-2xl p-5">

                    <p className="text-gray-500">
                        Предварительная стоимость
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-orange-500 break-words">
                        {total.toLocaleString()} ₸
                    </h1>

                </div>

                <a
                    href={`https://wa.me/77076483177?text=${encodeURIComponent(
                        whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl flex justify-center items-center text-center font-semibold text-base sm:text-lg transition hover:scale-105"
                >
                    Заказать через WhatsApp
                </a>

                <a
                    href={`https://wa.me/77076483177?text=${encodeURIComponent(
                        unknownAreaMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full border-2 border-orange-500 text-orange-500 py-4 rounded-xl flex justify-center items-center text-center font-semibold text-base sm:text-lg transition duration-300 hover:bg-orange-500 hover:text-white hover:scale-105"
                >
                    ❓ Не знаю площадь дома
                </a>

                <p className="text-center text-gray-500 text-sm leading-6 mt-4">
                    Не знаете площадь? Наш специалист бесплатно приедет,
                    выполнит замер и рассчитает точную стоимость.
                </p>

            </div>

        </div>
    );
};

export default CalculatorModal;
import React, { useEffect, useState } from "react";
import CalculatorModal from "../CalculatorModal/CalculatorModal";
import { supabase } from "../../Lib/Supabase";

const CatalogCard = ({ item, openCalculator }) => {
    const [size, setSize] = useState("2 см");

    return (
        <div
            id="catalog"
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={`${item.title} термопанели Алматы`}
                    loading="lazy"
                    className="w-full h-56 sm:h-64 object-cover hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-5 md:p-6">

                <h3 className="text-xl md:text-2xl font-bold">
                    {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                    🎨 Цвет: {item.color}
                </p>

                <div className="mt-6">

                    <p className="font-semibold mb-3">
                        Выберите толщину
                    </p>

                    <div className="flex flex-wrap gap-3">

                        {["2 см", "3 см", "5 см"].map((value) => (

                            <button
                                key={value}
                                onClick={() => setSize(value)}
                                className={`px-4 py-2 rounded-xl border transition duration-300 ${size === value
                                        ? "bg-orange-500 text-white border-orange-500"
                                        : "border-gray-300 hover:border-orange-500"
                                    }`}
                            >
                                {value}
                            </button>

                        ))}

                    </div>

                </div>

                <button
                    onClick={() => openCalculator(size)}
                    className="w-full mt-8 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition hover:scale-105"
                >
                    Получить расчет
                </button>

            </div>

        </div>
    );
};

const Catalog = () => {
    const [catalog, setCatalog] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedThickness, setSelectedThickness] = useState("2 см");

    useEffect(() => {
        getCatalog();
    }, []);

    async function getCatalog() {
        const { data, error } = await supabase
            .from("catalog")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            console.log(error);
            return;
        }

        setCatalog(data);
    }

    const openCalculator = (thickness) => {
        setSelectedThickness(thickness);
        setIsOpen(true);
    };

    return (
        <section className="py-12 md:py-16 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-12 md:mb-16">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Каталог термопанелей
                    </h1>

                    <p className="text-gray-500 text-base md:text-lg mt-5">
                        Выберите цвет и толщину термопанелей для вашего дома.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {catalog.map((item) => (
                        <CatalogCard
                            key={item.id}
                            item={item}
                            openCalculator={openCalculator}
                        />
                    ))}

                </div>

            </div>

            <CalculatorModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                selectedThickness={selectedThickness}
            />

        </section>
    );
};

export default Catalog;
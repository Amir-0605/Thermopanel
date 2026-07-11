import React, { useEffect, useState } from "react";
import { supabase } from "../../Lib/Supabase";

const OurProjects = () => {
    const [projects, setProjects] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(6);

    useEffect(() => {
        getProjects();
    }, []);

    async function getProjects() {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            console.log(error);
            return;
        }

        setProjects(data);
    }

    return (
        <section
            id="ourprojects"
            className="py-16 md:py-20 lg:py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-10 md:mb-16">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Наши работы
                    </h2>

                    <p className="text-gray-500 text-base sm:text-lg mt-4 md:mt-5 max-w-3xl mx-auto">
                        Посмотрите выполненные проекты по монтажу
                        термопанелей в Алматы и области.
                    </p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {projects
                        .slice(0, visibleProjects)
                        .map((item) => (

                            <div
                                key={item.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >

                                <div className="overflow-hidden">

                                    <img
                                        src={item.image}
                                        alt={`${item.title} термопанели Алматы`}
                                        loading="lazy"
                                        className="w-full h-56 sm:h-64 lg:h-72 object-cover hover:scale-110 transition duration-500"
                                    />

                                </div>

                                <div className="p-5 md:p-6">

                                    <h3 className="text-xl md:text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                </div>

                            </div>

                        ))}

                </div>

                {visibleProjects < projects.length && (

                    <div className="flex justify-center mt-10 md:mt-14">

                        <button
                            onClick={() =>
                                setVisibleProjects((prev) => prev + 6)
                            }
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 lg:px-10 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
                        >
                            Показать еще
                        </button>

                    </div>

                )}

            </div>

        </section>
    );
};

export default OurProjects;
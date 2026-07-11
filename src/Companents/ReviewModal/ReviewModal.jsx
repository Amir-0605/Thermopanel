import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ReviewSuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] px-4 sm:px-6">

            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center relative animate-[fadeIn_.3s]">

                <div className="flex justify-center">
                    <FaCheckCircle className="text-5xl sm:text-6xl lg:text-7xl text-green-500" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mt-5 sm:mt-6">
                    Спасибо!
                </h2>

                <p className="text-gray-500 mt-4 leading-7 text-sm sm:text-base">
                    Ваш отзыв успешно отправлен.
                    <br />
                    После проверки администратором
                    он появится на нашем сайте.
                </p>

                <button
                    onClick={onClose}
                    className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition"
                >
                    Отлично
                </button>

            </div>

        </div>
    );
};

export default ReviewSuccessModal;
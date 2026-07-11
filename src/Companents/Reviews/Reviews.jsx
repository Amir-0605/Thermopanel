import React, { useEffect, useState } from "react";
import { supabase } from "../../Lib/Supabase";
import ReviewSuccessModal from "../../Companents/ReviewModal/ReviewModal";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [successOpen, setSuccessOpen] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  useEffect(() => {
    getReviews();
  }, []);

  async function getReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("approved", true)
      .order("id", { ascending: false });

    if (!error) {
      setReviews(data);
    }
  }

  async function sendReview(e) {
    e.preventDefault();

    if (!name || !city || !text) {
      alert("Заполните все поля");
      return;
    }

    const { error } = await supabase
      .from("reviews")
      .insert([
        {
          name,
          city,
          rating,
          text,
          approved: false,
        },
      ]);

    if (error) {
      alert("Ошибка при отправке");
      return;
    }

    setSuccessOpen(true);

    setName("");
    setCity("");
    setRating(5);
    setText("");
  }

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 md:mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Отзывы клиентов
          </h2>

          <p className="text-gray-500 mt-4 md:mt-5 text-base sm:text-lg">
            Что говорят наши клиенты
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg"
            >

              <div className="text-yellow-500 text-xl md:text-2xl mb-3">
                {"⭐".repeat(item.rating)}
              </div>

              <h3 className="text-xl md:text-2xl font-bold">
                {item.name}
              </h3>

              <p className="text-orange-500 mb-4 text-sm md:text-base">
                {item.city}
              </p>

              <p className="text-gray-600 text-sm md:text-base leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

        <div className="max-w-2xl mx-auto mt-12 md:mt-20 bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Оставить отзыв
          </h2>

          <form
            onSubmit={sendReview}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-3 md:p-4 text-sm md:text-base"
            />

            <input
              type="text"
              placeholder="Ваш город"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-xl p-3 md:p-4 text-sm md:text-base"
            />

            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border rounded-xl p-3 md:p-4 text-sm md:text-base"
            >
              <option value={5}>⭐⭐⭐⭐⭐</option>
              <option value={4}>⭐⭐⭐⭐</option>
              <option value={3}>⭐⭐⭐</option>
              <option value={2}>⭐⭐</option>
              <option value={1}>⭐</option>
            </select>

            <textarea
              rows={5}
              placeholder="Напишите ваш отзыв..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border rounded-xl p-3 md:p-4 resize-none text-sm md:text-base"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition"
            >
              Отправить отзыв
            </button>

          </form>

        </div>

      </div>

      <ReviewSuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </section>
  );
};

export default Reviews;
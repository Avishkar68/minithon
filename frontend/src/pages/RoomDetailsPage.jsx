import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import roomdetailsdata from "../data/roomdetailsdata";

const RoomDetailsPage = () => {
  const { id } = useParams();
  const room = roomdetailsdata.find((r) => r.id === parseInt(id));
  if (!room)
    return (
      <h2 className="text-center mt-10 text-red-500">Room not found</h2>
    );

  // FAQ Accordion
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Image Modal
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="p-6 max-w-6xl mx-auto pt-20">
      {/* Back Button */}
      <Link
        to="/rooms"
        className="inline-block mb-10 bg-gray-900 text-white px-5 py-2 rounded-xl hover:bg-gray-700 transition"
      >
        ← Back to Rooms
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{room.name}</h1>
        <p className="text-gray-600">{room.location}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-2">
          ₹{room.price} <span className="text-lg font-normal">/ month</span>
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {room.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={room.name}
            className="w-full h-56 object-cover rounded-2xl shadow-md hover:scale-105 transition cursor-pointer"
            onClick={() => openImage(img)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/70">
          <button
            onClick={closeImage}
            className="absolute cursor-pointer top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl max-h-[80vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* Amenities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {room.amenities.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What Our Residents Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {room.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="italic text-gray-700 mb-3">"{t.comment}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{t.author}</p>
                <p className="text-yellow-500">⭐ {t.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Everything You Need to Know
        </h2>
        <div className="space-y-4">
          {room.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-4 bg-gray-50 shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center font-semibold text-left"
                onClick={() => toggleFAQ(idx)}
              >
                {faq.question}
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoomDetailsPage;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import roomdetailsdata from "../data/roomdetailsdata";
import axios from "axios"
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${
          i <= rating ? "text-amber-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

const amenityIcons = {
  WiFi: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-amber-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.045A9 9 0 0112 15m3.712 0a9 9 0 013.713-3.045M21 12a9 9 0 00-9-9m0 9a9 9 0 01-9 9m9-9v1.513A6.002 6.002 0 0012 18a6.002 6.002 0 000-4.487V12z"
      />
    </svg>
  ),
  "Air Conditioning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-amber-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  ),
  "Study Table": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-amber-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  "Attached Bathroom": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-amber-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3v-1.5A2.25 2.25 0 016 0h12A2.25 2.25 0 0120.25 1.5v1.5M3.75 3h16.5"
      />
    </svg>
  ),
  Default: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-amber-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  ),
};

const RoomDetailsPage = () => {
  const { id } = useParams();
  const room = roomdetailsdata.find((r) => r.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  if (!room) {
    return <h2 className="text-center mt-10 text-red-500">Room not found</h2>;
  }
  const mapQuery = encodeURIComponent(room.location);
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [formData, setFormData] = useState({ name: "", email: "", months: 1 });
   const [message, setMessage] = useState("");
  const handleReserve = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:4000/api/reservations/${id}`,
        formData
      );
      setMessage("✅ Reservation successful!");
      setFormData({ name: "", email: "", months: 1 });
      setIsModalOpen(false);
    } catch (err) {
      setMessage("Failed to reserve. Try again.");
    }
  };
  return (
    <div className="bg-white">
      <div className="p-10 mt-20 md:p-6 max-w-7xl mx-auto pt-24">
        <Link
          to="/rooms"
          className="  text-gray-700 hover:text-gray-900 transition font-semibold"
        ></Link>

        {/* --- Header Section --- */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-1">{room.name}</h1>
          <p className="text-gray-600">{room.location}</p>
        </div>

        {/* --- Image Gallery --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 rounded-2xl overflow-hidden h-[450px]">
          <div className="col-span-2 row-span-2">
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => openImage(room.images[0])}
            />
          </div>
          {room.images.slice(1, 5).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={room.name}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => openImage(img)}
            />
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/80"
            onClick={closeImage}
          >
            <button
              onClick={closeImage}
              className="absolute cursor-pointer top-6 right-6 text-white text-4xl font-bold hover:text-gray-300 z-10"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
          {/* --- Left Column: Details --- */}
          <div className="lg:col-span-2">
            <section className="pb-12 border-b">
              <h2 className="text-2xl font-semibold mb-6">
                What this place offers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3">
                    {amenityIcons[item] || amenityIcons.Default}
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-12 border-b">
              <h2 className="text-2xl font-semibold mb-8">
                What Our Residents Say
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {room.testimonials.slice(0, 4).map((t, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold">
                        {t.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {t.author}
                        </p>
                        <StarRating rating={t.rating} />
                      </div>
                    </div>
                    <p className="italic text-gray-700 mt-4">"{t.comment}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-12">
              <h2 className="text-2xl font-semibold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="w-full">
                {room.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border-b last:border-b-0 border-gray-200"
                  >
                    <button
                      className="w-full flex justify-between items-center text-left py-6"
                      onClick={() => toggleFAQ(idx)}
                    >
                      <span className="text-lg text-gray-800">
                        {faq.question}
                      </span>

                      {/* Icon inspired by the image */}
                      <div className="flex-shrink-0 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className={`w-4 h-4 text-gray-600 transform transition-transform duration-300 ${
                            openIndex === idx ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === idx ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="pr-10 pb-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- Right Column: Sticky Booking Card --- */}
          <div className="lg:col-span-1">
            <div className=" top-28 p-6  rounded-2xl shadow-lg bg-white">
              <p className="text-2xl font-bold mb-4">
                ₹{room.price.toLocaleString("en-IN")}{" "}
                <span className="text-lg font-normal text-gray-600">
                  / month
                </span>
              </p>
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div className="flex justify-between">
                  <span>Capacity</span>
                  <span className="font-semibold">
                    {room.capacity} Person(s)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between pt-3 border-t font-bold text-gray-900">
                  <span>Total per month</span>
                  <span>₹{(room.price + 500).toLocaleString("en-IN")}</span>
                </div>
              </div>
              <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gray-900 cursor-pointer text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition transform hover:scale-105"
            >
              Reserve Now
            </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                You won't be charged yet
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl ">
                <iframe
                  title="Room Location"
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xl bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-96">
              <h2 className="text-xl font-bold mb-4">Reserve Room</h2>
              <form onSubmit={handleReserve} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Months"
                  value={formData.months}
                  min="1"
                  onChange={(e) =>
                    setFormData({ ...formData, months: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 cursor-pointer py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg cursor-pointer bg-amber-600 text-white hover:bg-amber-700"
                  >
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success/Error Message */}
        {message && (
          <p className="mt-6 text-center font-semibold text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default RoomDetailsPage;

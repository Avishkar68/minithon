import React from 'react';
import { useParams, Link } from 'react-router-dom';
import roomdetailsdata from '../data/roomdetailsdata';

const RoomDetailsPage = () => {
  const { id } = useParams();
  const room = roomdetailsdata.find((r) => r.id === parseInt(id));

  if (!room) return <h2 className="text-center mt-10 text-red-500">Room not found</h2>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
      <p className="text-gray-600 mb-2">{room.location}</p>
      <p className="text-gray-800 font-bold mb-4">₹{room.price} / month</p>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {room.images.map((img, idx) => (
          <img key={idx} src={img} alt={room.name} className="w-full h-48 object-cover rounded-lg" />
        ))}
      </div>

      {/* Amenities */}
      <h2 className="text-xl font-semibold mb-2">Amenities</h2>
      <ul className="list-disc list-inside mb-6">
        {room.amenities.map((item, idx) => (
          <li key={idx} className="text-gray-700">{item}</li>
        ))}
      </ul>

      {/* Testimonials */}
      <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
      <div className="space-y-4 mb-6">
        {room.testimonials.map((t, idx) => (
          <div key={idx} className="border p-3 rounded-lg shadow-sm">
            <p className="font-semibold">{t.author} ⭐ {t.rating}</p>
            <p className="text-gray-600">{t.comment}</p>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <h2 className="text-xl font-semibold mb-2">FAQs</h2>
      <div className="space-y-3">
        {room.faqs.map((faq, idx) => (
          <div key={idx} className="p-3 bg-gray-100 rounded-lg">
            <p className="font-semibold">Q: {faq.question}</p>
            <p className="text-gray-700">A: {faq.answer}</p>
          </div>
        ))}
      </div>

      <Link to="/" className="mt-6 inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
        Back to Rooms
      </Link>
    </div>
  );
};

export default RoomDetailsPage;

// ComparePage.jsx
import { useState } from "react";
import roomdetailsdata from "../data/roomdetailsdata"; // adjust path to your data

export default function ComparePage() {
  const [firstHotel, setFirstHotel] = useState(null);
  const [secondHotel, setSecondHotel] = useState(null);

  const handleSelect = (e, setHotel) => {
    const id = parseInt(e.target.value);
    const hotel = roomdetailsdata.find((r) => r.id === id);
    setHotel(hotel);
  };

  return (
    <section className="px-8 py-20 bg-gray-50 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">
          Compare Hotels
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Find the Best Match for You
        </h2>
      </div>

      {/* Select dropdowns */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <select
          className="p-3 border rounded-lg shadow-sm w-64"
          onChange={(e) => handleSelect(e, setFirstHotel)}
          defaultValue=""
        >
          <option value="" disabled>
            Select First Hotel
          </option>
          {roomdetailsdata.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>

        <span className="font-bold text-lg">VS</span>

        <select
          className="p-3 border rounded-lg shadow-sm w-64"
          onChange={(e) => handleSelect(e, setSecondHotel)}
          defaultValue=""
        >
          <option value="" disabled>
            Select Second Hotel
          </option>
          {roomdetailsdata.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      {/* Comparison grid */}
      {firstHotel && secondHotel && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[firstHotel, secondHotel].map((hotel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  ₹{hotel.price.toLocaleString("en-IN")}/mo
                </p>

                <div className="mb-4">
                  <p className="font-semibold text-gray-800">Location:</p>
                  <p className="text-gray-600">{hotel.location}</p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-gray-800">Rating:</p>
                  <p className="text-yellow-500 font-bold">{hotel.rating} ★</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">Key Features:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {hotel.amenities && hotel.amenities.length > 0 ? (
                      hotel.amenities
                        .slice(0, 5)
                        .map((f, i) => <li key={i}>{f}</li>)
                    ) : (
                      <li className="text-gray-400 italic">
                        No features available
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import roomdetailsdata from '../data/roomdetailsdata'; 

const Rooms = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  const allAmenities = [...new Set(roomdetailsdata.flatMap(room => room.amenities))];
  const allLocations = [...new Set(roomdetailsdata.map(room => room.location))];

  const filteredRooms = roomdetailsdata.filter(room => {
    const inPriceRange = room.price >= priceRange[0] && room.price <= priceRange[1];

    const hasAmenities =
      selectedAmenities.length === 0 ||
      selectedAmenities.every(am => room.amenities.includes(am));

    const matchesLocation = !selectedLocation || room.location === selectedLocation;

    return inPriceRange && hasAmenities && matchesLocation;
  });

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  return (
    <div className="flex gap-2 pt-30 min-h-screen justify-center lg:justify-start">
<div className="sticky top-24 self-start w-[280px] flex-none pb-9 border border-black/5 ml-4 h-fit bg-white rounded-2xl shadow-lg p-4 overflow-y-auto">
        <h3 className="font-bold text-lg mb-2">Filters</h3>

        <div className="mb-4">
          <h4 className="font-semibold">Price Range</h4>
          <input
            type="range"
            min="0"
            max="10000"
            step="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
          <p className="text-sm text-gray-600">Up to ₹{priceRange[1]}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Amenities</h4>
          <div className="flex flex-col gap-1 max-h-40 overflow-y-auto">
            {allAmenities.map((amenity, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Location</h4>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full border rounded p-1"
          >
            <option value="">All</option>
            {allLocations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{room.name}</h2>
                <p className="text-gray-600">{room.location}</p>
                <p className="text-gray-800 font-bold mt-2">₹{room.price} / month</p>
                <p className="text-gray-500 text-sm">
                  Capacity: {room.capacity} person(s)
                </p>

                <Link
                  to={`/rooms/${room.id}`}
                  className="mt-4 block w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No rooms match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Rooms;

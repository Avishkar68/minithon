import React from 'react';
import { Link } from 'react-router-dom';
import roomdetailsdata from '../data/roomdetailsdata'; // import your JSON file

const Rooms = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {roomdetailsdata.map((room) => (
        <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src={room.images[0]} alt={room.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <p className="text-gray-600">{room.location}</p>
            <p className="text-gray-800 font-bold mt-2">₹{room.price} / month</p>
            <p className="text-gray-500 text-sm">Capacity: {room.capacity} person(s)</p>
            
            <Link 
              to={`/roomdetails/${room.id}`} 
              className="mt-4 block w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;

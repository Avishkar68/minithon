// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import roomdetailsdata from '../data/roomdetailsdata'; 

// const Rooms = () => {
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState('');

//   const allAmenities = [...new Set(roomdetailsdata.flatMap(room => room.amenities))];
//   const allLocations = [...new Set(roomdetailsdata.map(room => room.location))];

//   const filteredRooms = roomdetailsdata.filter(room => {
//     const inPriceRange = room.price >= priceRange[0] && room.price <= priceRange[1];

//     const hasAmenities =
//       selectedAmenities.length === 0 ||
//       selectedAmenities.every(am => room.amenities.includes(am));

//     const matchesLocation = !selectedLocation || room.location === selectedLocation;

//     return inPriceRange && hasAmenities && matchesLocation;
//   });

//   const toggleAmenity = (amenity) => {
//     setSelectedAmenities(prev =>
//       prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
//     );
//   };

//   return (
//     <div className="flex gap-2 pt-30 min-h-screen justify-center lg:justify-start">
// <div className="sticky top-24 self-start w-[280px] flex-none pb-9 border border-black/5 ml-4 h-fit bg-white rounded-2xl shadow-lg p-4 overflow-y-auto">
//         <h3 className="font-bold text-lg mb-2">Filters</h3>

//         <div className="mb-4">
//           <h4 className="font-semibold">Price Range</h4>
//           <input
//             type="range"
//             min="0"
//             max="10000"
//             step="500"
//             value={priceRange[1]}
//             onChange={(e) => setPriceRange([0, Number(e.target.value)])}
//             className="w-full"
//           />
//           <p className="text-sm text-gray-600">Up to ₹{priceRange[1]}</p>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold">Amenities</h4>
//           <div className="flex flex-col gap-1 max-h-40 overflow-y-auto">
//             {allAmenities.map((amenity, i) => (
//               <label key={i} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedAmenities.includes(amenity)}
//                   onChange={() => toggleAmenity(amenity)}
//                 />
//                 {amenity}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold">Location</h4>
//           <select
//             value={selectedLocation}
//             onChange={(e) => setSelectedLocation(e.target.value)}
//             className="w-full border rounded p-1"
//           >
//             <option value="">All</option>
//             {allLocations.map((loc, i) => (
//               <option key={i} value={loc}>
//                 {loc}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className=" p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room) => (
//             <div
//               key={room.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
//             >
//               <img
//                 src={room.images[0]}
//                 alt={room.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{room.name}</h2>
//                 <p className="text-gray-600">{room.location}</p>
//                 <p className="text-gray-800 font-bold mt-2">₹{room.price} / month</p>
//                 <p className="text-gray-500 text-sm">
//                   Capacity: {room.capacity} person(s)
//                 </p>

//                 <Link
//                   to={`/rooms/${room.id}`}
//                   className="mt-4 block w-full bg-[#E17100] text-white py-2 rounded-lg text-center hover:bg-[#804001] transition"
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-600">
//             No rooms match your filters.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Rooms;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import roomdetailsdata from '../data/roomdetailsdata';

const Rooms = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const clearFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedAmenities([]);
    setSelectedLocation('');
  }

  return (
    <div className="max-w-7xl mx-auto p-4 pt-24 min-h-screen">

      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex justify-between items-center bg-white p-3 rounded-lg shadow font-semibold"
        >
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className={`
          lg:w-[280px] lg:flex-shrink-0
          transition-all duration-300 ease-in-out
          ${isFilterOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} 
          overflow-hidden lg:max-h-full lg:opacity-100
        `}>
          <div className="lg:sticky lg:top-24 w-full bg-white rounded-2xl shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={clearFilters} className="text-sm text-blue-600 hover:underline">Clear</button>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Price Range</h4>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-600 mt-1 text-right">Up to ₹{priceRange[1].toLocaleString('en-IN')}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Amenities</h4>
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2">
                {allAmenities.map((amenity, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => toggleAmenity(amenity)}
                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2 focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="">All Locations</option>
                {allLocations.map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold">{room.name}</h2>
                    <p className="text-gray-600 mb-2">{room.location}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      Capacity: {room.capacity} person(s)
                    </p>
                    {/* Pushes content below it to the bottom */}
                    <div className="flex-grow"></div>
                    <p className="text-lg font-semibold text-gray-800 mb-4">
                      ₹{room.price.toLocaleString('en-IN')} / month
                    </p>
                    <Link
                      to={`/rooms/${room.id}`}
                      className="block w-full bg-amber-600 text-white py-2.5 rounded-lg text-center font-semibold hover:bg-amber-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600 mt-10">
                <h3 className="text-xl font-semibold">No Rooms Found</h3>
                <p>Try adjusting your filters to find the perfect room.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
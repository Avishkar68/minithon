import React from "react";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
     
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80')",
        }}
      >
        <p className="text-sm tracking-widest text-yellow-400 mb-2">★★★★★ BLOG</p>
        <h4 className="uppercase text-white text-sm mb-4">Modern Luxury and True Relaxation</h4>
        <h1 className="text-4xl md:text-6xl font-serif text-white leading-snug">
          Welcome to Our Luxurious <br /> Hotel & Resort
        </h1>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded shadow text-white font-semibold">
          Book an Appointment
        </button>
      </section>

      {/* About/Intro */}
      <section className="px-8 py-16 text-center max-w-4xl mx-auto">
        <p className="uppercase text-sm text-yellow-600 mb-4">About Us</p>
        <p className="text-lg leading-relaxed text-gray-700">
          Since 2016, we’ve been helping travelers find stays they love — effortlessly.
          Our passion team has been helping travelers find the perfect stay, blending
          seamless technology with a love for discovery. From cozy hideaways to grand
          escapes, we turn your travel dreams into real-world adventures.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 max-w-5xl mx-auto mb-16">
        <div className="p-6 bg-gray-100 text-center rounded">
          <h2 className="text-4xl font-bold text-yellow-600">98%</h2>
          <p className="mt-2 text-sm">Positive Feedback</p>
        </div>
        <div className="p-6 bg-gray-100 text-center rounded">
          <h2 className="text-4xl font-bold text-yellow-600">15+</h2>
          <p className="mt-2 text-sm">Years of Expertise</p>
        </div>
        <div className="p-6 bg-gray-100 text-center rounded">
          <h2 className="text-4xl font-bold text-yellow-600">25K+</h2>
          <p className="mt-2 text-sm">Happy Clients</p>
        </div>
      </section>

      {/* Room Collections */}
      <section className="px-8 py-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
          Our Exquisite Room Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Deluxe Room",
              price: "$300/Night",
              img: "https://images.unsplash.com/photo-1600607688968-6d1a18e48a63?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Standard Room",
              price: "$320/Night",
              img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Superior Room",
              price: "$300/Night",
              img: "https://images.unsplash.com/photo-1582719478148-5fd0b90479aa?auto=format&fit=crop&w=800&q=80",
            },
          ].map((room, i) => (
            <div key={i} className="relative group">
              <img src={room.img} alt={room.name} className="rounded-lg shadow-lg" />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded">
                <h4 className="font-semibold">{room.name}</h4>
                <p>{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Rooms */}
      <section className="px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
          Explore Rooms and Suites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Royal Sapphire Suite",
              price: "$350/Night",
              img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Golden Horizon Room",
              price: "$260/Night",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Pearl Orchid Suite",
              price: "$150/Night",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Eclipse Grand Suite",
              price: "$190/Night",
              img: "https://images.unsplash.com/photo-1600585154154-6a7e5d23b2e9?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Double Room Deluxe",
              price: "$170/Night",
              img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
            },
          ].map((room, i) => (
            <div key={i} className="relative group">
              <img src={room.img} alt={room.name} className="rounded-lg shadow-lg" />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded">
                <h4 className="font-semibold">{room.name}</h4>
                <p>{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154206-0a0b9ac13d7d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <button className="bg-white rounded-full p-6 shadow-lg">▶</button>
      </section>

      {/* Accommodations */}
      <section className="px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
          Our Accommodations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1600585154154-6a7e5d23b2e9?auto=format&fit=crop&w=800&q=80"
            alt="Accommodation 1"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
            alt="Accommodation 2"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center mt-10">
          <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded shadow text-white font-semibold">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
          Everything you need to know right now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="font-semibold mb-2">What makes your projects unique?</h4>
            <p className="text-sm text-gray-600 mb-6">
              Our designs focus on aesthetic completeness, professional service,
              and long-lasting value, ensuring your stay is memorable.
            </p>

            <h4 className="font-semibold mb-2">Do you offer customization options?</h4>
            <p className="text-sm text-gray-600 mb-6">
              Yes, we tailor stays to your preferences with flexible packages.
            </p>

            <h4 className="font-semibold mb-2">What amenities are included?</h4>
            <p className="text-sm text-gray-600 mb-6">
              Spa, pool, gym, fine dining, event spaces, and more.
            </p>

            <h4 className="font-semibold mb-2">How can I schedule a visit?</h4>
            <p className="text-sm text-gray-600">
              Easily via our website or by contacting our team.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600607688968-6d1a18e48a63?auto=format&fit=crop&w=800&q=80"
            alt="FAQ"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

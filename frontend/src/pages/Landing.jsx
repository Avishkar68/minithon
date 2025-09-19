// import React, { useEffect, useState,useRef } from "react";
// import gsap from "gsap"; 
// const images = [
//   'https://i.pinimg.com/1200x/82/99/b8/8299b864cb79cb04d040a00c8f2406d1.jpg'
 
// ];
// const Home = () => {
//   const [current, setCurrent] = useState(0);
//   const textRef = useRef([]);
//   textRef.current = [];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//    useEffect(() => {
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: 'power3.out',
//       }
//     );
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !textRef.current.includes(el)) {
//       textRef.current.push(el);
//     }
//   };
//   return (
//    <div className="bg-white text-gray-900">
//   {/* Hero Section */}
 


//       {/* <section
//         className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')",
//         }}
//       >
//         <p className="text-sm tracking-widest text-yellow-400 mb-2">★★★★★ BLOG</p>
//         <h4 className="uppercase text-white text-sm mb-4">Modern Luxury and True Relaxation</h4>
//         <h1 className="text-4xl md:text-6xl font-serif text-white leading-snug">
//           Welcome to Our Luxurious <br /> Hotel & Resort
//         </h1>
//         <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded shadow text-white font-semibold">
//           Book an Appointment
//         </button>
//       </section> */}

      

//       {/* About/Intro */}
//       <section className="px-8 py-16 text-center max-w-4xl mx-auto">
//         <p className="uppercase text-sm text-yellow-600 mb-4 font-comfortaa">About Us</p>
//         <p className="text-lg leading-relaxed text-gray-700">
//           Since 2016, we’ve been helping travelers find stays they love — effortlessly.
//           Our passion team has been helping travelers find the perfect stay, blending
//           seamless technology with a love for discovery. From cozy hideaways to grand
//           escapes, we turn your travel dreams into real-world adventures.
//         </p>
//       </section>

//       {/* Stats */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 max-w-5xl mx-auto mb-16">
//         <div className="p-6 bg-gray-100 text-center rounded">
//           <h2 className="text-4xl font-bold text-yellow-600">98%</h2>
//           <p className="mt-2 text-sm">Positive Feedback</p>
//         </div>
//         <div className="p-6 bg-gray-100 text-center rounded">
//           <h2 className="text-4xl font-bold text-yellow-600">15+</h2>
//           <p className="mt-2 text-sm">Years of Expertise</p>
//         </div>
//         <div className="p-6 bg-gray-100 text-center rounded">
//           <h2 className="text-4xl font-bold text-yellow-600">25K+</h2>
//           <p className="mt-2 text-sm">Happy Clients</p>
//         </div>
//       </section>

//       {/* Room Collections */}
//       <section className="px-8 py-12 bg-gray-50">
//         <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
//           Our Exquisite Room Collections
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               name: "Deluxe Room",
//               price: "$300/Night",
//               img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Standard Room",
//               price: "$320/Night",
//               img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Superior Room",
//               price: "$300/Night",
//               img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
//             },
//           ].map((room, i) => (
//             <div key={i} className="relative group">
//               <img src={room.img} alt={room.name} className="rounded-lg shadow-lg" />
//               <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded">
//                 <h4 className="font-semibold">{room.name}</h4>
//                 <p>{room.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Explore Rooms */}
//       <section className="px-8 py-16">
//         <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
//           Explore Rooms and Suites
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               name: "Royal Sapphire Suite",
//               price: "$350/Night",
//               img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Golden Horizon Room",
//               price: "$260/Night",
//               img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Pearl Orchid Suite",
//               price: "$150/Night",
//               img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Eclipse Grand Suite",
//               price: "$190/Night",
//               img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Double Room Deluxe",
//               price: "$170/Night",
//               img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               name: "Double Room Deluxe",
//               price: "$170/Night",
//               img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
//             },
//           ].map((room, i) => (
//             <div key={i} className="relative group">
//               <img src={room.img} alt={room.name} className="rounded-lg shadow-lg" />
//               <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded">
//                 <h4 className="font-semibold">{room.name}</h4>
//                 <p>{room.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Video Section */}
//       <section
//         className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80')",
//         }}
//       >
//         <button className="bg-white rounded-full p-6 shadow-lg">▶</button>
//       </section>

//       {/* Accommodations */}
//       <section className="px-8 py-16">
//         <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
//           Our Accommodations
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           <img
//             src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
//             alt="Accommodation 1"
//             className="rounded-lg shadow-lg"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
//             alt="Accommodation 2"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="text-center mt-10">
//           <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded shadow text-white font-semibold">
//             Book an Appointment
//           </button>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="px-8 py-16 bg-gray-50">
//         <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
//           Everything you need to know right now
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           <div>
//             <h4 className="font-semibold mb-2">What makes your projects unique?</h4>
//             <p className="text-sm text-gray-600 mb-6">
//               Our designs focus on aesthetic completeness, professional service,
//               and long-lasting value, ensuring your stay is memorable.
//             </p>

//             <h4 className="font-semibold mb-2">Do you offer customization options?</h4>
//             <p className="text-sm text-gray-600 mb-6">
//               Yes, we tailor stays to your preferences with flexible packages.
//             </p>

//             <h4 className="font-semibold mb-2">What amenities are included?</h4>
//             <p className="text-sm text-gray-600 mb-6">
//               Spa, pool, gym, fine dining, event spaces, and more.
//             </p>

//             <h4 className="font-semibold mb-2">How can I schedule a visit?</h4>
//             <p className="text-sm text-gray-600">
//               Easily via our website or by contacting our team.
//             </p>
//           </div>
//           <img
//             src="https://images.unsplash.com/photo-1600607688968-6d1a18e48a63?auto=format&fit=crop&w=800&q=80"
//             alt="FAQ"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;






// import React, { useEffect, useState, useRef } from "react";
// import gsap from "gsap";

// // --- HERO SECTION IMAGES (UNCHANGED) ---
// const heroImages = [
//           "https://a0.muscache.com/im/pictures/hosting/Hosting-1270282664265188207/original/bb0c2b29-14e5-4d42-9680-1a066aeeb1cc.jpeg?im_w=720",

// ];

// // --- NEW DATA FOR DORM-SPECIFIC SECTIONS ---
// const roomTypes = [
//   {
//     name: "The Single Suite",
//     price: "Starting at $800/mo",
//     img: "https://images.unsplash.com/photo-1594472398293-9d10f69b2a75?q=80&w=2940&auto=format&fit=crop",
//   },
//   {
//     name: "The Double Den",
//     price: "Starting at $650/mo",
//     img: "https://images.unsplash.com/photo-1608154562592-e42a83979448?q=80&w=2825&auto=format&fit=crop",
//   },
//   {
//     name: "The Shared Quad",
//     price: "Starting at $500/mo",
//     img: "https://images.unsplash.com/photo-1574873215043-4411946153bc?q=80&w=2890&auto=format&fit=crop",
//   },
// ];

// const testimonials = [
//     {
//         quote: "GradNest has been a game-changer for my university life. The community is amazing, and I’ve made friends for life here. Plus, the high-speed Wi-Fi is a lifesaver during exam season!",
//         name: "Jessica Miller",
//         major: "Computer Science",
//         img: "https://images.unsplash.com/photo-1529232382328-a2b86d525414?q=80&w=2940&auto=format&fit=crop"
//     },
//     {
//         quote: "I was worried about moving to a new city, but the staff and residents at GradNest made me feel at home right away. The facilities are always clean, and the study lounges are perfect for group projects.",
//         name: "David Chen",
//         major: "Business Administration",
//         img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2942&auto=format&fit=crop"
//     }
// ];


// const Home = () => {
//   const [current, setCurrent] = useState(0);
//   const textRef = useRef([]);
//   textRef.current = [];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroImages.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: 'power3.out',
//       }
//     );
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !textRef.current.includes(el)) {
//       textRef.current.push(el);
//     }
//   };

//   return (
//     <div className="bg-white text-gray-800 font-sans">
      
//       {/* ================================================================== */}
//       {/* HERO SECTION - UNCHANGED AS REQUESTED                               */}
//       {/* ================================================================== */}
//       <div className="relative h-screen overflow-hidden font-basic">
//         {heroImages.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//               index === current ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               backgroundImage: `url(${img})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div className="absolute inset-0 bg-black opacity-10"></div>
//           </div>
//         ))}
//         <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
//           <p className="text-sm tracking-widest mb-4" ref={addToRefs}>
//             COMFY LIVING FOR STUDENTS
//           </p>
//           <h1 className="text-6xl md:text-7xl font-comfortaa mb-6" ref={addToRefs}>
//             GradNest Dorms
//           </h1>
//           <p className="text-lg mb-8 max-w-2xl" ref={addToRefs}>
//             Affordable, Modern, & Community-Focused Housing Designed For Your Success
//           </p>
//           <button
//             className="bg-black font-basic text-sm text-white px-10 py-5 cursor-pointer transition hover:bg-gray-800"
//             ref={addToRefs}
//           >
//             EXPLORE ROOMS →
//           </button>
//         </div>
//       </div>

//       {/* ================================================================== */}
//       {/* ABOUT SECTION - REVAMPED FOR A HOMELY FEEL                        */}
//       {/* ================================================================== */}
//       <section className="px-8 py-20 md:py-28">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="text-left">
//                 <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">About GradNest</p>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Home Away From Home</h2>
//                 <p className="text-lg leading-relaxed text-gray-700 mb-4">
//                     At GradNest, we believe student housing should be more than just a place to sleep. It should be a place where you can thrive, connect, and create lasting memories.
//                 </p>
//                 <p className="text-lg leading-relaxed text-gray-700">
//                     Our modern, fully-furnished dorms are designed with you in mind, providing a safe, comfortable, and inspiring environment to support your academic journey.
//                 </p>
//             </div>
//             <div>
//                 <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop" alt="Students studying together in a common area" className="rounded-lg shadow-xl w-full h-full object-cover"/>
//             </div>
//         </div>
//       </section>

//       {/* ================================================================== */}
//       {/* STATS SECTION - REBRANDED & RESTYLED                             */}
//       {/* ================================================================== */}
//       <section className="px-8 pb-20 max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-8 bg-amber-50 text-center rounded-lg">
//             <h2 className="text-5xl font-bold text-amber-600">500+</h2>
//             <p className="mt-2 text-gray-700">Happy Students</p>
//           </div>
//           <div className="p-8 bg-amber-50 text-center rounded-lg">
//             <h2 className="text-5xl font-bold text-amber-600">10+</h2>
//             <p className="mt-2 text-gray-700">Community Events Monthly</p>
//           </div>
//           <div className="p-8 bg-amber-50 text-center rounded-lg">
//             <h2 className="text-5xl font-bold text-amber-600">24/7</h2>
//             <p className="mt-2 text-gray-700">On-Site Security</p>
//           </div>
//         </div>
//       </section>

//       {/* ================================================================== */}
//       {/* ROOM TYPES SECTION - NEW IMAGES & CONTENT                        */}
//       {/* ================================================================== */}
//       <section className="px-8 py-20 bg-gray-50">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//             <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">Find Your Space</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Room Types</h2>
//         </div>
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {roomTypes.map((room, i) => (
//             <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
//               <img src={room.img} alt={room.name} className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 p-6 text-white">
//                 <h4 className="text-xl font-bold">{room.name}</h4>
//                 <p className="text-gray-200">{room.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================================================================== */}
//       {/* NEW AMENITIES SECTION - REPLACES "EXPLORE ROOMS"                 */}
//       {/* ================================================================== */}
//      {/* ================================================================== */}
// {/* NEW AMENITIES SECTION - WITH PROFESSIONAL SVG ICONS             */}
// {/* ================================================================== */}
// <section className="px-8 py-20 md:py-28">
//     <div className="text-center max-w-3xl mx-auto mb-16">
//         <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">Everything Included</p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
//     </div>
//     <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
//         {[
//             { 
//                 title: 'High-Speed Wi-Fi', 
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.045A9 9 0 0112 15m3.712 0a9 9 0 013.713-3.045M21 12a9 9 0 00-9-9m0 9a9 9 0 01-9 9m9-9v1.513A6.002 6.002 0 0012 18a6.002 6.002 0 000-4.487V12z" />
//                     </svg>
//                 )
//             },
//             { 
//                 title: 'Study Lounges', 
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
//                     </svg>
//                 )
//             },
//             { 
//                 title: 'Community Kitchens', 
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
//                     </svg>
//                 )
//             },
//             { 
//                 title: 'On-Site Laundry', 
//                 icon: (
//                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
//                     </svg>
//                 )
//             },
//             { 
//                 title: 'Fitness Center', 
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
//                     </svg>
//                 )
//             },
//             { 
//                 title: '24/7 Security', 
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h3.75" />
//                     </svg>
//                 )
//             },
//         ].map(item => (
//             <div key={item.title} className="p-6 bg-gray-50 rounded-lg text-center transition hover:bg-white hover:shadow-xl">
//                 <div className="w-16 h-16 mx-auto mb-5 text-amber-600">
//                     {item.icon}
//                 </div>
//                 <h4 className="font-semibold text-gray-800 text-lg">{item.title}</h4>
//             </div>
//         ))}
//     </div>
// </section>
      
//       {/* ================================================================== */}
//       {/* NEW TESTIMONIALS SECTION                                          */}
//       {/* ================================================================== */}
//       <section className="px-8 py-20 bg-amber-50">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//             <p className="uppercase text-sm font-semibold text-amber-700 mb-3 font-comfortaa">Community Voices</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Students Say</h2>
//         </div>
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, i) => (
//                 <div key={i} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
//                     <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-200"/>
//                     <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
//                     <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-amber-600">{testimonial.major}</p>
//                 </div>
//             ))}
//         </div>
//       </section>

//       {/* ================================================================== */}
//       {/* FAQ SECTION - REVAMPED WITH RELEVANT QUESTIONS                   */}
//       {/* ================================================================== */}
//       <section className="px-8 py-20 md:py-28">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//             <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">Have Questions?</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We Have Answers</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
//           <div className="space-y-8">
//             <div>
//               <h4 className="font-bold text-lg mb-2">What is the roommate matching process like?</h4>
//               <p className="text-gray-700">
//                 We use a detailed questionnaire to match you with compatible roommates based on lifestyle, study habits, and interests to ensure a great living experience.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-bold text-lg mb-2">Are utilities included in the rent?</h4>
//               <p className="text-gray-700">
//                 Yes! Your monthly rent covers electricity, water, heating, and high-speed internet. No hidden fees, just simple, all-inclusive living.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-bold text-lg mb-2">What are the community rules and guest policies?</h4>
//               <p className="text-gray-700">
//                 We have standard quiet hours and guest policies to ensure a safe and respectful environment for everyone. You can find the full details in our resident handbook.
//               </p>
//             </div>
//           </div>
//           <div className="mt-8 md:mt-0">
//             <img
//               src="https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=2940&auto=format&fit=crop"
//               alt="Friendly dorm staff member answering questions"
//               className="rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
// Step 1: Import your room data
import roomdetailsdata from "../data/roomdetailsdata.js";

// --- Select specific images from your data for different sections ---
const heroImages = [
  roomdetailsdata[0].images[0], // Single Room - Deluxe
  roomdetailsdata[1].images[0], // Double Sharing Room - Standard
];

const aboutImage = roomdetailsdata[2].images[1]; // A cozy common area from Triple Sharing Room
const faqImage = roomdetailsdata[7].images[2]; // A clean, professional-looking room

// NOTE: The data file doesn't include student portraits for testimonials.
// So, we'll keep using placeholder images for that section for now.
const testimonials = [
    {
        quote: "GradNest has been a game-changer for my university life. The community is amazing, and I’ve made friends for life here. Plus, the high-speed Wi-Fi is a lifesaver during exam season!",
        name: "Jessica Miller",
        major: "Computer Science",
        img: "https://i.pinimg.com/736x/19/4f/e6/194fe66a3fe084acc193f3d5b18769e1.jpg"
    },
    {
        quote: "I was worried about moving to a new city, but the staff and residents at GradNest made me feel at home right away. The facilities are always clean, and the study lounges are perfect for group projects.",
        name: "David Chen",
        major: "Business Administration",
        img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2942&auto=format&fit=crop"
    }
];


const Home = () => {
  const [current, setCurrent] = useState(0);
  const textRef = useRef([]);
  textRef.current = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* ================================================================== */}
      {/* HERO SECTION - Now using images from your data file                */}
      {/* ================================================================== */}
      <div className="relative h-screen overflow-hidden font-basic">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <p className="text-sm tracking-widest mb-4" ref={addToRefs}>
            COMFY LIVING FOR STUDENTS
          </p>
          <h1 className="text-6xl md:text-7xl font-comfortaa mb-6" ref={addToRefs}>
            GradNest Dorms
          </h1>
          <p className="text-lg mb-8 max-w-2xl" ref={addToRefs}>
            Affordable, Modern, & Community-Focused Housing Designed For Your Success
          </p>
          <button
            className="bg-black font-basic text-sm text-white px-10 py-5 cursor-pointer transition hover:bg-gray-800"
            ref={addToRefs}
          >
            EXPLORE ROOMS →
          </button>
        </div>
      </div>

      {/* ================================================================== */}
      {/* ABOUT SECTION - Image updated from your data                      */}
      {/* ================================================================== */}
      <section className="px-8 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">About GradNest</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Home Away From Home</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    At GradNest, we believe student housing should be more than just a place to sleep. It should be a place where you can thrive, connect, and create lasting memories.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Our modern, fully-furnished dorms are designed with you in mind, providing a safe, comfortable, and inspiring environment to support your academic journey.
                </p>
            </div>
            <div>
                <img src={aboutImage} alt="Students studying together in a common area" className="rounded-lg shadow-xl w-full h-full object-cover"/>
            </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STATS SECTION                                                    */}
      {/* ================================================================== */}
      <section className="px-8 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-amber-50 text-center rounded-lg">
            <h2 className="text-5xl font-bold text-amber-600">500+</h2>
            <p className="mt-2 text-gray-700">Happy Students</p>
          </div>
          <div className="p-8 bg-amber-50 text-center rounded-lg">
            <h2 className="text-5xl font-bold text-amber-600">10+</h2>
            <p className="mt-2 text-gray-700">Community Events Monthly</p>
          </div>
          <div className="p-8 bg-amber-50 text-center rounded-lg">
            <h2 className="text-5xl font-bold text-amber-600">24/7</h2>
            <p className="mt-2 text-gray-700">On-Site Security</p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ROOM TYPES SECTION - Now dynamically showing first 3 rooms from data */}
      {/* ================================================================== */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">Find Your Space</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Room Types</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamically map over the first 3 rooms from your data */}
          {roomdetailsdata.slice(0, 3).map((room) => (
            <div key={room.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={room.images[0]} alt={room.name} className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-xl font-bold">{room.name}</h4>
                <p className="text-gray-200">₹{room.price.toLocaleString('en-IN')}/mo</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* AMENITIES SECTION                                               */}
      {/* ================================================================== */}
  {/* ================================================================== */}
{/* NEW AMENITIES SECTION - WITH PROFESSIONAL SVG ICONS             */}
{/* ================================================================== */}
<section className="px-8 py-20 md:py-28">
    <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">Everything Included</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {[
            { 
                title: 'High-Speed Wi-Fi', 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.045A9 9 0 0112 15m3.712 0a9 9 0 013.713-3.045M21 12a9 9 0 00-9-9m0 9a9 9 0 01-9 9m9-9v1.513A6.002 6.002 0 0012 18a6.002 6.002 0 000-4.487V12z" />
                    </svg>
                )
            },
            { 
                title: 'Study Lounges', 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                )
            },
            { 
                title: 'Community Kitchens', 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                )
            },
            { 
                title: 'On-Site Laundry', 
                icon: (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                )
            },
            { 
                title: 'Fitness Center', 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                )
            },
            { 
                title: '24/7 Security', 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h3.75" />
                    </svg>
                )
            },
        ].map(item => (
            <div key={item.title} className="p-6 bg-gray-50 rounded-lg text-center transition hover:bg-white hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-5 text-amber-600">
                    {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">{item.title}</h4>
            </div>
        ))}
    </div>
</section>
      {/* ================================================================== */}
      {/* TESTIMONIALS SECTION - Using placeholder portraits               */}
      {/* ================================================================== */}
      <section className="px-8 py-20 bg-amber-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="uppercase text-sm font-semibold text-amber-700 mb-3 font-comfortaa">Community Voices</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Students Say</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                    <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-200"/>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-amber-600">{testimonial.major}</p>
                </div>
            ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ SECTION - Image updated from your data                        */}
      {/* ================================================================== */}
      <section className="px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase text-sm font-semibold text-amber-600 mb-3 font-comfortaa">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We Have Answers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-2">What is the roommate matching process like?</h4>
              <p className="text-gray-700">
                We use a detailed questionnaire to match you with compatible roommates based on lifestyle, study habits, and interests to ensure a great living experience.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Are utilities included in the rent?</h4>
              <p className="text-gray-700">
                Yes! Your monthly rent covers electricity, water, heating, and high-speed internet. No hidden fees, just simple, all-inclusive living.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">What are the community rules and guest policies?</h4>
              <p className="text-gray-700">
                We have standard quiet hours and guest policies to ensure a safe and respectful environment for everyone. You can find the full details in our resident handbook.
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src={faqImage}
              alt="A well-lit dorm room"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
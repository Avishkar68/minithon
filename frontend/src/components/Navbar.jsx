// import React, { useState, useEffect } from 'react';
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const navLinks = ['Home', 'About', 'Features', 'Testimonials', 'FAQs' ,'contact'];
//   const [activeLink, setActiveLink] = useState('Home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + window.innerHeight / 2;
//       navLinks.forEach((link) => {
//         const section = document.getElementById(link.toLowerCase());
//         if (section && scrollPos >= section.offsetTop) {
//           setActiveLink(link);
//         }
//       });
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (link) => {
//     const section = document.getElementById(link.toLowerCase());
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveLink(link);
//     }
//   };

//   return (
//     <nav
//       className="
//         fixed top-6 left-0 right-0 z-50
//         flex justify-between items-center 
//         px-6 md:px-10
//       "
//     >
//       <div className="flex items-center gap-2.5 text-2xl font-semibold">
//         <a href="/">
//         <img className="w-[120px]" src={logo} alt="logo" />
//         </a>
//       </div>

//       <div
//         className="
//           p-1.5 rounded-full 
//           bg-white/10 border border-black/5
//           backdrop-blur-md
//         "
//       >
//         <ul className="flex items-center gap-2">
//           {navLinks.map((link) => (
//             <li key={link}>
//               <button
//                 onClick={() => scrollToSection(link)}
//                 className={`
//                   block rounded-full px-5 py-2.5 text-sm
//                   transition-all duration-300 cursor-pointer
//                   ${
//                     activeLink === link
//                       ? "bg-white text-black font-medium shadow-md"
//                       : "text-black/80 hover:text-black"
//                   }
//                 `}
//               >
//                 {link}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => scrollToSection("FAQs")}
//           className="
//             px-7 py-3 rounded-full text-sm font-medium 
//             bg-white text-black shadow-lg
//             transition-transform duration-200 hover:scale-105 cursor-pointer
//           "
//         >
//           Contact
//         </button>
//         <button
//           className="
//             px-7 py-3 rounded-full text-sm font-medium 
//             bg-zinc-900 text-white
//             transition-transform duration-200 hover:scale-105 cursor-pointer
//           "
//         >
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navLinks = ['Home', 'About', 'Features', 'Testimonials', 'FAQs', 'Contact'];
    const [activeLink, setActiveLink] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 150; 
            let currentSection = 'Home';
            navLinks.forEach((link) => {
                const section = document.getElementById(link.toLowerCase());
                if (section && scrollPos >= section.offsetTop) {
                    currentSection = link;
                }
            });
            setActiveLink(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const scrollToSection = (link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveLink(link);
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10">
            <a href="/" className="flex-shrink-0">
                <img className="w-[120px]" src={logo} alt="logo" />
            </a>

            <div className="hidden md:flex p-1.5 rounded-full bg-white/10 border border-black/5 backdrop-blur-md">
                <ul className="flex items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <button
                                onClick={() => scrollToSection(link)}
                                className={`block rounded-full px-5 py-2.5 text-sm transition-all duration-300 cursor-pointer ${
                                    activeLink === link
                                        ? "bg-white text-black font-medium shadow-md"
                                        : "text-black/80 hover:text-black"
                                }`}
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <button
                    onClick={() => scrollToSection("Contact")}
                    className="px-7 py-3 rounded-full text-sm font-medium bg-white text-black shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                    Contact
                </button>
                <button onClick={() => navigate("/admin")} className="px-7 py-3 rounded-full text-sm font-medium bg-zinc-900 text-white transition-transform duration-200 hover:scale-105 cursor-pointer">
                    Admin
                </button>
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="flex flex-col items-center justify-center h-full p-6">
                    {/* Close Button */}
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 p-2">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                         </svg>
                    </button>
                    
                    {/* Mobile Navigation Links */}
                    <ul className="flex flex-col items-center gap-6 text-center">
                         {navLinks.map((link) => (
                            <li key={link}>
                                <button onClick={() => scrollToSection(link)} className="text-2xl font-medium text-black/80 hover:text-black">
                                    {link}
                                </button>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Mobile Action Buttons */}
                    <div className="mt-12 flex flex-col items-center gap-4 w-full max-w-xs">
                         <button
                             onClick={() => scrollToSection("Contact")}
                             className="w-full px-7 py-4 rounded-full text-md font-medium bg-gray-100 text-black shadow-lg"
                         >
                             Contact
                         </button>
                         <button className="w-full px-7 py-4 rounded-full text-md font-medium bg-zinc-900 text-white">
                             Login
                         </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
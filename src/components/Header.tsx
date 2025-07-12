import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons, install below if needed
import { Typewriter } from "react-simple-typewriter";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Committee", href: "#committee" },
    { name: "Elders", href: "#Elders" },
    { name: "History", href: "#history" },
    { name: "Announcements", href: "#announcements" },
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

 return (
  <header className="sticky top-0 z-50 bg-yellow-100/90 backdrop-blur-md shadow-lg">
    <div className="flex justify-between items-center px-4 py-3 md:py-4 max-w-7xl mx-auto">
      
      {/* Animated Title */}
      <h1 className="text-xl md:text-2xl font-[Playfair_Display] font-bold text-red-600 tracking-wide">
        <Typewriter
          words={['🙏 Maa Saraswati', '📿 Vidya Pradayinee', '🎶 Goddess of Art',]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>

      {/* Hamburger Toggle */}
      <button
        className="md:hidden text-red-600 hover:text-yellow-600 transition"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-800 hover:text-yellow-600 font-[Poppins] font-medium transition duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>

    {/* Mobile Dropdown Menu */}
    {open && (
      <div className="md:hidden bg-yellow-50 border-t border-yellow-200 shadow-inner">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-gray-800 font-[Poppins] hover:bg-yellow-200 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    )}
  </header>
);

};

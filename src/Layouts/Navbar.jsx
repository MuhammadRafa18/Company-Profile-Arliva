import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"}
      `}
    >
      {/* CONTAINER */}
      <div className="h-16 px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
        {/* LOGO */}
        <span className="text-2xl font-semibold text-heading whitespace-nowrap">
          Arliva
        </span>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#produk" className="hover:text-black transition">
              Product
            </a>
          </li>
          <li>
            <a href="#visi-misi" className="hover:text-black transition">
              Visi & Misi
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 rounded-xl bg-white shadow p-4 text-sm">
            <li>
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#produk"
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#visi-misi"
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                Visi & Misi
              </a>
            </li>
            <li>
              <a
                href="#footer"
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

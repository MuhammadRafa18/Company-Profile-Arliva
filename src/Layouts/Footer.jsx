import React from "react";
import link1 from "../assets/Link1.png";
import link2 from "../assets/Link2.png";
import link3 from "../assets/Link3.png";
import link4 from "../assets/Link4.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer" className="w-full  px-4 sm:px-8 lg:px-16 xl:px-24 py-6">
      <div className="md:flex  justify-between items-start space-y-6  ">
        {/* section Company */}
        <section className="space-y-3">
          <h3 className="text-base">Company</h3>
          <ul className="space-y-4 text-sm text-gray-text">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#visi-misi">Visi & Misi</a>
            </li>
            <li>
              <a href="#produk">Product</a>
            </li>
          </ul>
        </section>

        {/* section Help */}
        <section className="space-y-3">
          <h3>Help</h3>
          <ul className="space-y-4 text-sm text-gray-text">
            <li>
              <a href="#result">Result</a>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Terms & Conditions</Link>
            </li>
          </ul>
        </section>

        {/* section newsletter */}
        <section className="space-y-3">
          <h3 className="text-base">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-text">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                />
              </svg>
              <Link to="/AboutCompany">Arliva@gmail.com</Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.215-5.669c-1.268-.73-3.009-2.17-4.343-.767"
                />
              </svg>
              <Link to="/ContactUs">+62 890-887-659</Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                  <path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z" />
                </g>
              </svg>
              <Link to="/Category_Produk">Indonesia</Link>
            </li>
          </ul>
        </section>
      </div>

      {/* Section sosmed */}
      <section className="w-full md:w-1/2 mt-6 flex items-center justify-between ">
        <h3 className="text-sm">@ 2025 Arliva</h3>
        <ul className="flex space-x-3">
          <li>
            {" "}
            <img src={link1} alt="" className="w-8" />
          </li>
          <li>
            {" "}
            <img src={link2} at="" className="w-8" />
          </li>
          <li>
            {" "}
            <img src={link3} alt="" className="w-8" />
          </li>
          <li>
            {" "}
            <img src={link4} alt="" className="w-8" />
          </li>
        </ul>
      </section>
    </footer>
  );
};

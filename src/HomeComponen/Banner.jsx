import React, { useEffect, useState } from "react";
import siteData from "../SideData";

export const Banner = () => {
  const [banners, setbanners] = useState(siteData.banner);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval); // PENTING
  }, []);
  return (
    <>
      {/* banner */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 mt-4">
        <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9] sm:aspect-[21/9]">
          {banners.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt="Banner Produk"
              className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-700 ease-in-out
          ${index === current ? "opacity-100" : "opacity-0"}
        `}
            />
          ))}
        </div>
      </div>
    </>
  );
};

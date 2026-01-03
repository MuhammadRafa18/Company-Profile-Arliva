import React from "react";
import siteData from "../SideData";

export const Type = () => {
  return (
    <>
      {/* Product Skintype */}
      <section className="w-full flex flex-col items-center  px-4 sm:px-8 lg:px-16 xl:px-24">
        {/* TITLE */}
        <h2 className="text-lg sm:text-xl font-semibold text-center">
          Shopping skincare by skin type
        </h2>

        <p className="text-sm sm:text-base mt-2 mb-6 text-center max-w-xl">
          Need help choosing? Learn what skin type you have by following our
          guide.
        </p>

        {/* GRID */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData?.ProdukSkintype?.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl group"
            >
              {/* IMAGE */}
              <img
                src={item.gambar}
                alt={item.text}
                className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* BUTTON */}
              <button
                onClick={() => navigate(`Category_Produk?type=${item.text}`)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 
                     bg-white/90 backdrop-blur
                     px-4 py-2 text-sm font-medium
                     rounded-full shadow-md
                     hover:bg-black hover:text-white
                     transition"
              >
                {item.text}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

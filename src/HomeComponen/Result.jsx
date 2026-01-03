import React from "react";
import siteData from "../SideData";

export const Result = () => {
  return (
    <>
      {/* Result Produk */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 mb-24 flex flex-col items-center space-y-6">
        {/* TITLE */}
        <h3 className="text-lg sm:text-xl font-semibold text-center">
          Arliva product results
        </h3>

        {/* GRID */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData?.ResultProduk?.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl">
              <img
                src={item.gambar}
                alt="Product result"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

import React from "react";
import siteData from "../SideData";

export const Visi_Misi = () => {
  return (
    <>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* TITLE */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold">The power of skincare</h2>
            <p className="text-sm text-gray-500">Simple care. Real results.</p>
          </div>

          {/* CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.PowerSkincare.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-8 space-y-6
                     shadow-sm hover:shadow-lg transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100">
                  <img src={item.icon} alt="" className="w-6 h-6" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

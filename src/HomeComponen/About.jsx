import React from "react";
import siteData from "../SideData";
import sectionAbout from "../assets/sectionAbout.png";

export const About = () => {
  return (
    <>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — TEXT */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold leading-tight">
              Why Arliva Was Born
            </h3>

            <div className="space-y-4 max-w-md">
              {siteData.paragrafSection.map((item) => (
                <p
                  key={item.id}
                  className="text-sm leading-relaxed text-gray-600"
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-neutral-100 rounded-3xl -z-10" />
            <img
              src={sectionAbout}
              alt="About Arliva"
              className="w-full h-[420px] rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

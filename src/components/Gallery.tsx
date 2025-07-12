import { useState } from "react";
import { galleryData } from "../data/gallery";

type GalleryProps = {
  onMore: (year: string) => void;
};

export const Gallery = ({ onMore }: GalleryProps) => {
  const years = Object.keys(galleryData).sort().reverse();
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);

  return (
    <section className="my-10 px-4 py-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-xl shadow-md">
      <h2 className="text-3xl font-[Playfair_Display] text-red-600 text-center mb-6">
        🖼️ Gallery
      </h2>

      {/* Year Tabs */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {years.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-lg border text-sm font-[Poppins] transition shadow-sm ${
              selectedYear === year
                ? "bg-yellow-400 text-white shadow-md"
                : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-100"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryData[selectedYear]?.map((img, index) => (
          <div
            key={index}
            className="fade-in-up rounded overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.caption || `Gallery image ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            {img.caption && (
              <p className="text-center text-sm py-2 font-[Poppins] text-gray-700">
                {img.caption}
              </p>
            )}
          </div>
        ))}
        <div className="col-span-2 md:col-span-3 text-center mt-4">
          <button
            onClick={() => onMore(selectedYear)}
            className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 font-[Poppins]"
          >
            📸 View More
          </button>
        </div>
      </div>
    </section>
  );
};

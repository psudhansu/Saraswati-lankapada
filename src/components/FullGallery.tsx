import { galleryData } from "../data/galleryData";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export const FullGallery = ({
  year,
  onClose,
}: {
  year: string;
  onClose: () => void;
}) => {
  const images = galleryData[year as keyof typeof galleryData] || [];
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-8 flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute mt-12 top-6 left-4 flex items-center gap-2 px-4 py-2 bg-white text-yellow-700 border border-yellow-400 rounded-full shadow-md hover:bg-yellow-100 transition-all duration-300 text-sm font-semibold"
        aria-label="Back to Home"
      >
        <ArrowLeft size={18} />
        Back to Home
      </button>

      <h1 className="text-2xl font-bold text-red-600 mb-6">
        📸 Gallery – {year}
      </h1>

      <div className="relative w-full max-w-xl">
        <img
          src={images[index].src}
          alt={images[index].caption}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <button
          onClick={() =>
            setIndex((i) => (i - 1 + images.length) % images.length)
          }
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-yellow-100"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-yellow-100"
        >
          <ArrowRight />
        </button>
      </div>

      {/* <p className="mt-4 text-sm text-gray-700 font-[Poppins] text-center">
        {images[index].caption}
      </p> */}
    </div>
  );
};

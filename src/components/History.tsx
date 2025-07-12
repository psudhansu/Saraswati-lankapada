import { timelineEvents } from "../data/history";

export const History = () => {
  return (
  <section className="my-10 px-4 py-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-xl shadow-md max-w-3xl mx-auto">
    <h2 className="text-3xl font-[Playfair_Display] text-red-600 text-center mb-6">
      📜 Our Puja Journey
    </h2>

    <div className="border-l-4 border-yellow-500 pl-4 relative">
      {timelineEvents.map((event, index) => (
        <div key={index} className="mb-8 pl-4 relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-2.5 top-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white group-hover:scale-125 transition-transform duration-300"></div>
          
          {/* Content */}
          <h3 className="text-lg font-semibold font-[Poppins] text-gray-800">
            {event.year} – {event.title}
          </h3>
          <p className="text-sm text-gray-700 mt-1 font-[Poppins] leading-relaxed">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

};

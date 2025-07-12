import { supportMembers } from "../data/supportMembers";

export const Elders = () => {
  return (
    <section className="my-10 px-4 py-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-xl shadow-md max-w-6xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-[Playfair_Display] text-red-600 text-center mb-6">
        🙏 Respected Elders & Support Members
      </h2>

      {/* Seamless auto-scrolling container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 w-max animate-marquee">
          {[...supportMembers, ...supportMembers].map((person, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 text-center transition hover:scale-105 duration-300"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-yellow-400 shadow"
              />
              <h3 className="mt-3 font-semibold text-lg font-[Poppins] text-gray-800">
                {person.name}
              </h3>
              {/* <p className="text-sm text-gray-600 font-[Poppins]">{person.role}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

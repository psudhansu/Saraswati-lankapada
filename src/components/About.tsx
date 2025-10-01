
export const About = () => {
 return (
  <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 p-6 my-6 rounded-xl shadow-md max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-[Playfair_Display] text-red-600 font-bold mb-4 text-center md:text-left">
          🎨 About Saraswati Puja
        </h2>
        <p className="text-gray-800 font-[Poppins] leading-relaxed">
          <strong>Saraswati Puja</strong> in our village is a grand annual celebration where students,
          all members, and the whole community come together to worship Goddess Saraswati—
          the deity of wisdom, music, and art. Started in <strong>2020</strong>, it has grown into a
          cultural festival with beautiful decorations, and traditional rituals
          that unite everyone with joy and devotion.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
         src={`${import.meta.env.BASE_URL}assets/saraswati.png`}
          alt="Saraswati Puja Decoration"
          className="w-full h-80 max-w-md rounded-lg shadow-xl mx-auto animate-fadeIn"
        />
      </div>
    </div>
  </section>
);

};

import { announcements } from "../data/announcements";

export const Announcements = () => {
  return (
    <section className="my-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">📰 Announcements</h2>

      <div className="space-y-4">
        {announcements.map((a, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-yellow-500 shadow-md p-4 rounded"
          >
            <p className="text-xs text-gray-500 mb-1">{a.date}</p>
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{a.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

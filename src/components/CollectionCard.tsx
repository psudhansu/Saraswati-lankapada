export default function CollectionCard() {
  return (
    <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 text-center mb-2">
      {/* <h3 className="text-3xl  font-[Playfair_Display] text-red-600 mb-3">
        Puja Collection Details
      </h3> */}
      <p className="text-black/80 text-sm mb-4">
        View our transparent collection details stored in a live sheet.
      </p>
      <a
        href="https://docs.google.com/spreadsheets/d/1CJKq3Z31MJEuQMlhP5jMbUySOhnEtxsXN-5ZZGDfYkc/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 font-[Poppins]"
      >
        Open Sheet
      </a>
    </div>
  );
}

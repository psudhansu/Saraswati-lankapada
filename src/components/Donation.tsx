import CollectionCard from "./CollectionCard"

export const Donation = () => {
  return (
  <section className="my-10 px-4 py-8 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-xl shadow-md max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-[Playfair_Display] text-red-600 mb-4">
      💰 Support the Puja
    </h2>

    <p className="text-gray-800 font-[Poppins] mb-4">
      Your kind contribution helps us organize Saraswati Puja and cultural programs with devotion and joy.
      Thank you for your blessings and support! 🙏
    </p>
    <CollectionCard />
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <img
        src="/assets/donation/upi-qr.jpg"
        alt="UPI QR for donation"
        className="w-52 mx-auto mb-4 rounded-lg border-2 border-yellow-400 shadow"
      />
      <p className="text-sm text-gray-700 font-[Poppins] mb-2">
        📲 Scan this UPI QR code to donate directly
      </p>

      <div className="mt-4 text-left font-[Poppins]">
        <p className="font-medium text-gray-800 mb-1">OR Donate via Phone/Bank:</p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>📛 Account Holder 1:</strong> Sudhansu Nayak</li>
          <li><strong>📞 GPay/PhonePe:</strong> 7077887317</li>
          <li><strong>📛 Account Holder 2:</strong> Srinibas Nayak</li>
          <li><strong>📞 GPay/PhonePe:</strong> 8249859021</li>
        </ul>
      </div>
    </div>
  </section>
);

};

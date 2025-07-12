import { useState } from "react";
import { Countdown } from "./Countdown";

export const Home = () => {
    const [showSchedule, setShowSchedule] = useState(false);
    return (
        <>
          <h1 className="text-3xl font-bold text-center mb-4">🙏 ଲଙ୍କାପଡା ସରସ୍ୱତୀ ପୂଜା 🙏</h1>
        
          {/* Countdown and Schedule */}
              <Countdown pujaDate="2026-01-23" onTenDaysLeft={setShowSchedule} />
    
              {showSchedule ? (
                <div className="bg-white p-4 rounded shadow mt-4">
                  <h2 className="text-xl font-semibold mb-2 text-yellow-600 font-[Playfair_Display]">📜 Event Schedule</h2>
                  <p className="font-[Poppins]">Loading from JSON soon...</p>
                </div>
              ) : (
                <div className="text-center text-gray-600 italic font-[Poppins] mt-4">
                  📌 Event schedule will be available during puja time.
                </div>
              )}
   </>
    );
}
import { useState } from "react";
import { Countdown } from "./Countdown";

export const Home = () => {
    const [showSchedule, setShowSchedule] = useState(false);
    return (
        <>
          <h2 className="text-3xl font-bold text-center mb-4">  ଲଙ୍କାପଡା ସରସ୍ୱତୀ ପୂଜା  🙏</h2>
        
          {/* Countdown and Schedule */}
              <Countdown pujaDate="2026-01-23" onTenDaysLeft={setShowSchedule} />
    
              {showSchedule ? (
                <div className="bg-white p-4 rounded shadow mt-4">
                  <h2 className="text-xl font-semibold mb-2 text-yellow-600 font-[Playfair_Display]">📜 Event Schedule 2026</h2>
                  <div className="font-[Poppins] space-y-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>23 January:</strong> ସରସ୍ୱତୀ ପୂଜା</li>
                      <li><strong>25 January:</strong> ଭକ୍ତି ବିସର୍ଜନ</li>
                      <li><strong>26 January:</strong> ଅଷ୍ଟମ ପ୍ରହରୀ ଏବଂ ସଞ୍ଜ ସଂକୀର୍ତ୍ତନ</li>
                      <li><strong>27 January:</strong> ନଗର କୀର୍ତ୍ତନ</li>
                      <li>Evening Alati (all day)</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-600 italic font-[Poppins] mt-4">
                  📌 Event schedule will be available during puja time.
                </div> 
              )}
   </>
    );
}
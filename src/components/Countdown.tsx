import { useEffect, useState } from "react";

type CountdownProps = {
  pujaDate: string; // Format: 'YYYY-MM-DD'
  onTenDaysLeft: (showEvents: boolean) => void;
};

export const Countdown = ({ pujaDate, onTenDaysLeft }: CountdownProps) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const target = new Date(pujaDate);
    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      setDaysLeft(diff);
      onTenDaysLeft(diff <= 55);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 24 * 60 * 60 * 1000); // update daily
    return () => clearInterval(interval);
  }, [pujaDate, onTenDaysLeft]);

  return (
  <div className="text-center my-8 p-6 rounded-xl bg-gradient-to-r from-yellow-200 via-amber-50 to-yellow-200 shadow-md">
    <h2 className="text-2xl md:text-3xl font-[Playfair_Display] text-red-600 mb-2 animate-pulse">
      📅 Countdown
    </h2>
    <p className="text-lg font-[Poppins] text-gray-800">
      {daysLeft > 0
        ? `⏳ Only ${daysLeft} day${daysLeft === 1 ? '' : 's'} left`
        : "🎉 Puja Day is Here! Jai Maa Saraswati 🙏"}
    </p>
  </div>
);
};

import { useState, useEffect } from 'react';

const DropCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Date du drop : 31 juillet 2024 à 18h00
    const dropDate = new Date('2024-07-31T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = dropDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-sm font-light text-white/70 tracking-widest uppercase">
        Prochain Drop
      </p>
      <div className="text-xl font-light text-white space-x-4">
        <span>{timeLeft.days}J</span>
        <span>{String(timeLeft.hours).padStart(2, '0')}H</span>
        <span>{String(timeLeft.minutes).padStart(2, '0')}M</span>
        <span>{String(timeLeft.seconds).padStart(2, '0')}S</span>
      </div>
    </div>
  );
};

export default DropCountdown;
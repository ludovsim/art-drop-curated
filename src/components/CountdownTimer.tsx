import { useState, useEffect } from "react";
import { Card } from "./ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">PROCHAIN DROP</h2>
          <p className="text-muted-foreground text-lg">Collection Basquiat • 100 pièces exclusives</p>
        </div>
        
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[
            { label: "JOURS", value: timeLeft.days },
            { label: "HEURES", value: timeLeft.hours },
            { label: "MIN", value: timeLeft.minutes },
            { label: "SEC", value: timeLeft.seconds }
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center bg-card shadow-art">
              <div className="text-3xl font-black text-art-orange mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs font-medium text-muted-foreground">
                {item.label}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Mercredi 31 Juillet 2024 • 18:00 CET
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
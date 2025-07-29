import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const StatsSection = () => {
  const stats = [
    {
      number: "2,847",
      label: "COLLECTIONNEURS",
      subtitle: "MEMBRES ACTIFS",
      trend: "+23%"
    },
    {
      number: "€2.8M",
      label: "VOLUME TOTAL",
      subtitle: "EN 2024",
      trend: "+156%"
    },
    {
      number: "89",
      label: "ARTISTES",
      subtitle: "PARTENAIRES",
      trend: "+34%"
    },
    {
      number: "12min",
      label: "TEMPS MOYEN",
      subtitle: "SOLD OUT",
      trend: "-45%"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-art-orange text-white font-bold mb-6">
            COMMUNAUTÉ
          </Badge>
          <h2 className="text-4xl font-black mb-4">L'ART ACCESSIBLE</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rejoignez une communauté passionnée qui révolutionne l'accès à l'art contemporain
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center bg-card shadow-art hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Badge variant="outline" className="text-art-orange border-art-orange text-xs">
                  {stat.trend}
                </Badge>
              </div>
              <div className="text-3xl font-black text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.subtitle}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-6 border border-art-orange rounded-lg bg-gradient-primary">
            <div className="text-white text-sm font-medium mb-2">
              PROCHAIN MILESTONE
            </div>
            <div className="text-white text-2xl font-black">
              3,000 COLLECTIONNEURS
            </div>
            <div className="w-32 h-2 bg-white/20 rounded-full mt-4 mx-auto">
              <div className="w-28 h-2 bg-white rounded-full"></div>
            </div>
            <div className="text-white/80 text-xs mt-2">
              153 membres restants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
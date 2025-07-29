import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import heroArt from "@/assets/hero-art.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroArt} 
          alt="Art contemporain" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center space-x-4">
            <Badge className="bg-art-orange text-white font-bold text-xs px-3 py-1">
              PROCHAIN DROP
            </Badge>
            <span className="text-white/90 text-sm font-medium">
              MERCREDI 31 JUILLET • 18H00
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
            COLLECTION
            <br />
            <span className="text-art-orange">BASQUIAT</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            100 œuvres exclusives de Jean-Michel Basquiat. 
            Prix fixe 950€. Accès limité aux membres premium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-art-orange hover:bg-art-orange/90 text-white font-bold px-8 py-4 text-lg">
              REJOINDRE LA LISTE
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              DÉCOUVRIR L'ARTISTE
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-art-orange">100</div>
              <div className="text-sm text-white/70">ŒUVRES UNIQUES</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-art-orange">950€</div>
              <div className="text-sm text-white/70">PRIX FIXE</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-art-orange">7J</div>
              <div className="text-sm text-white/70">AVANT LE DROP</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-6 z-10">
        <div className="text-white/60 text-xs">
          01. NEXT DROP
        </div>
      </div>
      
      <div className="absolute bottom-8 right-6 z-10">
        <div className="text-white text-sm font-medium">
          07/29
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
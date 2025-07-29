import { Button } from "./ui/button";
import DropCountdown from "./DropCountdown";
import damienHirstArt from "/lovable-uploads/0fffb3ea-7db8-4bd7-ad58-ed23372c7102.png";

const HeroSection = () => {
  return (
    <section className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Artwork fullscreen background */}
      <div className="absolute inset-0">
        <img 
          src={damienHirstArt} 
          alt="Collection Damien Hirst Spot Paintings" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Minimal info overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top left - Artist name */}
        <div className="flex-1 flex items-start">
          <div className="mt-16">
            <h1 className="text-7xl md:text-9xl font-thin text-white tracking-wider">
              DAMIEN HIRST
            </h1>
            <p className="text-lg md:text-xl font-light text-white/90 tracking-wide mt-2">
              SPOT PAINTINGS
            </p>
          </div>
        </div>
        
        {/* Bottom right - Drop info */}
        <div className="flex justify-end">
          <div className="text-right space-y-6">
            <DropCountdown />
            
            <div className="space-y-2">
              <p className="text-sm font-light text-white/70 tracking-widest uppercase">
                Édition Limitée
              </p>
              <p className="text-xl font-light text-white">
                100 PIÈCES • 950€
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-light text-sm tracking-widest uppercase px-8 py-3 mt-6"
            >
              Rejoindre la liste
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
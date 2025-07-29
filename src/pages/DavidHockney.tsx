import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import hockneyArt from "/lovable-uploads/317f8948-9be3-4d6b-85e9-d783e29a8e62.png";
import fragment1 from "@/assets/hockney-fragment-1.jpg";
import fragment2 from "@/assets/hockney-fragment-2.jpg";
import fragment3 from "@/assets/hockney-fragment-3.jpg";
import fragment4 from "@/assets/hockney-fragment-4.jpg";
import fragment5 from "@/assets/hockney-fragment-5.jpg";

const DavidHockney = () => {
  // Images de fragments pour varier les œuvres
  const fragments = [fragment1, fragment2, fragment3, fragment4, fragment5];
  
  // Génération d'œuvres fictives sold out
  const artworks = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Pool Series #${String(i + 1).padStart(3, '0')}`,
    price: "950€",
    soldOut: true,
    image: fragments[i % fragments.length]
  }));

  return (
    <div className="w-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen overflow-hidden relative">
        <div className="absolute inset-0">
          <img 
            src={hockneyArt} 
            alt="Collection David Hockney Pool Series" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          {/* Top left - Artist name */}
          <div className="flex-1 flex items-start">
            <div className="mt-16">
              <h1 className="text-7xl md:text-9xl font-thin text-white tracking-wider">
                DAVID HOCKNEY
              </h1>
              <p className="text-lg md:text-xl font-light text-white/90 tracking-wide mt-2">
                POOL SERIES
              </p>
            </div>
          </div>
          
          {/* Bottom right - Collection info */}
          <div className="flex justify-end">
            <div className="text-right space-y-6">
              <div className="space-y-2">
                <Badge className="bg-red-600 text-white font-bold text-xs px-3 py-1">
                  SOLD OUT
                </Badge>
                <p className="text-xl font-light text-white">
                  COLLECTION TERMINÉE
                </p>
              </div>
              
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
                disabled
                className="bg-white/10 text-white/50 border border-white/20 backdrop-blur-sm font-light text-sm tracking-widest uppercase px-8 py-3 mt-6 cursor-not-allowed"
              >
                Collection épuisée
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-center">
          <p className="text-xs tracking-widest uppercase mb-2">Découvrir la collection</p>
          <div className="w-px h-8 bg-white/30 mx-auto"></div>
        </div>
      </section>

      {/* Collection Content */}
      <section className="bg-background min-h-screen py-16">
        <div className="container mx-auto px-6">
          {/* Collection Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-thin mb-8 text-center">
              UNE COLLECTION ICONIQUE
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  David Hockney, maître de l'art contemporain, nous offre une série exclusive 
                  de 100 œuvres inspirées de ses célèbres Pool Paintings. Cette collection 
                  explore les jeux de lumière et de reflets qui ont fait sa renommée mondiale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chaque pièce capture l'essence de la Californie des années 60-70, 
                  mêlant réalisme et abstraction dans une harmonie parfaite. 
                  Une opportunité unique de posséder un fragment de l'histoire de l'art.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Artiste</span>
                  <span>David Hockney</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Collection</span>
                  <span>Pool Series</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Édition</span>
                  <span>100 pièces uniques</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Prix</span>
                  <span>950€ par pièce</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Statut</span>
                  <span className="text-red-600 font-medium">Épuisé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-thin mb-8 text-center">TOUTES LES ŒUVRES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {artworks.map((artwork) => (
                <Card key={artwork.id} className="relative overflow-hidden group cursor-not-allowed">
                  <CardContent className="p-0 aspect-square relative overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/90 text-center">
                        <p className="text-xs font-light">{artwork.title}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-red-600 text-white text-xs">
                        SOLD OUT
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                      {artwork.price}
                    </div>
                    {/* Overlay pour indiquer sold out */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium text-sm">ÉPUISÉ</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DavidHockney;
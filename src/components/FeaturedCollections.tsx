import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      artist: "Jean-Michel Basquiat",
      title: "Neo-Expressionist Works",
      pieces: 100,
      price: 950,
      status: "COMING SOON",
      dropDate: "31 JUILLET",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      artist: "Banksy",
      title: "Street Art Icons",
      pieces: 100,
      price: 950,
      status: "SOLD OUT",
      dropDate: "24 JUILLET",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 3,
      artist: "Takashi Murakami",
      title: "Flower Power Series",
      pieces: 100,
      price: 950,
      status: "LAST CHANCE",
      dropDate: "17 JUILLET",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black mb-4">COLLECTIONS EXCLUSIVES</h2>
            <p className="text-muted-foreground text-lg">
              Découvrez nos drops d'œuvres d'artistes renommés
            </p>
          </div>
          <Button variant="outline">
            VOIR TOUT
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className={`group overflow-hidden border-0 ${
                collection.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    collection.featured ? 'h-96' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                <Badge 
                  className={`absolute top-4 left-4 font-bold text-xs ${
                    collection.status === 'COMING SOON' ? 'bg-art-orange text-white' :
                    collection.status === 'SOLD OUT' ? 'bg-muted text-muted-foreground' :
                    'bg-art-green text-white'
                  }`}
                >
                  {collection.status}
                </Badge>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white/80 text-sm font-medium mb-1">
                    {collection.dropDate}
                  </div>
                  <h3 className={`text-white font-black mb-2 ${
                    collection.featured ? 'text-3xl' : 'text-xl'
                  }`}>
                    {collection.artist}
                  </h3>
                  <p className={`text-white/90 mb-4 ${
                    collection.featured ? 'text-lg' : 'text-sm'
                  }`}>
                    {collection.title}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <span className="text-2xl font-bold">{collection.price}€</span>
                      <span className="text-sm text-white/70 ml-2">• {collection.pieces} pièces</span>
                    </div>
                    <Button 
                      size={collection.featured ? "default" : "sm"} 
                      className="bg-white text-black hover:bg-white/90"
                    >
                      DÉCOUVRIR
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="h-px bg-border flex-1 w-24"></div>
            <span className="text-muted-foreground text-sm font-medium">
              NOUVEAU DROP CHAQUE MERCREDI
            </span>
            <div className="h-px bg-border flex-1 w-24"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
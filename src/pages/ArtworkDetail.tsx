import Header from "@/components/Header";
import AnimatedArtistName from "@/components/AnimatedArtistName";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import fragment1 from "@/assets/hockney-fragment-1.jpg";
import fragment2 from "@/assets/hockney-fragment-2.jpg";
import fragment3 from "@/assets/hockney-fragment-3.jpg";
import fragment4 from "@/assets/hockney-fragment-4.jpg";
import fragment5 from "@/assets/hockney-fragment-5.jpg";
import davidHockneyPortrait from "@/assets/david-hockney-portrait.jpg";

const ArtworkDetail = () => {
  const { id } = useParams();
  
  // Mock data for the artworks
  const artworks = {
    "001": {
      id: "001",
      title: "Pool Series #001",
      price: "€950",
      available: true,
      image: fragment1,
      description: "Une œuvre emblématique de la série Pool de David Hockney, capturant la lumière californienne et les reflets de l'eau avec une précision remarquable.",
      dimensions: "15 × 15 cm",
      technique: "Édition numérique limitée",
      year: "2024"
    },
    "002": {
      id: "002", 
      title: "Pool Series #002",
      price: "€950",
      available: false,
      image: fragment2,
      description: "Deuxième pièce de cette collection exclusive, explorant les jeux de lumière et d'ombre caractéristiques du maître britannique.",
      dimensions: "15 × 15 cm", 
      technique: "Édition numérique limitée",
      year: "2024"
    }
  };

  const artwork = artworks[id as keyof typeof artworks];

  // Autres œuvres de la collection pour suggestions
  const otherArtworks = [
    { id: "003", title: "Pool Series #003", price: "€950", image: fragment3, available: true },
    { id: "004", title: "Pool Series #004", price: "€950", image: fragment4, available: false },
    { id: "005", title: "Pool Series #005", price: "€950", image: fragment5, available: true },
    { id: "006", title: "Pool Series #006", price: "€950", image: fragment1, available: true },
    { id: "007", title: "Pool Series #007", price: "€950", image: fragment2, available: false }
  ].filter(item => item.id !== id);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Œuvre non trouvée</h1>
          <Link to="/collections/david-hockney" className="text-primary hover:underline">
            Retour à la collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/collections/david-hockney" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la collection David Hockney
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image info */}
              <div className="text-sm text-muted-foreground space-y-1">
                <p><span className="font-medium">Dimensions:</span> {artwork.dimensions}</p>
                <p><span className="font-medium">Technique:</span> {artwork.technique}</p>
                <p><span className="font-medium">Année:</span> {artwork.year}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-thin mb-4">{artwork.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Collection David Hockney • Pool Series
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-3xl font-light">{artwork.price}</p>
                  {!artwork.available && (
                    <Badge className="bg-red-600 text-white">
                      SOLD OUT
                    </Badge>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {artwork.description}
                </p>
              </div>

              {/* Purchase section */}
              <div className="space-y-4">
                {artwork.available ? (
                  <>
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                    >
                      Acheter maintenant
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Paiement sécurisé • Livraison gratuite • Certificat d'authenticité inclus
                    </p>
                  </>
                ) : (
                  <>
                    <Button 
                      size="lg" 
                      disabled
                      className="w-full bg-muted text-muted-foreground cursor-not-allowed py-3"
                    >
                      Épuisé
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Cette œuvre a été vendue. Découvrez d'autres pièces de la collection.
                    </p>
                  </>
                )}
              </div>

              {/* Additional info */}
              <div className="border-t pt-8">
                <h3 className="text-lg font-medium mb-4">À propos de cette œuvre</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Artiste</span>
                    <span>David Hockney</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Collection</span>
                    <span>Pool Series</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Édition</span>
                    <span>Limitée à 100 exemplaires</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Authentification</span>
                    <span>Certificat inclus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autres œuvres de la collection */}
          <div className="mt-16 border-t pt-16">
            <h2 className="text-2xl font-thin mb-8 text-center">Autres œuvres de la collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {otherArtworks.slice(0, 5).map((item) => (
                <Link 
                  key={item.id} 
                  to={`/collections/david-hockney/${item.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-muted aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Badge className="bg-red-600 text-white text-xs">
                          SOLD OUT
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium">{item.title}</p>
                      <p className="text-white/80 text-xs">{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Présentation de l'artiste */}
          <div className="mt-16 border-t pt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-thin">À propos de David Hockney</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  David Hockney (né en 1937) est l'un des artistes britanniques les plus influents de sa génération. 
                  Connu pour ses peintures de piscines californiennes, ses portraits vibrants et ses paysages innovants, 
                  Hockney a révolutionné l'art contemporain avec son style unique et sa maîtrise de la couleur.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sa série "Pool Paintings" des années 1960-70 capture l'essence du rêve californien avec 
                  une précision technique remarquable et une sensibilité artistique exceptionnelle. 
                  Chaque œuvre explore les reflets, la lumière et le mouvement de l'eau avec une poésie visuelle unique.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Né en 1937 à Bradford, Angleterre</p>
                  <p className="text-sm font-medium">Membre de la Royal Academy of Arts</p>
                  <p className="text-sm font-medium">Œuvres exposées dans les plus grands musées mondiaux</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 overflow-hidden rounded-lg">
                  <img 
                    src={davidHockneyPortrait} 
                    alt="Portrait de David Hockney"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
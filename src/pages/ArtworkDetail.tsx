import Header from "@/components/Header";
import AnimatedArtistName from "@/components/AnimatedArtistName";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import fragment1 from "@/assets/hockney-fragment-1.jpg";
import fragment2 from "@/assets/hockney-fragment-2.jpg";

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
      dimensions: "70 × 50 cm",
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
      dimensions: "70 × 50 cm", 
      technique: "Édition numérique limitée",
      year: "2024"
    }
  };

  const artwork = artworks[id as keyof typeof artworks];

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
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
import { Badge } from "./ui/badge";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-6">ARTDROP</h3>
            <p className="text-background/80 mb-6 max-w-md">
              La première plateforme de drops exclusifs d'art contemporain. 
              Rendons l'art des grands maîtres accessible à tous.
            </p>
            <div className="flex space-x-4">
              <Badge className="bg-art-orange text-white font-bold">
                LIVE
              </Badge>
              <Badge variant="outline" className="border-background/30 text-background">
                BETA
              </Badge>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">COLLECTIONS</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Prochains Drops</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Archives</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sold Out</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Upcoming</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">COMMUNAUTÉ</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-background/60">
            © 2024 ARTDROP. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm text-background/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Conditions</a>
            <a href="#" className="hover:text-background transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-background transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
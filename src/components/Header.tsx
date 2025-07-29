import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold tracking-tight">ARTDROP</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                COLLECTIONS
              </a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                ARTISTES
              </a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                DROPS
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-art-orange text-white font-medium">
              LIVE
            </Badge>
            <Button variant="outline" size="sm">
              CONNEXION
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              INSCRIPTION
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
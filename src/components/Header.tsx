import { Button } from "./ui/button";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-white">
          <h1 className="text-2xl font-bold tracking-wider">ARTDROP</h1>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <Button 
            variant="ghost" 
            className="text-white hover:text-white hover:bg-white/10 font-light tracking-wide"
          >
            Collections
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-white hover:bg-white/10"
          >
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

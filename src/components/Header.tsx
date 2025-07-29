import { Button } from "./ui/button";
import { User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="flex items-center justify-between p-6">
        {/* Logo */}
        <Link to="/" className="text-foreground">
          <h1 className="text-2xl font-bold tracking-wider">ARTDROP</h1>
        </Link>
        
        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-foreground hover:bg-muted font-light tracking-wide flex items-center gap-1"
              >
                Collections
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border border-border">
              <DropdownMenuItem asChild>
                <Link to="/" className="text-foreground hover:text-foreground hover:bg-muted cursor-pointer">
                  Damien Hirst
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/collections/david-hockney" className="text-foreground hover:text-foreground hover:bg-muted cursor-pointer">
                  David Hockney
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-foreground hover:text-foreground hover:bg-muted"
          >
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

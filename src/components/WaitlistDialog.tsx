import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface WaitlistDialogProps {
  children: React.ReactNode;
}

const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [waitlistCount] = useState(247); // Mock data

  const artworks = [
    "/lovable-uploads/2f3b6819-b856-4909-9e68-01da141a42aa.png",
    "/lovable-uploads/034a0261-bafa-444a-95eb-f44e71dc432d.png",
    "/lovable-uploads/0fffb3ea-7db8-4bd7-ad58-ed23372c7102.png",
    "/lovable-uploads/317f8948-9be3-4d6b-85e9-d783e29a8e62.png"
  ];

  const handleJoinWaitlist = () => {
    toast({
      title: "Successfully joined waitlist!",
      description: "You'll be notified when the collection drops.",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-black border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Left side - Artworks */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-white mb-6">DAMIEN HIRST COLLECTION</h2>
            <div className="grid grid-cols-2 gap-4">
              {artworks.slice(0, 4).map((artwork, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={artwork} 
                    alt={`Damien Hirst artwork ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Waitlist info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-light text-white">JOIN THE WAITLIST</h3>
              <div className="space-y-2">
                <p className="text-sm text-white/70 uppercase tracking-widest">
                  People waiting
                </p>
                <p className="text-3xl font-light text-white">
                  {waitlistCount.toLocaleString()}
                </p>
              </div>
              
              <div className="space-y-2 pt-4">
                <p className="text-sm text-white/70 uppercase tracking-widest">
                  Limited Edition
                </p>
                <p className="text-xl font-light text-white">
                  100 PIECES • €950
                </p>
              </div>
            </div>

            <Button 
              onClick={handleJoinWaitlist}
              className="w-full bg-white text-black hover:bg-white/90 font-light text-sm tracking-widest uppercase py-3"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
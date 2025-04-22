
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero-section min-h-[80vh] flex items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c49a6c]">
          Delícias da Lu
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6b4423]">
          Doces artesanais feitos com amor para tornar seus momentos ainda mais especiais
        </p>
        <Button 
          className="bg-[#c49a6c] hover:bg-[#ab805a] text-white px-8 py-6 rounded-full text-lg"
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Fazer Encomenda via WhatsApp
        </Button>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  px-4 py-16 bg-[#fffaf0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Texto */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#6b4423]">
            Doces perfeitos <br />
            para adoçar os <br />
            seus melhores <br />
            momentos
          </h1>
          <Button 
            className="bg-[#c49a6c] hover:bg-[#ab805a] text-white px-8 py-6 rounded-full text-lg"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Fazer Encomenda via WhatsApp
          </Button>
        </div>

        {/* Imagem */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/image/cake-hero.png" // coloque seu arquivo nessa pasta public/images
            alt="Bolo de morango"
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

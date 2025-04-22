
import { Instagram, WhatsApp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#f7ede2] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#c49a6c]">Endereço</h3>
            <p className="text-[#6b4423] flex items-center justify-center md:justify-start">
              <MapPin className="mr-2" />
              Rua dos Doces, 123 - São Paulo
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#c49a6c]">Redes Sociais</h3>
            <a 
              href="https://instagram.com/deliciasdalu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6b4423] hover:text-[#c49a6c] flex items-center justify-center md:justify-start"
            >
              <Instagram className="mr-2" />
              @deliciasdalu
            </a>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#c49a6c]">Contato</h3>
            <Button
              className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <WhatsApp className="mr-2" />
              Fazer Encomenda
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[#6b4423]">
          <p>&copy; 2024 Delícias da Lu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

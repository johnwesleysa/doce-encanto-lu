
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 shadow-lg z-50"
      onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
    >
      <MessageSquare className="h-8 w-8" />
    </Button>
  );
};

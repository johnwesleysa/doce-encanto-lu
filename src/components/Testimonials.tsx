
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Os doces da Lu são simplesmente maravilhosos! Encomendei para o aniversário da minha filha e todos amaram.",
  },
  {
    name: "Ana Costa",
    text: "Qualidade impecável e atendimento carinhoso. Os brownies são divinos!",
  },
  {
    name: "Carolina Santos",
    text: "A torta de limão é a melhor que já provei. Sempre peço para eventos especiais.",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-[#fceae8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#c49a6c]">
          Depoimentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur">
              <p className="text-[#6b4423] mb-4 italic">"{testimonial.text}"</p>
              <p className="text-[#c49a6c] font-medium">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

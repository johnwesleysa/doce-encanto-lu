
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "Cupcakes",
    description: "Delicados cupcakes em diversos sabores",
    price: "a partir de R$ 12",
    image: "/cupcake.jpg"
  },
  {
    name: "Brownies",
    description: "Brownie tradicional ou recheado",
    price: "a partir de R$ 15",
    image: "/brownie.jpg"
  },
  {
    name: "Torta de Limão",
    description: "Nossa especialidade mais pedida",
    price: "R$ 120",
    image: "/lime-pie.jpg"
  },
  {
    name: "Bolos Decorados",
    description: "Bolos personalizados para ocasiões especiais",
    price: "sob consulta",
    image: "/cake.jpg"
  }
];

export const Products = () => {
  return (
    <section id="produtos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#c49a6c]">
          Nossos Doces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-[#c49a6c]">{product.name}</h3>
                <p className="text-[#6b4423] mb-2">{product.description}</p>
                <p className="text-sm font-medium text-[#c49a6c]">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

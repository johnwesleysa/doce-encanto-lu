
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-[#fffaf0]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#c49a6c]">
          Sobre a Lu
        </h2>
        <Card className="p-8 bg-white/80 backdrop-blur shadow-lg">
          <p className="text-lg text-[#6b4423] leading-relaxed">
            Desde 2018, dedico-me à arte da confeitaria artesanal, transformando
            ingredientes selecionados em doces memoráveis. Cada receita carrega
            um toque especial de carinho e dedicação, como aqueles doces que
            nossas avós faziam.
          </p>
          <p className="text-lg text-[#6b4423] mt-4 leading-relaxed">
            Minha missão é adoçar seus momentos especiais com sabor e delicadeza,
            criando experiências únicas através de doces feitos à mão.
          </p>
        </Card>
      </div>
    </section>
  );
};

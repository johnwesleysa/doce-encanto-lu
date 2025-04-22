import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="min-h-screen py-20 px-4 bg-[#fffaf0]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#c49a6c]">
        Sobre a Lu
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Imagem da Lu */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-full">
          <img
            src="/image/lu.jpg"
            alt="Foto da Lu"
            className="w-full h-full object-cover rounded-lg aspect-[3/4] shadow-md"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-2/3 flex items-stretch">
          <Card className="p-6 md:p-8 bg-white/80 backdrop-blur shadow-lg flex flex-col justify-center">
            <p className="text-lg text-[#6b4423] leading-relaxed text-left">
              Desde 2018, dedico-me à arte da confeitaria artesanal, transformando
              ingredientes selecionados em doces memoráveis. Cada receita carrega
              um toque especial de carinho e dedicação, como aqueles doces que
              nossas avós faziam.
            </p>
            <p className="text-lg text-[#6b4423] mt-4 leading-relaxed text-left">
              Minha missão é adoçar seus momentos especiais com sabor e delicadeza,
              criando experiências únicas através de doces feitos à mão.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </section>

  );
};

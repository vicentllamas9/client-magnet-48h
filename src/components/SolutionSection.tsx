import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const features = [
    "3 mejoras clave para tu web",
    "2 recomendaciones rápidas de visibilidad online", 
    "1 propuesta de automatización con IA que puedes aplicar ya"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">👉</span> "La auditoría rápida y práctica que te dirá qué hacer para conseguir clientes online."
        </h2>

        {/* Explanation */}
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Por solo 17€, analizamos tu presencia online con herramientas profesionales e Inteligencia Artificial 
            y te entregamos un informe personalizado con:
          </p>

          {/* Features */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-4 bg-card rounded-lg border border-border text-left flex items-center space-x-4"
              >
                <span className="text-primary text-xl">✅</span>
                <span className="text-foreground text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground">
            <span className="text-primary">➡️</span> Todo en un documento claro, sin tecnicismos, en menos de 48h.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <Button size="lg" className="cta-button text-lg px-12 py-6 shadow-cta hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            🔵 Quiero mi auditoría ahora por 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
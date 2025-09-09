import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-background flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Title */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <span className="text-primary">👉</span> ¿Tu web o negocio online no te trae clientes?{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Descubre en 48h qué falla y cómo solucionarlo
            </span>{" "}
            <span className="text-primary">(por solo 17€)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Obtén un informe práctico con mejoras clave, recomendaciones de visibilidad 
            y una idea de automatización con IA que puedes aplicar de inmediato.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button size="lg" className="cta-button text-lg px-12 py-6 shadow-cta hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            🔵 Quiero mi auditoría ahora por 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
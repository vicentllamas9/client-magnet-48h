import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">👉</span> "Cupos limitados"
        </h2>

        {/* Urgency Text */}
        <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg max-w-2xl mx-auto">
          <p className="text-xl text-foreground leading-relaxed">
            "Por la personalización del informe, solo realizamos <strong className="text-destructive">10 auditorías por semana</strong>. 
            Asegura la tuya antes de que se acaben las plazas."
          </p>
        </div>

        {/* Giant CTA */}
        <div className="pt-8">
          <Button size="lg" className="cta-button text-xl px-16 py-8 shadow-cta hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            🔵 Quiero mi auditoría ahora por 17€
          </Button>
        </div>

        {/* Final Aspirational Close */}
        <div className="pt-16 space-y-8">
          <div className="bg-gradient-primary p-8 rounded-lg text-center">
            <p className="text-xl text-white leading-relaxed font-medium">
              "La diferencia entre seguir perdiendo clientes o empezar a atraerlos está en un simple clic. 
              Da hoy el primer paso hacia el crecimiento de tu negocio."
            </p>
          </div>

          {/* Final CTA */}
          <Button size="lg" className="cta-button text-lg px-12 py-6 shadow-cta hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            🔵 Quiero mi auditoría + bonus por 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
import { Button } from "@/components/ui/button";

const BonusSection = () => {
  const bonuses = [
    {
      icon: "📘",
      title: "Los 7 errores que matan las ventas en tu web",
      description: "Aprende qué está bloqueando tus ventas y cómo solucionarlo."
    },
    {
      icon: "📙", 
      title: "Guía rápida: Cómo conseguir tus primeros 100 clientes online sin gastar en publicidad",
      description: "Métodos prácticos para atraer clientes sin invertir en anuncios."
    },
    {
      icon: "📗",
      title: "Automatiza tu negocio con IA: 5 procesos que puedes delegar hoy",
      description: "Libérate de tareas repetitivas y gana tiempo con IA."
    },
    {
      icon: "📕",
      title: "Manual de supervivencia digital: cómo competir contra empresas más grandes con pocos recursos",
      description: "Las claves para diferenciarte y competir como un grande."
    },
    {
      icon: "📒",
      title: "Checklist exprés de presencia online: ¿tu negocio está listo para 2025?",
      description: "Una guía paso a paso para detectar dónde estás fallando."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-background">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">👉</span> "Además de tu auditoría, recibirás GRATIS este pack exclusivo valorado en +197€"
        </h2>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20"
            >
              <div className="space-y-4">
                <div className="text-4xl">{bonus.icon}</div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Persuasive Text */}
        <div className="space-y-8">
          <p className="text-xl text-primary max-w-3xl mx-auto">
            👉 "Estos bonus por sí solos ya valen mucho más que los 17€, pero hoy los tendrás gratis junto a tu auditoría."
          </p>

          {/* CTA */}
          <Button size="lg" className="cta-button text-lg px-12 py-6 shadow-cta hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            🔵 Sí, quiero mi auditoría + los 5 bonus por solo 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
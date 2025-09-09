const BenefitsSection = () => {
  const benefits = [
    "Atraer más clientes con pequeños cambios inmediatos.",
    "Saber exactamente qué falla y cómo arreglarlo.",
    "Ahorrar tiempo y dinero evitando errores costosos.",
    "Ponerte un paso por delante de tu competencia.",
    "Sentir claridad y seguridad sobre el futuro digital de tu negocio."
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">👉</span> "Lo que conseguirás con esta auditoría"
        </h2>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20"
            >
              <div className="flex items-start space-x-4">
                <span className="text-primary text-2xl">🎯</span>
                <p className="text-foreground text-lg leading-relaxed text-left">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
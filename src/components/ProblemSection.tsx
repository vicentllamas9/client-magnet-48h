const ProblemSection = () => {
  const problems = [
    "Tu web está anticuada y no convierte.",
    "Pierdes tiempo respondiendo clientes sin cerrar ventas.",
    "Tu competencia ya se digitalizó y tú sientes que te quedas atrás.",
    "Has probado cosas, pero no sabes qué funciona y qué no."
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Empathy Text */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            "Muchos negocios como el tuyo invierten en webs, redes o anuncios… y aún así siguen sin conseguir clientes. 
            El problema no es tu esfuerzo, es que nadie te ha mostrado dónde estás perdiendo oportunidades."
          </p>
        </div>

        {/* Problems List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <p className="text-foreground text-lg leading-relaxed">
                ❌ {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const valueItems = [
    { item: "Auditoría personalizada con IA", value: "97€" },
    { item: "Pack de 5 ebooks exclusivos", value: "197€" },
    { item: "Entrega en 48h", value: "Incluido" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">👉</span> "Todo esto por menos de lo que cuesta una cena"
        </h2>

        {/* Value Breakdown */}
        <div className="bg-card p-8 rounded-lg border border-border shadow-glow/10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6">Recordatorio de valor:</h3>
          
          <div className="space-y-4">
            {valueItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                <span className="text-foreground">{item.item}</span>
                <span className="text-primary font-semibold">
                  {item.value === "Incluido" ? item.value : `(valor real ${item.value})`}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-3xl font-bold text-primary">Todo por solo 17€</p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-secondary p-6 rounded-lg border border-border max-w-2xl mx-auto">
          <p className="text-lg text-foreground">
            <span className="text-primary">➡️</span> <strong>Garantía:</strong> "Si no quedas satisfecho, te devolvemos tu dinero."
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <Button size="lg" className="cta-button text-lg px-12 py-6 shadow-cta hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            🔵 Quiero mi auditoría + los 5 bonus por 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
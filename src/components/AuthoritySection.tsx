const AuthoritySection = () => {
  const tools = [
    "Zoho", "Monday", "Zapier", "ChatGPT", "Make", "Notion", "HubSpot", "Google Analytics"
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">👉</span> "¿Quién está detrás de esta auditoría?"
        </h2>

        {/* Author Info */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Profile */}
          <div className="bg-secondary p-8 rounded-lg border border-border">
            <div className="space-y-6">
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">VL</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Vicent Llamas</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Soy Vicent Llamas, consultor en digitalización y automatización con IA. 
                  Mi misión es que negocios como el tuyo dejen de perder clientes por no tener 
                  una estrategia digital clara. No hablo en tecnicismos, hablo tu idioma y 
                  te doy soluciones prácticas."
                </p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Herramientas profesionales que utilizamos:
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="p-3 bg-muted rounded-lg border border-border text-center hover:border-primary/30 transition-colors duration-300"
                >
                  <span className="text-foreground font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
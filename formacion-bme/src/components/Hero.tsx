export function Hero() {
  return (
    <section className="hero hero--landing" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__eyebrow">Formación · ESG y mercado en 2026</p>
        <h1 id="hero-title" className="hero__h1">
          Guion visual para sala y estudio
        </h1>
        <p className="hero__lead">
          Cada bloque prioriza el contenido de la sección A (aplicación), con refuerzos del material B y
          guion del ponente en C. Los textos se generan desde <code>contenido.md</code> mediante un paso de
          procesado: estructura tipográfica, tarjetas, mapas y citas.
        </p>
      </div>
    </section>
  );
}

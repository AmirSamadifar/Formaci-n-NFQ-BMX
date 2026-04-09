import { lazy, Suspense } from "react";
import type { MainBlock, TopicPresentation } from "../../types/presentation";

const DiagramBlock = lazy(async () => {
  const m = await import("./DiagramBlock");
  return { default: m.DiagramBlock };
});

function ObjectiveCard({ text, k }: { text: string; k: string }) {
  const parts = text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className="vl-objective">
      <span className="vl-objective__tag">Objetivo del bloque</span>
      {parts.map((p, j) => (
        <p key={`${k}-${j}`} className="vl-objective__text">
          {p}
        </p>
      ))}
    </div>
  );
}

function NarrativeStack({ paragraphs, k }: { paragraphs: string[]; k: string }) {
  return (
    <div className="vl-narrative">
      {paragraphs.map((para, j) => (
        <div key={`${k}-${j}`} className="vl-narrative__card">
          <p>{para}</p>
        </div>
      ))}
    </div>
  );
}

function CardGrid({ items, k }: { items: { title: string; body: string }[]; k: string }) {
  return (
    <div className="vl-cardgrid">
      {items.map((it, j) => (
        <article key={`${k}-${j}`} className="vl-cardgrid__item">
          <h4 className="vl-cardgrid__title">{it.title}</h4>
          <div className="vl-cardgrid__body">{it.body}</div>
        </article>
      ))}
    </div>
  );
}

function Pillars({ lines, k }: { lines: string[]; k: string }) {
  return (
    <div className="vl-pillars">
      <span className="vl-pillars__label">Síntesis</span>
      <ul className="vl-pillars__list">
        {lines.map((line, j) => (
          <li key={`${k}-${j}`}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function Callout({
  variant,
  title,
  text,
}: {
  variant: "regulatory" | "ri";
  title: string;
  text: string;
}) {
  return (
    <aside className={`vl-callout vl-callout--${variant}`}>
      <h4 className="vl-callout__title">{title}</h4>
      <p className="vl-callout__text">{text}</p>
    </aside>
  );
}

function ClosingBanner({ text }: { text: string }) {
  return (
    <div className="vl-closing">
      <span className="vl-closing__tag">Takeaway</span>
      <p className="vl-closing__text">{text}</p>
    </div>
  );
}

function renderMainBlock(block: MainBlock, i: number) {
  const k = `b${i}`;
  switch (block.type) {
    case "objective":
      return <ObjectiveCard key={i} k={k} text={block.text} />;
    case "narrative":
      return <NarrativeStack key={i} k={k} paragraphs={block.paragraphs} />;
    case "cards":
      return <CardGrid key={i} k={k} items={block.items} />;
    case "pillars":
      return <Pillars key={i} k={k} lines={block.lines} />;
    case "callout":
      return (
        <Callout
          key={i}
          variant={block.variant}
          title={block.title}
          text={block.text}
        />
      );
    case "closing":
      return <ClosingBanner key={i} text={block.text} />;
    default:
      return null;
  }
}

type Props = {
  topic: TopicPresentation;
};

export function TopicLanding({ topic }: Props) {
  const { enrich, speaker } = topic;

  return (
    <section
      className="landing-topic"
      id={`bloque-${topic.number}`}
      aria-labelledby={`topic-title-${topic.number}`}
    >
      <header className="landing-topic__hero">
        <div className="landing-topic__meta">
          <span className="landing-topic__num">Bloque {topic.number}</span>
          {speaker.duration ? (
            <span className="landing-topic__dur">~ {speaker.duration}</span>
          ) : null}
        </div>
        <h2 id={`topic-title-${topic.number}`} className="landing-topic__title">
          {topic.title}
        </h2>
        {topic.subtitle ? (
          <p className="landing-topic__deck">{topic.subtitle}</p>
        ) : null}
      </header>

      <div className="landing-topic__main">
        <h3 className="landing-topic__section-label">Contenido para la aplicación</h3>
        <div className="landing-topic__blocks">
          {topic.main.map((b, i) => renderMainBlock(b, i))}
        </div>
      </div>

      {topic.diagram ? (
        <div className="landing-topic__diagram-wrap">
          <h3 className="landing-topic__section-label">Mapa visual</h3>
          <Suspense
            fallback={
              <div className="diagram-block diagram-block--loading">Cargando diagrama…</div>
            }
          >
            <DiagramBlock
              code={topic.diagram}
              caption="Esquema orientativo basado en el guion del bloque."
            />
          </Suspense>
        </div>
      ) : null}

      {(enrich.keyIdeas.length > 0 || enrich.extraNote) && (
        <div className="landing-topic__enrich">
          <h3 className="landing-topic__section-label">Refuerzo desde el material de apoyo</h3>
          {enrich.keyIdeas.length > 0 ? (
            <div className="vl-ideas">
              <span className="vl-ideas__tag">Ideas de fondo</span>
              <ul className="vl-ideas__list">
                {enrich.keyIdeas.map((idea, j) => (
                  <li key={j}>{idea}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {enrich.extraNote ? (
            <div className="vl-extra">
              <span className="vl-extra__tag">Contexto conceptual</span>
              <p>{enrich.extraNote}</p>
            </div>
          ) : null}
        </div>
      )}

      {speaker.sections.length > 0 ? (
        <div className="landing-topic__speaker">
          <h3 className="landing-topic__section-label">Guía para el ponente</h3>
          <div className="vl-speaker-rail">
            {speaker.sections.map((sec) => (
              <article key={sec.order} className="vl-speaker-card">
                <header className="vl-speaker-card__head">
                  <span className="vl-speaker-card__idx">{sec.order}</span>
                  <h4>{sec.title}</h4>
                </header>
                {sec.quotes.length > 0 ? (
                  <div className="vl-speaker-card__quotes">
                    {sec.quotes.map((q, qi) => (
                      <blockquote key={qi} className="vl-quote">
                        {q}
                      </blockquote>
                    ))}
                  </div>
                ) : (
                  <p className="vl-speaker-card__empty">Sin citas extraídas en este apartado.</p>
                )}
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

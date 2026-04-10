import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import type { MainBlock, TopicPresentation } from "../../types/presentation";

const DiagramBlock = lazy(async (): Promise<{
  default: ComponentType<{ code: string; topicNumber?: number; caption?: string }>;
}> => {
  const m = await import("./DiagramBlock");
  return { default: m.DiagramBlock };
});

function ObjectiveCard({ text, k }: { text: string; k: string }) {
  const targetParagraph =
    "Introducir el nuevo contexto de la sostenibilidad en 2026 y explicar por qué debe entenderse como una cuestión que conecta mercado, regulación, estrategia, financiación y credibilidad corporativa.";
  const isBlock2ObjectiveParagraph = (value: string) =>
    value.startsWith(
      "Analizar cómo la divergencia entre Europa y Estados Unidos en materia de sostenibilidad y Sustainable Finance",
    );
  const isBlock3ObjectiveParagraph = (value: string) =>
    value.startsWith(
      "Explicar cómo los factores de sostenibilidad influyen en la valoración de una compañía",
    );
  const parts = text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className="vl-objective">
      <span className="vl-objective__tag">Objetivo del bloque</span>
      {parts.map((p, j) => (
        <p key={`${k}-${j}`} className="vl-objective__text">
          {p === targetParagraph ? (
            <>
              El objetivo de este bloque es presentar el nuevo contexto de la sostenibilidad en{" "}
              <strong>2026</strong> y su vínculo con mercado, regulación, estrategia, financiación
              y credibilidad corporativa.
            </>
          ) : isBlock2ObjectiveParagraph(p) ? (
            <>
              El objetivo de este bloque es analizar cómo la{" "}
              <strong>divergencia entre Europa y Estados Unidos</strong> en sostenibilidad y
              Sustainable Finance afecta al posicionamiento estratégico de las compañías, a su
              narrativa ante el mercado y a su relación con los inversores.
            </>
          ) : isBlock3ObjectiveParagraph(p) ? (
            <>
              El objetivo de este bloque es explicar cómo los factores de sostenibilidad influyen en
              la <strong>valoración</strong> de una compañía y cómo deben integrarse en un{" "}
              <strong>equity story</strong> creíble, material y útil para el mercado.
            </>
          ) : (
            p
          )}
        </p>
      ))}
    </div>
  );
}

function NarrativeStack({ paragraphs, k }: { paragraphs: string[]; k: string }) {
  const isTargetNarrativeParagraph = (value: string) =>
    value.includes("La conversación sobre sostenibilidad ha cambiado de forma sustancial");
  const isBlock2TransatlanticParagraph = (value: string) =>
    value.startsWith("El contexto transatlántico ya no puede entenderse como un marco homogéneo.");
  const isBlock3ValuationParagraph = (value: string) =>
    value.startsWith(
      "La sostenibilidad sólo adquiere verdadera relevancia ante el mercado cuando puede traducirse",
    );
  const isBlock4DecarbonizationParagraph = (value: string) =>
    value.startsWith(
      "La conversación sobre descarbonización debe situarse, en primer lugar, en el marco del Acuerdo de París.",
    );

  return (
    <div className="vl-narrative">
      {paragraphs.map((para, j) => (
        <div key={`${k}-${j}`} className="vl-narrative__card">
          {isTargetNarrativeParagraph(para) ? (
            <>
              <p>
                La sostenibilidad ha dejado de ser un ejercicio de reputación para convertirse en
                un factor crítico de negocio y resiliencia. En 2026, el mercado exige coherencia
                demostrable entre el discurso y la ejecución financiera, obligando a las empresas a
                navegar en un entorno regulatorio global fragmentado.
              </p>
              <ul>
                <li>
                  <strong>Evolución Estratégica:</strong> El foco se desplaza del posicionamiento
                  de imagen hacia la gestión de riesgos, oportunidades y necesidades de inversión.
                </li>
                <li>
                  <strong>Criterio de Valor:</strong> Ya no se valora la "ambición declarativa",
                  sino la alineación real entre lo que la compañía dice, lo que reporta y lo que
                  financia.
                </li>
                <li>
                  <strong>Contexto Geopolítico (2026):</strong>
                  <ul>
                    <li>
                      Unión Europea: continúa con un marco estructurado, pero enfocado en la
                      simplificación normativa y el ajuste de calendarios.
                    </li>
                    <li>Estados Unidos: existe una mayor politización y falta de homogeneidad regulatoria.</li>
                  </ul>
                </li>
                <li>
                  <strong>Desafío Narrativo:</strong> Las empresas deben construir mensajes
                  consistentes y defendibles que funcionen ante audiencias con expectativas
                  financieras y legales opuestas.
                </li>
              </ul>
            </>
          ) : isBlock2TransatlanticParagraph(para) ? (
            <>
              <p>El marco transatlántico de sostenibilidad ya no es homogéneo.</p>
              <ul>
                <li>
                  <strong>Estados Unidos:</strong> mayor repliegue regulatorio y foco en
                  materialidad financiera.
                </li>
                <li>
                  <strong>Unión Europea:</strong> continuidad del marco ESG con simplificación
                  normativa y ajuste de implementación.
                </li>
                <li>
                  <strong>Efecto para empresas:</strong> aumenta la complejidad de operar con una
                  sola narrativa global.
                </li>
                <li>
                  <strong>Clave estratégica:</strong> adaptar mensaje, métricas y prioridades por
                  geografía sin perder coherencia corporativa.
                </li>
              </ul>
            </>
          ) : isBlock3ValuationParagraph(para) ? (
            <div className="vl-cardgrid vl-cardgrid--balanced">
              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">01</span> De sostenibilidad a valor de
                  mercado
                </h4>
                <div className="vl-cardgrid__body">
                  La sostenibilidad gana peso ante inversores cuando se traduce en variables
                  económicas concretas: crecimiento, coste de capital, resiliencia y gestión del
                  riesgo.
                </div>
              </article>
              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">02</span> Qué evalúa el mercado
                </h4>
                <div className="vl-cardgrid__body">
                  El mercado no premia declaraciones generales; exige evidencia material, métricas
                  comparables, trazabilidad de resultados y consistencia con el relato financiero.
                </div>
              </article>
              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">03</span> Equity story creíble
                </h4>
                <div className="vl-cardgrid__body">
                  Un equity story sólido integra sostenibilidad con estrategia competitiva,
                  asignación de capital y capacidad de ejecución para sostener valor a medio plazo.
                </div>
              </article>
              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">04</span> Implicación para RI
                </h4>
                <div className="vl-cardgrid__body">
                  RI debe traducir los temas ESG a lenguaje inversor: mensajes claros, verificables
                  y útiles para explicar riesgos, oportunidades y calidad de gestión.
                </div>
              </article>
            </div>
          ) : isBlock4DecarbonizationParagraph(para) ? (
            <div className="vl-cardgrid vl-cardgrid--balanced">
              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">01</span> El Marco Global: El Acuerdo de
                  París
                </h4>
                <div className="vl-cardgrid__body">
                  La descarbonización ya no es solo una cuestión de reporte, sino una variable
                  crítica de estrategia, inversión y competitividad.
                  {"\n\n"}
                  <strong>Objetivo Global:</strong> Limitar el aumento de temperatura a 1,5°C (o
                  muy por debajo de 2°C).
                  {"\n\n"}
                  <strong>Impacto Empresarial:</strong> Los flujos financieros se orientan hacia
                  modelos bajos en carbono.
                  {"\n\n"}
                  <strong>Estrategia:</strong> La transición afecta directamente a la viabilidad del
                  modelo de negocio y a su capacidad de obtener financiación.
                </div>
              </article>

              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">02</span> Medición de la Huella: Los 3
                  Alcances
                </h4>
                <div className="vl-cardgrid__body">
                  Para gestionar la transición, es imperativo identificar el origen de las
                  emisiones. El Alcance 3 representa habitualmente la mayor parte de la huella
                  total.
                  {"\n\n"}
                  <strong>Alcance 1 (Directas):</strong> Emisiones de fuentes propias o bajo
                  control (combustión, procesos, fugas).
                  {"\n\n"}
                  <strong>Alcance 2 (Indirectas):</strong> Emisiones derivadas de la energía
                  comprada (electricidad, calor, vapor).
                  {"\n\n"}
                  <strong>Alcance 3 (Cadena de Valor):</strong> Emisiones fuera del perímetro
                  operativo (Upstream y Downstream).
                  {"\n\n"}
                  <strong>Sector Financiero:</strong> Se denominan "emisiones financiadas"
                  (préstamos e inversiones). Su exclusión debilita la credibilidad de cualquier
                  compromiso.
                  {"\n\n"}
                  <strong>Metodologías:</strong> PCAF (para medición de datos) y PACTA (para
                  alineamiento de carteras).
                </div>
              </article>

              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">03</span> Estrategia Net Zero y Objetivos
                  SBTi
                </h4>
                <div className="vl-cardgrid__body">
                  El concepto "Net Zero" no es una estrategia de compensación, sino de reducción
                  estructural profunda.
                  {"\n\n"}
                  <strong>Definición Real:</strong> Reducir emisiones al mínimo nivel posible y
                  neutralizar solo las residuales (las que no pueden eliminarse).
                  {"\n\n"}
                  <strong>Referencia SBTi:</strong>
                  {"\n"}
                  <strong>Corto plazo (2030):</strong> Recortes rápidos de aproximadamente el 50%.
                  {"\n"}
                  <strong>Largo plazo:</strong> Reducción estructural superior al 90%.
                  {"\n\n"}
                  <strong>Robustez:</strong> Un objetivo debe ser medible, con hitos intermedios y
                  palancas de reducción claras (no solo promesas).
                </div>
              </article>

              <article className="vl-cardgrid__item">
                <h4 className="vl-cardgrid__title">
                  <span className="vl-cardgrid__index">04</span> El Plan de Transición Climática
                </h4>
                <div className="vl-cardgrid__body">
                  Es la pieza que conecta la ambición climática con la operativa, el capital y la
                  gobernanza.
                  {"\n\n"}
                  <strong>Marcos de Referencia:</strong>
                  {"\n"}
                  <strong>TCFD:</strong> Foco en gobernanza y gestión de riesgos (físicos y de
                  transición).
                  {"\n"}
                  <strong>TPT:</strong> Estructura en pilares como fundamentos, implementación y
                  engagement.
                  {"\n"}
                  <strong>ESRS E1:</strong> Estándar europeo que exige detallar CapEx, inversiones y
                  riesgos de bloqueo (lock-in).
                  {"\n\n"}
                  <strong>Elementos Críticos:</strong> Un plan robusto requiere escenarios de
                  referencia, planificación financiera detallada y métricas de seguimiento
                  continuas.
                </div>
              </article>
            </div>
          ) : (
            <p>{para}</p>
          )}
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
  const isRegulatoryCallout =
    variant === "regulatory" &&
    text.includes("La regulación es uno de los principales factores que explican esta transición");
  const isBlock2RegulatoryCallout =
    variant === "regulatory" &&
    text.includes("La diferencia de contexto entre ambas geografías se ha acentuado en 2025 y 2026");
  const isBlock3RegulatoryCallout =
    variant === "regulatory" &&
    text.includes(
      "Aunque la valoración no depende directamente de un único marco regulatorio",
    );
  const isBlock4RegulatoryCallout =
    variant === "regulatory" &&
    text.includes(
      "La descarbonización se enmarca en el Acuerdo de París y en la necesidad de alinear actividades económicas",
    );
  const isInvestorRelationsCallout =
    variant === "ri" &&
    text.includes(
      "En este entorno, la función de Relaciones con Inversores asume un papel especialmente relevante",
    );
  const isBlock2InvestorRelationsCallout =
    variant === "ri" &&
    text.includes(
      "En este contexto, es necesario gestionar esta divergencia sin generar incoherencias.",
    );
  const isBlock3InvestorRelationsCallout =
    variant === "ri" &&
    text.includes(
      "La función de Relaciones con Inversores debe ser capaz de traducir los temas de sostenibilidad a lenguaje financiero y de mercado.",
    );
  const isBlock4InvestorRelationsCallout =
    variant === "ri" &&
    text.includes(
      "Relaciones con Inversores debe ser capaz de distinguir entre ambición climática y credibilidad climática.",
    );

  return (
    <aside className={`vl-callout vl-callout--${variant}`}>
      <h4 className="vl-callout__title">{title}</h4>
      {isRegulatoryCallout ? (
        <div className="vl-callout__text">
          <p>La regulación es uno de los principales factores que explican esta transición.</p>
          <ul>
            <li>
              <strong>Simplificación Normativa:</strong> Reordenación de las directivas CSRD y
              CSDDD mediante el paquete Ómnibus y mecanismos de pausa (stop-the-clock).
            </li>
            <li>
              <strong>Control de Ratings (2026):</strong> Nuevo régimen europeo para garantizar que
              las calificaciones externas sean íntegras y comparables.
            </li>
            <li>
              <strong>Exigencia del Mercado:</strong> El foco de transparencia se extiende de la
              empresa hacia los evaluadores externos.
            </li>
          </ul>
        </div>
      ) : isBlock3RegulatoryCallout ? (
        <div className="vl-callout__text">
          <p>
            📘 📊 Aunque la valoración no depende de un único marco regulatorio, el entorno
            normativo y de reporting eleva la exigencia de precisión, trazabilidad y consistencia
            del equity story.
          </p>
          <p>
            ✅ 🔎 La prioridad para las compañías es sostener mensajes verificables y comparables,
            alineando narrativa, datos y decisiones de capital ante inversores y reguladores.
          </p>
        </div>
      ) : isBlock4RegulatoryCallout ? (
        <div className="vl-callout__text">
          <p>
            La descarbonización se articula desde el <strong>Acuerdo de París</strong> y exige
            alinear <strong>actividad económica</strong> y <strong>flujos de capital</strong> con
            trayectorias de <strong>1,5°C</strong> (o por debajo de <strong>2°C</strong>).
          </p>
          <p>
            En este marco, la credibilidad depende de combinar <strong>medición rigurosa</strong>,
            <strong> objetivos Net Zero</strong> y un <strong>plan de transición</strong>
            financieramente viable y verificable.
          </p>
        </div>
      ) : isBlock2RegulatoryCallout ? (
        <div className="vl-callout__text">
          <p>
            La <strong>diferencia de contexto</strong> entre ambas geografías se ha acentuado en
            2025 y 2026. En <strong>Estados Unidos</strong>, la SEC votó en marzo de 2025 dejar de
            defender la regla de disclosure climático adoptada en 2024.
          </p>
          <p>
            En la <strong>Unión Europea</strong>, el marco regulatorio continúa, pero en clave de
            simplificación y ajuste de calendario mediante mecanismos como{" "}
            <strong>stop the clock</strong>.
          </p>
        </div>
      ) : isInvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            En este entorno, la función de Relaciones con Inversores adquiere un papel clave para
            conectar sostenibilidad y mercado.
          </p>
          <ul>
            <li>
              <strong>Traducción al lenguaje financiero:</strong> explicar la sostenibilidad con
              métricas y lógica de negocio.
            </li>
            <li>
              <strong>Materialidad para inversores:</strong> priorizar los temas con impacto real
              en riesgo, rentabilidad y valoración.
            </li>
            <li>
              <strong>Consistencia del relato:</strong> alinear lo que la empresa dice, reporta y
              ejecuta.
            </li>
            <li>
              <strong>Credibilidad ante el mercado:</strong> sostener mensajes claros, verificables
              y defendibles.
            </li>
          </ul>
        </div>
      ) : isBlock2InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            En este contexto, es necesario gestionar esta divergencia{" "}
            <strong>sin generar incoherencias</strong>. Esto implica{" "}
            <strong>adaptar el lenguaje</strong> y priorizar mejor los mensajes.
          </p>
          <p>
            También exige <strong>conectar sostenibilidad</strong> con variables de negocio y{" "}
            <strong>traducir una misma estrategia a expectativas de mercado diferentes</strong>.
          </p>
        </div>
      ) : isBlock3InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            La función de Relaciones con Inversores debe convertir la sostenibilidad en argumentos
            comprensibles y útiles para el mercado.
          </p>
          <ul>
            <li>
              <strong>Traducción financiera:</strong> expresar temas ESG en impacto sobre ingresos,
              márgenes, CapEx, riesgo y coste de capital.
            </li>
            <li>
              <strong>Priorización material:</strong> distinguir entre cuestiones
              <strong> reputacionales</strong> y factores realmente <strong>materiales</strong> para
              la tesis de inversión.
            </li>
            <li>
              <strong>Consistencia narrativa:</strong> alinear sostenibilidad con estrategia,
              métricas y asignación de recursos.
            </li>
            <li>
              <strong>Credibilidad ante inversores:</strong> sostener un relato verificable, claro
              y defendible en el tiempo.
            </li>
          </ul>
        </div>
      ) : isBlock4InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            Relaciones con Inversores debe diferenciar <strong>ambición climática</strong> de{" "}
            <strong>credibilidad climática</strong>, con mensajes claros para el mercado.
          </p>
          <p>
            Para ello, necesita explicar con rigor los <strong>alcances 1, 2 y 3</strong>, justificar
            la relevancia del <strong>alcance 3</strong> y conectar los compromisos con{" "}
            <strong>métricas verificables</strong> y un <strong>plan de transición</strong>
            financiable.
          </p>
        </div>
      ) : (
        <p className="vl-callout__text">{text}</p>
      )}
    </aside>
  );
}

function ClosingBanner({ text }: { text: string }) {
  const isTargetClosingText = text.includes(
    "La sostenibilidad sigue siendo relevante, pero en 2026",
  );
  const isBlock2ClosingText = text.includes(
    "La divergencia UE-EEUU no obliga a elegir entre dos relatos",
  );
  const isBlock4ClosingText = text.includes(
    "En descarbonización, la diferencia entre una promesa climática y una estrategia creíble",
  );

  return (
    <div className="vl-closing">
      <span className="vl-closing__tag">Takeaway</span>
      <p className="vl-closing__text">
        {isTargetClosingText ? (
          <>
            La sostenibilidad sigue siendo <strong>relevante</strong>, pero en 2026 solo{" "}
            <strong>genera valor narrativo y estratégico</strong> si está conectada con
            regulación, estrategia, financiación, riesgo y credibilidad de mercado.
          </>
        ) : isBlock2ClosingText ? (
          <>
            La divergencia UE-EEUU no obliga a elegir entre dos relatos, sino a{" "}
            <strong>construir una narrativa estratégica única, coherente y adaptable</strong>,
            capaz de responder a marcos de lectura distintos sin perder credibilidad.
          </>
        ) : isBlock4ClosingText ? (
          <>
            En descarbonización, la diferencia entre una <strong>promesa climática</strong> y una{" "}
            <strong>estrategia creíble</strong> no la marca el objetivo final, sino la calidad del
            camino: qué <strong>emisiones</strong> cubre, qué reduce primero, con qué{" "}
            <strong>métricas</strong>, en qué plazos y con qué <strong>gobernanza</strong>.
          </>
        ) : (
          text
        )}
      </p>
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
  const isTargetExtraNote = enrich.extraNote?.includes(
    "Este bloque debe ayudar a desmontar dos errores frecuentes.",
  );
  const isBlock2ExtraNote = enrich.extraNote?.includes(
    "Este bloque debe ayudar a evitar dos errores frecuentes.",
  );
  const isBlock3ExtraNote = enrich.extraNote?.includes(
    "Este bloque debe ayudar a desmontar varios errores frecuentes.",
  );
  const selectedBulbIdeas = new Set([
    "La sostenibilidad no desaparece; cambia de fase.",
    "La sostenibilidad deja de ser un ejercicio de posicionamiento reputacional, para convertirse en una variable económica y un test de credibilidad corporativa.",
    "El mercado exige menos relato vacío y más evidencia.",
    "La regulación no sólo obliga; también reordena la conversación con el mercado.",
    "La credibilidad se construye en la intersección entre narrativa, datos, estrategia y capital.",
    "La función de RI se convierte en un punto de convergencia entre sostenibilidad, finanzas, regulación y mercado.",
    "La divergencia entre Europa y Estados Unidos es real, pero no debe interpretarse de manera simplista.",
    "La respuesta correcta no es construir dos relatos incompatibles, sino una única arquitectura estratégica capaz de hablar en varios registros.",
    "En Europa pesa más el marco de reporting, comparabilidad y trazabilidad; en Estados Unidos pesa más la materialidad económica y la cautela frente a la sobrepolitización.",
    "La sostenibilidad debe integrarse en el equity story como una variable de negocio, riesgo y capital, no como una capa reputacional.",
    "La adaptación narrativa es una cuestión de sofisticación estratégica, no de oportunismo discursivo.",
    "La sostenibilidad solo entra de verdad en valoración cuando puede traducirse a variables económicas o estratégicas.",
    "No todo tema ESG es material para la tesis de inversión; hay que priorizar.",
    "La sostenibilidad puede afectar a ingresos, márgenes, CapEx, riesgo, coste de capital y resiliencia.",
    "Un equity story fuerte integra la sostenibilidad dentro de la historia de negocio; no la presenta como un capítulo separado.",
    "La credibilidad del relato depende de su capacidad para conectar sostenibilidad con decisiones, métricas y asignación de capital.",
    "El Acuerdo de París es el anclaje estratégico de toda la conversación sobre descarbonización.",
    "No puede hablarse con rigor de Net Zero sin explicar primero los alcances 1, 2 y 3 y, especialmente, el papel del alcance 3.",
    "Net Zero no es compensar; es reducir primero y neutralizar solo el residual.",
    "SBTi ayuda a ordenar objetivos, pero la credibilidad real depende del plan de transición.",
    "TCFD, TPT y ESRS E1 son marcos complementarios para estructurar una transición climática sólida.",
  ]);

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
              topicNumber={topic.number}
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
                  <li key={j} className={selectedBulbIdeas.has(idea) ? "vl-idea--bulb" : undefined}>
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {enrich.extraNote ? (
            <div className="vl-extra">
              <span className="vl-extra__tag">Contexto conceptual</span>
              {isTargetExtraNote ? (
                <>
                  <p>
                    Desmontando Errores sobre la Sostenibilidad
                  </p>
                  <ul className="vl-ideas__list">
                    <li>
                      <strong>Falso declive:</strong> La sostenibilidad no ha perdido relevancia por
                      ser más política o crítica; simplemente se está volviendo más exigente.
                    </li>
                    <li>
                      <strong>Falso retroceso:</strong> La regulación europea no retrocede, está en
                      un proceso de ajuste y simplificación para ser más útil.
                    </li>
                    <li>
                      <strong>Ajuste del sistema:</strong> El foco actual es la comparabilidad, la
                      diferenciación por geografías y el escrutinio de los datos.
                    </li>
                    <li>
                      <strong>Clave de éxito 2026:</strong> Ya no se premia el discurso vacío, sino
                      una narrativa de mercado que sea coherente, material y defendible.
                    </li>
                  </ul>
                </>
              ) : isBlock2ExtraNote ? (
                <>
                  <p>Claves para interpretar la divergencia UE-EEUU sin simplificaciones.</p>
                  <ul className="vl-ideas__list">
                    <li>
                      <strong>Error 1:</strong> no hay que elegir entre estrategia "pro" o "anti"
                      sostenibilidad.
                    </li>
                    <li>
                      <strong>Error 2:</strong> la divergencia regulatoria no exige relatos
                      contradictorios.
                    </li>
                    <li>
                      <strong>Lectura correcta:</strong> construir una arquitectura estratégica
                      única con adaptación por geografía.
                    </li>
                    <li>
                      <strong>Clave de ejecución:</strong> integrar sostenibilidad en negocio,
                      riesgo, capital y narrativa de mercado.
                    </li>
                  </ul>
                </>
              ) : isBlock3ExtraNote ? (
                <>
                  <p>Errores frecuentes al integrar sostenibilidad en valoración.</p>
                  <ul className="vl-ideas__list">
                    <li>
                      <strong>Error 1:</strong> pensar que la sostenibilidad entra en valoración
                      solo por reputación.
                    </li>
                    <li>
                      <strong>Error 2:</strong> asumir que cualquier tema ESG es automáticamente
                      material para inversión.
                    </li>
                    <li>
                      <strong>Error 3:</strong> tratar ESG como un capítulo separado del negocio y
                      no como parte del equity story.
                    </li>
                    <li>
                      <strong>Enfoque correcto:</strong> conectar sostenibilidad con métricas
                      financieras, decisiones de capital y capacidad de ejecución.
                    </li>
                  </ul>
                </>
              ) : (
                <p>{enrich.extraNote}</p>
              )}
            </div>
          ) : null}
        </div>
      )}

    </section>
  );
}

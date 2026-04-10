import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import type { MainBlock, TopicPresentation } from "../../types/presentation";
import { CaseStudyDeck } from "./CaseStudyDeck";

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
      <div className="vl-objective__card">
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

function CardGrid({
  items,
  k,
  stacked = false,
  balanced = false,
  showIndex = false,
  topicNumber,
}: {
  items: { title: string; body: string }[];
  k: string;
  stacked?: boolean;
  balanced?: boolean;
  showIndex?: boolean;
  topicNumber?: number;
}) {
  const renderInlineBold = (text: string) => {
    const parts = text.split(/(\*\*.+?\*\*)/g);
    return parts.map((part, idx) => {
      const isBold = part.startsWith("**") && part.endsWith("**");
      if (!isBold) {
        return <span key={idx}>{part}</span>;
      }
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    });
  };

  const renderBody = (body: string) =>
    body.split("\n").map((line, idx, arr) => {
      const trimmed = line.trim();
      const isIndentedSubBullet = /^\*\*(sustainable|transition|ESG basics)\*\*/i.test(trimmed);
      const isMiddotBullet = trimmed.startsWith("·");

      let normalizedLine = line;
      if (isIndentedSubBullet) {
        normalizedLine = line.replace(/^\s*·\s*/, "");
      } else if (isMiddotBullet) {
        normalizedLine = line.replace(/^\s*·\s*/, "");
      }

      const lineClass = [
        "vl-cardgrid__line",
        isIndentedSubBullet ? "vl-cardgrid__line--subbullet" : "",
        isMiddotBullet ? "vl-cardgrid__line--bullet" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return (
      <span
        key={idx}
        className={lineClass}
      >
        {isIndentedSubBullet ? (
          <span className="vl-cardgrid__subbullet-marker" aria-hidden="true" />
        ) : null}
        {isMiddotBullet ? (
          <span className="vl-cardgrid__bullet-dot" aria-hidden="true" />
        ) : null}
        <span className="vl-cardgrid__line-text">
          {renderInlineBold(normalizedLine.trim())}
        </span>
        {idx < arr.length - 1 ? <br /> : null}
      </span>
      );
    });

  return (
    <div
      className={`vl-cardgrid${stacked ? " vl-cardgrid--stacked" : ""}${balanced ? " vl-cardgrid--balanced" : ""}`}
    >
      {items.map((it, j) => (
        <article key={`${k}-${j}`} className="vl-cardgrid__item">
          <h4 className="vl-cardgrid__title">
            {showIndex ? (
              <span className="vl-cardgrid__index">{String(j + 1).padStart(2, "0")}</span>
            ) : null}
            {it.title}
          </h4>
          {topicNumber === 7 &&
          /doble materialidad/i.test(it.title) ? (
            <img
              className="vl-cardgrid__image vl-cardgrid__image--doble-materialidad"
              src="/images/doble-materialidad.png"
              alt="Doble materialidad: materialidad de impacto y materialidad financiera, con evaluación de efectos financieros y de impactos."
              loading="lazy"
            />
          ) : null}
          <div className="vl-cardgrid__body">{renderBody(it.body)}</div>
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
  const renderInlineBold = (value: string) => {
    const parts = value.split(/(\*\*.+?\*\*)/g);
    return parts.map((part, idx) => {
      const isBold = part.startsWith("**") && part.endsWith("**");
      if (!isBold) {
        return <span key={idx}>{part}</span>;
      }
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    });
  };

  const renderCalloutText = (value: string) => {
    const normalized = value.trim();
    if (normalized.includes("·")) {
      const items = normalized
        .split(/\s*·\s+/)
        .map((item) => item.trim())
        .filter(Boolean);
      if (items.length > 1) {
        return (
          <div className="vl-callout__text">
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>{renderInlineBold(item)}</li>
              ))}
            </ul>
          </div>
        );
      }
    }

    return <p className="vl-callout__text">{renderInlineBold(value)}</p>;
  };

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
            <strong>Valoración y regulación:</strong> ningún marco determina por sí solo la tesis de
            inversión, pero el conjunto <strong>CSRD</strong>, <strong>ESRS</strong>,{" "}
            <strong>Taxonomía</strong>, <strong>SFDR</strong> y las expectativas de analistas fijan
            el estándar de <strong>prueba</strong>, <strong>comparabilidad</strong> y{" "}
            <strong>trazabilidad</strong> del relato.
          </p>
          <ul>
            <li>
              <strong>Equity story:</strong> las afirmaciones sobre sostenibilidad deben ser
              coherentes entre <strong>narrativa</strong>, <strong>datos</strong> auditables,{" "}
              <strong>planes de transición</strong>, <strong>riesgos climáticos</strong> y lo
              reportado frente a pares del sector.
            </li>
            <li>
              <strong>Doble materialidad y reporting:</strong> mayor escrutinio sobre{" "}
              <strong>emisiones</strong>, <strong>gobernanza</strong> del dato y consistencia entre
              documentos de registro, informe anual y comunicación con el mercado.
            </li>
            <li>
              <strong>Prioridad operativa:</strong> mensajes <strong>verificables</strong> y{" "}
              <strong>comparables</strong>; alinear <strong>roadshows</strong> y decisiones de{" "}
              <strong>capital</strong> con lo que la estrategia y las métricas soportan realmente.
            </li>
          </ul>
        </div>
      ) : isBlock4RegulatoryCallout ? (
        <div className="vl-callout__text">
          <p>
            La descarbonización se enmarca en el <strong>Acuerdo de París</strong> (mantener el
            calentamiento muy por debajo de <strong>2 °C</strong> y esfuerzos hacia{" "}
            <strong>1,5 °C</strong>) y en la orientación de <strong>flujos financieros</strong> hacia
            trayectorias bajas en carbono.
          </p>
          <ul>
            <li>
              <strong>Actividad y capital:</strong> alinear <strong>estrategia</strong>,{" "}
              <strong>inversión</strong> y <strong>financiación</strong> con trayectorias
              compatibles con la transición; el clima deja de ser solo “reporting” y pasa a
              condicionar <strong>asignación de capital</strong> y <strong>competitividad</strong>.
            </li>
            <li>
              <strong>Marcos de disclosure:</strong> conexión práctica entre{" "}
              <strong>TCFD</strong>, <strong>CDP</strong>, <strong>EU Taxonomía</strong>,{" "}
              <strong>CSRD</strong>, <strong>SFDR</strong> y, en la UE, <strong>ESRS E1</strong>{" "}
              (objetivos, plan de transición, emisiones alcances 1–2–3, acciones e inversiones).
            </li>
            <li>
              <strong>Credibilidad:</strong> combinar <strong>inventarios</strong> de emisiones,
              objetivos basados en ciencia donde aplique (<strong>SBTi</strong>),{" "}
              <strong>plan de transición</strong> financieramente viable y <strong>gobernanza</strong>{" "}
              del dato climático.
            </li>
          </ul>
        </div>
      ) : isBlock2RegulatoryCallout ? (
        <div className="vl-callout__text">
          <p>
            La <strong>diferencia de contexto</strong> entre <strong>UE</strong> y{" "}
            <strong>EEUU</strong> se ha acentuado en{" "}
            <strong>2025 y 2026</strong>: no es solo “más o menos regulación”, sino{" "}
            <strong>lógicas distintas</strong> de materialidad, enforcement y presión del mercado.
          </p>
          <ul>
            <li>
              <strong>Estados Unidos:</strong> en marzo de 2025 la <strong>SEC</strong> votó dejar de
              defender la regla federal de <strong>disclosure climático</strong> de 2024; refleja
              menor impulso normativo federal en clima y mayor peso del debate político y judicial.
            </li>
            <li>
              <strong>Unión Europea:</strong> el marco de sostenibilidad <strong>se mantiene</strong>,
              pero con <strong>simplificación</strong> y calendario ajustado:{" "}
              <strong>paquete Ómnibus</strong>, <strong>stop-the-clock</strong> (p. ej. CSRD/CSDDD) y
              revisión propuesta del <strong>SFDR</strong> (noviembre 2025) orientan a
              comparabilidad y reducción de carga de cumplimiento.
            </li>
            <li>
              <strong>Lectura para emisores:</strong> la divergencia exige <strong>precisión</strong>{" "}
              (qué norma aplica a dónde), <strong>un solo relato estratégico</strong> con
              formulaciones adaptadas por jurisdicción y sin contradicciones entre capital markets
              day, reporting y filiales.
            </li>
          </ul>
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
            En este contexto, RI debe gestionar la <strong>divergencia UE–EEUU</strong>{" "}
            <strong>sin generar incoherencias</strong>: una sola <strong>estrategia</strong>,{" "}
            <strong>mensajes</strong> coherentes y matices adecuados por audiencia.
          </p>
          <ul>
            <li>
              <strong>Arquitectura del relato:</strong> evitar “dos estrategias”; lo que cambia es
              el <strong>énfasis</strong> (materialidad financiera, reporting, riesgo regulatorio)
              según foro y jurisdicción.
            </li>
            <li>
              <strong>Lenguaje y priorización:</strong> <strong>adaptar el lenguaje</strong> sin
              contradecir el informe reglado; priorizar <strong>qué métricas</strong> y{" "}
              <strong>qué riesgos</strong> lideran el mensaje en cada mercado.
            </li>
            <li>
              <strong>Conexión con el negocio:</strong> vincular sostenibilidad a{" "}
              <strong>creación de valor</strong>,               <strong>riesgo</strong>, <strong>CapEx</strong> y{" "}
              <strong>posicionamiento competitivo</strong>; preparar Q&amp;A sobre brechas entre
              narrativa y datos.
            </li>
            <li>
              <strong>Engagement:</strong> coordinar con <strong>finanzas</strong> y{" "}
              <strong>sostenibilidad</strong> para que roadshows, filings y comunicación
              corporativa digan lo mismo en el fondo.
            </li>
          </ul>
        </div>
      ) : isBlock3InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            La función de Relaciones con Inversores debe convertir la sostenibilidad en{" "}
            <strong>argumentos</strong> comprensibles y <strong>útiles</strong> para la valoración y
            la tesis de inversión; no en un anexo de marketing.
          </p>
          <ul>
            <li>
              <strong>Traducción financiera:</strong> expresar temas ESG como impacto en{" "}
              <strong>ingresos</strong>, <strong>márgenes</strong>, <strong>CapEx</strong>,{" "}
              <strong>riesgo</strong>, <strong>apalancamiento</strong> y <strong>coste de capital</strong>.
            </li>
            <li>
              <strong>Materialidad para inversores:</strong> separar ruido{" "}
              <strong>reputacional</strong> de factores que pueden mover{" "}
              <strong>modelos</strong>, <strong>márgenes</strong> o <strong>riesgo</strong> de forma
              demostrable.
            </li>
            <li>
              <strong>Equity story integrado:</strong> la sostenibilidad entra donde{" "}
              <strong>refuerza</strong> la historia de negocio (crecimiento, márgenes, riesgo,
              resiliencia); evitar <strong>boilerplate</strong> o listados de iniciativas sin
              vínculo con la tesis.
            </li>
            <li>
              <strong>Consistencia:</strong> alinear mensajes con <strong>reporting</strong>,{" "}
              <strong>orientación</strong> de la dirección y <strong>asignación de capital</strong>{" "}
              comunicada al mercado.
            </li>
            <li>
              <strong>Credibilidad:</strong> mensajes <strong>verificables</strong>, claros sobre{" "}
              <strong>limitaciones</strong> y <strong>supuestos</strong> (escenarios, métricas,
              alcance de datos).
            </li>
          </ul>
        </div>
      ) : isBlock4InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            Relaciones con Inversores debe distinguir de forma explícita{" "}
            <strong>ambición climática</strong> (objetivos, compromisos públicos) de{" "}
            <strong>credibilidad climática</strong> (trayectoria, datos, plan y ejecución).
          </p>
          <ul>
            <li>
              <strong>Alcances 1, 2 y 3:</strong> explicar <strong>qué</strong> se incluye en cada
              uno, <strong>incertidumbre</strong> y <strong>criticidad</strong> del{" "}
              <strong>alcance 3</strong> en la industria o modelo de negocio.
            </li>
            <li>
              <strong>Objetivos y trayectoria:</strong> cómo se vinculan <strong>SBTi</strong> u
              otros objetivos con <strong>hitos</strong>, <strong>palancas</strong> y{" "}
              <strong>inversión</strong>; evitar “Net Zero” como etiqueta sin secuencia de
              reducción creíble.
            </li>
            <li>
              <strong>Plan de transición:</strong> conectar compromisos con{" "}
              <strong>CapEx</strong>, <strong>OpEx</strong>, <strong>cadena de valor</strong>,{" "}
              <strong>riesgos</strong> y <strong>gobernanza</strong>; lo que el mercado valora es
              ejecutabilidad, no solo el objetivo final.
            </li>
            <li>
              <strong>Mercado y supervisión:</strong> preparar Q&amp;A sobre{" "}
              <strong>brechas</strong> entre narrativa y datos, y sobre cómo se miden y auditan las
              emisiones y el progreso.
            </li>
          </ul>
        </div>
      ) : (
        renderCalloutText(text)
      )}
    </aside>
  );
}

function ClosingBanner({ text }: { text: string }) {
  const renderInlineBold = (value: string) => {
    const parts = value.split(/(\*\*.+?\*\*)/g);
    return parts.map((part, idx) => {
      const isBold = part.startsWith("**") && part.endsWith("**");
      if (!isBold) {
        return <span key={idx}>{part}</span>;
      }
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    });
  };

  const extractGroupedBullets = (value: string) => {
    const normalized = value.trim();
    if (!normalized.includes("·")) {
      return null;
    }
    const items = normalized
      .split(/\s*·\s+/)
      .map((item) => item.trim())
      .filter(Boolean);
    if (items.length <= 1) {
      return null;
    }
    const groups: { title: string; points: string[] }[] = [];
    const titlePattern = /^\*\*(CSRD|Taxonomía|SFDR)\*\*$/i;
    for (const item of items) {
      if (titlePattern.test(item)) {
        groups.push({ title: item, points: [] });
        continue;
      }
      if (groups.length > 0) {
        groups[groups.length - 1].points.push(item);
      }
    }
    if (groups.length > 0) {
      return { groups, items };
    }
    return { groups: [], items };
  };

  const groupedData = extractGroupedBullets(text);

  const renderGrouped = (groups: { title: string; points: string[] }[]) => (
    <div className="vl-closing__text vl-closing__text--grouped">
      {groups.map((group, gIdx) => (
        <div key={gIdx} className="vl-closing__group">
          <p className="vl-closing__group-title">{renderInlineBold(group.title)}</p>
          <ul className="vl-closing__group-list">
            {group.points.map((point, pIdx) => (
              <li key={`${gIdx}-${pIdx}`}>{renderInlineBold(point)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderClosingText = (value: string) => {
    if (groupedData?.groups.length) {
      return renderGrouped(groupedData.groups);
    }
    if (groupedData?.items.length) {
      return (
        <div className="vl-closing__text">
          <ul>
            {groupedData.items.map((item, idx) => (
              <li key={idx}>{renderInlineBold(item)}</li>
            ))}
          </ul>
        </div>
      );
    }
    return <p className="vl-closing__text">{renderInlineBold(value)}</p>;
  };

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
      {isTargetClosingText ? (
        <p className="vl-closing__text">
          <>
            La sostenibilidad sigue siendo <strong>relevante</strong>, pero en 2026 solo{" "}
            <strong>genera valor narrativo y estratégico</strong> si está conectada con
            regulación, estrategia, financiación, riesgo y credibilidad de mercado.
          </>
        </p>
      ) : isBlock2ClosingText ? (
        <div className="vl-closing__text">
          <p>
            La divergencia UE-EEUU no obliga a elegir entre dos relatos, sino a{" "}
            <strong>una narrativa estratégica única</strong>, coherente y adaptable, capaz de
            responder a <strong>marcos de lectura distintos</strong> sin perder credibilidad.
          </p>
          <ul>
            <li>
              <strong>Una estrategia, varios registros:</strong> el núcleo del plan de negocio y de
              sostenibilidad es el mismo; cambian el énfasis y el nivel de detalle normativo según
              audiencia (UE vs EEUU).
            </li>
            <li>
              <strong>Coherencia documental:</strong> alinear comunicación al mercado, reporting y
              mensajes de dirección para evitar grietas entre lo dicho en roadshows y lo soportado
              por datos.
            </li>
            <li>
              <strong>Materialidad y prudencia:</strong> priorizar variables que mueven valoración
              (riesgo, márgenes, CapEx, coste de capital) y evitar sobrepromesas en foros con
              distinta sensibilidad regulatoria.
            </li>
            <li>
              <strong>Credibilidad:</strong> credibilidad no es “adecuar el discurso a cada
              jurisdicción a cualquier precio”, sino <strong>explicar con rigor</strong> la
              estrategia bajo distintas lentes de mercado.
            </li>
          </ul>
        </div>
      ) : isBlock4ClosingText ? (
        <p className="vl-closing__text">
          <>
            En descarbonización, la diferencia entre una <strong>promesa climática</strong> y una{" "}
            <strong>estrategia creíble</strong> no la marca el objetivo final, sino la calidad del
            camino: qué <strong>emisiones</strong> cubre, qué reduce primero, con qué{" "}
            <strong>métricas</strong>, en qué plazos y con qué <strong>gobernanza</strong>.
          </>
        </p>
      ) : (
        renderClosingText(text)
      )}
    </div>
  );
}

function renderMainBlock(block: MainBlock, i: number, topicNumber: number) {
  const k = `b${i}`;
  switch (block.type) {
    case "objective":
      return <ObjectiveCard key={i} k={k} text={block.text} />;
    case "narrative":
      return <NarrativeStack key={i} k={k} paragraphs={block.paragraphs} />;
    case "cards":
      return (
        <CardGrid
          key={i}
          k={k}
          items={block.items}
          balanced={
            topicNumber === 5 ||
            topicNumber === 6 ||
            topicNumber === 7 ||
            topicNumber === 8 ||
            topicNumber === 9
          }
          showIndex={
            topicNumber === 5 ||
            topicNumber === 6 ||
            topicNumber === 7 ||
            topicNumber === 8 ||
            topicNumber === 9
          }
          topicNumber={topicNumber}
        />
      );
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
    case "caseStudyDeck":
      return <CaseStudyDeck key={i} block={block} />;
    default:
      return null;
  }
}

type Props = {
  topic: TopicPresentation;
  /** Cuando solo se muestra un bloque en el panel principal (vista paginada). */
  singleView?: boolean;
};

export function TopicLanding({ topic, singleView = false }: Props) {
  const { enrich } = topic;

  return (
    <section
      className={`landing-topic${singleView ? " landing-topic--single" : ""}`}
      id={`bloque-${topic.number}`}
      aria-labelledby={`topic-title-${topic.number}`}
    >
      <header className="landing-topic__hero">
        <div className="landing-topic__meta">
          <span className="landing-topic__num">Bloque {topic.number}</span>
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
          {topic.main.map((b, i) => renderMainBlock(b, i, topic.number))}
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

      {enrich.keyIdeas.length > 0 ? (
        <div className="landing-topic__enrich">
          <div className="vl-ideas">
            <span className="vl-ideas__tag">Ideas clave</span>
            <ul className="vl-ideas__list">
              {enrich.keyIdeas.map((idea, j) => (
                <li key={j}>{idea}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

    </section>
  );
}

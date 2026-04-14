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

/** Bloque 5: una frase de definición por CSRD, Taxonomía y SFDR (antes de las tarjetas de detalle). */
function Block5BriefDefinitions() {
  const items = [
    {
      code: "CSRD",
      subtitle: "Directiva (UE) 2022/2464",
      text: "Obliga a publicar una **declaración de sostenibilidad** integrada en la información de gestión, elaborada con arreglo a los **ESRS**: doble materialidad, riesgos y oportunidades de sostenibilidad, e impactos en personas y medio ambiente.",
    },
    {
      code: "Taxonomía UE",
      subtitle: "Reglamento (UE) 2020/852",
      text: "Establece **cuándo una actividad económica** puede considerarse **ambientalmente sostenible**, mediante criterios técnicos, **contribución sustancial**, **DNSH**, **garantías mínimas** y umbrales sectoriales (actos delegados).",
    },
    {
      code: "SFDR",
      subtitle: "Reglamento (UE) 2019/2088",
      text: "Exige **transparencia** sobre la integración de **riesgos de sostenibilidad** y sobre las **características u objetivos de sostenibilidad** de los **productos financieros** (marco de los artículos **6**, **8** y **9**).",
    },
  ];

  const renderRich = (s: string) => {
    const parts = s.split(/(\*\*.+?\*\*)/g);
    return parts.map((part, idx) => {
      const isBold = part.startsWith("**") && part.endsWith("**");
      if (!isBold) return <span key={idx}>{part}</span>;
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    });
  };

  return (
    <section className="vl-triad-brief" aria-label="Definición breve de CSRD, Taxonomía y SFDR">
      <h4 className="vl-triad-brief__title">Definición breve</h4>
      <div className="vl-triad-brief__grid">
        {items.map((it) => (
          <article key={it.code} className="vl-triad-brief__card">
            <header className="vl-triad-brief__head">
              <span className="vl-triad-brief__code">{it.code}</span>
              <span className="vl-triad-brief__sub">{it.subtitle}</span>
            </header>
            <p className="vl-triad-brief__text">{renderRich(it.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

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
  const isBlock4Scope3Paragraph = (value: string) =>
    value.startsWith("En muchas compañías, el alcance 3 concentra la mayor parte de la huella climática");

  return (
    <div className="vl-narrative">
      {paragraphs.map((para, j) => {
        if (isBlock3ValuationParagraph(para)) {
          return (
            <div key={`${k}-${j}`} className="vl-narrative__group">
              <div className="vl-narrative__card vl-narrative__card--no-left-accent">
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
                      El mercado no premia declaraciones generales; exige evidencia material,
                      métricas comparables, trazabilidad de resultados y consistencia con el relato
                      financiero.
                    </div>
                  </article>
                  <article className="vl-cardgrid__item">
                    <h4 className="vl-cardgrid__title">
                      <span className="vl-cardgrid__index">03</span> Equity story creíble
                    </h4>
                    <div className="vl-cardgrid__body">
                      Un equity story sólido integra sostenibilidad con estrategia competitiva,
                      asignación de capital y capacidad de ejecución para sostener valor a medio
                      plazo.
                    </div>
                  </article>
                  <article className="vl-cardgrid__item">
                    <h4 className="vl-cardgrid__title">
                      <span className="vl-cardgrid__index">04</span> Implicación para RI
                    </h4>
                    <div className="vl-cardgrid__body">
                      RI debe traducir los temas ESG a lenguaje inversor: mensajes claros,
                      verificables y útiles para explicar riesgos, oportunidades y calidad de
                      gestión.
                    </div>
                  </article>
                </div>
              </div>

              <section className="vl-rigor-panel" aria-label="Rigor analítico para valoración">
                <h4 className="vl-rigor-panel__title">Rigor analítico para valoración</h4>
                <ul className="vl-rigor-panel__list">
                  <li>
                    <strong>Mapeo financiero explícito:</strong> vincular cada tema ESG con su
                    mecanismo económico (ingresos, margen, CapEx, coste de capital, probabilidad de
                    pérdida) y con la línea de negocio donde se materializa.
                  </li>
                  <li>
                    <strong>Horizonte temporal y sensibilidad:</strong> separar impacto de corto,
                    medio y largo plazo, e identificar drivers de sensibilidad que puedan alterar la
                    tesis (precio de carbono, coste energético, prima de financiación, etc.).
                  </li>
                  <li>
                    <strong>Evidencia y trazabilidad:</strong> soportar el relato con KPIs
                    auditables, series históricas, benchmarks sectoriales y consistencia entre
                    reporting y comunicación al mercado.
                  </li>
                  <li>
                    <strong>Materialidad cuantificada:</strong> priorizar asuntos por magnitud,
                    probabilidad y velocidad de impacto, explicando el efecto esperado en EBITDA,
                    cash flow y perfil de riesgo.
                  </li>
                  <li>
                    <strong>Disciplina de ejecución:</strong> mostrar cómo objetivos, milestones,
                    decisiones de inversión y gobernanza se traducen en resultados medibles.
                  </li>
                  <li>
                    <strong>Lectura para analistas:</strong> anticipar preguntas de materialidad
                    financiera, comparabilidad entre pares, calidad de la guía estratégica y
                    consistencia entre mensajes y resultados trimestrales.
                  </li>
                </ul>
              </section>
            </div>
          );
        }

        return (
        <div
          key={`${k}-${j}`}
          className={
            isBlock4DecarbonizationParagraph(para)
              ? "vl-narrative__card vl-narrative__card--no-left-accent"
              : "vl-narrative__card"
          }
        >
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
            <>
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

              <div className="vl-pillars">
                <span className="vl-pillars__label">Rigor analítico para valoración</span>
                <ul className="vl-pillars__list">
                  <li>
                    Aterrizar cada mensaje ESG en una <strong>palanca financiera</strong> concreta:
                    ingresos, márgenes, CapEx, riesgo y coste de capital.
                  </li>
                  <li>
                    Diferenciar <strong>afirmaciones</strong> de <strong>evidencia</strong>:
                    métricas auditables, series temporales y comparabilidad sectorial.
                  </li>
                  <li>
                    Explicar <strong>materialidad</strong> con causalidad: qué impacto económico
                    tiene, en qué horizonte y con qué sensibilidad.
                  </li>
                  <li>
                    Mantener coherencia entre <strong>equity story</strong>, guidance, plan de
                    transición y decisiones de asignación de capital.
                  </li>
                </ul>
              </div>
            </>
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
          ) : isBlock4Scope3Paragraph(para) ? (
            <>
              <p>
                <strong>Cálculo de huella climática: operacional y financiada</strong>
              </p>
              <ul>
                <li>
                  El primer paso es medir de forma robusta la huella operacional:
                  <strong> alcance 1</strong> (directas), <strong>alcance 2</strong> (energía
                  comprada) y <strong>alcance 3</strong> (cadena de valor).
                </li>
                <li>
                  En muchas compañías, y de forma muy clara en entidades financieras, el alcance 3
                  concentra una parte sustancial de la huella y condiciona la credibilidad del
                  compromiso climático.
                </li>
                <li>
                  En el sector financiero, el análisis debe incorporar además la{" "}
                  <strong>huella financiada</strong> (préstamos, inversiones y otras exposiciones),
                  con metodologías como <strong>PCAF</strong> para medición y <strong>PACTA</strong>{" "}
                  para alineamiento de cartera.
                </li>
                <li>
                  Métricas de referencia: intensidad de emisiones, mix tecnológico y volumen de
                  producción por tecnología.
                </li>
              </ul>

              <p>
                <strong>Objetivos de reducción y Net Zero</strong>
              </p>
              <ul>
                <li>
                  Los objetivos deben definir año base, horizonte temporal, alcances cubiertos,
                  métrica (absoluta o de intensidad), hitos intermedios y palancas de reducción.
                </li>
                <li>
                  Conviene distinguir objetivos de <strong>corto, medio y largo plazo</strong> para
                  evitar metas genéricas y poder monitorizar avances reales con revisión periódica.
                </li>
                <li>
                  Cada objetivo debe estar vinculado a <strong>responsables internos</strong>,
                  presupuesto, calendario de ejecución y criterios de seguimiento para facilitar la
                  rendición de cuentas.
                </li>
                <li>
                  <strong>Net Zero</strong> implica reducir emisiones al nivel más bajo posible y
                  neutralizar solo las residuales que no puedan eliminarse.
                </li>
                <li>
                  En términos operativos, hay que separar explícitamente{" "}
                  <strong>reducción absoluta</strong>, <strong>mejoras de intensidad</strong> y
                  medidas de neutralización para no mezclar efectos en la lectura del progreso.
                </li>
                <li>
                  <strong>SBTi</strong> ordena la ambición en línea con la ciencia climática:
                  recortes rápidos a corto plazo, reducción estructural superior al 90% en el largo
                  plazo y neutralización final de residuales.
                </li>
                <li>
                  Para reforzar la credibilidad externa, es clave publicar el{" "}
                  <strong>punto de partida</strong>, las hipótesis críticas y las desviaciones frente
                  a objetivos junto con acciones correctoras.
                </li>
                <li>
                  La credibilidad depende de la secuencia de reducción, del tratamiento riguroso del
                  alcance 3 y de distinguir reducción real, remoción residual y actuaciones más allá
                  de la cadena de valor.
                </li>
              </ul>

              <figure className="vl-inline-image vl-inline-image--sbti">
                <img
                  src="/images/SBTi.png"
                  alt="Esquema SBTi de transición hacia cero emisiones netas con hitos de corto y largo plazo."
                  loading="lazy"
                />
              </figure>

              <div className="vl-sbti-note">
                <p className="vl-sbti-note__intro">
                  Como referencia operativa, este esquema resume los cuatro componentes que suelen
                  estructurar una trayectoria Net Zero alineada con SBTi:
                </p>
                <ol className="vl-sbti-note__list">
                  <li>
                    <strong>Establecer objetivos de reducción de emisiones a corto plazo (SBT):</strong>{" "}
                    objetivos de reducción de emisiones a 5-10 años en consonancia con las
                    trayectorias de 1,5 °C.
                  </li>
                  <li>
                    <strong>Establecer objetivos de reducción de emisiones a largo plazo (SBT):</strong>{" "}
                    fijarse como objetivo reducir las emisiones a un nivel residual acorde con los
                    escenarios de 1,5 °C a más tardar en 2050.
                  </li>
                  <li>
                    <strong>Mitigación más allá de la cadena de valor:</strong> en la transición hacia
                    las cero emisiones netas, las empresas deben tomar medidas para mitigar las
                    emisiones más allá de sus cadenas de valor. Por ejemplo, adquiriendo créditos
                    REDD+ jurisdiccionales de alta calidad o invirtiendo en la captura directa de aire
                    (DAC) y el almacenamiento geológico.
                  </li>
                  <li>
                    <strong>Neutralización de las emisiones residuales:</strong> los GEI liberados a la
                    atmósfera una vez que la empresa haya alcanzado su SBT a largo plazo deben
                    contrarrestarse mediante la eliminación y el almacenamiento permanentes del carbono
                    de la atmósfera.
                  </li>
                </ol>
              </div>

              <p>
                <strong>Plan de transición climática robusto</strong>
              </p>
              <ul>
                <li>
                  El plan de transición convierte los objetivos de reducción en una hoja de ruta
                  operativa, conectando la ambición climática con estrategia, operaciones, cadena de
                  valor, asignación de capital y gobernanza.
                </li>
                <li>
                  <strong>TCFD:</strong> estructura la respuesta en{" "}
                  <strong>gobernanza</strong>, <strong>estrategia</strong>,{" "}
                  <strong>gestión del riesgo</strong> y <strong>métricas/objetivos</strong>;
                  distingue riesgos <strong>físicos</strong> y de <strong>transición</strong>, y
                  exige explicar cómo estos riesgos y oportunidades se integran en el{" "}
                  <strong>plan financiero</strong>, en <strong>escenarios de resiliencia</strong> y
                  en la <strong>asignación de capital</strong>.
                </li>
                <li>
                  <strong>TPT:</strong> refuerza el vínculo entre objetivos de reducción y ejecución
                  real, estructurando la transición en fundamentos, estrategia de implementación,
                  engagement, métricas y objetivos, y gobernanza.
                </li>
                <li>
                  <strong>ESRS E1:</strong> exige objetivos, palancas, acciones, inversiones,
                  financiación, dependencias y riesgos de lock-in.
                </li>
                <li>
                  Elementos mínimos: medición sólida de emisiones, análisis de riesgos y
                  oportunidades, escenarios, objetivos claros, palancas identificadas, planificación
                  financiera y CapEx, gobernanza definida y métricas de seguimiento.
                </li>
                <li>Esta lógica aplica tanto a corporates como a entidades financieras.</li>
              </ul>
            </>
          ) : (
            <p>{para}</p>
          )}
        </div>
        );
      })}
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
  const isBlock5RegulatoryCallout =
    variant === "regulatory" &&
    (text.includes("CSRD: sigue siendo la base del reporting corporativo") ||
      text.includes("**CSRD**: sigue siendo la base del reporting corporativo"));
  const isBlock6RegulatoryCallout =
    variant === "regulatory" &&
    text.includes("1) Punto de partida: qué decía la CSDDD original");
  const isBlock7RegulatoryCallout =
    variant === "regulatory" &&
    text.includes("EFRAG y material de implantación") &&
    text.includes("Ámbito español:");
  const isBlock8RegulatoryCallout =
    variant === "regulatory" &&
    text.includes("Disclosures Delegated Act") &&
    text.includes("art. 501a del CRR");
  const isBlock9RegulatoryCallout =
    variant === "regulatory" &&
    text.includes("2024/3005") &&
    text.includes("EU CTB");
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
  const isBlock7InvestorRelationsCallout =
    variant === "ri" &&
    text.includes("arquitectura del dato") &&
    text.includes("Señal de madurez");
  const isBlock9InvestorRelationsCallout =
    variant === "ri" &&
    text.includes("Tres planos que RI debe separar") &&
    text.includes("veredicto único");

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
        <div className="vl-callout__text vl-callout__text--block6-visual">
          <p className="vl-callout__visual-intro">
            Guía rápida: la descarbonización se lee en <strong>tres capas</strong> — el marco del{" "}
            <strong>Acuerdo de París</strong>, el <strong>encaje entre marcos de disclosure</strong>{" "}
            (global y UE) y el <strong>aterrizaje en España</strong> — y después en lo que el mercado
            trata como <strong>prueba</strong> frente a promesa (métricas, plan y gobernanza del dato).
          </p>

          <p className="vl-callout__section-head">Acuerdo de París: el anclaje político</p>
          <ul>
            <li>
              <strong>Objetivos de temperatura:</strong> mantener el aumento muy por debajo de{" "}
              <strong>2 °C</strong> y esfuerzos para limitarlo a <strong>1,5 °C</strong> respecto a
              niveles preindustriales.
            </li>
            <li>
              <strong>NDCs y ambición:</strong> las contribuciones nacionales y su revisión
              progresiva explican parte de la presión sobre empresas y finanzas: la transición no es
              solo decisión aislada de cada compañía, sino coherencia con trayectorias que se vuelven
              más exigentes.
            </li>
            <li>
              <strong>Flujos financieros:</strong> el tratado orienta la coherencia de{" "}
              <strong>inversión, financiación y asignación de capital</strong> con trayectorias
              resilientes y bajas en carbono; de ahí que el clima deje de ser solo “información
              voluntaria” y pase a condicionar <strong>estrategia y competitividad</strong>.
            </li>
          </ul>

          <p className="vl-callout__section-head">Convergencia de marcos (disclosure y mercado)</p>
          <p className="vl-callout__sublist-label">Globales y sectoriales</p>
          <ul>
            <li>
              <strong>TCFD / TPT:</strong> estructura de <strong>gobernanza</strong>,{" "}
              <strong>riesgos físicos y de transición</strong>, <strong>escenarios</strong> y vínculo
              con <strong>plan de transición</strong> y métricas.
            </li>
            <li>
              <strong>CDP:</strong> comparabilidad y benchmarking sectorial sobre clima (y cadena de
              valor) muy usado por inversores y bancos.
            </li>
          </ul>
          <p className="vl-callout__sublist-label">Unión Europea</p>
          <ul>
            <li>
              <strong>Taxonomía UE:</strong> criterios técnicos de elegibilidad y alineamiento para
              actividades económicas; conecta con narrativa de inversión sostenible y con exigencias
              de datos.
            </li>
            <li>
              <strong>CSRD + ESRS E1:</strong> el estándar europeo exige disclosure detallada sobre{" "}
              <strong>plan de transición</strong>, <strong>objetivos climáticos</strong>, emisiones de{" "}
              <strong>alcances 1, 2 y 3</strong>, <strong>acciones e inversiones</strong>,
              dependencias, <strong>riesgo de lock-in</strong> y progreso; el clima deja de ser una nota
              accesoria del informe.
            </li>
            <li>
              <strong>SFDR:</strong> transparencia en productos financieros hacia inversores
              (sostenibilidad principal/adverse impacts); en la práctica interactúa con el relato
              corporativo y con la calidad del dato subyacente.
            </li>
          </ul>

          <p className="vl-callout__section-head">España: referencia inmediata</p>
          <ul>
            <li>
              <strong>Ley 11/2018 (EINF):</strong> obligación de reportar información no financiera,
              con contenido específico sobre <strong>cambio climático</strong> (riesgos, políticas,
              resultados) en el marco del <strong>Estado de Información No Financiera</strong> /
              información consolidada no financiera.
            </li>
            <li>
              <strong>Ley 7/2021</strong> (cambio climático y transición energética): refuerza
              objetivos de descarbonización y neutralidad, planificación y{" "}
              <strong>integración del riesgo climático</strong> en decisiones públicas y empresariales.
            </li>
          </ul>

          <p className="vl-callout__section-head">Credibilidad: qué diferencia relato y estrategia</p>
          <ul>
            <li>
              <strong>Inventarios y fronteras:</strong> metodología explícita, revisión y cobertura de
              alcances; en finanzas, incorporar <strong>emisiones financiadas</strong> y, donde
              aplique, <strong>alineamiento de cartera</strong> (p. ej. PCAF / PACTA) además de la
              huella operativa.
            </li>
            <li>
              <strong>Objetivos y trayectoria:</strong> año base, horizontes, hitos, palancas de
              reducción; donde corresponda, referencia a <strong>SBTi</strong> u objetivos con lógica
              comparable.
            </li>
            <li>
              <strong>Plan de transición:</strong> coherencia entre narrativa, CapEx/OpEx, supuestos y
              riesgos; el mercado penaliza brechas entre lo declarado y lo que soportan las métricas.
            </li>
          </ul>

          <p className="vl-callout__section-head">Efectos que suelen importar al mercado</p>
          <ul>
            <li>
              <strong>Coherencia</strong> entre mensaje al inversor, reporting reglado y decisiones de
              capital.
            </li>
            <li>
              <strong>Tratamiento del alcance 3</strong> (y de la cadena de valor): omisiones o
              lecturas superficiales erosionan credibilidad.
            </li>
            <li>
              <strong>Gobernanza del dato climático</strong>: controles, auditoría/aseguramiento y
              trazabilidad de supuestos.
            </li>
          </ul>
        </div>
      ) : isBlock5RegulatoryCallout ? (
        <div className="vl-callout__text vl-callout__text--block6-visual">
          <p className="vl-callout__visual-intro">
            Guía rápida: el ecosistema de reporting UE se lee en <strong>tres pilares</strong> —{" "}
            <strong>CSRD/ESRS</strong> (información corporativa), <strong>Taxonomía</strong>{" "}
            (elegibilidad y alineamiento de actividades) y <strong>SFDR</strong> (transparencia de
            productos financieros) — y en cómo el <strong>paquete Ómnibus</strong> y los mecanismos de
            calendario (<strong>stop-the-clock</strong>, <strong>quick fix</strong>) modifican fechas y
            perímetro sin eliminar la lógica de transparencia.
          </p>

          <p className="vl-callout__section-head">CSRD</p>
          <ul>
            <li>
              La base sigue siendo la <strong>Directiva (UE) 2022/2464</strong>.
            </li>
            <li>
              Su aplicación se articula a través de los <strong>ESRS</strong>, adoptados por{" "}
              <strong>Reglamento Delegado (UE) 2023/2772</strong>.
            </li>
            <li>
              El mecanismo <strong>stop-the-clock</strong> se formalizó mediante la{" "}
              <strong>Directiva (UE) 2025/794</strong>, aplazando parte del calendario para compañías
              de segunda y tercera ola.
            </li>
            <li>
              Para primera ola, el <strong>quick fix</strong> se aprobó mediante el{" "}
              <strong>Reglamento Delegado (UE) 2025/1416</strong>, reduciendo carga de reporte sin
              eliminar la lógica de transparencia.
            </li>
          </ul>

          <p className="vl-callout__section-head">CSRD — implicación práctica</p>
          <ul>
            <li>Sigue siendo la columna vertebral del reporting corporativo.</li>
            <li>
              Lo que cambia es el calendario, el perímetro y el nivel de carga operativa.
            </li>
            <li>
              Con el paquete <strong>Omnibus 2025</strong>, la Comisión propuso concentrar el alcance
              en compañías de mayor tamaño y reducir significativamente el número de empresas
              obligadas a reportar.
            </li>
          </ul>

          <p className="vl-callout__section-head">Contexto de cambio normativo (paquete Ómnibus)</p>
          <ol>
            <li>
              <strong>Cambio de calendario: se retrasan las olas 2 y 3.</strong> El{" "}
              <strong>stop-the-clock</strong> difiere dos años la entrada de quienes debían reportar
              por primera vez en 2026 o 2027: la <strong>ola 2</strong> pasa a{" "}
              <strong>FY2027 / reporte 2028</strong> y la <strong>ola 3</strong> a{" "}
              <strong>FY2028 / reporte 2029</strong>.
            </li>
            <li>
              <strong>Cambio de perímetro: la CSRD deja de ser "tan amplia".</strong> El acuerdo
              final concentra la obligación en empresas de la UE con más de{" "}
              <strong>1.000 empleados</strong> y más de <strong>450 millones de euros</strong> de
              cifra de negocio neta anual.
              <ul>
                <li>Salen del perímetro muchas empresas que con la CSRD original sí reportaban.</li>
                <li>
                  Las <strong>pymes cotizadas</strong> dejan de estar en el alcance obligatorio.
                </li>
                <li>
                  El reporting se concentra en empresas de mayor tamaño y mayor capacidad de absorción
                  regulatoria.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cambio para grupos de terceros países.</strong> Solo aplica si el grupo matriz
              supera <strong>450 millones de euros</strong> de facturación neta en la UE y, además, la
              filial o sucursal en la UE supera <strong>200 millones de euros</strong>.
            </li>
            <li>
              <strong>
                Cambio en ESRS: menos carga y fin del impulso a estándares sectoriales obligatorios.
              </strong>{" "}
              El paquete Ómnibus no elimina los ESRS, pero cambia la dirección:
              <ul>
                <li>
                  revisión para reducir <strong>datapoints</strong>, aclarar disposiciones y mejorar
                  coherencia normativa;
                </li>
                <li>
                  los estándares sectoriales pasan a una lógica <strong>voluntaria</strong>, no de
                  obligación general futura.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Cambio transitorio para "wave 1": quick fix, aunque no stop-the-clock.
              </strong>{" "}
              La primera ola no quedó cubierta por el stop-the-clock; por eso el{" "}
              <strong>quick fix (julio 2025)</strong> permite mantener omisiones temporales en FY2025
              y FY2026 (incluidos ciertos efectos financieros anticipados) y extiende a empresas de
              primera ola con más de 750 empleados la mayoría de <strong>phase-ins</strong> antes
              reservados a compañías de hasta 750 empleados.
            </li>
          </ol>

          <p className="vl-callout__section-head">Taxonomía</p>
          <ul>
            <li>
              Sigue plenamente vigente sobre la base del{" "}
              <strong>Reglamento (UE) 2020/852</strong>.
            </li>
            <li>
              Se despliega mediante actos delegados clave:
              <ul>
                <li>
                  <strong>Reglamento Delegado (UE) 2021/2139:</strong> criterios técnicos para
                  mitigación y adaptación.
                </li>
                <li>
                  <strong>Reglamento Delegado (UE) 2021/2178:</strong> disclosures y KPIs del artículo
                  8.
                </li>
                <li>
                  <strong>Reglamento Delegado (UE) 2022/1214:</strong> acto complementario para
                  determinadas actividades de gas y nuclear.
                </li>
                <li>
                  <strong>Reglamento Delegado (UE) 2023/2486:</strong> criterios para los otros cuatro
                  objetivos ambientales.
                </li>
              </ul>
            </li>
          </ul>

          <p className="vl-callout__section-head">Taxonomía — implicación práctica</p>
          <ul>
            <li>No ha habido un "parón" equivalente al de CSRD.</li>
            <li>El foco sigue en elegibilidad vs alineamiento, cumplimiento de DNSH, garantías mínimas, criterios técnicos y consistencia metodológica de KPIs.</li>
            <li>
              Además, la Comisión adoptó el <strong>Reglamento Delegado (UE) 2026/73</strong> para
              simplificar disclosures y ciertos criterios técnicos DNSH.
            </li>
          </ul>

          <p className="vl-callout__section-head">SFDR</p>
          <ul>
            <li>
              El régimen vigente sigue siendo el del <strong>Reglamento (UE) 2019/2088</strong>.
            </li>
            <li>
              Su desarrollo técnico se apoya en los RTS del{" "}
              <strong>Reglamento Delegado (UE) 2022/1288</strong>.
            </li>
            <li>
              En la práctica, el mercado sigue operando con la arquitectura conocida de artículos{" "}
              <strong>6, 8 y 9</strong>, aunque SFDR nunca nació como un régimen formal de etiquetas.
            </li>
          </ul>

          <p className="vl-callout__section-head">SFDR — dirección de cambio</p>
          <ul>
            <li>
              La Comisión presentó en noviembre de 2025 una revisión profunda del régimen, conocida
              informalmente como <strong>SFDR 2.0</strong>.
            </li>
            <li>
              La propuesta apunta a simplificar disclosures, reducir carga de cumplimiento, ordenar
              mejor el uso de claims y categorías sostenibles, reforzar comparabilidad y reducir riesgo
              de greenwashing.
            </li>
            <li>
              Mientras no se apruebe la reforma, el régimen vigente sigue siendo el actual.
            </li>
          </ul>
        </div>
      ) : isBlock6RegulatoryCallout ? (
        <div className="vl-callout__text vl-callout__text--block6-visual">
          <p className="vl-callout__visual-intro">
            Guía rápida: la CSDDD se lee en <strong>tres movimientos normativos</strong> y, después, en sus
            efectos sobre el día a día (alcance, diligencia, contratos, clima, responsabilidad y fechas).
          </p>

          <p className="vl-callout__section-head">Tres movimientos</p>
          <ul>
            <li>
              <strong>Texto base (2024):</strong> <strong>Directiva (UE) 2024/1760</strong> — directiva
              marco de diligencia en cadena de valor.
            </li>
            <li>
              <strong>Parón temporal (2025):</strong> <strong>Directiva (UE) 2025/794</strong> — &quot;
              stop-the-clock&quot; (aplaza transposición y primera aplicación).
            </li>
            <li>
              <strong>Reforma Ómnibus:</strong> <strong>Directiva (UE) 2026/470</strong> — acto de reforma
              en EUR-Lex; aquí empiezan los cambios de fondo.
            </li>
          </ul>

          <p className="vl-callout__section-head">Qué viene después (efectos que importan)</p>
          <ul>
            <li>
              <strong>Alcance</strong> (quién queda obligado)
            </li>
            <li>
              <strong>Diligencia</strong> y trato con socios
            </li>
            <li>
              <strong>Relaciones comerciales</strong> (sustitución del &quot;terminate&quot; automático)
            </li>
            <li>
              <strong>Clima</strong> (art. 22) frente a <strong>CSRD</strong>
            </li>
            <li>
              <strong>Responsabilidad civil</strong> y <strong>sanciones</strong>
            </li>
            <li>
              <strong>Calendario</strong> de transposición y aplicación
            </li>
          </ul>

          <p className="vl-callout__section-head">Cronología y referencias clave</p>
          <ul>
            <li>
              <strong>2024/1760</strong> (13 jun 2024): umbrales iniciales de referencia — UE{" "}
              <strong>1.000 empleados</strong> y <strong>450 millones de euros</strong> facturación neta
              mundial; no UE <strong>450 millones de euros</strong> en la UE;{" "}
              <strong>franquicia/licencia</strong> <strong>22,5 / 80 millones de euros</strong>.
            </li>
            <li>
              <strong>2025/794</strong> (14 abr 2025): aplaza un año transposición y primera fase; fecha
              límite de transposición <strong>26 jul 2027</strong> (mismo desplazamiento para la primera
              fase).
            </li>
            <li>
              <strong>Ómnibus:</strong> acuerdo político <strong>9 dic 2025</strong>; Consejo{" "}
              <strong>24 feb 2026</strong>; texto <strong>2026/470</strong>.
            </li>
          </ul>

          <p className="vl-callout__section-head">Perímetro tras la reforma</p>
          <p className="vl-callout__sublist-label">Más estrecho que el diseño de 2024</p>
          <ul>
            <li>
              <strong>UE:</strong> &gt; <strong>5.000 empleados</strong> de media y &gt;{" "}
              <strong>1.500 millones de euros</strong> facturación neta mundial.
            </li>
            <li>
              <strong>Terceros países:</strong> &gt; <strong>1.500 millones de euros</strong> cifra de
              negocio neta en la UE.
            </li>
            <li>
              <strong>Franquicia/licencia</strong> (compromiso, UE y terceros): &gt;{" "}
              <strong>75 millones de euros</strong> royalties y &gt;{" "}
              <strong>275 millones de euros</strong> facturación.
            </li>
          </ul>

          <p className="vl-callout__section-head">Diligencia sobre impactos</p>
          <ul>
            <li>
              <strong>Dos pasos:</strong> <em>scoping</em> con información{" "}
              <strong>razonablemente disponible</strong> (<em>reasonably available information</em>) →{" "}
              <em>in-depth assessment</em> solo donde el impacto sea más probable o grave.
            </li>
          </ul>
          <p className="vl-callout__sublist-label">Con socios comerciales</p>
          <ul>
            <li>
              Pedir datos solo si son <strong>necesarios</strong>.
            </li>
            <li>
              Socio con menos de <strong>5.000 empleados</strong>: solo si no hay alternativa razonable.
            </li>
            <li>
              Varios socios posibles: <strong>priorizar</strong> quien concentre mayor probabilidad de
              impacto.
            </li>
            <li>
              Empate de gravedad: pueden privilegiarse <strong>direct business partners</strong>.
            </li>
          </ul>

          <p className="vl-callout__section-head">Relación comercial</p>
          <ul>
            <li>
              No es el estándar exigir <strong>terminate</strong>.
            </li>
            <li>
              Escalada posible: no ampliar → <strong>suspender</strong> actividades (si el contrato lo
              permite) → <strong>planes reforzados</strong> con <em>reasonable expectation</em>.
            </li>
            <li>
              Mantener el vínculo <strong>no implica por sí solo sanción</strong>.
            </li>
            <li>
              Antes de suspender: si el daño sería <strong>manifiestamente peor</strong>,{" "}
              <strong>no hay obligación de suspender</strong>.
            </li>
          </ul>

          <p className="vl-callout__section-head">Revisión de medidas</p>
          <ul>
            <li>
              Mínimo cada <strong>cinco años</strong> y cuando cambien riesgos o la eficacia.
            </li>
          </ul>

          <p className="vl-callout__section-head">Clima vs reporting</p>
          <ul>
            <li>
              <strong>CSDDD:</strong> se suprime el <strong>art. 22</strong> de planes de transición en
              esta directiva (enfoque diligencia en cadena).
            </li>
            <li>
              <strong>CSRD:</strong> los contenidos de transición climática siguen en el pilar de
              información / reporting reglado.
            </li>
          </ul>

          <p className="vl-callout__section-head">Responsabilidad civil</p>
          <ul>
            <li>
              Fuera el régimen <strong>armonizado UE</strong> (<em>EU harmonised liability regime</em>) y{" "}
              <em>overriding mandatory application</em>.
            </li>
            <li>
              Vuelta a <strong>regímenes nacionales</strong> (<em>national civil liability regimes</em>).
            </li>
            <li>
              La responsabilidad no desaparece; <strong>ya no se uniformiza desde esta directiva</strong>.
            </li>
          </ul>

          <p className="vl-callout__section-head">Sanciones</p>
          <ul>
            <li>
              Tope <strong>3&nbsp;%</strong> facturación neta mundial (o consolidado del{" "}
              <strong>ultimate parent</strong> en supuestos de grupo).
            </li>
          </ul>

          <p className="vl-callout__section-head">Calendario post-reforma</p>
          <ul>
            <li>
              <strong>Transposición:</strong> normas nacionales antes del <strong>26 jul 2028</strong>.
            </li>
            <li>
              <strong>Aplicación general:</strong> desde el <strong>26 jul 2029</strong>.
            </li>
            <li>
              <strong>Art. 16:</strong> ejercicios que empiecen el <strong>1 ene 2030</strong> o después.
            </li>
          </ul>
        </div>
      ) : isBlock7RegulatoryCallout ? (
        <div className="vl-callout__text vl-callout__text--block6-visual">
          <p className="vl-callout__visual-intro">
            Guía rápida: el reporting bajo <strong>CSRD/ESRS</strong> se lee en capas —{" "}
            <strong>antecedente español</strong> (EINF y tramitación hacia el nuevo marco),{" "}
            <strong>columna normativa UE</strong> (CSRD, ESRS, Taxonomía),{" "}
            <strong>ajustes de calendario</strong> (stop-the-clock, quick fix),{" "}
            <strong>paquete Ómnibus</strong> (perímetro y carga) y, al final,{" "}
            <strong>EFRAG</strong> y el <strong>encaje</strong> con mercados y formato digital.
          </p>

          <p className="vl-callout__section-head">España — antecedente inmediato</p>
          <p>
            La <strong>Ley 11/2018</strong> creó el <strong>EINF</strong> (estado de información no
            financiera), integrable en el <strong>informe de gestión</strong> o en informe separado
            equivalente, con <strong>revisión por un verificador independiente</strong>. Sigue siendo el
            referente operativo de muchas entidades mientras se completa la transposición nacional y el
            proyecto de <strong>Ley de Información Empresarial sobre Sostenibilidad</strong> (en
            tramitación, p. ej. expediente <strong>121/000038</strong>) aterrice el salto pleno al marco{" "}
            <strong>CSRD/ESRS</strong>.
          </p>

          <p className="vl-callout__section-head">Unión Europea — columna vertebral del reporting</p>
          <ul>
            <li>
              <strong>CSRD:</strong> <strong>Directiva (UE) 2022/2464</strong> (modificación de las
              directivas de información societaria); impone una <strong>declaración de sostenibilidad</strong>{" "}
              integrada en la información de gestión anual.
            </li>
            <li>
              <strong>ESRS (primer conjunto):</strong> adoptados como acto delegado{" "}
              <strong>Reglamento Delegado (UE) 2023/2772</strong> (julio 2023):{" "}
              <strong>ESRS 1</strong> y <strong>ESRS 2</strong> más estándares temáticos{" "}
              <strong>E1–E5</strong>, <strong>S1–S4</strong>, <strong>G1</strong>.
            </li>
            <li>
              <strong>Taxonomía y mercados:</strong> el <strong>Reglamento (UE) 2020/852</strong> y el
              ecosistema de actos delegados siguen condicionando alineación, DNSH y reporting (p. ej.{" "}
              <strong>art. 8</strong>); el dato debe ser coherente con lo que exige la declaración
              bajo ESRS.
            </li>
          </ul>

          <p className="vl-callout__section-head">Parón y ajustes antes del paquete Ómnibus</p>
          <ul>
            <li>
              <strong>“Stop-the-clock”:</strong> <strong>Directiva (UE) 2025/794</strong> aplazó en el
              tiempo la entrada en vigor de obligaciones de reporting para determinadas olas (segunda y
              tercera) respecto del calendario original de la CSRD.
            </li>
            <li>
              <strong>Quick fix (primera ola):</strong> el{" "}
              <strong>Reglamento Delegado (UE) 2025/1416</strong> introduce alivios puntuales de
              contenido/plazos para quienes ya reportaban, sin sustituir la lógica CSRD/ESRS.
            </li>
          </ul>

          <p className="vl-callout__section-head">
            Paquete Ómnibus (2025–2026): qué cambia la foto del reporting
          </p>
          <p>
            El acuerdo político de <strong>simplificación</strong> (a menudo citado como paquete{" "}
            <strong>Ómnibus</strong>) reordena <strong>perímetro</strong>, <strong>calendario</strong> y{" "}
            <strong>carga</strong> del reporting de sostenibilidad. No sustituye la CSRD ni borra los
            ESRS, pero sí:
          </p>
          <ul>
            <li>
              <strong>Concentra el universo obligado futuro</strong> en empresas de mayor tamaño
              (referencia habitual del debate político: alrededor de{" "}
              <strong>más de 1.000 empleados</strong> y{" "}
              <strong>más de 450 millones de euros</strong> de facturación neta), frente al diseño más
              amplio inicial; las <strong>pymes cotizadas</strong> dejan de estar en el foco de
              obligación general tal como se perfila el nuevo perímetro.
            </li>
            <li>
              <strong>ESRS:</strong> la Comisión queda mandatada a revisar los estándares en clave de{" "}
              <strong>proporcionalidad</strong> y reducción de carga; los{" "}
              <strong>estándares sectoriales</strong> pasan a una lógica mayoritariamente{" "}
              <strong>voluntaria</strong> en lugar de obligación general futura para todos los sectores.
            </li>
            <li>
              <strong>Primera ola / transición:</strong> pueden existir{" "}
              <strong>excepciones transitorias</strong> para determinadas empresas que ya reportaban en
              años concretos; conviene citar siempre <strong>qué versión</strong> del régimen se aplica.
            </li>
          </ul>

          <p className="vl-callout__section-head">EFRAG y material de implantación</p>
          <p>
            <strong>EFRAG</strong> asesora a la Comisión en borradores y revisiones de{" "}
            <strong>ESRS</strong>; el <strong>Sustainability Reporting Board</strong> concentra el trabajo
            técnico. Las guías <strong>IG 1–3</strong> (materialidad, cadena de valor, datapoints) y las{" "}
            <strong>FAQs</strong> son el puente entre la letra del reglamento y una implantación
            defendible ante verificadores.
          </p>

          <p className="vl-callout__section-head">Encaje sistémico</p>
          <p>
            La declaración enlaza con la <strong>Taxonomía</strong>, con la información a{" "}
            <strong>mercados financieros</strong> y con el <strong>formato electrónico</strong> del
            informe anual (<strong>ESEF</strong> / <strong>XHTML</strong>, marcado cuando exista taxonomía
            digital aplicable). Los ESRS se diseñaron mirando a <strong>ISSB</strong> y <strong>GRI</strong>{" "}
            para reducir duplicidades, sin equivalencia automática entre marcos.
          </p>
        </div>
      ) : isBlock8RegulatoryCallout ? (
        <div className="vl-callout__text vl-callout__text--block6-visual">
          <p className="vl-callout__visual-intro">
            Guía rápida: el entorno de <strong>entidades financieras</strong> se lee en{" "}
            <strong>tres planos</strong> — la <strong>Taxonomía y el art. 8</strong> (KPIs de alineamiento
            y actos delegados de implementación), la <strong>supervisión prudencial</strong> (EBA, GAR/BTAR
            en el marco del <strong>Pilar 3</strong>) e <strong>instrumentos jurídicos distintos</strong>{" "}
            (p. ej. el <strong>ISF</strong> en el CRR como alivio de capital, no como ratio de Taxonomía).
            Conviene no mezclar <strong>disclosure de alineamiento</strong> con el{" "}
            <strong>universo completo</strong> de información ESG prudencial ni presentar las{" "}
            <strong>plantillas</strong> como definitivas mientras la autoridad supervisora consulta{" "}
            <strong>ajustes</strong> en 2025–2026.
          </p>

          <p className="vl-callout__section-head">Taxonomía y art. 8 — base del disclosure financiero</p>
          <ul>
            <li>
              El marco descansa en el <strong>Reglamento (UE) 2020/852</strong>, en particular el{" "}
              <strong>art. 8</strong> sobre publicación de información por parte de entidades financieras,
              y en los <strong>actos delegados de implementación</strong> (incluido el ámbito de los{" "}
              <strong>disclosures</strong> complementarios) que concretan <strong>KPIs</strong>,{" "}
              <strong>perímetros</strong>, exclusiones y reglas de <strong>numerador/denominador</strong>.
            </li>
            <li>
              La <strong>divulgación de Taxonomía</strong> responde a una lógica de{" "}
              <strong>elegibilidad y alineamiento</strong> de activos y actividades; no agota por sí sola
              el conjunto de reportes <strong>ESG</strong> que la entidad publica por exigencia
              prudencial, de mercado o de otro tipo.
            </li>
          </ul>

          <p className="vl-callout__section-head">EBA y dimensión prudencial</p>
          <ul>
            <li>
              La <strong>EBA</strong> articula la parte <strong>prudencial</strong>:{" "}
              <strong>ITS</strong>, plantillas de <strong>Pilar 3</strong> y la evolución de métricas
              como el <strong>GAR</strong> y el <strong>BTAR</strong> dentro de la arquitectura de
              información supervisoria.
            </li>
            <li>
              En la práctica conviene <strong>separar etiquetas</strong>: lo que es <strong>métrica de
              Taxonomía</strong> (art. 8 y delegados) frente a lo que es <strong>información de
              solvencia</strong> o de riesgo con componente ESG; mezclar planos genera lecturas equívocas en
              mercado y en supervisión.
            </li>
          </ul>

          <p className="vl-callout__section-head">BTAR, GAR y Pilar 3</p>
          <ul>
            <li>
              El <strong>BTAR</strong> se sitúa en la misma <strong>arquitectura de divulgación</strong>{" "}
              supervisoria que el <strong>GAR</strong>, como métrica <strong>complementaria</strong>; ambos
              deben interpretarse junto con el resto de tablas y definiciones del <strong>Pilar 3</strong>.
            </li>
            <li>
              En <strong>2025–2026</strong> la <strong>EBA</strong> ha abierto consultas sobre{" "}
              <strong>revisión de ITS</strong> y sobre una posible <strong>suspensión temporal</strong> de
              determinadas plantillas <strong>GAR/Taxonomy</strong> para <strong>reducir duplicidades</strong>{" "}
              con el régimen de <strong>Taxonomía</strong>. El <strong>calendario de reporting</strong> no
              debe darse por <strong>cerrado</strong>: las plantillas y fechas son <strong>sensibles a
              ajuste</strong>.
            </li>
          </ul>

          <p className="vl-callout__section-head">ISF (infraestructura) — art. 501a CRR</p>
          <ul>
            <li>
              El <strong>ISF</strong> <strong>no</strong> es un ratio de <strong>alineamiento
              taxonómico</strong> ni un <strong>KPI</strong> del art. 8: su base legal es el{" "}
              <strong>art. 501a del CRR</strong>, que introduce un <strong>alivio de capital</strong> (hasta
              un <strong>–25&nbsp;%</strong> sobre <strong>fondos propios</strong> en exposiciones
              elegibles) para favorecer la <strong>financiación de infraestructura</strong> con perfil de{" "}
              <strong>riesgo</strong> acotado.
            </li>
            <li>
              Presentarlo como <strong>sustituto</strong> de criterios de Taxonomía o como etiqueta
              genérica de “sostenibilidad” <strong>desalinea</strong> el mensaje frente a analistas y
              supervisores.
            </li>
          </ul>

          <p className="vl-callout__section-head">Empresas no financieras — KPIs del art. 8</p>
          <ul>
            <li>
              Los <strong>undertakings no financieros</strong> publican bajo el art. 8 los KPIs de{" "}
              <strong>turnover</strong>, <strong>CapEx</strong> y <strong>OpEx</strong> (elegibilidad y
              alineamiento según reglas aplicables).
            </li>
            <li>
              El <strong>CapEx alignment</strong> es la pieza más <strong>forward-looking</strong> para
              conectar <strong>inversión</strong>, <strong>transición</strong> y <strong>credibilidad</strong>{" "}
              ante <strong>financiadores</strong>; suele anticipar mejor la{" "}
              <strong>inversión en transición</strong> que el <strong>turnover</strong> corriente por sí
              solo.
            </li>
          </ul>

          <p className="vl-callout__section-head">Evolución 2025–2026</p>
          <ul>
            <li>
              El conjunto <strong>Taxonomía</strong> + <strong>disclosure</strong> financiera sigue un
              proceso de <strong>simplificación</strong> y <strong>mejora de usabilidad</strong> (menos
              fricción entre marcos, mayor claridad metodológica).
            </li>
            <li>
              Las <strong>métricas</strong> y <strong>plantillas</strong> deben explicarse como{" "}
              <strong>sujetas a revisión</strong>, no como fotos inmutables: conviene explicitar{" "}
              <strong>qué versión</strong> de definiciones y tablas se usa en cada ejercicio.
            </li>
          </ul>
        </div>
      ) : isBlock9RegulatoryCallout ? (
        <div className="vl-callout__text vl-callout__text--block6-visual">
          <p className="vl-callout__visual-intro">
            Guía rápida: el bloque se sitúa en una <strong>reordenación de la infraestructura</strong> de
            información de sostenibilidad en la UE —junto al <strong>reporting corporativo</strong> y a
            los <strong>productos financieros</strong>, la normativa aborda de forma explícita{" "}
            <strong>ratings ESG</strong>, <strong>administradores de benchmarks e índices</strong> y la{" "}
            <strong>coherencia de los claims</strong> con la realidad subyacente. En particular, la
            regulación de <strong>índices y benchmarks ESG</strong> ha dejado de ser solo “etiqueta de
            mercado”: el <strong>Benchmark Regulation (BMR)</strong> y el marco de{" "}
            <strong>benchmarks climáticos</strong> (<strong>EU CTB</strong> / <strong>EU PAB</strong>)
            imponen <strong>estándares mínimos</strong> y <strong>transparencia metodológica</strong> que
            acotan lo que puede afirmarse cuando un índice se comercializa como climático o alineado con
            determinados objetivos.
          </p>

          <p className="vl-callout__section-head">Ratings ESG — Reglamento (UE) 2024/3005</p>
          <ul>
            <li>
              El texto entró en vigor el <strong>1 de enero de 2025</strong> y será{" "}
              <strong>aplicable a partir del 2 de julio de 2026</strong>. Exige a los proveedores que
              operen en la UE <strong>autorización y supervisión por ESMA</strong>, gobernanza sólida,
              gestión de <strong>conflictos de interés</strong> y <strong>transparencia metodológica</strong>.
            </li>
            <li>
              <strong>No</strong> impone una única metodología de rating, pero sí que el mercado entienda{" "}
              <strong>qué</strong> se califica, con <strong>qué supuestos</strong> y{" "}
              <strong>qué límites</strong> tiene la opinión del proveedor frente a la información de la
              emisora.
            </li>
          </ul>

          <p className="vl-callout__section-head">
            Índices y benchmarks: qué ha cambiado (BMR y marco climático)
          </p>
          <p className="vl-callout__sublist-label">Benchmark Regulation y disclosure metodológico</p>
          <ul>
            <li>
              El <strong>Reglamento (UE) 2016/1011 (BMR)</strong> ya obliga a los administradores a
              explicar cómo incorporan factores <strong>ESG</strong> en la metodología y en el{" "}
              <strong>benchmark statement</strong>, conforme a los actos delegados{" "}
              <strong>(UE) 2020/1816</strong> y <strong>(UE) 2020/1817</strong> (integración ESG en índices
              de acciones y de renta fija, respectivamente).
            </li>
            <li>
              Esa lógica refuerza que un <strong>índice</strong> no es un “dato bruto”: es una{" "}
              <strong>regla de construcción</strong> publicada y revisable; el inversor debe poder
              identificar <strong>filtros</strong>, <strong>rebalances</strong> y{" "}
              <strong>fuentes de datos</strong> relevantes.
            </li>
          </ul>
          <p className="vl-callout__sublist-label">Benchmarks climáticos: EU CTB y EU PAB</p>
          <ul>
            <li>
              El <strong>Reglamento (UE) 2019/2089</strong> introduce dos categorías con{" "}
              <strong>mínimos reglamentarios</strong>: <strong>EU Climate Transition Benchmark (CTB)</strong>{" "}
              y <strong>EU Paris-Aligned Benchmark (PAB)</strong>, de modo que denominaciones de tipo
              “climático” o “alineado con París” no queden reducidas a <strong>naming comercial</strong>.
            </li>
            <li>
              Los <strong>estándares mínimos</strong> se desarrollan mediante el Reglamento Delegado{" "}
              <strong>(UE) 2020/1818</strong> (trayectorias de descarbonización, exclusiones mínimas de
              ciertos combustibles fósiles en la fecha de referencia, etc., según la categoría).
            </li>
            <li>
              <strong>Lectura clave para emisores e inversores:</strong> figurar en un índice EU CTB/PAB{" "}
              <strong>no equivale</strong> automáticamente a <strong>alineación con la Taxonomía</strong> ni
              sustituye el análisis de la emisora; son <strong>capas normativas distintas</strong> (índice,
              taxonomía, reporting corporativo) que deben conectarse con precisión en la comunicación al
              mercado.
            </li>
          </ul>

          <p className="vl-callout__section-head">Supervisión, nombres y claims</p>
          <ul>
            <li>
              La agenda europea refuerza la prevención del <strong>greenwashing</strong> y el control de{" "}
              <strong>nombres y claims</strong> de sostenibilidad, con criterios de información{" "}
              <em>fair, clear and not misleading</em>: lo que se anuncia en el nombre del producto o del
              índice debe ser <strong>coherente</strong> con la documentación y con la metodología
              efectivamente aplicada.
            </li>
            <li>
              En conjunto, <strong>ratings</strong>, <strong>benchmarks</strong> y{" "}
              <strong>productos</strong> quedan insertos en un mismo esfuerzo: reducir la asimetría de
              información y el riesgo de que la etiqueta <strong>anticipe</strong> más de lo que los datos y
              los estándares permiten demostrar.
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
      ) : isBlock7InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            El reporting <strong>CSRD/ESRS</strong> se aprecia por la <strong>consistencia</strong> entre
            declaración, <strong>indicadores homogéneos</strong>, <strong>gobernanza</strong> del proceso
            y cadena de valor —no por la extensión del informe—. La función de{" "}
            <strong>Relaciones con Inversores</strong> es explicitar en qué medida el{" "}
            <em>equity story</em> se apoya en información <strong>normalizada</strong>,{" "}
            <strong>comparable</strong> y <strong>asegurable</strong>.
          </p>
          <ul>
            <li>
              <strong>Sustantividad frente a extensión:</strong> mensaje, KPIs, controles y fuentes deben
              articularse; la longitud no sustituye <strong>trazabilidad</strong> ni solidez del contenido.
            </li>
            <li>
              <strong>Perímetro reglado:</strong> separar <strong>IROs materiales</strong> y alcance del
              proceso de materialidad de lo voluntario o meramente comunicacional; no confundir{" "}
              <strong>ambición discursiva</strong> con <strong>obligación de información</strong>.
            </li>
            <li>
              <strong>Coherencia financiera:</strong> articular materialidad <strong>ESRS</strong> con{" "}
              <strong>CapEx</strong>, <strong>coste del capital</strong>, <strong>riesgos</strong> y{" "}
              <strong>tesis de inversión</strong>; alinear declaración, <strong>guidance</strong> y{" "}
              <strong>cuentas</strong>.
            </li>
            <li>
              <strong>Narrativa defendible ante terceros:</strong> una parte relevante del contenido
              será objeto de <strong>revisión limitada</strong>; la comunicación con inversores debe ser
              coherente con el alcance y la evidencia que soportan verificador y auditor, sin generar
              lecturas que el informe no pueda sustentar. Las brechas entre mensaje público y trabajo
              probatorio suelen traducirse en <strong>presión sobre la valoración</strong>.
            </li>
            <li>
              <strong>Señal de gobernanza:</strong> un relato <strong>genérico</strong> sugiere no solo
              deficiencia de cumplimiento, sino debilidad de <strong>gobernanza</strong> y{" "}
              <strong>control interno</strong>; el mensaje al mercado debe ser tan riguroso como el
              reporting reglado.
            </li>
          </ul>
        </div>
      ) : isBlock9InvestorRelationsCallout ? (
        <div className="vl-callout__text">
          <p>
            En el entorno de <strong>ratings ESG</strong>, <strong>índices</strong> y{" "}
            <strong>benchmarks</strong>, la función de <strong>Relaciones con Inversores</strong>{" "}
            trabaja en el cruce entre <strong>información de la emisora</strong>,{" "}
            <strong>opiniones y metodologías de terceros</strong> y <strong>herramientas de mercado</strong>{" "}
            con reglas de construcción propias. Mezclar esos planos en un único mensaje —o presentar un
            rating o una ponderación de índice como “certificación” de sostenibilidad— suele generar{" "}
            <strong>expectativas desalineadas</strong> y riesgo reputacional.
          </p>
          <ul>
            <li>
              <strong>Tres planos que conviene separar en roadshows y Q&amp;A:</strong> (1){" "}
              <strong>Información corporativa</strong> —reporting reglado, políticas, métricas y
              estrategia de la compañía—; (2) <strong>Opinión de terceros</strong> —ratings ESG: supuestos,
              cobertura sectorial, conflictos de interés y marco supervisor (p. ej. reglamento de ratings
              ESG y supervisión ESMA)—; (3) <strong>Herramientas de mercado</strong> —índices y benchmarks:
              metodología del administrador, universo, rebalanceos y categorías reglamentarias (p. ej. EU
              CTB/PAB), distintas de la clasificación taxonómica de actividades de la emisora.
            </li>
            <li>
              <strong>Ratings ESG:</strong> no son una “nota objetiva” universal ni sustituto del análisis
              fundamental; comparan emisoras con <strong>criterios y ponderaciones definidos por el
              proveedor</strong>. Conviene indicar <strong>qué dimensiones</strong> cubre el rating, con
              qué <strong>frecuencia</strong> se revisa y qué <strong>limitaciones</strong> declara el
              propio proveedor.
            </li>
            <li>
              <strong>Índices y benchmarks:</strong> la inclusión en un índice o la etiqueta “climático” no
              demuestran por sí solos               <strong>alineación con la Taxonomía</strong> ni con los objetivos de{" "}
              <strong>París</strong>: son <strong>reglas de cartera</strong> publicadas que pueden
              coincidir solo parcialmente con la tesis de inversión en el valor de la emisora.
            </li>
            <li>
              <strong>Claims y respuestas en Q&amp;A:</strong> un titular o una respuesta improvisada que
              exagere el vínculo entre <strong>posición en un índice</strong>, <strong>rating</strong> y{" "}
              <strong>desempeño de sostenibilidad real</strong> se acerca a lecturas de{" "}
              <strong>greenwashing</strong>. En un mercado más regulado, la <strong>precisión</strong> sobre
              qué se afirma y con qué respaldo documental y metodológico es parte de la{" "}
              <strong>credibilidad</strong>, no un adorno comunicacional.
            </li>
            <li>
              <strong>Coherencia con la documentación:</strong> el relato oral o en presentaciones debe ser
              <strong>compatible</strong> con prospectos, informes anuales, hechos relevantes y, cuando
              aplique, información del producto financiero: evitar que el mensaje de RI{" "}
              <strong>prometa más</strong> de lo que esos documentos y las metodologías de terceros
              permiten sustentar.
            </li>
            <li>
              <strong>Rol operativo de RI:</strong> anticipar <strong>preguntas típicas</strong> sobre
              ratings (metodología, cambios de nota), composición de índices y sensibilidad a revisiones
              normativas; <strong>alinear</strong> mensajes con equipos de sostenibilidad, financiero y
              cumplimiento; y <strong>evitar</strong> presentar ratings o índices como{" "}
              <strong>veredicto único</strong> de liderazgo sostenible frente a la evidencia corporativa y
              de mercado.
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
      return (
        <NarrativeStack key={i} k={k} paragraphs={block.paragraphs} />
      );
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
          {topic.main.flatMap((b, i, blocks) => {
            const renderedBlocks = [renderMainBlock(b, i, topic.number)];
            const next = blocks[i + 1];

            const shouldInsertEquityImage =
              topic.number === 3 &&
              b.type === "callout" &&
              b.variant === "regulatory" &&
              next?.type === "callout" &&
              next.variant === "ri";
            const shouldInsertSinergiasImage =
              topic.number === 5 &&
              b.type === "cards" &&
              next?.type === "callout" &&
              next.variant === "regulatory";
            const shouldInsertCSDDDDetail =
              topic.number === 7 &&
              b.type === "cards" &&
              next?.type === "callout" &&
              next.variant === "regulatory";
            const shouldInsertBlock7FrameworkPrimer =
              topic.number === 6 && b.type === "cards";
            const shouldInsertBlock5BriefDefinitions =
              topic.number === 5 && b.type === "objective" && next?.type === "cards";

            if (shouldInsertBlock5BriefDefinitions) {
              renderedBlocks.push(<Block5BriefDefinitions key={`b5-brief-${i}`} />);
            }
            if (shouldInsertEquityImage) {
              renderedBlocks.push(
                <figure className="vl-inline-image" key={`equity-${i}`}>
                  <img
                    src="/images/Equity.png"
                    alt="Esquema de relación entre sostenibilidad, valoración y equity story."
                    loading="lazy"
                  />
                </figure>,
              );
            }
            if (shouldInsertSinergiasImage) {
              renderedBlocks.push(
                <figure className="vl-inline-image" key={`sinergias-${i}`}>
                  <img
                    src="/images/sinergias.png?v=2"
                    alt="Esquema de sinergias entre CSRD, Taxonomía y SFDR."
                    loading="lazy"
                  />
                </figure>,
              );
            }
            if (shouldInsertBlock7FrameworkPrimer) {
              renderedBlocks.push(
                <section
                  className="vl-rigor-panel vl-rigor-panel--framework-primer"
                  key={`b7-framework-${i}`}
                  aria-label="Marco CSRD, ESRS, doble materialidad y verificación"
                >
                  <h4 className="vl-rigor-panel__title">
                    CSRD, ESRS, doble materialidad y verificación
                  </h4>
                  <p className="vl-rigor-panel__intro">
                    A continuación de la lectura <strong>por tarjetas</strong>, esta síntesis ordena el{" "}
                    <strong>marco jurídico y técnico</strong> aplicable: antecedente del <strong>EINF</strong>{" "}
                    y transición en España, <strong>alcance y calendario</strong> de la CSRD,{" "}
                    <strong>estructura del primer conjunto de ESRS</strong>, papel de <strong>EFRAG</strong>{" "}
                    y de las <strong>IG</strong>, <strong>doble materialidad</strong> según ESRS 1 y{" "}
                    <strong>aseguramiento</strong> de la información, con el <strong>encaje</strong> en el
                    resto del sistema de reporting de la UE.
                  </p>

                  <p className="vl-rigor-panel__subhead">Ley 11/2018, EINF y transición a CSRD/ESRS</p>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      La <strong>Ley 11/2018</strong> introdujo el <strong>EINF</strong>, integrable en el
                      informe de gestión o, en su caso, en un documento equivalente separado, con{" "}
                      <strong>revisión por un verificador independiente</strong>. El umbral más
                      citado en la práctica española parte de <strong>más de 250 empleados</strong> o, si
                      en dos ejercicios consecutivos se superan los límites,{" "}
                      <strong>más de 20 M€ de activo</strong> o <strong>más de 40 M€ de volumen de
                      negocios</strong> — siempre según el texto legal y la jurisprudencia administrativa
                      aplicable al caso.
                    </li>
                    <li>
                      La <strong>CSRD</strong> (Directiva (UE) 2022/2464, en transposición) exige una{" "}
                      <strong>declaración de sostenibilidad</strong> integrada en el informe de gestión y
                      elaborada conforme a los <strong>ESRS</strong> adoptados por la Comisión (
                      <strong>Reglamento Delegado (UE) 2023/2772</strong>). Los ESRS se elaboraron buscando{" "}
                      <strong>convergencia</strong> con marcos de referencia internacionales (p. ej.{" "}
                      <strong>IFRS/ISSB</strong>, <strong>GRI</strong>): útil para comparabilidad, sin{" "}
                      <strong>equivalencia automática</strong> ni sustitución del texto europeo.
                    </li>
                    <li>
                      En España coexisten la <strong>transposición de la CSRD</strong> y el trámite del
                      proyecto de ley de información empresarial en sostenibilidad (expediente{" "}
                      <strong>121/000038</strong>). Hasta su cierre, el <strong>EINF</strong> sigue siendo
                      el marco de referencia inmediato para las entidades alcanzadas por la Ley 11/2018.
                    </li>
                  </ul>

                  <p className="vl-rigor-panel__subhead">Alcance de la CSRD: lectura por capas normativas</p>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      El régimen debe interpretarse <strong>por capas acumuladas</strong>: (i){" "}
                      <strong>cronograma inicial</strong> por fases; (ii) <strong>modificaciones
                      temporales</strong> del calendario (p. ej. &quot;stop-the-clock&quot;); (iii){" "}
                      <strong>ajustes de alcance</strong> posteriores (p. ej. acuerdos de simplificación /
                      paquete Omnibus). No deben <strong>confundirse</strong> fechas de entrada en vigor
                      con umbrales fijados en instrumentos distintos.
                    </li>
                    <li>
                      El <strong>diseño original</strong> articulaba la aplicación por olas (p. ej. grandes
                      entidades de interés público con <strong>más de 500 empleados</strong> en la primera
                      fase; después otras grandes empresas y grupos; <strong>empresas cotizadas de menor
                      tamaño</strong>; y, en su momento, filiales de grupos no comunitarios con actividad
                      relevante en la UE). Para terceros países, el régimen inicial previó umbrales de
                      negocio en la UE (orden de magnitud habitual citado: <strong>150 M€</strong>) y
                      presencia mediante filial o sucursal, según el texto legal aplicable en cada
                      momento.
                    </li>
                    <li>
                      Los acuerdos de <strong>simplificación</strong> posteriores han <strong>redefinido
                      </strong> el universo obligado de referencia (referencia política habitual: del orden
                      de <strong>más de 1.000 empleados</strong> y <strong>más de 450 M€</strong> de
                      facturación neta) y han previsto <strong>régimenes transitorios</strong> para
                      determinadas entidades de la primera fase en ejercicios concretos. La exposición debe
                      citar <strong>qué texto y qué foto normativa</strong> se usan en cada fecha.
                    </li>
                  </ul>

                  <p className="vl-rigor-panel__subhead">CSRD y ESRS: primer conjunto adoptado</p>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      La información de sostenibilidad debe presentarse como <strong>declaración de
                      sostenibilidad</strong> en el marco del informe de gestión, elaborada de acuerdo con
                      los <strong>ESRS</strong> (base legal del primer conjunto:{" "}
                      <strong>Reglamento Delegado (UE) 2023/2772</strong>).
                    </li>
                    <li>
                      El primer paquete comprende <strong>doce normas</strong>: <strong>ESRS 1</strong>{" "}
                      (requisitos generales y criterios para determinar la información a revelar) y{" "}
                      <strong>ESRS 2</strong> (información general y disclosures transversales), más{" "}
                      <strong>diez estándares temáticos</strong> — <strong>E1–E5</strong> (medio ambiente),{" "}
                      <strong>S1–S4</strong> (social) y <strong>G1</strong> (conducta empresarial y
                      gobierno).
                    </li>
                    <li>
                      La revelación no sigue un <strong>catálogo rígido idéntico para todas las entidades</strong>
                      : el contenido material se determina mediante el análisis de <strong>doble
                      materialidad</strong> y la identificación y valoración documentadas de{" "}
                      <strong>impactos, riesgos y oportunidades</strong> (<strong>IRO</strong>).
                    </li>
                  </ul>

                  <p className="vl-rigor-panel__subhead">Doble materialidad (ESRS 1)</p>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      La entidad debe revelar información sobre <strong>impactos materiales</strong>{" "}
                      (materialidad de <strong>impacto</strong>) y, cuando proceda, sobre{" "}
                      <strong>riesgos y oportunidades</strong> que afecten de forma material a su situación
                      financiera, desempeño o posición (<strong>materialidad financiera</strong>), según
                      ESRS 1.
                    </li>
                    <li>
                      <strong>Materialidad de impacto:</strong> efectos adversos o positivos conexos con la
                      entidad y su <strong>cadena de valor</strong> sobre <strong>personas</strong> (incl.
                      derechos humanos) y <strong>medio ambiente</strong>.
                    </li>
                    <li>
                      <strong>Materialidad financiera:</strong> incidencia en flujos de efectivo, coste del
                      capital, acceso a financiación, valor patrimonial u otros elementos de la información
                      financiera, derivada de <strong>riesgos y oportunidades</strong> relacionados con
                      cuestiones de sostenibilidad.
                    </li>
                    <li>
                      Las dos dimensiones se aplican de forma <strong>acumulativa</strong>: un asunto puede
                      ser material solo por impacto, solo por finanzas o por <strong>ambas</strong>; no se
                      exige intersección artificial entre criterios.
                    </li>
                    <li>
                      El análisis debe ser <strong>reconstruible por un tercero</strong>: trazabilidad de
                      fuentes, supuestos y umbrales, coherente con los requisitos de información en{" "}
                      <strong>ESRS 2</strong> (p. ej. desgloses <strong>IRO-1</strong>,{" "}
                      <strong>IRO-2</strong>) y con la revisión independiente prevista.
                    </li>
                  </ul>

                  <p className="vl-rigor-panel__subhead">Aseguramiento de la información (assurance)</p>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      La CSRD prevé <strong>aseguramiento</strong> de la información de sostenibilidad
                      conforme a normas de aseguramiento adoptadas a nivel de Unión; el calendario de
                      referencia incluye <strong>limited assurance</strong> con arreglo a esas normas a
                      más tardar el <strong>1 de octubre de 2026</strong> y la posibilidad de{" "}
                      <strong>reasonable assurance</strong> a más tardar el{" "}
                      <strong>1 de octubre de 2028</strong>, salvo lo que dispongan actos posteriores.
                    </li>
                    <li>
                      El alcance del trabajo del asegurador abarca, entre otros aspectos, la{" "}
                      <strong>conformidad con los ESRS</strong>, la solidez del <strong>proceso aplicado
                      para identificar la información a revelar</strong> (doble materialidad), el{" "}
                      <strong>etiquetado digital</strong> cuando corresponda y los requisitos derivados de
                      la <strong>Taxonomía</strong> (p. ej. <strong>art. 8</strong> del Reglamento (UE)
                      2020/852), según el texto aplicable.
                    </li>
                    <li>
                      La información y el proceso deben permitir <strong>obtención de evidencia</strong>:
                      trazabilidad de fuentes, criterios, perímetro y decisiones, de modo que el aseguramiento
                      sea sustantivo y no meramente formal.
                    </li>
                    <li>
                      La <strong>Ley 11/2018</strong> ya imponía <strong>revisión independiente</strong> del
                      EINF; la CSRD extiende y precisa el <strong>objeto</strong> del examen sobre la
                      declaración de sostenibilidad y su coherencia con los ESRS.
                    </li>
                  </ul>

                  <p className="vl-rigor-panel__subhead">Interoperabilidad y encaje en el sistema de reporting UE</p>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      Los ESRS se elaboraron atendiendo a la <strong>convergencia</strong> con marcos
                      internacionales (p. ej. <strong>IFRS/ISSB</strong>, <strong>GRI</strong>). La
                      conciliación exige <strong>mapeo explícito</strong> y juicio profesional: no cabe
                      asumir <strong>equivalencia automática</strong> entre exigencias.
                    </li>
                    <li>
                      La declaración debe articularse con la <strong>Taxonomía</strong> (incluidos los
                      datos del <strong>art. 8</strong> cuando proceda, integrados en la propia
                      declaración), con las obligaciones de <strong>información regulada</strong> en
                      mercados de valores y con el <strong>formato electrónico del informe anual</strong>{" "}
                      (<strong>ESEF</strong>). El <strong>marcado estructurado</strong> de la información
                      de sostenibilidad queda supeditado a la disponibilidad de la taxonomía digital
                      pertinente en el marco previsto por la normativa aplicable.
                    </li>
                  </ul>
                </section>,
              );
            }

            if (shouldInsertCSDDDDetail) {
              renderedBlocks.push(
                <section
                  className="vl-rigor-panel"
                  key={`csddd-detail-${i}`}
                  aria-label="Aplicación práctica de la CSDDD"
                >
                  <h4 className="vl-rigor-panel__title">Aplicación práctica de la CSDDD</h4>
                  <ul className="vl-rigor-panel__list">
                    <li>
                      <strong>Qué aplica:</strong> deberes de <strong>debida diligencia</strong> sobre
                      impactos adversos en <strong>derechos humanos</strong> y{" "}
                      <strong>medioambiente</strong> en operaciones propias, filiales y cadena de
                      valor (upstream y, cuando proceda, downstream).
                    </li>
                    <li>
                      <strong>Obligaciones para las compañías:</strong> integrar la diligencia debida
                      en políticas y sistemas de gestión; <strong>identificar</strong>,{" "}
                      <strong>prevenir</strong>, <strong>mitigar</strong> y{" "}
                      <strong>poner fin/minimizar</strong> impactos; establecer{" "}
                      <strong>mecanismo de quejas</strong>; monitorizar eficacia y comunicar avances.
                    </li>
                    <li>
                      <strong>Qué pretende:</strong> pasar de un enfoque declarativo a uno de{" "}
                      <strong>gestión activa del riesgo</strong>, con trazabilidad y capacidad de
                      remediación verificable.
                    </li>
                    <li>
                      <strong>Cómo se debe aplicar:</strong> gobernanza interna clara, mapa de riesgos,
                      cláusulas contractuales, due diligence de proveedores, controles periódicos,
                      evidencia documental y supervisión del órgano de administración.
                    </li>
                    <li>
                      <strong>Umbrales de aplicación (tras reordenación Ómnibus):</strong> el perímetro
                      queda acotado a grandes operadores —en la UE, referencia habitual del compromiso:{" "}
                      <strong>más de 5.000 empleados de media</strong> y{" "}
                      <strong>más de 1.500 millones de euros</strong> de facturación neta mundial; para
                      empresas de terceros países, <strong>más de 1.500 millones de euros</strong> de
                      cifra de negocio neta generada en la UE—, sin perder de vista el texto legal y la
                      transposición nacional aplicable.
                    </li>
                    <li>
                      <strong>Régimen de cumplimiento y responsabilidad:</strong> supervisión por
                      autoridades nacionales, medidas correctoras y posible régimen sancionador en caso
                      de incumplimiento de deberes de diligencia debida.
                    </li>
                    <li>
                      <strong>Implicación para RI:</strong> el mercado valora la calidad del{" "}
                      <strong>sistema de gestión</strong>, la coherencia entre política, ejecución y
                      evidencia, y su conexión con riesgo legal, operativo y reputacional.
                    </li>
                  </ul>
                </section>,
              );
              renderedBlocks.push(
                <figure
                  className="vl-inline-image vl-inline-image--csddd-infographic"
                  key={`csddd-infographic-${i}`}
                >
                  <img
                    src="/images/CSDDD.jpg"
                    alt="Guía esquemática: Directiva CSDDD (UE) 2024/1760 tras la reforma Ómnibus 2026. Ámbito focalizado en grandes empresas UE y terceros países y franquicias; proceso de diligencia debida en cuatro pasos (identificar riesgos, prevenir impactos, seguir eficacia, comunicar y reparar); consecuencias legales: sistema integrado, responsabilidad civil según derecho nacional, sanciones hasta el 3% de facturación consolidada del grupo matriz; calendario: transposición 26 jul 2028, aplicación general 26 jul 2029, medidas del art. 16 en ejercicios que empiecen el 1 ene 2030 o después. La directiva queda más focalizada y remite a regímenes nacionales de responsabilidad."
                    loading="lazy"
                  />
                </figure>,
              );
            }

            return renderedBlocks;
          })}
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

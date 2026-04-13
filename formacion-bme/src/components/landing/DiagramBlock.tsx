type Props = {
  code: string;
  topicNumber?: number;
  caption?: string;
};

export function DiagramBlock({ code: _code, topicNumber, caption }: Props) {
  const isBlock2 = topicNumber === 2;
  const isBlock3 = topicNumber === 3;
  const isBlock4 = topicNumber === 4;
  const isBlock5 = topicNumber === 5;
  const isBlock6 = topicNumber === 6;
  const isBlock7 = topicNumber === 7;
  const isBlock8 = topicNumber === 8;
  const isBlock9 = topicNumber === 9;

  return (
    <figure className="diagram-block">
      {caption ? <figcaption className="diagram-block__cap">{caption}</figcaption> : null}
      <div className="diagram-block__host" role="img" aria-label={caption || "Diagrama"}>
        {isBlock4 ? (
          <svg
            viewBox="0 0 980 330"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "980px", width: "100%", height: "auto" }}
          >
            <defs>
              <marker id="arrow-b4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2e567f" />
              </marker>
            </defs>

            <text x="490" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="#244a6f">
              Mapa visual - Transición climática y descarbonización
            </text>

            <rect x="30" y="42" width="212" height="98" rx="12" fill="#e7f0fb" stroke="#6f9fca" />
            <text x="136" y="67" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f3b63">1) Acuerdo de París</text>
            <text x="136" y="88" textAnchor="middle" fontSize="12.5" fill="#2a587f">Objetivo 1,5°C / &lt;2°C</text>
            <text x="136" y="107" textAnchor="middle" fontSize="12.5" fill="#2a587f">Finanzas hacia bajo carbono</text>
            <text x="136" y="126" textAnchor="middle" fontSize="12" fill="#406b90">🌍 Estrategia y competitividad</text>

            <rect x="264" y="42" width="212" height="98" rx="12" fill="#fff3dd" stroke="#d6b06a" />
            <text x="370" y="67" textAnchor="middle" fontSize="14" fontWeight="700" fill="#6b4b18">2) Huella y Alcances</text>
            <text x="370" y="88" textAnchor="middle" fontSize="12.5" fill="#7d5923">Alcance 1, 2 y 3</text>
            <text x="370" y="107" textAnchor="middle" fontSize="12.5" fill="#7d5923">Emisiones financiadas</text>
            <text x="370" y="126" textAnchor="middle" fontSize="12" fill="#8c6831">📏 PCAF / PACTA</text>

            <rect x="498" y="42" width="212" height="98" rx="12" fill="#e7f0fb" stroke="#6f9fca" />
            <text x="604" y="67" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f3b63">3) Net Zero + SBTi</text>
            <text x="604" y="88" textAnchor="middle" fontSize="12.5" fill="#2a587f">Reducción estructural</text>
            <text x="604" y="107" textAnchor="middle" fontSize="12.5" fill="#2a587f">~50% a 2030 / &gt;90% largo plazo</text>
            <text x="604" y="126" textAnchor="middle" fontSize="12" fill="#406b90">🎯 Hitos y palancas claras</text>

            <rect x="732" y="42" width="218" height="98" rx="12" fill="#fff3dd" stroke="#d6b06a" />
            <text x="841" y="67" textAnchor="middle" fontSize="14" fontWeight="700" fill="#6b4b18">4) Plan de Transición</text>
            <text x="841" y="88" textAnchor="middle" fontSize="12.5" fill="#7d5923">TCFD / TPT / ESRS E1</text>
            <text x="841" y="107" textAnchor="middle" fontSize="12.5" fill="#7d5923">CapEx, lock-in, escenarios</text>
            <text x="841" y="126" textAnchor="middle" fontSize="12" fill="#8c6831">🧭 Gobernanza y ejecución</text>

            <line x1="242" y1="91" x2="264" y2="91" stroke="#2e567f" strokeWidth="2.4" markerEnd="url(#arrow-b4)" />
            <line x1="476" y1="91" x2="498" y2="91" stroke="#2e567f" strokeWidth="2.4" markerEnd="url(#arrow-b4)" />
            <line x1="710" y1="91" x2="732" y2="91" stroke="#2e567f" strokeWidth="2.4" markerEnd="url(#arrow-b4)" />

            <rect x="180" y="182" width="620" height="70" rx="14" fill="#e4f3e9" stroke="#69a583" />
            <text x="490" y="208" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1f6848">
              Resultado empresarial
            </text>
            <text x="490" y="228" textAnchor="middle" fontSize="13" fill="#226a49">
              Coherencia entre ambición climática, capital, operación y credibilidad de mercado
            </text>

            <line x1="490" y1="140" x2="490" y2="182" stroke="#2e567f" strokeWidth="2.6" markerEnd="url(#arrow-b4)" />

            <text x="490" y="287" textAnchor="middle" fontSize="14" fontWeight="700" fill="#2e567f">
              ♻ Clave: descarbonización medible, financiable y gobernable
            </text>
          </svg>
        ) : isBlock3 ? (
          <svg
            viewBox="0 0 980 360"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "980px", width: "100%", height: "auto" }}
          >
            <defs>
              <marker id="arrow-b3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f3a5f" />
              </marker>
            </defs>

            <text x="490" y="24" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1f3a5f">
              Mapa visual - Sostenibilidad, valoración y equity story
            </text>

            <rect x="26" y="44" width="286" height="110" rx="14" fill="#ffe9ec" stroke="#d78c95" />
            <text x="169" y="72" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f3a5f">Entrada ESG</text>
            <text x="169" y="95" textAnchor="middle" fontSize="13" fill="#1f3a5f">Temas priorizados y materiales</text>
            <text x="169" y="114" textAnchor="middle" fontSize="13" fill="#1f3a5f">🌱 Riesgos + oportunidades</text>
            <text x="169" y="133" textAnchor="middle" fontSize="12" fill="#2f4f73">No reputación aislada</text>

            <rect x="338" y="44" width="304" height="110" rx="14" fill="#e2ebf7" stroke="#6a84a6" />
            <text x="490" y="72" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f3a5f">Puente financiero</text>
            <text x="490" y="95" textAnchor="middle" fontSize="13" fill="#1f3a5f">📊 Traducción a variables económicas</text>
            <text x="490" y="114" textAnchor="middle" fontSize="13" fill="#1f3a5f">Ingresos, márgenes, CapEx, coste de capital</text>
            <text x="490" y="133" textAnchor="middle" fontSize="12" fill="#2f4f73">Trazabilidad y comparabilidad</text>

            <rect x="668" y="44" width="286" height="110" rx="14" fill="#ffe9ec" stroke="#d78c95" />
            <text x="811" y="72" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f3a5f">Salida de mercado</text>
            <text x="811" y="95" textAnchor="middle" fontSize="13" fill="#1f3a5f">💹 Tesis de inversión más sólida</text>
            <text x="811" y="114" textAnchor="middle" fontSize="13" fill="#1f3a5f">Mejor lectura de riesgo y resiliencia</text>
            <text x="811" y="133" textAnchor="middle" fontSize="12" fill="#2f4f73">Mayor credibilidad del relato</text>

            <line x1="312" y1="99" x2="338" y2="99" stroke="#1f3a5f" strokeWidth="2.6" markerEnd="url(#arrow-b3)" />
            <line x1="642" y1="99" x2="668" y2="99" stroke="#1f3a5f" strokeWidth="2.6" markerEnd="url(#arrow-b3)" />

            <rect x="160" y="190" width="660" height="84" rx="14" fill="#e4f4ea" stroke="#69a583" />
            <text x="490" y="218" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1f3a5f">
              Equity Story Creíble
            </text>
            <text x="490" y="240" textAnchor="middle" fontSize="13" fill="#1f3a5f">
              🧩 Integra estrategia + sostenibilidad + asignación de capital
            </text>
            <text x="490" y="260" textAnchor="middle" fontSize="13" fill="#1f3a5f">
              ✅ Mensajes verificables, materiales y defendibles ante inversores
            </text>

            <line x1="490" y1="154" x2="490" y2="190" stroke="#1f3a5f" strokeWidth="2.6" markerEnd="url(#arrow-b3)" />

            <text x="490" y="318" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1f3a5f">
              ♻ Clave 2026: coherencia entre narrativa, datos y ejecución
            </text>
          </svg>
        ) : isBlock2 ? (
          <svg
            viewBox="0 0 980 286"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "980px", width: "100%", height: "auto" }}
          >
            <defs>
              <linearGradient id="b2-ue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f4f8fd" />
                <stop offset="100%" stopColor="#e7f0fb" />
              </linearGradient>
              <linearGradient id="b2-us" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#faf7f2" />
                <stop offset="100%" stopColor="#f0e8dc" />
              </linearGradient>
              <marker id="arrow-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#355e85" />
              </marker>
            </defs>

            <text x="490" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a3d5c">
              UE frente a EE.UU.: dos lógicas de reporting ESG
            </text>
            <text x="490" y="40" textAnchor="middle" fontSize="10.5" fill="#5c7285">
              Misma etiqueta «ESG», reglas y mercados distintos
            </text>

            <rect x="22" y="50" width="452" height="124" rx="14" fill="url(#b2-ue)" stroke="#6a9ecf" strokeWidth="1.1" />
            <circle cx="42" cy="70" r="7" fill="#003399" stroke="#1f3d5a" strokeWidth="0.6" />
            <text x="58" y="74" fontSize="13" fontWeight="800" fill="#0f3b63">
              Unión Europea
            </text>
            <text fontSize="10.5" fill="#2a5578">
              <tspan x="36" y="96">
                Marco: CSRD · ESRS · Taxonomía
              </tspan>
              <tspan x="36" dy="17">
                Mercado: comparabilidad · cadena de valor
              </tspan>
              <tspan x="36" dy="17">
                2025-26: simplificación (Omnibus)
              </tspan>
            </text>

            <rect x="506" y="50" width="452" height="124" rx="14" fill="url(#b2-us)" stroke="#c4a574" strokeWidth="1.1" />
            <circle cx="526" cy="70" r="7" fill="#b22234" stroke="#8b1c1c" strokeWidth="0.6" />
            <text x="542" y="74" fontSize="13" fontWeight="800" fill="#6b4a17">
              Estados Unidos
            </text>
            <text fontSize="10.5" fill="#7a5721">
              <tspan x="520" y="96">
                Marco: SEC · clima · materialidad financiera
              </tspan>
              <tspan x="520" dy="17">
                Mercado: fiduciario · litigios
              </tspan>
              <tspan x="520" dy="17">
                2025-26: menos armonía que la UE
              </tspan>
            </text>

            <line x1="248" y1="174" x2="400" y2="200" stroke="#355e85" strokeWidth="2.2" markerEnd="url(#arrow-b2)" />
            <line x1="732" y1="174" x2="580" y2="200" stroke="#355e85" strokeWidth="2.2" markerEnd="url(#arrow-b2)" />

            <rect x="240" y="192" width="500" height="56" rx="12" fill="#fff4dc" stroke="#d9b367" strokeWidth="1.1" />
            <text x="490" y="212" textAnchor="middle" fontSize="12" fontWeight="800" fill="#6b4a17">
              Grieta
            </text>
            <text textAnchor="middle" fontSize="10.5" fill="#7a5721">
              <tspan x="490" y="230">
                Dual listing: dos supervisores
              </tspan>
              <tspan x="490" dy="15">
                Un mismo KPI puede leerse de forma distinta
              </tspan>
            </text>

            <rect x="120" y="260" width="740" height="22" rx="6" fill="#e4f3e9" stroke="#69a583" strokeWidth="1" />
            <text x="490" y="275" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1f6848">
              RI: relato y métricas calibrados por mercado
            </text>
          </svg>
        ) : isBlock5 ? (
          <svg
            viewBox="0 0 980 300"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "980px", width: "100%", height: "auto" }}
          >
            <defs>
              <marker id="arrow-b5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2e567f" />
              </marker>
            </defs>

            <text x="490" y="24" textAnchor="middle" fontSize="15" fontWeight="700" fill="#244a6f">
              Mapa visual - Trilogía regulatoria (lectura rápida)
            </text>

            <rect x="36" y="54" width="276" height="126" rx="16" fill="#e7f0fb" stroke="#6f9fca" />
            <text x="174" y="90" textAnchor="middle" fontSize="22" fontWeight="800" fill="#0f3b63">CSRD</text>
            <text x="174" y="114" textAnchor="middle" fontSize="13.5" fill="#2a587f">Dato corporativo</text>
            <text x="174" y="136" textAnchor="middle" fontSize="12.5" fill="#2a587f">Sujetos: empresas</text>
            <text x="174" y="157" textAnchor="middle" fontSize="12.5" fill="#2a587f">Salida: métricas ESRS</text>

            <rect x="352" y="54" width="276" height="126" rx="16" fill="#fff3dd" stroke="#d6b06a" />
            <text x="490" y="90" textAnchor="middle" fontSize="22" fontWeight="800" fill="#6b4b18">TAXONOMÍA</text>
            <text x="490" y="114" textAnchor="middle" fontSize="13.5" fill="#7d5923">Clasificación técnica</text>
            <text x="490" y="136" textAnchor="middle" fontSize="12.5" fill="#7d5923">Sujetos: actividades</text>
            <text x="490" y="157" textAnchor="middle" fontSize="12.5" fill="#7d5923">Salida: elegible / alineada</text>

            <rect x="668" y="54" width="276" height="126" rx="16" fill="#e7f0fb" stroke="#6f9fca" />
            <text x="806" y="90" textAnchor="middle" fontSize="22" fontWeight="800" fill="#0f3b63">SFDR</text>
            <text x="806" y="114" textAnchor="middle" fontSize="13.5" fill="#2a587f">Transparencia al inversor</text>
            <text x="806" y="136" textAnchor="middle" fontSize="12.5" fill="#2a587f">Sujetos: participantes y asesores</text>
            <text x="806" y="157" textAnchor="middle" fontSize="12.5" fill="#2a587f">Salida: disclosure de producto</text>

            <line x1="312" y1="117" x2="352" y2="117" stroke="#2e567f" strokeWidth="3" markerEnd="url(#arrow-b5)" />
            <line x1="628" y1="117" x2="668" y2="117" stroke="#2e567f" strokeWidth="3" markerEnd="url(#arrow-b5)" />

            <rect x="150" y="214" width="680" height="52" rx="14" fill="#e4f3e9" stroke="#69a583" />
            <text x="490" y="236" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#1f6848">
              Sinergia de lectura: Dato corporativo → Clasificacion tecnica → Disclosure al inversor
            </text>
            <text x="490" y="255" textAnchor="middle" fontSize="12.5" fill="#226a49">
              Resultado: comparabilidad de mercado y narrativa de RI consistente
            </text>
          </svg>
        ) : isBlock6 ? (
          <svg
            viewBox="0 0 980 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "980px", width: "100%", height: "auto" }}
          >
            <defs>
              <marker id="arrow-b6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#315f8a" />
              </marker>
            </defs>

            <text x="490" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="#23486d">
              Cronologia CSDDD simplificada (UE)
            </text>

            <rect x="30" y="48" width="214" height="120" rx="14" fill="#e8f1fb" stroke="#6a9ecf" />
            <text x="137" y="75" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f3a63">2025 · Stop-the-clock</text>
            <text x="137" y="97" textAnchor="middle" fontSize="12.5" fill="#224f7a">Aplaza 1 ano</text>
            <text x="137" y="116" textAnchor="middle" fontSize="12.5" fill="#224f7a">transposicion y primera aplicacion</text>
            <text x="137" y="137" textAnchor="middle" fontSize="12" fill="#365f88">Cambio regulatorio clave</text>

            <rect x="270" y="48" width="214" height="120" rx="14" fill="#fff3dd" stroke="#d6b06a" />
            <text x="377" y="75" textAnchor="middle" fontSize="14" fontWeight="800" fill="#6b4a17">2026 · Omnibus</text>
            <text x="377" y="97" textAnchor="middle" fontSize="12.5" fill="#7a5721">Reduce alcance y ajusta</text>
            <text x="377" y="116" textAnchor="middle" fontSize="12.5" fill="#7a5721">obligaciones sustantivas</text>
            <text x="377" y="137" textAnchor="middle" fontSize="12" fill="#8a6630">Enfoque mas priorizado</text>

            <rect x="510" y="48" width="214" height="120" rx="14" fill="#e8f1fb" stroke="#6a9ecf" />
            <text x="617" y="75" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f3a63">2028 · Transposicion</text>
            <text x="617" y="97" textAnchor="middle" fontSize="12.5" fill="#224f7a">Fecha limite nacional</text>
            <text x="617" y="116" textAnchor="middle" fontSize="12.5" fill="#224f7a">26 julio 2028</text>
            <text x="617" y="137" textAnchor="middle" fontSize="12" fill="#365f88">Preparacion operativa</text>

            <rect x="750" y="48" width="200" height="120" rx="14" fill="#fff3dd" stroke="#d6b06a" />
            <text x="850" y="75" textAnchor="middle" fontSize="14" fontWeight="800" fill="#6b4a17">2029 · Cumplimiento</text>
            <text x="850" y="97" textAnchor="middle" fontSize="12.5" fill="#7a5721">Aplicacion obligatoria</text>
            <text x="850" y="116" textAnchor="middle" fontSize="12.5" fill="#7a5721">julio 2029</text>
            <text x="850" y="137" textAnchor="middle" fontSize="12" fill="#8a6630">Control y remediacion</text>

            <line x1="244" y1="108" x2="270" y2="108" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b6)" />
            <line x1="484" y1="108" x2="510" y2="108" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b6)" />
            <line x1="724" y1="108" x2="750" y2="108" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b6)" />

            <rect x="120" y="204" width="740" height="84" rx="14" fill="#e4f3e9" stroke="#69a583" />
            <text x="490" y="232" textAnchor="middle" fontSize="14.5" fontWeight="700" fill="#1f6848">
              Perimetro simplificado y enfoque de riesgo
            </text>
            <text x="490" y="252" textAnchor="middle" fontSize="12.5" fill="#226a49">
              Umbrales: mas de 5.000 empleados y mas de EUR 1.500M de facturacion neta anual
            </text>
            <text x="490" y="271" textAnchor="middle" fontSize="12.5" fill="#226a49">
              Tope sancionador del 3% y responsabilidad en legislacion nacional
            </text>
          </svg>
        ) : isBlock7 ? (
          <svg
            viewBox="0 0 980 348"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              maxWidth: "980px",
              width: "100%",
              height: "auto",
              fontFamily: "system-ui, Segoe UI, Roboto, sans-serif",
            }}
          >
            <defs>
              <marker id="arrow-b7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#315f8a" />
              </marker>
            </defs>

            <text x="490" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="#23486d">
              Cronología CSRD simplificada (stop-the-clock)
            </text>

            {/* Cajas ~170px: texto en varias líneas con tspan para no desbordar */}
            {/* 2025 */}
            <rect x="30" y="44" width="170" height="132" rx="14" fill="#e8f1fb" stroke="#6a9ecf" />
            <text x="115" y="66" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#0f3a63">
              2025 · 1.ª ola
            </text>
            <text x="115" y="84" textAnchor="middle" fontSize="10.5" fill="#224f7a">
              <tspan x="115" dy="0">
                Grandes EIP,
              </tspan>
              <tspan x="115" dy="14">
                ej. 2024
              </tspan>
              <tspan x="115" dy="14">
                Sin cambio · quick fix
              </tspan>
              <tspan x="115" dy="14">
                Por ejercicio
              </tspan>
              <tspan x="115" dy="14">
                fiscal
              </tspan>
            </text>

            {/* 2026 */}
            <rect x="220" y="44" width="170" height="132" rx="14" fill="#fff3dd" stroke="#e57373" strokeWidth="1.8" strokeDasharray="5 4" />
            <text x="305" y="66" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#6b4a17">
              2026 · 2.ª ola
            </text>
            <text x="305" y="84" textAnchor="middle" fontSize="10.5" fill="#7a5721">
              <tspan x="305" dy="0">
                Grandes /
              </tspan>
              <tspan x="305" dy="14">
                matrices
              </tspan>
              <tspan x="305" dy="14">
                ej. 2025
              </tspan>
              <tspan x="305" dy="14">
                Aplazada
              </tspan>
              <tspan x="305" dy="14">
                2 años
              </tspan>
              <tspan x="305" dy="14" fill="#8a6630">
                → 2028
              </tspan>
            </text>

            {/* 2027 */}
            <rect x="410" y="44" width="170" height="132" rx="14" fill="#fff3dd" stroke="#e57373" strokeWidth="1.8" strokeDasharray="5 4" />
            <text x="495" y="66" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#6b4a17">
              2027 · 3.ª ola
            </text>
            <text x="495" y="84" textAnchor="middle" fontSize="10.5" fill="#7a5721">
              <tspan x="495" dy="0">
                Pymes
              </tspan>
              <tspan x="495" dy="14">
                cotizadas
              </tspan>
              <tspan x="495" dy="14">
                ej. 2026
              </tspan>
              <tspan x="495" dy="14">
                Aplazada
              </tspan>
              <tspan x="495" dy="14">
                2 años
              </tspan>
              <tspan x="495" dy="14" fill="#8a6630">
                → 2029
              </tspan>
            </text>

            {/* 2028 */}
            <rect x="600" y="44" width="170" height="132" rx="14" fill="#e8f1fb" stroke="#6a9ecf" />
            <text x="685" y="66" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#0f3a63">
              2028 · 2.ª ola
            </text>
            <text x="685" y="84" textAnchor="middle" fontSize="10.5" fill="#224f7a">
              <tspan x="685" dy="0">
                Grandes /
              </tspan>
              <tspan x="685" dy="14">
                matrices
              </tspan>
              <tspan x="685" dy="14">
                ej. 2027
              </tspan>
              <tspan x="685" dy="14">
                Efectiva tras
              </tspan>
              <tspan x="685" dy="14">
                aplazamiento
              </tspan>
              <tspan x="685" dy="14" fill="#365f88">
                Antes: 2026
              </tspan>
            </text>

            {/* 2029 — caja más estrecha */}
            <rect x="790" y="44" width="160" height="132" rx="14" fill="#fff3dd" stroke="#d6b06a" />
            <text x="870" y="66" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#6b4a17">
              2029 · 3.ª ola
            </text>
            <text x="870" y="84" textAnchor="middle" fontSize="10.5" fill="#7a5721">
              <tspan x="870" dy="0">
                Pymes
              </tspan>
              <tspan x="870" dy="14">
                ej. 2028
              </tspan>
              <tspan x="870" dy="14">
                + no UE /
              </tspan>
              <tspan x="870" dy="14">
                filiales UE
              </tspan>
              <tspan x="870" dy="14" fill="#8a6630">
                Orientativo
              </tspan>
            </text>

            <line x1="200" y1="110" x2="220" y2="110" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b7)" />
            <line x1="390" y1="110" x2="410" y2="110" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b7)" />
            <line x1="580" y1="110" x2="600" y2="110" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b7)" />
            <line x1="770" y1="110" x2="790" y2="110" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow-b7)" />

            <rect x="80" y="196" width="820" height="112" rx="14" fill="#e4f3e9" stroke="#69a583" />
            <text x="490" y="218" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1f6848">
              <tspan x="490" dy="0">
                Lectura conjunta: calendario original,
              </tspan>
              <tspan x="490" dy="15">
                stop-the-clock y perímetro Omnibus
              </tspan>
            </text>
            <text x="490" y="252" textAnchor="middle" fontSize="10.5" fill="#226a49">
              <tspan x="490" dy="0">
                Orientativo: contrastar con normativa
              </tspan>
              <tspan x="490" dy="14">
                y FAQ oficiales vigentes
              </tspan>
            </text>
            <text x="490" y="284" textAnchor="middle" fontSize="10.5" fill="#226a49">
              <tspan x="490" dy="0">
                Obligaciones según ejercicio fiscal
              </tspan>
              <tspan x="490" dy="14">
                objeto de información
              </tspan>
            </text>
          </svg>
        ) : isBlock8 ? (
          <svg
            viewBox="0 0 980 444"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              maxWidth: "980px",
              width: "100%",
              height: "auto",
              fontFamily: "system-ui, Segoe UI, Roboto, sans-serif",
            }}
          >
            <defs>
              <linearGradient id="b8-card-a" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f2f7fc" />
                <stop offset="100%" stopColor="#e3eef8" />
              </linearGradient>
              <linearGradient id="b8-card-b" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fffaf3" />
                <stop offset="100%" stopColor="#ffeccd" />
              </linearGradient>
              <linearGradient id="b8-card-c" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f2faf5" />
                <stop offset="100%" stopColor="#dff3e8" />
              </linearGradient>
            </defs>

            <text x="490" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1a3d5c">
              Mapa visual · GAR/BTAR, ISF y CapEx
            </text>
            <text x="490" y="40" textAnchor="middle" fontSize="11" fill="#4a6278">
              Tres ámbitos distintos: divulgación bancaria, capital regulatorio e inversión en la empresa
            </text>

            {/* Raíl vertical */}
            <line x1="36" y1="78" x2="36" y2="318" stroke="#c5d4e0" strokeWidth="2.5" strokeLinecap="round" />

            {/* --- Bloque 1 --- */}
            <circle cx="36" cy="86" r="9" fill="#4a7aa8" stroke="#fff" strokeWidth="2" />
            <text x="36" y="90" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
              1
            </text>
            <rect x="56" y="56" width="900" height="108" rx="14" fill="url(#b8-card-a)" stroke="#6a9ecf" strokeWidth="1.2" />
            <text x="72" y="78" fontSize="10" fontWeight="800" fill="#0f3a63" letterSpacing="0.06em">
              FINANCIADOR · BALANCE
            </text>
            <text x="72" y="98" fontSize="13" fontWeight="700" fill="#0f3a63">
              GAR y BTAR
            </text>
            <text x="72" y="116" fontSize="11" fill="#2a5578">
              Ratios sobre activos del banking book · art. 8 Taxonomía · divulgación Pilar 3 / EBA
            </text>
            <text x="72" y="134" fontSize="10" fill="#315f8a">
              GAR estricto · BTAR ampliado con estimaciones donde aplique
            </text>
            <line x1="72" y1="142" x2="928" y2="142" stroke="#6a9ecf" strokeOpacity="0.35" strokeWidth="1" />
            <text x="72" y="158" fontSize="10.5" fill="#23486d" fontStyle="italic">
              Pregunta: ¿qué parte del activo cubierto está alineada con la Taxonomía UE?
            </text>

            {/* --- Bloque 2 --- */}
            <circle cx="36" cy="198" r="9" fill="#c48a2c" stroke="#fff" strokeWidth="2" />
            <text x="36" y="202" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
              2
            </text>
            <rect x="56" y="176" width="900" height="112" rx="14" fill="url(#b8-card-b)" stroke="#d6a84a" strokeWidth="1.2" />
            <text x="72" y="198" fontSize="10" fontWeight="800" fill="#6b4a17" letterSpacing="0.06em">
              PRUDENCIAL · CRR
            </text>
            <text x="72" y="218" fontSize="13" fontWeight="700" fill="#6b4a17">
              ISF — alivio en requisitos propios
            </text>
            <text x="72" y="236" fontSize="11" fill="#7a5721">
              Art. 501a CRR · exposición a infraestructura elegible · efecto aprox. −25% en requisitos propios
            </text>
            <text x="72" y="252" fontSize="10" fill="#8a6630">
              No sustituye a KPIs de Taxonomía ni a clasificación de producto verde
            </text>
            <line x1="72" y1="260" x2="928" y2="260" stroke="#d6a84a" strokeOpacity="0.4" strokeWidth="1" />
            <text x="72" y="276" fontSize="10.5" fill="#7a4a12" fontStyle="italic">
              Pregunta: ¿qué margen de capital libera al financiar infra de calidad?
            </text>

            {/* --- Bloque 3 --- */}
            <circle cx="36" cy="314" r="9" fill="#3d8f62" stroke="#fff" strokeWidth="2" />
            <text x="36" y="318" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
              3
            </text>
            <rect x="56" y="300" width="900" height="100" rx="14" fill="url(#b8-card-c)" stroke="#56a47d" strokeWidth="1.2" />
            <text x="72" y="322" fontSize="10" fontWeight="800" fill="#145736" letterSpacing="0.06em">
              EMPRESA FINANCIADA · NFR
            </text>
            <text x="72" y="342" fontSize="13" fontWeight="700" fill="#145736">
              CapEx, turnover y OpEx
            </text>
            <text x="72" y="360" fontSize="11" fill="#226a49">
              Indicadores art. 8 Taxonomía · señal de hacia dónde se orienta la inversión y la transición
            </text>
            <line x1="72" y1="368" x2="928" y2="368" stroke="#56a47d" strokeOpacity="0.4" strokeWidth="1" />
            <text x="72" y="384" fontSize="10.5" fill="#1f6848" fontStyle="italic">
              Pregunta: ¿la inversión refleja el modelo futuro del negocio?
            </text>

            <rect x="56" y="412" width="900" height="28" rx="8" fill="#e8f4ee" stroke="#69a583" strokeWidth="1" />
            <text x="506" y="430" textAnchor="middle" fontSize="9.5" fill="#1f6848">
              Lectura conjunta: balance · prudencial · trayectoria de inversión · EBA/ITS en revisión, orientativo
            </text>
          </svg>
        ) : isBlock9 ? (
          <svg
            viewBox="0 0 980 300"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              maxWidth: "980px",
              width: "100%",
              height: "auto",
              fontFamily: "system-ui, Segoe UI, Roboto, sans-serif",
            }}
          >
            <defs>
              <linearGradient id="b9-ue" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e8f2fc" />
                <stop offset="100%" stopColor="#f0f7ff" />
              </linearGradient>
            </defs>

            <text x="490" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1a3d5c">
              Referencias de mercado y capas normativas (UE)
            </text>
            <text x="490" y="42" textAnchor="middle" fontSize="10.5" fill="#4a6278">
              Ratings, índices y analytics — lectura conjunta con BMR, reglamento de ratings ESG y supervisión
            </text>

            {/* Marco normativo UE — franja visual */}
            <rect x="24" y="54" width="932" height="68" rx="12" fill="url(#b9-ue)" stroke="#6a9ecf" strokeWidth="1.2" />
            <rect x="36" y="64" width="4" height="48" rx="2" fill="#0077cc" />
            <text x="52" y="80" fontSize="10" fontWeight="700" fill="#0f3a63">
              Ratings ESG
            </text>
            <text x="52" y="96" fontSize="9.2" fill="#315f8a">
              Reglamento (UE) 2024/3005 · autorización / supervisión ESMA · aplicación jul 2026
            </text>
            <line x1="330" y1="64" x2="330" y2="112" stroke="#c5d4e0" strokeWidth="1" />
            <text x="342" y="80" fontSize="10" fontWeight="700" fill="#0f3a63">
              Benchmarks e índices
            </text>
            <text x="342" y="96" fontSize="9.2" fill="#315f8a">
              BMR · disclosure ESG en metodología · CTB / PAB (delegados 1816-1818)
            </text>
            <line x1="642" y1="64" x2="642" y2="112" stroke="#c5d4e0" strokeWidth="1" />
            <text x="654" y="80" fontSize="10" fontWeight="700" fill="#0f3a63">
              Uso ante el mercado
            </text>
            <text x="654" y="96" fontSize="9.2" fill="#315f8a">
              ESAs: fair, clear and not misleading · naming fondos (ESMA)
            </text>

            {/* Fila de logos */}
            <text x="490" y="144" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5c7285" letterSpacing="0.1em">
              PROVEEDORES Y REFERENCIAS
            </text>

            {/* Celda 1 — S&P / CSA */}
            <rect x="20" y="154" width="176" height="88" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <image
              href="/images/diagram-b9-csa.png"
              x="28"
              y="160"
              width="160"
              height="44"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="108" y="222" textAnchor="middle" fontSize="8.5" fill="#2a5578">
              S&P Global · CSA / DJSI
            </text>

            {/* Celda 2 — FTSE */}
            <rect x="212" y="154" width="176" height="88" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <image
              href="/images/diagram-b9-ftse.jpeg"
              x="220"
              y="160"
              width="160"
              height="44"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="300" y="222" textAnchor="middle" fontSize="8.5" fill="#2a5578">
              FTSE4Good · familia índices
            </text>

            {/* Celda 3 — ISS ESG */}
            <rect x="404" y="154" width="176" height="88" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <image
              href="/images/diagram-b9-iss-esg.png"
              x="412"
              y="160"
              width="160"
              height="44"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="492" y="222" textAnchor="middle" fontSize="8.5" fill="#2a5578">
              ISS ESG · opiniones
            </text>

            {/* Celda 4 — MSCI */}
            <rect x="596" y="154" width="176" height="88" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <image
              href="/images/diagram-b9-msci.jpg"
              x="604"
              y="160"
              width="160"
              height="44"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="684" y="222" textAnchor="middle" fontSize="8.5" fill="#2a5578">
              MSCI · índices y ratings
            </text>

            {/* Celda 5 — Sustainalytics */}
            <rect x="788" y="154" width="176" height="88" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <image
              href="/images/diagram-b9-sustainalytics.png"
              x="796"
              y="160"
              width="160"
              height="44"
              preserveAspectRatio="xMidYMid meet"
            />
            <text x="876" y="222" textAnchor="middle" fontSize="8.5" fill="#2a5578">
              Morningstar Sustainalytics
            </text>

            <rect x="24" y="252" width="932" height="40" rx="10" fill="#f4faf6" stroke="#69a583" strokeWidth="1" />
            <text x="490" y="272" textAnchor="middle" fontSize="9.5" fill="#1f6848">
              Lectura: distinguir rating, índice y claim — la norma exige transparencia metodológica, no una única definición de “ESG”
            </text>
            <text x="490" y="286" textAnchor="middle" fontSize="8.8" fill="#3d8f62">
              Logotipos: marcas de sus titulares · uso ilustrativo en contexto formativo
            </text>
          </svg>
        ) : (
          <svg
            viewBox="0 0 860 240"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "860px", width: "100%", height: "auto" }}
          >
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#315f8a" />
              </marker>
            </defs>

            <rect x="30" y="42" width="260" height="92" rx="14" fill="#e8f1fb" stroke="#6a9ecf" />
            <g transform="translate(134,56)">
              <rect x="0" y="0" width="52" height="30" rx="2" fill="#003399" stroke="#1f3d5a" strokeWidth="0.7" />
              <circle cx="26" cy="6" r="1.1" fill="#ffcc00" />
              <circle cx="31" cy="7.4" r="1.1" fill="#ffcc00" />
              <circle cx="34.6" cy="11" r="1.1" fill="#ffcc00" />
              <circle cx="36" cy="15" r="1.1" fill="#ffcc00" />
              <circle cx="34.6" cy="19" r="1.1" fill="#ffcc00" />
              <circle cx="31" cy="22.6" r="1.1" fill="#ffcc00" />
              <circle cx="26" cy="24" r="1.1" fill="#ffcc00" />
              <circle cx="21" cy="22.6" r="1.1" fill="#ffcc00" />
              <circle cx="17.4" cy="19" r="1.1" fill="#ffcc00" />
              <circle cx="16" cy="15" r="1.1" fill="#ffcc00" />
              <circle cx="17.4" cy="11" r="1.1" fill="#ffcc00" />
              <circle cx="21" cy="7.4" r="1.1" fill="#ffcc00" />
            </g>
            <text x="160" y="97" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f3a63">
              Unión Europea
            </text>
            <text x="160" y="118" textAnchor="middle" fontSize="13" fill="#224f7a">
              Marco estructurado y simplificación
            </text>

            <rect x="570" y="42" width="260" height="92" rx="14" fill="#e8f1fb" stroke="#6a9ecf" />
            <g transform="translate(674,56)">
              <rect x="0" y="0" width="52" height="30" rx="2" fill="#ffffff" stroke="#1f3d5a" strokeWidth="0.7" />
              <rect x="0" y="0" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="4.6" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="9.2" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="13.8" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="18.4" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="23" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="27.6" width="52" height="2.3" fill="#b22234" />
              <rect x="0" y="0" width="22" height="16" fill="#3c3b6e" />
              <circle cx="4" cy="3.5" r="0.7" fill="#ffffff" />
              <circle cx="8" cy="3.5" r="0.7" fill="#ffffff" />
              <circle cx="12" cy="3.5" r="0.7" fill="#ffffff" />
              <circle cx="16" cy="3.5" r="0.7" fill="#ffffff" />
              <circle cx="20" cy="3.5" r="0.7" fill="#ffffff" />
              <circle cx="6" cy="7.2" r="0.7" fill="#ffffff" />
              <circle cx="10" cy="7.2" r="0.7" fill="#ffffff" />
              <circle cx="14" cy="7.2" r="0.7" fill="#ffffff" />
              <circle cx="18" cy="7.2" r="0.7" fill="#ffffff" />
              <circle cx="4" cy="10.9" r="0.7" fill="#ffffff" />
              <circle cx="8" cy="10.9" r="0.7" fill="#ffffff" />
              <circle cx="12" cy="10.9" r="0.7" fill="#ffffff" />
              <circle cx="16" cy="10.9" r="0.7" fill="#ffffff" />
              <circle cx="20" cy="10.9" r="0.7" fill="#ffffff" />
              <circle cx="6" cy="14.5" r="0.7" fill="#ffffff" />
              <circle cx="10" cy="14.5" r="0.7" fill="#ffffff" />
              <circle cx="14" cy="14.5" r="0.7" fill="#ffffff" />
              <circle cx="18" cy="14.5" r="0.7" fill="#ffffff" />
            </g>
            <text x="700" y="97" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f3a63">
              Estados Unidos
            </text>
            <text x="700" y="118" textAnchor="middle" fontSize="13" fill="#224f7a">
              Materialidad y mayor politización
            </text>

            <rect x="270" y="164" width="320" height="58" rx="14" fill="#dff1e8" stroke="#56a47d" />
            <text x="430" y="189" textAnchor="middle" fontSize="16" fontWeight="700" fill="#145736">
              ESG 2026
            </text>
            <text x="430" y="209" textAnchor="middle" fontSize="12.5" fill="#216848">
              Coherencia entre estrategia, regulación y financiación
            </text>

            <line x1="200" y1="134" x2="360" y2="164" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <line x1="660" y1="134" x2="500" y2="164" stroke="#315f8a" strokeWidth="2.5" markerEnd="url(#arrow)" />
          </svg>
        )}
      </div>
    </figure>
  );
}

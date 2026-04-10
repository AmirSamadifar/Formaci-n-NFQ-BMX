type Props = {
  code: string;
  topicNumber?: number;
  caption?: string;
};

export function DiagramBlock({ code: _code, topicNumber, caption }: Props) {
  const isBlock2 = topicNumber === 2;
  const isBlock3 = topicNumber === 3;
  const isBlock4 = topicNumber === 4;

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

            <rect x="290" y="292" width="400" height="42" rx="12" fill="#dff1e8" stroke="#56a47d" />
            <text x="490" y="318" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1f3a5f">
              ♻ Clave 2026: coherencia entre narrativa, datos y ejecución
            </text>
          </svg>
        ) : isBlock2 ? (
          <svg
            viewBox="0 0 920 270"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ maxWidth: "920px", width: "100%", height: "auto" }}
          >
            <defs>
              <marker id="arrow-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#355e85" />
              </marker>
            </defs>

            <text x="460" y="20" textAnchor="middle" fontSize="14" fontWeight="700" fill="#23486d">
              Mapa visual - Divergencia transatlántica (2025-2026)
            </text>

            <rect x="26" y="30" width="276" height="112" rx="14" fill="#e7f0fb" stroke="#6d9ecb" />
            <g transform="translate(42,44)">
              <rect x="0" y="0" width="42" height="24" rx="2" fill="#003399" stroke="#1f3d5a" strokeWidth="0.6" />
              <circle cx="21" cy="4.2" r="0.9" fill="#ffcc00" />
              <circle cx="25" cy="5.3" r="0.9" fill="#ffcc00" />
              <circle cx="27.9" cy="8.2" r="0.9" fill="#ffcc00" />
              <circle cx="29" cy="12" r="0.9" fill="#ffcc00" />
              <circle cx="27.9" cy="15.8" r="0.9" fill="#ffcc00" />
              <circle cx="25" cy="18.7" r="0.9" fill="#ffcc00" />
              <circle cx="21" cy="19.8" r="0.9" fill="#ffcc00" />
              <circle cx="17" cy="18.7" r="0.9" fill="#ffcc00" />
              <circle cx="14.1" cy="15.8" r="0.9" fill="#ffcc00" />
              <circle cx="13" cy="12" r="0.9" fill="#ffcc00" />
              <circle cx="14.1" cy="8.2" r="0.9" fill="#ffcc00" />
              <circle cx="17" cy="5.3" r="0.9" fill="#ffcc00" />
            </g>
            <text x="164" y="59" textAnchor="middle" fontSize="16" fontWeight="700" fill="#113b62">Unión Europea</text>
            <text x="164" y="82" textAnchor="middle" fontSize="13" fill="#28547d">Marco ESG estable</text>
            <text x="164" y="101" textAnchor="middle" fontSize="13" fill="#28547d">simplificación normativa</text>
            <text x="164" y="120" textAnchor="middle" fontSize="12" fill="#40688e">CSRD / CSDDD / comparabilidad</text>

            <rect x="618" y="30" width="276" height="112" rx="14" fill="#e7f0fb" stroke="#6d9ecb" />
            <g transform="translate(634,44)">
              <rect x="0" y="0" width="42" height="24" rx="2" fill="#ffffff" stroke="#1f3d5a" strokeWidth="0.6" />
              <rect x="0" y="0" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="3.68" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="7.36" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="11.04" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="14.72" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="18.4" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="22.08" width="42" height="1.84" fill="#b22234" />
              <rect x="0" y="0" width="18" height="12.8" fill="#3c3b6e" />
              <circle cx="3.3" cy="2.8" r="0.55" fill="#ffffff" />
              <circle cx="6.6" cy="2.8" r="0.55" fill="#ffffff" />
              <circle cx="9.9" cy="2.8" r="0.55" fill="#ffffff" />
              <circle cx="13.2" cy="2.8" r="0.55" fill="#ffffff" />
              <circle cx="16.5" cy="2.8" r="0.55" fill="#ffffff" />
              <circle cx="4.95" cy="5.7" r="0.55" fill="#ffffff" />
              <circle cx="8.25" cy="5.7" r="0.55" fill="#ffffff" />
              <circle cx="11.55" cy="5.7" r="0.55" fill="#ffffff" />
              <circle cx="14.85" cy="5.7" r="0.55" fill="#ffffff" />
              <circle cx="3.3" cy="8.6" r="0.55" fill="#ffffff" />
              <circle cx="6.6" cy="8.6" r="0.55" fill="#ffffff" />
              <circle cx="9.9" cy="8.6" r="0.55" fill="#ffffff" />
              <circle cx="13.2" cy="8.6" r="0.55" fill="#ffffff" />
              <circle cx="16.5" cy="8.6" r="0.55" fill="#ffffff" />
              <circle cx="4.95" cy="11.5" r="0.55" fill="#ffffff" />
              <circle cx="8.25" cy="11.5" r="0.55" fill="#ffffff" />
              <circle cx="11.55" cy="11.5" r="0.55" fill="#ffffff" />
              <circle cx="14.85" cy="11.5" r="0.55" fill="#ffffff" />
            </g>
            <text x="756" y="59" textAnchor="middle" fontSize="16" fontWeight="700" fill="#113b62">Estados Unidos</text>
            <text x="756" y="82" textAnchor="middle" fontSize="13" fill="#28547d">Mayor politización y</text>
            <text x="756" y="101" textAnchor="middle" fontSize="13" fill="#28547d">enfoque de materialidad</text>
            <text x="756" y="120" textAnchor="middle" fontSize="12" fill="#40688e">SEC / disclosure selectivo</text>

            <rect x="326" y="164" width="268" height="76" rx="14" fill="#fff4dc" stroke="#d9b367" />
            <text x="460" y="192" textAnchor="middle" fontSize="15" fontWeight="700" fill="#6b4a17">Divergencia transatlántica</text>
            <text x="460" y="212" textAnchor="middle" fontSize="12.5" fill="#7a5721">riesgo de narrativa única</text>
            <text x="460" y="229" textAnchor="middle" fontSize="12" fill="#8a6630">y de mensajes inconsistentes</text>

            <text x="460" y="262" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f6848">
              ♻ Respuesta: adaptar mensaje y métricas por geografía
            </text>

            <line x1="252" y1="142" x2="394" y2="164" stroke="#355e85" strokeWidth="2.5" markerEnd="url(#arrow-b2)" />
            <line x1="668" y1="142" x2="526" y2="164" stroke="#355e85" strokeWidth="2.5" markerEnd="url(#arrow-b2)" />
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

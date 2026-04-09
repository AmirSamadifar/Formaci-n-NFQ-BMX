/** Diagramas Mermaid anclados al guion (visión de sistema por bloque). */
export const diagramsByTopic = {
  1: `flowchart TB
    EU["Europa: marco y simplificación"]
    US["EEUU: materialidad y cautela"]
    EU --- D["Una estrategia coherente"]
    US --- D`,

  2: `flowchart TB
    subgraph One["Una arquitectura de fondo"]
      S["Estrategia única"]
    end
    subgraph Reg["Registros de mercado"]
      R1["Europa: reporting · trazabilidad"]
      R2["EEUU: ROI · riesgo · CapEx"]
    end
    One --> R1
    One --> R2`,

  3: `flowchart LR
    ESG["Factores ESG"] --> V["Variables de valoración"]
    V --> I["Ingresos / márgenes"]
    V --> C["CapEx / riesgo"]
    V --> W["Coste de capital"]
    EQ["Equity story"] --> ESG`,

  4: `flowchart TB
    P["Acuerdo de París"] --> S["Alcances 1 · 2 · 3"]
    S --> NZ["Net Zero: reducir primero"]
    NZ --> PL["Plan de transición"]
    PL --> T["TCFD · TPT · ESRS E1"]`,

  5: `flowchart LR
    CSRD["CSRD<br/>Dato corporativo"] --> TAX["Taxonomía<br/>Clasificación"]
    TAX --> SFDR["SFDR<br/>Producto e inversor"]
    CSRD -.->|"produce"| TAX
    TAX -.->|"alimenta"| SFDR`,

  6: `flowchart LR
    A1["Integrar"] --> A2["Identificar"]
    A2 --> A3["Prevenir / mitigar"]
    A3 --> A4["Supervisar"]
    A4 --> A5["Comunicar"]
    A5 --> A6["Remediar"]
    A6 -.->|"ciclo"| A1`,

  7: `flowchart TB
    DM["Doble materialidad"] --> OUT["Qué entra en la declaración"]
    DM --> I["Impacto"]
    DM --> F["Financiera"]
    ESRS["ESRS 1 + 2 + temáticos"] --> DM
    ASS["Limited assurance"] --> DM`,

  8: `flowchart TB
    GAR["GAR<br/>Alineamiento estricto"]
    BTAR["BTAR<br/>Banking book ampliado"]
    ISF["ISF<br/>Prudencial (CRR)"]
    CPX["CapEx alignment<br/>Empresa financiada"]
    GAR ~~~ BTAR
    ISF ~~~ CPX`,

  9: `flowchart TB
    R["Ratings ESG<br/>Opiniones / ESMA 2026"]
    IDX["Índices / BMR<br/>CTB · PAB"]
    GW["Greenwashing<br/>Claims fundados"]
    R ~~~ IDX
    IDX ~~~ GW`,
};

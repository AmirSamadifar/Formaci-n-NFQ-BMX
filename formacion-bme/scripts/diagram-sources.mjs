/** Diagramas Mermaid anclados al guion (visión de sistema por bloque). */
export const diagramsByTopic = {
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

  5: `flowchart TB
    subgraph C["CSRD · Capa de dato corporativo"]
      C1["Sujetos:<br/>empresas en perímetro"]
      C2["Salida:<br/>riesgos · impactos · métricas (ESRS)"]
    end

    subgraph T["Taxonomía · Capa de clasificación"]
      T1["Sujetos:<br/>empresas y reporting asociado a actividades"]
      T2["Salida:<br/>elegibilidad vs alineamiento<br/>DNSH · garantías mínimas"]
    end

    subgraph S["SFDR · Capa de transparencia al inversor"]
      S1["Sujetos:<br/>participantes del mercado financiero<br/>y asesores"]
      S2["Salida:<br/>disclosure de producto<br/>y comparabilidad para el inversor"]
    end

    C2 -->|"Sinergia 1:<br/>dato corporativo base"| T2
    T2 -->|"Sinergia 2:<br/>clasificación utilizable por mercado"| S2
    C2 -.->|"Sinergia 3:<br/>consistencia narrativa en RI"| S2`,

  6: `flowchart TB
    DM["Doble materialidad"] --> OUT["Qué entra en la declaración"]
    DM --> I["Impacto"]
    DM --> F["Financiera"]
    ESRS["ESRS 1 + 2 + temáticos"] --> DM
    ASS["Limited assurance"] --> DM`,

  7: `flowchart LR
    A1["Integrar"] --> A2["Identificar"]
    A2 --> A3["Prevenir / mitigar"]
    A3 --> A4["Supervisar"]
    A4 --> A5["Comunicar"]
    A5 --> A6["Remediar"]
    A6 -.->|"ciclo"| A1`,

  8: `flowchart LR
    subgraph Bank["Entidad de crédito · art. 8 Taxonomía / Pilar 3"]
      GAR["GAR · alineamiento estricto"]
      BTAR["BTAR · banking book ampliado"]
    end
    subgraph CRR501a["Prudencial · CRR art. 501a"]
      ISF["ISF · alivio capital infra"]
    end
    subgraph Corp["Corporate no financiero · art. 8"]
      CPX["CapEx alignment · KPI transición"]
    end
    Bank -.->|"lectura conjunta"| CRR501a
    CRR501a -.->|"sin mezclar planos"| Corp`,

  9: `flowchart TB
    R["Ratings ESG<br/>Opiniones / ESMA 2026"]
    IDX["Índices / BMR<br/>CTB · PAB"]
    GW["Greenwashing<br/>Claims fundados"]
    R ~~~ IDX
    IDX ~~~ GW`,
};

export type Topic = {
  id: string;
  number: number;
  title: string;
  /** Markdown — cuerpo principal */
  sectionA: string;
  /** Markdown — contexto */
  sectionB: string;
  /** Markdown — ampliación oral */
  sectionC: string;
};

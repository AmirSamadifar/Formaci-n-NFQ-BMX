export type MainBlock =
  | { type: "objective"; text: string }
  | { type: "narrative"; paragraphs: string[] }
  | { type: "cards"; items: { title: string; body: string }[] }
  | { type: "pillars"; lines: string[] }
  | {
      type: "callout";
      variant: "regulatory" | "ri";
      title: string;
      text: string;
    }
  | { type: "closing"; text: string };

export type SpeakerSection = {
  order: number;
  title: string;
  quotes: string[];
};

export type TopicPresentation = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  diagram: string | null;
  main: MainBlock[];
  enrich: {
    keyIdeas: string[];
    extraNote: string;
  };
  speaker: {
    duration: string;
    sections: SpeakerSection[];
  };
};

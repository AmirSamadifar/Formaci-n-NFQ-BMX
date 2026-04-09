import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

let mermaidReady = false;

function ensureMermaid() {
  if (mermaidReady) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      primaryColor: "#dceaf7",
      primaryTextColor: "#003366",
      primaryBorderColor: "#0077cc",
      lineColor: "#005599",
      secondaryColor: "#f4f8fc",
      tertiaryColor: "#ffffff",
      fontFamily: "Inter, system-ui, sans-serif",
    },
    flowchart: { htmlLabels: true, curve: "basis", padding: 12 },
    securityLevel: "loose",
  });
  mermaidReady = true;
}

type Props = {
  code: string;
  caption?: string;
};

export function DiagramBlock({ code, caption }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    ensureMermaid();
    let cancel = false;
    const id = `mermaid-${uid}-${Math.random().toString(36).slice(2, 8)}`;
    (async () => {
      try {
        const { svg } = await mermaid.render(id, code.trim());
        if (!cancel && host.current) host.current.innerHTML = svg;
      } catch {
        if (!cancel && host.current) {
          host.current.innerHTML =
            '<p class="diagram-block__err">Vista esquemática no disponible en este navegador.</p>';
        }
      }
    })();
    return () => {
      cancel = true;
    };
  }, [code, uid]);

  return (
    <figure className="diagram-block">
      {caption ? <figcaption className="diagram-block__cap">{caption}</figcaption> : null}
      <div ref={host} className="diagram-block__host" role="img" aria-label={caption || "Diagrama"} />
    </figure>
  );
}

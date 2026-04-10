import { useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sidebar } from "./components/Sidebar";
import { TopicLanding } from "./components/landing/TopicLanding";
import { Footer } from "./components/Footer";
import { topicsPresentation } from "./data/presentation";

function parseBlockFromHash(): number {
  const m = /^#bloque-(\d+)$/.exec(window.location.hash);
  if (!m) return 1;
  const n = parseInt(m[1], 10);
  if (Number.isNaN(n) || n < 1) return 1;
  return n;
}

function normalizeBlockNumber(n: number): number {
  const match = topicsPresentation.find((t) => t.number === n);
  return match ? n : 1;
}

export default function App() {
  const [activeBlock, setActiveBlock] = useState(() =>
    normalizeBlockNumber(parseBlockFromHash()),
  );

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#bloque-1");
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveBlock(normalizeBlockNumber(parseBlockFromHash()));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectBlock = useCallback((n: number) => {
    const next = normalizeBlockNumber(n);
    setActiveBlock(next);
    const h = `#bloque-${next}`;
    if (window.location.hash !== h) {
      window.history.replaceState(null, "", h);
    }
  }, []);

  const activeTopic = useMemo(
    () =>
      topicsPresentation.find((t) => t.number === activeBlock) ?? topicsPresentation[0],
    [activeBlock],
  );

  return (
    <div className="app" id="top">
      <Header />
      <Hero />
      <div className="main-layout">
        <Sidebar
          topics={topicsPresentation}
          activeNumber={activeBlock}
          onSelectBlock={selectBlock}
        />
        <main
          id="bloques"
          className="main-landing main-pane"
          aria-live="polite"
          aria-label={`Contenido del bloque ${activeTopic.number}`}
        >
          <TopicLanding key={activeTopic.id} topic={activeTopic} singleView />
        </main>
      </div>
      <Footer />
    </div>
  );
}

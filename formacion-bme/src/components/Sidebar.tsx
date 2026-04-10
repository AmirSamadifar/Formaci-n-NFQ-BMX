import type { TopicPresentation } from "../types/presentation";

type Props = {
  topics: TopicPresentation[];
  activeNumber: number;
  onSelectBlock: (n: number) => void;
};

export function Sidebar({ topics, activeNumber, onSelectBlock }: Props) {
  return (
    <aside className="sidebar" id="indice" aria-labelledby="sidebar-title">
      <h2 id="sidebar-title" className="sidebar__title">
        Navegación
      </h2>
      <nav aria-label="Bloques formativos">
        <ol className="sidebar__list">
          {topics.map((t) => {
            const isActive = t.number === activeNumber;
            return (
              <li key={t.id}>
                <a
                  className={`sidebar__a${isActive ? " is-active" : ""}`}
                  href={`#bloque-${t.number}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectBlock(t.number);
                  }}
                >
                  <span className="sidebar__idx">{t.number}</span>
                  <span className="sidebar__text">{t.title}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}

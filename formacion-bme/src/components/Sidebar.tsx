import type { TopicPresentation } from "../types/presentation";

type Props = {
  topics: TopicPresentation[];
};

export function Sidebar({ topics }: Props) {
  return (
    <aside className="sidebar" id="indice" aria-labelledby="sidebar-title">
      <h2 id="sidebar-title" className="sidebar__title">
        Navegación
      </h2>
      <nav aria-label="Bloques formativos">
        <ol className="sidebar__list">
          {topics.map((t) => (
            <li key={t.id}>
              <a className="sidebar__a" href={`#bloque-${t.number}`}>
                <span className="sidebar__idx">{t.number}</span>
                <span className="sidebar__text">{t.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

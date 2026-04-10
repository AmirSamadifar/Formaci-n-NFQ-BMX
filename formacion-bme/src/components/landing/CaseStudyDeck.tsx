import { useCallback, useEffect, useId, useState, type KeyboardEvent } from "react";
import type { CaseStudyDeckBlock, CaseStudyQuiz, CaseStudySlide } from "../../types/presentation";

function slideHeadline(slide: CaseStudySlide) {
  const n = slide.screenIndex + 1;
  const label =
    slide.screenIndex === 0 ? "Introducción al caso" : slide.screenLabel;
  return `${n}. ${label}`;
}

function proseParagraphs(text: string) {
  const t = text.trim();
  if (!t) return null;
  const parts = t.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts.map((p, i) => (
    <p key={i} className="case-deck__prose">
      {p}
    </p>
  ));
}

function QuizCard({
  quiz,
  qIndex,
  screenIndex,
  revealed,
  selected,
  onSelect,
  onReveal,
}: {
  quiz: CaseStudyQuiz;
  qIndex: number;
  screenIndex: number;
  revealed: boolean;
  selected: string | null;
  onSelect: (letter: string) => void;
  onReveal: () => void;
}) {
  const headingId = useId();
  return (
    <div className="case-deck__quiz" role="group" aria-labelledby={headingId}>
      <h4 id={headingId} className="case-deck__quiz-title">
        Quiz {qIndex + 1}
        {screenIndex === 7 && qIndex === 0 ? " (cierre)" : ""}
      </h4>
      <p className="case-deck__question">{quiz.question}</p>
      <ul className="case-deck__options" aria-label="Opciones de respuesta">
        {quiz.options.map((opt) => {
          const isSel = selected === opt.letter;
          const isCorrect = revealed && opt.letter === quiz.correctLetter;
          const isWrongSel = revealed && isSel && opt.letter !== quiz.correctLetter;
          return (
            <li key={opt.letter}>
              <button
                type="button"
                className={`case-deck__option${isSel ? " is-selected" : ""}${isCorrect ? " is-correct" : ""}${isWrongSel ? " is-wrong" : ""}`}
                onClick={() => onSelect(opt.letter)}
                disabled={revealed}
              >
                <span className="case-deck__option-letter">{opt.letter}.</span>
                <span className="case-deck__option-text">{opt.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {!revealed ? (
        <button type="button" className="case-deck__reveal" onClick={onReveal}>
          Mostrar respuesta correcta y explicación
        </button>
      ) : (
        <div className="case-deck__answer-block">
          <p className="case-deck__correct">
            <strong>Respuesta correcta:</strong> {quiz.correctLetter}
          </p>
          {quiz.explanation ? (
            <div className="case-deck__explanation">
              <span className="case-deck__explanation-label">Explicación</span>
              {proseParagraphs(quiz.explanation)}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function SlideBody({ slide }: { slide: CaseStudySlide }) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Record<string, string | null>>({});

  const quizKey = (qi: number) => `${slide.screenIndex}-${qi}`;

  const setReveal = useCallback((key: string) => {
    setRevealed((r) => ({ ...r, [key]: true }));
  }, []);

  const setSel = useCallback((key: string, letter: string) => {
    setSelected((s) => ({ ...s, [key]: letter }));
  }, []);

  useEffect(() => {
    setRevealed({});
    setSelected({});
  }, [slide.screenIndex]);

  return (
    <div className="case-deck__slide-body">
      {slide.coverTitle ? <h3 className="case-deck__cover-title">{slide.coverTitle}</h3> : null}
      {slide.coverSubtitle ? (
        <p className="case-deck__cover-subtitle">{slide.coverSubtitle}</p>
      ) : null}
      {slide.openingText ? (
        <div className="case-deck__block case-deck__block--open">
          <span className="case-deck__block-label">Texto de apertura</span>
          {proseParagraphs(slide.openingText)}
        </div>
      ) : null}
      {slide.supportText ? (
        <div className="case-deck__block">
          <span className="case-deck__block-label">
            {slide.screenIndex === 7 ? "Texto final de apoyo" : "Texto de apoyo"}
          </span>
          {proseParagraphs(slide.supportText)}
        </div>
      ) : null}

      {slide.quizzes.map((q, qi) => {
        const k = quizKey(qi);
        return (
          <QuizCard
            key={k}
            quiz={q}
            qIndex={qi}
            screenIndex={slide.screenIndex}
            revealed={!!revealed[k]}
            selected={selected[k] ?? null}
            onSelect={(letter) => setSel(k, letter)}
            onReveal={() => setReveal(k)}
          />
        );
      })}

      {slide.keyIdea ? (
        <div className="case-deck__key-idea">
          <span className="case-deck__key-idea-label">
            {slide.screenIndex === 7 ? "Idea-fuerza final" : "Idea clave"}
          </span>
          {proseParagraphs(slide.keyIdea)}
        </div>
      ) : null}

      {slide.bridge ? (
        <p className="case-deck__bridge">
          <span className="case-deck__bridge-label">Nexo</span>
          {slide.bridge}
        </p>
      ) : null}
    </div>
  );
}

export function CaseStudyDeck({ block }: { block: CaseStudyDeckBlock }) {
  const { slides } = block;
  const total = slides.length;
  const [index, setIndex] = useState(0);

  const slide = slides[index];
  const canPrev = index > 0;
  const canNext = index < total - 1;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext],
  );

  if (!slide) return null;

  const headline = slideHeadline(slide);

  return (
    <div
      className="case-deck"
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="presentación"
      aria-label={`Caso BBVA: ${headline}`}
    >
      <h2 className="case-deck__screen-title">{headline}</h2>

      <div className="case-deck__viewport">
        <SlideBody slide={slide} />
      </div>

      <div className="case-deck__chrome case-deck__chrome--footer">
        <button
          type="button"
          className="case-deck__arrow"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <div className="case-deck__progress" aria-live="polite">
          <p className="case-deck__progress-count">
            <span aria-hidden="true">
              {index + 1} / {total}
            </span>
            <span className="sr-only">
              {index + 1} de {total}
            </span>
          </p>
        </div>
        <button
          type="button"
          className="case-deck__arrow"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <p className="case-deck__hint">Flechas del teclado: clic primero dentro del marco del caso.</p>
    </div>
  );
}

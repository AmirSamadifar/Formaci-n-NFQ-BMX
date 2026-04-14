import { useEffect, useState, type FormEvent, type ReactNode } from "react";

const STORAGE_KEY = "bme-formacion-acceso";
const ACCESS_CODE = "Nfq@2026";

type Props = { children: ReactNode };

function readUnlocked(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function AccessGate({ children }: Props) {
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [code, setCode] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (unlocked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [unlocked]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code.trim() === ACCESS_CODE) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* private mode / quota */
      }
      setUnlocked(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      {children}
      {!unlocked && (
        <div className="access-gate">
          <div className="access-gate__backdrop" aria-hidden />
          <div
            className="access-gate__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="access-gate-title"
          >
            <div className="access-gate__logos">
              <img
                className="access-gate__logo access-gate__logo--bme"
                src="/bme-logo.png"
                alt="BME — Bolsas y Mercados Españoles"
              />
              <img
                className="access-gate__logo access-gate__logo--nfq"
                src="/nfq-logo.png"
                alt="NFQ"
              />
            </div>
            <h1 id="access-gate-title" className="access-gate__title">
              Acceso al material
            </h1>
            <p className="access-gate__lead">Introduce el código de acceso para continuar.</p>
            <form className="access-gate__form" onSubmit={handleSubmit}>
              <label className="access-gate__label" htmlFor="access-code">
                Código
              </label>
              <input
                id="access-code"
                name="access-code"
                className="access-gate__input"
                type="password"
                autoComplete="off"
                value={code}
                onChange={(ev) => {
                  setCode(ev.target.value);
                  setShowError(false);
                }}
                placeholder="Código de acceso"
              />
              {showError ? (
                <p className="access-gate__err" role="alert">
                  Código incorrecto. Inténtalo de nuevo.
                </p>
              ) : null}
              <button type="submit" className="access-gate__submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

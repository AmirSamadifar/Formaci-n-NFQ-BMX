# SKILL: Diseño web estilo BME – Bolsas y Mercados Españoles

## Objetivo
Este skill define todas las reglas de diseño, estructura y componentes necesarios para crear páginas web que repliquen fielmente el estilo visual y de interacción de **bolsasymercados.es** (BME). Aplica tanto a HTML/CSS/JS vanilla como a frameworks modernos (React, Next.js, etc.).

---

## 1. PALETA DE COLORES

```css
:root {
  /* Primarios */
  --bme-azul-marino:   #003366;  /* Color corporativo principal — headers, nav activo, títulos */
  --bme-azul-medio:    #005599;  /* Hover de nav, botones secundarios */
  --bme-azul-claro:    #0077CC;  /* Enlaces, CTAs, iconos de acción */
  --bme-celeste:       #E8F2FA;  /* Fondos de sección alternos, cards destacadas */

  /* Acento / Acción */
  --bme-verde:         #2E8B57;  /* Variaciones positivas de mercado, badges "subida" */
  --bme-rojo:          #CC2222;  /* Variaciones negativas de mercado, alertas */
  --bme-naranja:       #E07820;  /* Tags de categoría (Informe, Evento, Nuevo servicio) */

  /* Neutros */
  --bme-gris-oscuro:   #333333;  /* Cuerpo de texto principal */
  --bme-gris-medio:    #666666;  /* Texto secundario, metadatos */
  --bme-gris-claro:    #CCCCCC;  /* Bordes, separadores */
  --bme-gris-fondo:    #F5F5F5;  /* Fondo general de página */
  --bme-blanco:        #FFFFFF;  /* Fondo de cards, header sticky */

  /* Texto sobre fondo oscuro */
  --bme-texto-inverso: #FFFFFF;
}
```

---

## 2. TIPOGRAFÍA

```css
/* Fuentes */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --font-primary: 'Inter', 'Helvetica Neue', Arial, sans-serif;

  /* Escala tipográfica */
  --text-xs:   0.75rem;   /* 12px — etiquetas, badges */
  --text-sm:   0.875rem;  /* 14px — texto secundario, footer */
  --text-base: 1rem;      /* 16px — cuerpo */
  --text-lg:   1.125rem;  /* 18px — subtítulos de sección */
  --text-xl:   1.375rem;  /* 22px — títulos de card */
  --text-2xl:  1.75rem;   /* 28px — títulos de sección */
  --text-3xl:  2.25rem;   /* 36px — h1 hero */
  --text-4xl:  3rem;      /* 48px — h1 hero grande */

  /* Pesos */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semibold:600;
  --weight-bold:    700;

  /* Interlineado */
  --leading-tight:  1.25;
  --leading-normal: 1.5;
  --leading-loose:  1.75;
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--bme-gris-oscuro);
  line-height: var(--leading-normal);
  background-color: var(--bme-gris-fondo);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--weight-semibold);
  color: var(--bme-azul-marino);
  line-height: var(--leading-tight);
}
```

---

## 3. ESPACIADO Y GRID

```css
:root {
  /* Espaciado base (múltiplos de 8px) */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  80px;
  --space-10: 96px;

  /* Contenedor */
  --container-max: 1280px;
  --container-padding: 24px;   /* móvil */
  --container-padding-lg: 48px;/* escritorio */

  /* Grid */
  --grid-cols: 12;
  --grid-gap:  24px;
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--container-padding-lg);
  }
}
```

---

## 4. COMPONENTES

### 4.1 Header / Barra de navegación

**Estructura:**
```
[Logo BME] .................. [Buscar] [Blog] [Idioma ES/EN] [Login]
──────────────────────────────────────────────────────────────────
[BME Exchange] [Securities Services] [Otros servicios] [Formación] [Sala de comunicación] [Sobre BME]
```

**Reglas:**
- Header sticky con fondo blanco (`background: var(--bme-blanco)`) y sombra sutil al hacer scroll: `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`
- Logo a la izquierda, utilidades (búsqueda, idioma, login) a la derecha, en barra superior
- Menú principal horizontal debajo, con `border-top: 2px solid var(--bme-gris-claro)`
- Cada ítem de nav: fuente `--text-sm`, `font-weight: 500`, color `var(--bme-gris-oscuro)`, en mayúsculas o Title Case
- Hover en ítem activo: `color: var(--bme-azul-marino)` + `border-bottom: 3px solid var(--bme-azul-marino)`
- Megamenú desplegable con fondo blanco, sombra, organizado en **columnas** con cabeceras en azul marino
- Botón Login: borde `1px solid var(--bme-azul-marino)`, padding `6px 16px`, borde redondeado `4px`

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bme-blanco);
}

.nav-item:hover,
.nav-item.active {
  color: var(--bme-azul-marino);
  border-bottom: 3px solid var(--bme-azul-marino);
}

.megamenu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--bme-blanco);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  padding: var(--space-6);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}
```

---

### 4.2 Hero / Banner principal

**Reglas:**
- Imagen a pantalla completa (100vw, height 480–580px en escritorio, 320px en móvil)
- Overlay degradado: `linear-gradient(to right, rgba(0,51,102,0.75) 40%, transparent 100%)`
- Texto centrado verticalmente a la izquierda
- H1 blanco, grande (`--text-4xl`), máx. 2 líneas
- Subtítulo blanco con `font-weight: 300`, `--text-lg`
- CTA opcional: botón blanco con texto azul marino

```css
.hero {
  position: relative;
  height: 520px;
  overflow: hidden;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,51,102,0.75) 40%, transparent 100%);
  display: flex;
  align-items: center;
  padding: 0 var(--container-padding-lg);
}

.hero__title {
  color: var(--bme-blanco);
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
  max-width: 600px;
}
```

---

### 4.3 Ticker / Banda de mercados

**Reglas:**
- Banda horizontal ancha debajo del hero, fondo `var(--bme-azul-marino)`
- Muestra datos en tiempo real: nombre del índice (blanco, negrita), valor (blanco), variación (verde o rojo con icono ▲▼)
- Separadores verticales entre ítems: `border-right: 1px solid rgba(255,255,255,0.2)`
- Scroll automático en móvil (marquee o animación CSS)

```css
.ticker {
  background: var(--bme-azul-marino);
  padding: var(--space-3) 0;
  display: flex;
  gap: var(--space-6);
  overflow-x: auto;
  scrollbar-width: none;
}

.ticker__item {
  color: var(--bme-blanco);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-5);
  border-right: 1px solid rgba(255,255,255,0.2);
}

.ticker__change.positive { color: #66DD99; }
.ticker__change.negative { color: #FF7777; }
```

---

### 4.4 Sección "Los mercados hoy"

**Reglas:**
- Fondo blanco, padding vertical `var(--space-8)`
- Título de sección: `--text-2xl`, azul marino, con línea decorativa izquierda de 3px en azul claro
- Tabla o grid de índices con columnas: Nombre, Valor, Variación %, Variación absoluta, Hora
- Alternar color de fila: `background: var(--bme-celeste)` en pares
- Valores positivos en verde, negativos en rojo
- Hover en fila: `background: #EBF4FF`

```css
.section-title {
  font-size: var(--text-2xl);
  color: var(--bme-azul-marino);
  border-left: 3px solid var(--bme-azul-claro);
  padding-left: var(--space-3);
  margin-bottom: var(--space-6);
}

.market-table tr:nth-child(even) {
  background: var(--bme-celeste);
}

.market-table tr:hover {
  background: #EBF4FF;
}

.value-positive { color: var(--bme-verde); font-weight: 600; }
.value-negative { color: var(--bme-rojo);  font-weight: 600; }
```

---

### 4.5 Cards de contenido (Noticias / Informes / Eventos)

**Estructura de cada card:**
```
┌──────────────────────────┐
│  [IMAGEN 16:9]           │
│  [TAG: Informe/Evento]   │
│  Título en azul marino   │
│  Descripción corta gris  │
│  [Leer más →]            │
└──────────────────────────┘
```

**Reglas:**
- Fondo blanco, `border-radius: 4px`, `box-shadow: 0 2px 12px rgba(0,0,0,0.08)`
- Imagen: aspect-ratio 16/9, `object-fit: cover`
- Tag de categoría: `background: var(--bme-naranja)`, texto blanco, `font-size: --text-xs`, `padding: 3px 8px`, `border-radius: 2px`, todo en MAYÚSCULAS
- Título: `--text-xl`, azul marino, máx. 2 líneas, `overflow: hidden`
- Descripción: `--text-sm`, color `--bme-gris-medio`, máx. 3 líneas
- CTA "Leer más": color `var(--bme-azul-claro)`, sin subrayado por defecto, subrayado en hover
- Grid de cards: típicamente 2 o 3 columnas en escritorio, 1 en móvil

```css
.card {
  background: var(--bme-blanco);
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.14);
}

.card__tag {
  display: inline-block;
  background: var(--bme-naranja);
  color: var(--bme-blanco);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 2px;
  margin-bottom: var(--space-2);
}

.card__title {
  font-size: var(--text-xl);
  color: var(--bme-azul-marino);
  font-weight: var(--weight-semibold);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__cta {
  color: var(--bme-azul-claro);
  font-weight: var(--weight-medium);
  text-decoration: none;
}

.card__cta:hover { text-decoration: underline; }
```

---

### 4.6 Sección destacada / Teaser horizontal

Para banners tipo "PPI", "T+1", "BME Easy Access":

**Reglas:**
- Layout de 2 columnas: texto a la izquierda (60%), imagen a la derecha (40%)
- Fondo `var(--bme-celeste)` o fondo oscuro con texto blanco (alternados)
- Etiqueta pequeña encima del título: `--text-xs`, `color: --bme-azul-claro`, uppercase, letra espaciada
- H2 grande (`--text-2xl` o `--text-3xl`), bold
- Botón CTA primario: fondo `var(--bme-azul-marino)`, texto blanco, `padding: 12px 28px`, `border-radius: 4px`, hover `background: var(--bme-azul-medio)`

```css
.teaser {
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-9) var(--container-padding-lg);
}

.teaser--dark {
  background: var(--bme-azul-marino);
  color: var(--bme-blanco);
}

.teaser--light {
  background: var(--bme-celeste);
}

.btn-primary {
  background: var(--bme-azul-marino);
  color: var(--bme-blanco);
  padding: 12px 28px;
  border-radius: 4px;
  font-weight: var(--weight-semibold);
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: var(--bme-azul-medio);
}

.btn-outline {
  background: transparent;
  color: var(--bme-azul-marino);
  border: 2px solid var(--bme-azul-marino);
  padding: 10px 26px;
  border-radius: 4px;
  font-weight: var(--weight-semibold);
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background: var(--bme-azul-marino);
  color: var(--bme-blanco);
}
```

---

### 4.7 Sección de sostenibilidad (split layout)

**Reglas:**
- Dos columnas iguales: texto a la izquierda, imagen a la derecha
- Fondo blanco puro
- Párrafo descriptivo gris medio
- Lista de links en azul claro debajo del texto

---

### 4.8 Footer

**Estructura:**
```
┌─────────────────────────────────────────────────────┐
│  [Logo BME]                [Teléfono +34 91 709 5000]│
├──────────┬──────────┬──────────┬──────────┬─────────┤
│CORPORATIVO│ SERVICIOS│ MERCADOS │L.RÁPIDOS │CONTACTO │
│ • Sobre  │ • Cotizar│ • BME Ex.│ • IBEX35 │ • Medios│
│ • Empleo │ • Negociar│• Growth  │ • Horario│ • Todos │
│ • ESG    │ • Clearing│• Scaleup │ • Estado │         │
├──────────┴──────────┴──────────┴──────────┴─────────┤
│ © BME 2026 | Aviso Legal | Privacidad | Cookies      │
└─────────────────────────────────────────────────────┘
```

**Reglas:**
- Fondo `var(--bme-azul-marino)`, todo el texto en blanco
- 5 columnas en escritorio, acordeón en móvil
- Cabeceras de columna: `--text-xs`, `font-weight: 700`, `letter-spacing: 0.1em`, `text-transform: uppercase`, color `rgba(255,255,255,0.6)`
- Links de pie: `--text-sm`, color `rgba(255,255,255,0.8)`, hover blanco
- Línea divisoria superior del copyright: `border-top: 1px solid rgba(255,255,255,0.15)`

```css
.footer {
  background: var(--bme-azul-marino);
  color: var(--bme-blanco);
  padding: var(--space-9) 0 var(--space-5);
}

.footer__col-title {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.6);
  margin-bottom: var(--space-4);
}

.footer__link {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: var(--text-sm);
  display: block;
  margin-bottom: var(--space-2);
}

.footer__link:hover { color: var(--bme-blanco); }

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.15);
  margin-top: var(--space-7);
  padding-top: var(--space-4);
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.5);
  display: flex;
  gap: var(--space-5);
  flex-wrap: wrap;
}
```

---

## 5. ICONOGRAFÍA

- Usar iconos de línea fina (stroke), estilo minimalista — compatible con Heroicons, Feather Icons o Lucide
- Tamaño estándar: 20×20px en nav y 24×24px en cuerpo
- Color: hereda del padre o `currentColor`
- Iconos de subida/bajada de mercado: ▲ y ▼ o flechas SVG propias

---

## 6. LAYOUT DE PÁGINA COMPLETA (orden de secciones)

```
1. Header sticky (nav + megamenú)
2. Hero / Banner principal con imagen
3. Ticker de mercados (banda azul marino)
4. Sección "Los mercados hoy" (tabla de índices)
5. Sección "Últimas noticias" (grid de 2–3 cards)
6. Teaser horizontal destacado (ej: PPI, T+1) — alternado claro/oscuro
7. Sección split (ej: Sostenibilidad)
8. Sección de cards secundarias (Informes, Eventos)
9. Footer de 5 columnas
```

---

## 7. RESPONSIVIDAD (breakpoints)

```css
/* Móvil: < 640px  — 1 columna, nav en hamburguesa */
/* Tablet: 640–1024px — 2 columnas, nav simplificada */
/* Escritorio: > 1024px — layout completo */
/* Wide: > 1280px — contenedor máximo, sin más expansión */

@media (max-width: 1024px) {
  .megamenu { grid-template-columns: 1fr 1fr; }
  .teaser   { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .hero { height: 320px; }
  .card-grid { grid-template-columns: 1fr; }
  .footer { /* acordeón JS */ }
}
```

---

## 8. ANIMACIONES Y TRANSICIONES

- Transiciones suaves en hover: `transition: all 0.2s ease`
- Megamenú: `opacity 0→1` + `translateY(-8px → 0)` en 0.2s
- Cards: sombra suave en hover (ver `.card:hover` arriba)
- Sin animaciones llamativas: este diseño es **corporativo y financiero**, priorizar sobriedad
- No usar parallax, ni animaciones de entrada complejas

---

## 9. ACCESIBILIDAD

- Contraste mínimo WCAG AA en todo el texto
- `aria-label` en iconos sin texto
- `aria-expanded` en botones de megamenú y acordeón
- Navegación por teclado: `focus-visible` con `outline: 2px solid var(--bme-azul-claro)`
- Skip link al contenido principal: `<a href="#main-content" class="skip-link">Saltar al contenido</a>`

---

## 10. EJEMPLO DE ESTRUCTURA HTML COMPLETA

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BME – Bolsas y Mercados Españoles</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header__top container">
      <a href="/" class="header__logo"><!-- SVG Logo --></a>
      <nav class="header__utils">
        <!-- Búsqueda, Blog, Idioma, Login -->
      </nav>
    </div>
    <nav class="header__main container">
      <ul class="nav-list">
        <li class="nav-item"><a href="#">BME Exchange</a>
          <div class="megamenu"><!-- columnas --></div>
        </li>
        <!-- más ítems -->
      </ul>
    </nav>
  </header>

  <!-- MAIN -->
  <main id="main-content">

    <!-- HERO -->
    <section class="hero">
      <img class="hero__image" src="fachada-bolsa.jpg" alt="Palacio de la Bolsa de Madrid" />
      <div class="hero__overlay">
        <h1 class="hero__title">BME Bolsas y Mercados Españoles</h1>
        <p class="hero__subtitle">BME, gestor líder de los mercados de valores en España</p>
      </div>
    </section>

    <!-- TICKER -->
    <div class="ticker" aria-label="Datos de mercado en tiempo real">
      <div class="ticker__item">
        <span class="ticker__name">IBEX 35</span>
        <span class="ticker__value">12.456,30</span>
        <span class="ticker__change positive">▲ +1,24%</span>
      </div>
      <!-- más índices -->
    </div>

    <!-- MERCADOS HOY -->
    <section class="section container">
      <h2 class="section-title">Los mercados hoy</h2>
      <table class="market-table"><!-- ... --></table>
    </section>

    <!-- ÚLTIMAS NOTICIAS -->
    <section class="section container">
      <h2 class="section-title">Últimas noticias</h2>
      <div class="card-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--grid-gap)">
        <article class="card">
          <img src="noticia.jpg" alt="" />
          <div class="card__body" style="padding:var(--space-4)">
            <span class="card__tag">Informe</span>
            <h3 class="card__title">Informe Anual de Renta Fija 2025</h3>
            <p class="card__desc">Principales estadísticas de los mercados de Renta Fija durante 2025.</p>
            <a href="#" class="card__cta">Leer informe →</a>
          </div>
        </article>
      </div>
    </section>

    <!-- TEASER DESTACADO -->
    <section class="teaser teaser--light">
      <div class="teaser__text">
        <span style="font-size:var(--text-xs);color:var(--bme-azul-claro);text-transform:uppercase;letter-spacing:.1em">Planes Personales de Inversión</span>
        <h2>PPI: la propuesta de BME para impulsar la inversión minorista en España</h2>
        <a href="#" class="btn-primary">Saber más sobre PPI</a>
      </div>
      <div class="teaser__image">
        <img src="ppi-imagen.jpg" alt="" />
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:var(--space-6)">
        <div>
          <p class="footer__col-title">Corporativo</p>
          <a href="#" class="footer__link">Sobre BME</a>
          <a href="#" class="footer__link">Trabajar en BME</a>
          <a href="#" class="footer__link">Sostenibilidad</a>
        </div>
        <!-- más columnas -->
      </div>
      <div class="footer__bottom">
        <span>© BME 2026</span>
        <a href="#" class="footer__link">Aviso Legal</a>
        <a href="#" class="footer__link">Política de Privacidad</a>
        <a href="#" class="footer__link">Política de cookies</a>
      </div>
    </div>
  </footer>

</body>
</html>
```

---

## 11. CHECKLIST DE IMPLEMENTACIÓN

Antes de dar el diseño por finalizado, verifica:

- [ ] Header sticky con megamenú funcional
- [ ] Paleta de colores correcta (azul marino `#003366` como base)
- [ ] Fuente Inter o similar sans-serif humanista
- [ ] Ticker de mercados con colores verde/rojo
- [ ] Cards con tag de categoría naranja
- [ ] Botones con los dos estilos (primario azul marino, outline)
- [ ] Footer oscuro en 5 columnas con links blancos semitransparentes
- [ ] Responsive en móvil (hamburguesa, acordeón footer, 1 columna)
- [ ] Transiciones suaves (0.2s ease) en hover
- [ ] Accesibilidad: contraste, aria-labels, focus-visible
- [ ] Sin animaciones corporativas llamativas

---

*SKILL creado a partir del análisis de bolsasymercados.es — Versión 1.0*

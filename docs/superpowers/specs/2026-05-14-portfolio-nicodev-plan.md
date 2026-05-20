# Plan de implementación — Portfolio NicoDev

**Fecha:** 2026-05-14
**Spec base:** `2026-05-14-portfolio-nicodev-design.md`
**Tech:** HTML · CSS · JavaScript vanilla

---

## Fases y pasos

### FASE 1 — Estructura base
**Paso 1:** Crear `index.html` con estructura HTML5 completa
- `<head>`: meta tags SEO, og:tags, Google Fonts (Inter), link a `style.css`
- `<body>`: secciones vacías con IDs: `#hero`, `#sobre-mi`, `#servicios`, `#proyectos`, `#contacto`
- `<script src="main.js">` al cierre del body

**Paso 2:** Crear `style.css` con sistema base
- CSS custom properties (variables de color y tipografía)
- Reset / normalize básico
- Estilos globales: `body`, `html`, `*`
- Clases utilitarias: `.container`, `.section-eyebrow`, `.section-title`
- `scroll-behavior: smooth` en `html`

**Paso 3:** Crear `main.js` vacío con estructura comentada
- Exports de funciones a implementar en pasos siguientes

**Paso 4:** Crear carpeta `assets/` y copiar `FotoCV.png`

---

### FASE 2 — Componentes sección por sección

**Paso 5 — Navbar**
- HTML: logo + links de navegación
- CSS: fijo top, `backdrop-filter`, transición al scroll
- JS: clase `.scrolled` al pasar 50px de scroll

**Paso 6 — Hero**
- HTML: badge gradiente · título con `<span>` gradiente · tagline · 2 CTAs · foto con borde gradiente
- CSS: layout flex, gradiente de fondo, efecto borde foto (pseudo-elemento o `padding` + `background`)
- Foto real: `assets/foto.png`

**Paso 7 — Sobre mí**
- HTML: eyebrow · título · bio · fondo alterno `#0d1e3d`
- CSS: sección con padding generoso, max-width centrado

**Paso 8 — Servicios**
- HTML: eyebrow · título · grid de 3 cards (sitio web, e-commerce, app web)
- CSS: grid 3 columnas, cards con `border-top` de color distinto, hover `translateY(-4px)`

**Paso 9 — Proyectos**
- HTML: eyebrow · título · card del proyecto Dra. Natalia Funk con captura, descripción, tags de tech, link
- CSS: card con borde izquierdo rosa, hover suave
- Captura: screenshot del sitio (a proveer o usar placeholder inicial)

**Paso 10 — Contacto**
- HTML: eyebrow · título · texto · 2 botones (WhatsApp con `tel:`, email con `mailto:`)
- CSS: botones con estilos distintivos (verde WhatsApp, gradiente email)
- Datos reales: número y email del cliente (placeholders hasta que los provea)

**Paso 11 — Footer**
- HTML: logo · íconos contacto · copyright
- CSS: fondo `#060e1e`, layout flex space-between

---

### FASE 3 — JavaScript

**Paso 12 — Navbar scroll**
- Escucha `scroll` en `window`
- Agrega/quita clase `.scrolled` a navbar → activa `backdrop-filter` y sombra

**Paso 13 — Scroll suave a secciones**
- Ya resuelto con CSS `scroll-behavior: smooth`
- Cerrar menú hamburguesa en mobile al hacer click en link (ver paso 15)

**Paso 14 — Animaciones de entrada**
- `IntersectionObserver` para detectar secciones en viewport
- Clase `.visible` dispara `opacity: 0 → 1` + `translateY(20px → 0)` con CSS

---

### FASE 4 — Responsividad

**Paso 15 — Mobile navbar**
- Botón hamburguesa (`☰`) visible en mobile
- Menú desplegable vertical al hacer click
- JS: toggle clase `.open` en navbar

**Paso 16 — Mobile layout**
- Hero: flex-direction column, foto arriba centrada
- Servicios grid: 1 columna en mobile, 3 en desktop (`@media min-width: 768px`)
- Proyectos: 1 columna en mobile
- Navbar links: ocultos en mobile hasta abrir menú

---

### FASE 5 — Pulido final

**Paso 17 — SEO y meta tags**
- `<title>`, `<meta description>`, `<meta og:*>`, `lang="es"`

**Paso 18 — Captura del proyecto Dra. Natalia Funk**
- Screenshot real del sitio y optimización como `assets/proyecto-dra-natalia.webp`

**Paso 19 — Revisión cross-browser y mobile**
- Probar en Chrome, Firefox, Safari mobile
- Verificar que los gradientes, `backdrop-filter` y animaciones funcionen

**Paso 20 — Deploy**
- Subir a hosting (GitHub Pages, Netlify o VPS según elija el cliente)
- Verificar URL final

---

## Orden de prioridad

```
Fase 1 (base) → Fase 2 (secciones) → Fase 3 (JS) → Fase 4 (mobile) → Fase 5 (pulido)
```

Cada paso es autónomo — se puede revisar y aprobar antes de continuar al siguiente.

---

## Datos pendientes del cliente

- Número de WhatsApp
- Dirección de email de contacto
- Screenshot del proyecto Dra. Natalia Funk (o autorización para generarlo automáticamente)

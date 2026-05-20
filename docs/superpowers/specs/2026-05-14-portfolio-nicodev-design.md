# Portfolio NicoDev — Especificación de diseño

**Fecha:** 2026-05-14
**Proyecto:** Portfolio personal de Nicolás Matías de Paula
**Stack:** HTML · CSS · JavaScript vanilla

---

## 1. Perfil del desarrollador

| Campo | Valor |
|---|---|
| Nombre | Nicolás Matías de Paula ("Nico") |
| Rol | Full Stack Developer + webs para clientes |
| Experiencia | 3 años |
| Stack | React/Next.js · Node.js/Express · PostgreSQL/Supabase · HTML/CSS/JS |
| Idioma del sitio | Español |
| Foto | `FotoCV.png` — foto profesional, fondo neutro |

---

## 2. Objetivo

Atraer PyMEs y startups que necesiten:
- Organizar sus datos
- Impulsar sus ventas
- Mostrar sus servicios y productos

El portfolio debe transmitir **confianza, profesionalismo y diferenciación** desde el primer vistazo.

---

## 3. Tagline y bio

**Tagline:** *"Desarrollo webs a medida para negocios que quieren crecer"*

**Bio:**
> Soy Nico, desarrollador Full Stack con 3 años de experiencia. Creo soluciones web personalizadas para PyMEs y startups que necesitan organizar sus datos, impulsar sus ventas o mostrar sus servicios al mundo.

---

## 4. Arquitectura técnica

- **Tipo:** One-page (single page, sin rutas)
- **Tecnología:** HTML5 · CSS3 custom · JavaScript vanilla
- **Fuente:** Inter — Google Fonts
- **Sin frameworks, sin dependencias externas** (salvo Google Fonts)
- **Deploy:** cualquier hosting estático (GitHub Pages, Netlify, VPS, etc.)

### Estructura de archivos

```
nicodev/
├── index.html
├── style.css
├── main.js
├── assets/
│   ├── foto.png          ← FotoCV.png del usuario
│   └── proyecto-dra-natalia.png  ← captura del proyecto
└── docs/
    └── superpowers/specs/
        └── 2026-05-14-portfolio-nicodev-design.md
```

---

## 5. Secciones

### 5.1 Navbar (fija, top)
- Logo: `NICO` + `DEV` (DEV en rosa `#E8006D`)
- Links de navegación: Sobre mí · Servicios · Proyectos · Contacto
- Scroll suave al hacer click en cada link
- Fondo semitransparente con blur al hacer scroll (`backdrop-filter`)

### 5.2 Hero
- Badge con gradiente: `FULL STACK DEVELOPER`
- Título: `Hola, soy` + `Nico` (nombre con gradiente azul→rosa)
- Subtítulo/tagline
- 2 botones CTA: **Ver proyectos** (gradiente relleno) · **Contactame** (outline rosa)
- Foto de Nico a la derecha con borde gradiente

### 5.3 Sobre mí
- Eyebrow label en azul `#0090D0`
- Título + bio completa
- Fondo alterno `#0d1e3d`

### 5.4 Servicios
- Eyebrow label en rosa `#E8006D`
- 3 cards en grid: **Sitio web** · **E-commerce** · **App web**
- Cada card con borde superior de color distinto (azul / rosa / púrpura)
- Ícono + título + descripción breve por card

### 5.5 Proyectos
- Eyebrow label en azul `#0090D0`
- Cards de proyectos con: captura/preview · título · descripción · tecnologías usadas · link al proyecto
- Proyecto inicial: **Dra. Natalia Funk** — `https://dranatifunk.nicodpdev.com/`
- Diseño preparado para agregar más proyectos fácilmente

### 5.6 Contacto
- Eyebrow label en rosa `#E8006D`
- Título + texto invitador
- 2 botones: **WhatsApp** (verde `#25d366`) · **Enviar email** (gradiente azul→rosa)
- Email y número de WhatsApp como datos reales a completar

### 5.7 Footer
- Logo `NICODEV`
- Íconos de contacto (WhatsApp + email)
- Copyright: `© 2025 Nicolás de Paula · Hecho con ❤ en Argentina`
- Fondo muy oscuro `#060e1e`

---

## 6. Sistema de diseño

### Paleta — Inspirada en Alpine F1

| Nombre | Hex | Uso |
|---|---|---|
| Background base | `#0A1628` | Fondo principal, navbar, secciones impares |
| Background alterno | `#0d1e3d` | Secciones pares |
| Background oscuro | `#060e1e` | Footer |
| Azul Alpine | `#0090D0` | Eyebrows, links, borde cards, botón outline |
| Rosa BWT | `#E8006D` | Acentos, logo DEV, botón outline contacto |
| Gradiente principal | `#0090D0 → #E8006D` | Badges, botones CTA, nombre hero |
| Texto principal | `#FFFFFF` | Títulos |
| Texto secundario | `#94a3b8` | Descripciones, subtítulos |
| Texto muted | `#64748b` | Labels, detalles |
| Verde WhatsApp | `#25d366` | Botón WhatsApp |

### Tipografía — Inter (Google Fonts)

| Nivel | Peso | Tamaño desktop |
|---|---|---|
| Display (hero título) | 900 | 3.5rem |
| Títulos de sección | 800 | 2rem |
| Subtítulos de card | 700 | 1.1rem |
| Cuerpo de texto | 400 | 1rem |
| Eyebrow label | 700 uppercase | 0.75rem · letter-spacing 3px |

### Bordes y radios
- Cards: `border-radius: 12px`
- Botones: `border-radius: 8px`
- Foto hero: `border-radius: 16px` con borde gradiente
- Separadores: `1px solid #1e3a5f`

### Efectos
- Navbar al scroll: `backdrop-filter: blur(10px)` + fondo semitransparente
- Hover en cards: `transform: translateY(-4px)` + `box-shadow` suave
- Hover en botones: brillo en gradiente
- Scroll suave: `scroll-behavior: smooth` en `html`
- Animación de entrada: fade-in suave al cargar (CSS `@keyframes`)

---

## 7. Responsividad

- **Mobile first** — diseño base en mobile, breakpoints para tablet y desktop
- Navbar en mobile: menú hamburguesa que despliega links
- Hero en mobile: foto arriba centrada, texto abajo
- Grid de servicios en mobile: 1 columna
- Grid de proyectos en mobile: 1 columna

---

## 8. Contacto — datos a completar

- **WhatsApp:** número real del cliente (a proveer)
- **Email:** dirección real del cliente (a proveer)

---

## 9. SEO básico

- `<title>`: Nicolás de Paula — Full Stack Developer
- `<meta description>`: Desarrollo webs a medida para PyMEs y startups en Argentina. Full Stack con React, Node.js y PostgreSQL.
- `<meta og:image>`: foto de Nico
- `lang="es"` en el `<html>`

---

## 10. Proyecto showcase inicial

| Campo | Valor |
|---|---|
| Nombre | Dra. Natalia Funk |
| Descripción | Sitio web profesional para médica — gestión de turnos y especialidades |
| Tecnologías | React · Supabase |
| URL | https://dranatifunk.nicodpdev.com/ |
| Imagen | captura de pantalla del sitio |

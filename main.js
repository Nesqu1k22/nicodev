// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal animations with stagger
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const siblings = [...el.parentElement.querySelectorAll('.reveal:not(.visible)')];
    const idx = siblings.indexOf(el);
    setTimeout(() => {
      el.classList.add('visible');
    }, idx * 60);
    observer.unobserve(el);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============================================
//  ENCUESTA STEPPER
// ============================================
const encuestaSteps = [
  {
    id: 'tipo',
    question: '¿Qué tipo de proyecto tenés en mente?',
    options: [
      { value: 'Sitio web',      label: 'Sitio web',      desc: 'Presencia profesional online para tu negocio' },
      { value: 'Tienda online',  label: 'Tienda online',  desc: 'Vendé productos o servicios las 24 hs' },
      { value: 'App web',        label: 'App web',        desc: 'Sistema a medida para gestionar tu operación' },
      { value: 'Rediseño',       label: 'Rediseño',       desc: 'Tu web actual necesita mejorar' },
    ]
  },
  {
    id: 'etapa',
    question: '¿En qué etapa está tu proyecto?',
    options: [
      { value: 'Tengo una idea',     label: 'Tengo una idea',     desc: 'No sé exactamente por dónde empezar' },
      { value: 'Sé lo que necesito', label: 'Sé lo que necesito', desc: 'Busco quién lo desarrolle bien' },
      { value: 'Proyecto en curso',  label: 'Proyecto en curso',  desc: 'Necesito ayuda para avanzar o mejorar' },
    ]
  },
  {
    id: 'presupuesto',
    question: '¿Cuál es tu presupuesto estimado?',
    options: [
      { value: 'Hasta $500.000 ARS',          label: 'Hasta $500.000 ARS' },
      { value: '$500.000 – $1.500.000 ARS',   label: '$500.000 – $1.500.000 ARS' },
      { value: 'Más de $1.500.000 ARS',       label: 'Más de $1.500.000 ARS' },
      { value: 'Prefiero consultarlo',         label: 'Prefiero consultarlo' },
    ]
  },
  {
    id: 'tiempo',
    question: '¿Para cuándo lo necesitás?',
    options: [
      { value: 'Lo antes posible',  label: 'Lo antes posible',  desc: 'Es urgente, necesito arrancar ya' },
      { value: 'En 1 a 3 meses',   label: 'En 1 a 3 meses',   desc: 'Tengo margen para planificar bien' },
      { value: 'Sin fecha definida',label: 'Sin fecha definida',desc: 'Quiero explorar opciones sin apuro' },
    ]
  },
  {
    id: 'rubro',
    question: '¿A qué rubro pertenece tu negocio?',
    grid: true,
    options: [
      { value: 'Salud',                    label: 'Salud' },
      { value: 'Gastronomía',              label: 'Gastronomía' },
      { value: 'Servicios profesionales',  label: 'Servicios prof.' },
      { value: 'Tecnología',               label: 'Tecnología' },
      { value: 'Educación',                label: 'Educación' },
      { value: 'Otro rubro',               label: 'Otro' },
    ]
  },
  {
    id: 'fuente',
    question: '¿Cómo nos encontraste?',
    options: [
      { value: 'Redes sociales',     label: 'Redes sociales' },
      { value: 'Me lo recomendaron', label: 'Recomendación', desc: 'Me lo dijo alguien de confianza' },
      { value: 'Google',             label: 'Google' },
      { value: 'Ya te conocía',      label: 'Ya te conocía' },
    ]
  },
];

const encState = { current: 0, answers: {} };
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const encForm       = document.getElementById('encForm');
const encBack       = document.getElementById('encBack');
const encNext       = document.getElementById('encNext');
const encBar        = document.getElementById('encBar');
const encLabel      = document.getElementById('encLabel');
const encNav        = document.getElementById('encNav');
const encSuccess    = document.getElementById('encSuccess');
const encReset      = document.getElementById('encReset');
const encProgWrap   = document.getElementById('encProgressWrap');

if (encForm) {
  function encRender(idx) {
    const step  = encuestaSteps[idx];
    const total = encuestaSteps.length;
    const saved = encState.answers[step.id];

    encBar.style.width = ((idx + 1) / total * 100) + '%';
    encBar.setAttribute('aria-valuenow', idx + 1);
    encLabel.textContent = `Paso ${idx + 1} de ${total}`;
    encBack.disabled = idx === 0;
    encNext.textContent = idx === total - 1 ? 'Enviar por WhatsApp' : 'Siguiente →';

    encForm.innerHTML = `
      <fieldset class="enc-fieldset">
        <legend class="enc-question">${step.question}</legend>
        <div class="enc-options${step.grid ? ' enc-options--grid' : ''}">
          ${step.options.map(opt => `
            <label class="enc-option${saved === opt.value ? ' is-selected' : ''}">
              <input type="radio" name="${step.id}" value="${opt.value}"${saved === opt.value ? ' checked' : ''} />
              <span class="enc-indicator" aria-hidden="true"></span>
              <span class="enc-option-text">
                <span class="enc-option-label">${opt.label}</span>
                ${opt.desc ? `<span class="enc-option-desc">${opt.desc}</span>` : ''}
              </span>
            </label>
          `).join('')}
        </div>
      </fieldset>
    `;

    encForm.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', () => {
        encForm.querySelectorAll('.enc-option').forEach(o => o.classList.remove('is-selected'));
        radio.closest('.enc-option').classList.add('is-selected');
      });
    });
  }

  function encGetSelected() {
    const step = encuestaSteps[encState.current];
    const el = encForm.querySelector(`input[name="${step.id}"]:checked`);
    return el ? el.value : null;
  }

  function encTransition(dir, callback) {
    if (reducedMotion) { callback(); return; }
    const exitClass  = dir > 0 ? 'enc-exit-fwd'  : 'enc-exit-bwd';
    const enterClass = dir > 0 ? 'enc-enter-fwd' : 'enc-enter-bwd';
    encForm.classList.add(exitClass);
    setTimeout(() => {
      encForm.classList.remove(exitClass);
      callback();
      encForm.classList.add(enterClass);
      setTimeout(() => encForm.classList.remove(enterClass), 280);
    }, 160);
  }

  function encBuildMessage() {
    const a = encState.answers;
    return [
      'Hola Nico, te escribo desde tu portfolio.',
      '',
      `Proyecto: ${a.tipo || '-'}`,
      `Etapa: ${a.etapa || '-'}`,
      `Presupuesto: ${a.presupuesto || '-'}`,
      `Plazo: ${a.tiempo || '-'}`,
      `Rubro: ${a.rubro || '-'}`,
      `Como te encontré: ${a.fuente || '-'}`,
    ].join('\n');
  }

  encNext.addEventListener('click', () => {
    const sel = encGetSelected();
    if (!sel) {
      const opts = encForm.querySelector('.enc-options');
      if (opts && !reducedMotion) {
        opts.classList.add('enc-shake');
        setTimeout(() => opts.classList.remove('enc-shake'), 400);
      }
      return;
    }
    const step = encuestaSteps[encState.current];
    encState.answers[step.id] = sel;

    if (encState.current === encuestaSteps.length - 1) {
      const url = `https://wa.me/543525502606?text=${encodeURIComponent(encBuildMessage())}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      encForm.hidden    = true;
      encNav.hidden     = true;
      encLabel.hidden   = true;
      encProgWrap.hidden = true;
      encSuccess.hidden = false;
      return;
    }
    encTransition(1, () => { encState.current++; encRender(encState.current); });
  });

  encBack.addEventListener('click', () => {
    if (encState.current === 0) return;
    encTransition(-1, () => { encState.current--; encRender(encState.current); });
  });

  encReset.addEventListener('click', () => {
    encState.current = 0;
    encState.answers = {};
    encForm.hidden    = false;
    encNav.hidden     = false;
    encLabel.hidden   = false;
    encProgWrap.hidden = false;
    encSuccess.hidden = true;
    encRender(0);
  });

  encRender(0);
}

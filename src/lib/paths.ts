export type Locale = 'en' | 'es';
export const locales: Locale[] = ['en', 'es'];

export function localPath(path = '/', locale: Locale = 'en'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = '/' + path.replace(/^\/+|\/+$/g, '');
  const internal = normalized === '/' ? '' : normalized;
  const prefix = locale === 'es' ? '/es' : '';
  return `${base}${prefix}${internal}/`.replace(/\/+/g, '/');
}

export function otherLocalePath(path = '/', locale: Locale = 'en') {
  return localPath(path, locale === 'en' ? 'es' : 'en');
}

export function absolutePath(path = '/', locale: Locale = 'en') {
  return new URL(localPath(path, locale), 'https://marcovillanueva.com').toString();
}

export const dict = {
  en: {
    navWork:'Work', navAbout:'About', navContact:'Contact', navHome:'Home',
    heroLabel:'SOFTWARE ENGINEER / BASED IN MEXICO',
    heroIntro:'I build thoughtful interfaces, web platforms and digital products.',
    heroDescription:'Working across frontend engineering, architecture and product development.',
    explore:'Explore selected work', selected:'Selected work', allWork:'All projects',
    workIntro:'Selected web platforms, digital experiences and independent products.',
    expertise:'Where I focus', expertiseIntro:'From the interface to the architecture behind it.',
    experience:'Experience', experienceIntro:'A selection of teams, products and disciplines.',
    contactLabel:'HAVE A PROJECT OR OPPORTUNITY IN MIND?',
    contactTitle:'Let’s talk about what’s next.', contactAction:'Get in touch',
    viewProject:'View case study', viewLive:'Visit live website', viewCode:'View repository',
    workTitle:'Selected work.', aboutTitle:'About my work.', readMore:'Explore the project',
    based:'Cuernavaca, Mexico', problem:'The context', contribution:'My contribution',
    approach:'Technical approach', outcome:'What this work demonstrates',
    stack:'Technology', role:'Role', year:'Year', category:'Category',
    next:'Next project', backWork:'Back to all work',
    aboutLead:'I’m a software engineer focused on frontend architecture, scalable web platforms and products that solve real problems.',
    aboutBody:'My background connects hands-on engineering with teaching. I spent years teaching engineering mathematics, and I bring the same curiosity and clarity to building software with teams.',
    aboutFocus:'Principles I work by', aboutTimeline:'A few chapters of my journey',
    aboutTeaching:'Teaching & learning', aboutTeachingText:'Teaching engineering mathematics strengthened the way I explain complex systems, review decisions and share knowledge.',
    aboutBuild:'Building products', aboutBuildText:'I enjoy owning the journey from an early product idea to a maintainable implementation, including architecture, user experience and delivery.',
    aboutTeams:'Working across teams', aboutTeamsText:'I’ve contributed to international, multidisciplinary teams building large-scale experiences and platforms.',
    galleryNote:'Visual documentation', galleryText:'Public screenshots will be added after verifying asset permissions. The compositions shown here are editorial project artwork, not product screenshots.',
    footerNote:'Designed and engineered with care.', language:'Language',
  },
  es: {
    navWork:'Proyectos', navAbout:'Sobre mí', navContact:'Contacto', navHome:'Inicio',
    heroLabel:'INGENIERO DE SOFTWARE / MÉXICO',
    heroIntro:'Desarrollo interfaces cuidadas, plataformas web y productos digitales.',
    heroDescription:'Trabajo en ingeniería frontend, arquitectura y desarrollo de productos.',
    explore:'Explorar proyectos', selected:'Proyectos destacados', allWork:'Todos los proyectos',
    workIntro:'Una selección de plataformas web, experiencias digitales y productos independientes.',
    expertise:'Áreas de trabajo', expertiseIntro:'De la interfaz a la arquitectura que la sostiene.',
    experience:'Experiencia', experienceIntro:'Una selección de equipos, productos y disciplinas.',
    contactLabel:'¿TIENES UN PROYECTO O UNA OPORTUNIDAD?',
    contactTitle:'Hablemos de lo que sigue.', contactAction:'Escríbeme',
    viewProject:'Ver caso de estudio', viewLive:'Visitar sitio público', viewCode:'Ver repositorio',
    workTitle:'Proyectos.', aboutTitle:'Sobre mi trabajo.', readMore:'Explorar proyecto',
    based:'Cuernavaca, México', problem:'El contexto', contribution:'Mi participación',
    approach:'Enfoque técnico', outcome:'Qué demuestra este trabajo',
    stack:'Tecnologías', role:'Rol', year:'Año', category:'Categoría',
    next:'Siguiente proyecto', backWork:'Volver a proyectos',
    aboutLead:'Soy ingeniero de software especializado en arquitectura frontend, plataformas web escalables y productos que resuelven problemas reales.',
    aboutBody:'Mi trayectoria conecta ingeniería práctica y docencia. Durante años impartí matemáticas de ingeniería y llevo esa misma curiosidad y claridad a la construcción de software en equipo.',
    aboutFocus:'Principios de trabajo', aboutTimeline:'Algunas etapas de mi trayectoria',
    aboutTeaching:'Enseñar y aprender', aboutTeachingText:'Enseñar matemáticas de ingeniería fortaleció mi forma de explicar sistemas complejos, revisar decisiones y compartir conocimiento.',
    aboutBuild:'Construir productos', aboutBuildText:'Me gusta participar desde una idea inicial hasta una implementación mantenible, incluyendo arquitectura, experiencia de usuario y entrega.',
    aboutTeams:'Colaboración', aboutTeamsText:'He participado en equipos internacionales y multidisciplinarios desarrollando experiencias y plataformas de escala considerable.',
    galleryNote:'Documentación visual', galleryText:'Las capturas públicas se incorporarán después de verificar permisos. Las composiciones actuales son piezas editoriales, no capturas de los productos.',
    footerNote:'Diseñado y desarrollado con atención al detalle.', language:'Idioma',
  },
} as const;

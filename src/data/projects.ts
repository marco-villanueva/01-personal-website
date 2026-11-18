export type Locale = 'en' | 'es';
type LocalizedText = {
  headline: string;
  summary: string;
  context: string;
  contribution: string[];
  approach: string;
  reflection: string;
};
export type Project = {
  slug: string;
  number: string;
  year: string;
  title: string;
  visualTitle: string;
  visual: 'universal' | 'aquarabia' | 'juridico' | 'prometeo' | 'amistad' | 'constar';
  category: { en: string; es: string };
  role: { en: string; es: string };
  company: string;
  tech: string[];
  website?: string;
  repository?: string;
  content: Record<Locale, LocalizedText>;
};

export const projects: Project[] = [
  {
    slug: 'universal-all-access', number: '001', year: '2024',
    title: 'Universal All Access', visualTitle: 'UNIVERSAL\nALL ACCESS', visual: 'universal',
    category: { en: 'Content platform', es: 'Plataforma de contenidos' },
    role: { en: 'Frontend & CMS engineering', es: 'Ingeniería frontend y CMS' },
    company: 'Globant / NBCUniversal',
    tech: ['Next.js', 'React', 'Strapi', 'SSR / ISR', 'SEO'],
    content: {
      en: {
        headline: 'A content-driven web experience at enterprise scale.',
        summary: 'Frontend engineering and CMS integration for a large-scale media web platform.',
        context: 'A media platform needs reusable interface patterns, flexible content workflows and strong discoverability across a growing set of pages.',
        contribution: ['Built and integrated reusable React components with content managed in Strapi.', 'Worked with server-side rendering, incremental regeneration and SEO-oriented page architecture.', 'Collaborated on the design system and frontend implementation across the experience.'],
        approach: 'The work combined a Next.js frontend with a headless CMS. Attention was given to component reuse, semantic structure and content-driven rendering.',
        reflection: 'The case illustrates how a flexible editorial platform can be supported by an explicit frontend architecture and reusable UI patterns.',
      },
      es: {
        headline: 'Una experiencia web de contenido a escala empresarial.',
        summary: 'Ingeniería frontend e integración de CMS para una plataforma web de medios de comunicación.',
        context: 'Una plataforma de medios necesita patrones de interfaz reutilizables, flujos de contenido flexibles y buena visibilidad para una cantidad creciente de páginas.',
        contribution: ['Desarrollé e integré componentes reutilizables en React con contenido administrado desde Strapi.', 'Trabajé con renderizado en servidor, regeneración incremental y arquitectura orientada a SEO.', 'Colaboré en el sistema de diseño y la implementación frontend de la experiencia.'],
        approach: 'El trabajo combinó Next.js con un CMS headless. Se priorizaron reutilización de componentes, estructura semántica y renderizado a partir de contenido.',
        reflection: 'El proyecto permite explicar cómo una plataforma editorial flexible se apoya en una arquitectura frontend explícita y patrones UI reutilizables.',
      },
    },
  },
  {
    slug: 'aquarabia', number: '002', year: '2024',
    title: 'Aquarabia', visualTitle: 'AQUARABIA', visual: 'aquarabia',
    category: { en: 'Digital experience', es: 'Experiencia digital' },
    role: { en: 'Frontend engineering', es: 'Ingeniería frontend' },
    company: 'Aquarabia / Qiddiya City',
    tech: ['Next.js', 'Strapi', 'i18n', 'RTL', 'Responsive UI'],
    website: 'https://aquarabiaqiddiyacity.com/en',
    content: {
      en: {
        headline: 'Designing for multiple languages and a vibrant visual identity.',
        summary: 'Internationalized web experience for a destination in Qiddiya City.',
        context: 'The website brings together promotional content, destinations, tickets and visitor-facing information across languages and screen sizes.',
        contribution: ['Implemented frontend sections such as partner listings, restaurants and ticket interfaces.', 'Worked with CMS-driven content, mobile interactions and responsive layouts.', 'Supported Arabic right-to-left layouts and internationalized content.'],
        approach: 'Next.js, Strapi and responsive components provided the basis for a multilingual, content-rich experience with different visual and reading directions.',
        reflection: 'Complex visual design becomes more maintainable when interaction patterns and internationalization are treated as core architecture concerns.',
      },
      es: {
        headline: 'Diseño para varios idiomas y una identidad visual expresiva.',
        summary: 'Experiencia web internacionalizada para un destino de Qiddiya City.',
        context: 'El sitio reúne contenido promocional, destinos, boletos e información para visitantes en varios idiomas y tamaños de pantalla.',
        contribution: ['Implementé secciones como directorios de socios, restaurantes e interfaces para boletos.', 'Trabajé con contenido administrado desde CMS, interacciones móviles y layouts responsive.', 'Di soporte a interfaces árabes de derecha a izquierda y contenido internacionalizado.'],
        approach: 'Next.js, Strapi y componentes responsive ofrecieron la base para una experiencia multilingüe rica en contenido y con distintas direcciones de lectura.',
        reflection: 'Un diseño visual complejo es más mantenible cuando los patrones de interacción y la internacionalización son parte de la arquitectura.',
      },
    },
  },
  {
    slug: 'organizador-juridico', number: '003', year: '2026',
    title: 'Organizador Jurídico', visualTitle: 'ORGANIZADOR\nJURÍDICO', visual: 'juridico',
    category: { en: 'Independent SaaS product', es: 'Producto SaaS independiente' },
    role: { en: 'Product, frontend & backend', es: 'Producto, frontend y backend' },
    company: 'Independent product',
    tech: ['React', 'TypeScript', 'Supabase', 'Cloudflare', 'Stripe'],
    repository: 'https://github.com/marco-villanueva/organizador-juridico',
    content: {
      en: {
        headline: 'A focused workspace for legal case management.',
        summary: 'A SaaS product for independent legal professionals in Mexico.',
        context: 'Independent legal professionals need a practical way to organize cases, deadlines and follow-up activity with clear daily visibility.',
        contribution: ['Defined MVP scope, user flows and technical architecture.', 'Developed case management, tasks and supporting frontend experiences.', 'Integrated authentication, data storage, deployment pipelines and subscription infrastructure.'],
        approach: 'The product combines a typed frontend with Supabase services, Cloudflare hosting and payment integration. The architecture prioritizes clear boundaries and incremental delivery.',
        reflection: 'Working on a product end to end requires balancing user needs, delivery constraints, system reliability and interface quality.',
      },
      es: {
        headline: 'Un espacio de trabajo para organizar expedientes jurídicos.',
        summary: 'Producto SaaS dirigido a profesionales independientes del derecho en México.',
        context: 'Los abogados independientes necesitan organizar expedientes, vencimientos y seguimientos con visibilidad clara de su trabajo cotidiano.',
        contribution: ['Definí el alcance del MVP, los flujos de usuario y la arquitectura técnica.', 'Desarrollé funcionalidades de expedientes, pendientes y sus interfaces.', 'Integré autenticación, almacenamiento de datos, despliegues e infraestructura para suscripciones.'],
        approach: 'El producto combina un frontend tipado con servicios Supabase, alojamiento en Cloudflare e integración de pagos. La arquitectura prioriza responsabilidades claras y entregas incrementales.',
        reflection: 'Construir un producto de extremo a extremo implica equilibrar necesidades del usuario, restricciones de entrega, confiabilidad y calidad visual.',
      },
    },
  },
  {
    slug: 'santillana-prometeo', number: '004', year: '2025',
    title: 'Santillana Prometeo', visualTitle: 'PROMETEO', visual: 'prometeo',
    category: { en: 'Education platform', es: 'Plataforma educativa' },
    role: { en: 'Frontend engineering', es: 'Ingeniería frontend' },
    company: 'Santillana',
    tech: ['React', 'Vite', 'Module Federation', 'TanStack Query', 'OIDC'],
    content: {
      en: {
        headline: 'Modular frontend architecture for education.',
        summary: 'Microfrontend development for a platform used in academic workflows.',
        context: 'Large educational systems bring together distinct workflows for groups, students, teachers and institutional data.',
        contribution: ['Developed interfaces for class, student and teacher management workflows.', 'Integrated a remote module with a Vite-powered microfrontend host.', 'Worked with data fetching, authenticated application flows and shared UI conventions.'],
        approach: 'Federated modules and reusable frontend conventions helped isolate feature development while maintaining a consistent application experience.',
        reflection: 'Modular architecture makes teams more independent when shared contracts and navigation conventions are clear.',
      },
      es: {
        headline: 'Arquitectura frontend modular para educación.',
        summary: 'Desarrollo de microfrontends para una plataforma de procesos académicos.',
        context: 'Los sistemas educativos reúnen flujos distintos para grupos, estudiantes, profesores y datos institucionales.',
        contribution: ['Desarrollé interfaces para procesos de grupos, alumnos y profesores.', 'Integré un módulo remoto con un host de microfrontends basado en Vite.', 'Trabajé en consultas de datos, flujos autenticados y convenciones UI compartidas.'],
        approach: 'Los módulos federados y las convenciones frontend permitieron aislar funcionalidades manteniendo una experiencia coherente.',
        reflection: 'La arquitectura modular facilita el trabajo de equipos independientes cuando existen contratos compartidos y convenciones claras.',
      },
    },
  },
  {
    slug: 'amistad-live', number: '005', year: '2026',
    title: 'Amistad Live', visualTitle: 'AMISTAD\nLIVE', visual: 'amistad',
    category: { en: 'Community website', es: 'Sitio comunitario' },
    role: { en: 'Web development', es: 'Desarrollo web' },
    company: 'Amistad Live',
    tech: ['Frontend', 'Content', 'Responsive Design', 'Cloudflare'],
    website: 'https://amistad.live/',
    content: {
      en: {
        headline: 'A digital home for a local and international community.',
        summary: 'A content-oriented website for a church community with events and local groups.',
        context: 'The community needs clear routes to discover activities, learn about gatherings and find ways to connect.',
        contribution: ['Worked on the public site and its information architecture.', 'Implemented responsive sections for events, ministries and community activities.', 'Contributed to interactive experiences including geographic discovery of meeting groups.'],
        approach: 'A content-first structure and responsive design support different visitors, from newcomers to regular participants.',
        reflection: 'A community website succeeds when information is easy to find, up to date and accessible on everyday devices.',
      },
      es: {
        headline: 'Un espacio digital para una comunidad local e internacional.',
        summary: 'Sitio web de contenido para una comunidad cristiana, con eventos y grupos locales.',
        context: 'La comunidad necesita rutas claras para descubrir actividades, conocer reuniones y encontrar formas de participar.',
        contribution: ['Trabajé en el sitio público y su arquitectura de información.', 'Implementé secciones responsive para eventos, ministerios y actividades.', 'Contribuí a experiencias interactivas, incluida la exploración geográfica de grupos de reunión.'],
        approach: 'Una estructura centrada en contenido y un diseño responsive dan servicio a distintos visitantes, desde personas nuevas hasta miembros habituales.',
        reflection: 'Un sitio comunitario funciona cuando la información es fácil de encontrar, está actualizada y resulta accesible en dispositivos cotidianos.',
      },
    },
  },
  {
    slug: 'hago-constar', number: '006', year: '2026',
    title: 'Hago-Constar', visualTitle: 'HAGO\nCONSTAR', visual: 'constar',
    category: { en: 'Social impact platform', es: 'Plataforma de impacto social' },
    role: { en: 'Fullstack architecture', es: 'Arquitectura fullstack' },
    company: 'Independent initiative',
    tech: ['Web Architecture', 'Authentication', 'Cloudflare', 'Privacy'],
    content: {
      en: {
        headline: 'Designing an experience where privacy is central.',
        summary: 'An initiative exploring safe, anonymous reporting workflows.',
        context: 'Sensitive reporting tools need to minimize exposure and help users understand what information they share.',
        contribution: ['Worked on architecture and delivery choices for a privacy-conscious web experience.', 'Explored authentication, infrastructure and frontend flow requirements.', 'Considered how the interface communicates sensitive actions and user expectations.'],
        approach: 'The technical direction focuses on limiting unnecessary data exposure and separating sensitive concerns across services.',
        reflection: 'Privacy-aware products require careful tradeoffs between clarity, usability and realistic technical guarantees.',
      },
      es: {
        headline: 'Una experiencia en la que la privacidad es central.',
        summary: 'Iniciativa para explorar procesos de denuncia anónima.',
        context: 'Las herramientas para reportes sensibles deben reducir la exposición y ayudar a comprender qué información se comparte.',
        contribution: ['Trabajé en decisiones de arquitectura y entrega de una experiencia web con atención a la privacidad.', 'Exploré requisitos de autenticación, infraestructura y flujos frontend.', 'Consideré cómo comunicar acciones sensibles y expectativas del usuario desde la interfaz.'],
        approach: 'La dirección técnica se centra en evitar exposición innecesaria de datos y separar responsabilidades sensibles entre servicios.',
        reflection: 'Los productos que tratan información sensible requieren evaluar cuidadosamente claridad, usabilidad y garantías técnicas realistas.',
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

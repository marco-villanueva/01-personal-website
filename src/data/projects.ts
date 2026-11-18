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
  visual: 'universal' | 'sixflags' | 'cerifi' | 'aquarabia' | 'juridico' | 'prometeo' | 'amistad' | 'constar';
  screenshot?: string;
  screenshotContext?: { en: string; es: string };
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
      slug: 'universal-pictures-at-home', number: '001', year: '2023–2025',
      title: 'Universal Pictures at Home', visualTitle: 'UNIVERSAL\nPICTURES', visual: 'universal',
      category: { en: 'Content platform', es: 'Plataforma de contenidos' },
      role: { en: 'Frontend & CMS engineering', es: 'Ingeniería frontend y CMS' },
      company: 'Globant / NBCUniversal',
      website: 'https://www.universalpicturesathome.com/',
      screenshot: 'universal-pictures-at-home.jpg',
      tech: ['Next.js 14', 'TypeScript', 'React', 'Strapi 4', 'Node.js', 'Storybook'],
      content: {
        en: {
          headline: 'A content-rich web experience for home entertainment.',
          summary: 'Frontend engineering, design system and CMS integration for an NBCUniversal media platform.',
          context: 'A consumer-facing film and TV platform needs structured title information, reusable editorial interfaces and reliable content delivery.',
          contribution: ['Built reusable React/Next.js components integrated with content managed through Strapi.', 'Contributed to a reusable design system with Storybook and component testing using React Testing Library.', 'Worked with peer reviews, content-driven rendering and continuous delivery.'],
          approach: 'The platform used Next.js 14, TypeScript, React and Strapi 4, with reusable UI contracts and a content-driven architecture.',
          reflection: 'Large content platforms benefit from explicit frontend contracts, consistent components and scalable publishing practices.',
        },
        es: {
          headline: 'Una experiencia web de contenidos para entretenimiento en casa.',
          summary: 'Ingeniería frontend, sistema de diseño e integración CMS para una plataforma de medios de NBCUniversal.',
          context: 'Una plataforma de películas y series necesita información estructurada, interfaces editoriales reutilizables y entrega de contenido confiable.',
          contribution: ['Construí componentes reutilizables en React/Next.js integrados con contenido administrado desde Strapi.', 'Contribuí a un sistema de diseño con Storybook y pruebas de componentes en React Testing Library.', 'Trabajé con revisiones de código, renderizado basado en contenido y entregas continuas.'],
          approach: 'La plataforma utilizó Next.js 14, TypeScript, React y Strapi 4, con contratos UI reutilizables y arquitectura basada en contenido.',
          reflection: 'Las grandes plataformas de contenido se benefician de contratos frontend claros, componentes consistentes y procesos editoriales escalables.',
        },
      },
    },
  {
      slug: 'six-flags-qiddiya-city', number: '002', year: '2025',
      title: 'Six Flags Qiddiya City', visualTitle: 'SIX FLAGS\nQIDDIYA', visual: 'sixflags',
      category: { en: 'Destination web platform', es: 'Plataforma web de entretenimiento' },
      role: { en: 'Frontend & fullstack engineer', es: 'Ingeniero frontend y fullstack' },
      company: 'Globant / Qiddiya City',
      website: 'https://sixflagsqiddiyacity.com/en',
      screenshot: 'six-flags-qiddiya-city.jpg',
      tech: ['Next.js', 'Strapi', 'Svelte 5', 'AEM', 'TypeScript', 'RTL'],
      content: {
        en: {
          headline: 'A multilingual experience for a world-scale entertainment destination.',
          summary: 'Frontend features, production maintenance and migration work for the Six Flags Qiddiya City platform.',
          context: 'A major destination requires attraction information, responsive navigation and editorial content across English and Arabic.',
          contribution: ['Worked on production maintenance and new functionality in the Six Flags and Aquarabia web ecosystem.', 'Implemented and maintained frontend experiences using Next.js, Strapi and REST APIs.', 'Participated in the migration of modules to Svelte 5 and Adobe Experience Manager, with localization and RTL considerations.'],
          approach: 'The work spanned Next.js/Strapi architecture and migration tasks toward Svelte 5/AEM, collaborating with design, backend and QA.',
          reflection: 'High-traffic destination experiences depend on reliable content architecture, clear multilingual interfaces and production discipline.',
        },
        es: {
          headline: 'Una experiencia multilingüe para un destino de entretenimiento de gran escala.',
          summary: 'Funcionalidades frontend, mantenimiento en producción y migración tecnológica para Six Flags Qiddiya City.',
          context: 'Un destino importante necesita información de atracciones, navegación responsive y contenidos editoriales en inglés y árabe.',
          contribution: ['Trabajé en mantenimiento productivo y nuevas funcionalidades del ecosistema Six Flags y Aquarabia.', 'Implementé y mantuve interfaces con Next.js, Strapi e integración de APIs REST.', 'Participé en la migración de módulos a Svelte 5 y Adobe Experience Manager, considerando localización y RTL.'],
          approach: 'El trabajo abarcó la arquitectura Next.js/Strapi y tareas de migración a Svelte 5/AEM, colaborando con diseño, backend y QA.',
          reflection: 'Las experiencias de destinos a gran escala necesitan arquitectura de contenido confiable, interfaces multilingües claras y disciplina de producción.',
        },
      },
    },
  {
      slug: 'aquarabia', number: '003', year: '2025',
      title: 'Aquarabia', visualTitle: 'AQUARABIA', visual: 'aquarabia',
      category: { en: 'Digital experience', es: 'Experiencia digital' },
      role: { en: 'Frontend engineering', es: 'Ingeniería frontend' },
      company: 'Aquarabia / Qiddiya City',
      tech: ['Next.js', 'Strapi', 'Svelte 5', 'AEM', 'i18n', 'RTL'],
      website: 'https://aquarabiaqiddiyacity.com/en',
      screenshot: 'aquarabia.jpg',
      content: {
        en: {
          headline: 'Designing for multiple languages and a vibrant visual identity.',
          summary: 'Internationalized web experience for a destination in Qiddiya City.',
          context: 'The website brings together promotional content, destinations, tickets and visitor-facing information across languages and screen sizes.',
          contribution: ['Implemented frontend sections such as partner listings, restaurants and ticket interfaces.', 'Worked with CMS-driven content, mobile interactions and responsive layouts.', 'Supported Arabic right-to-left layouts and internationalized content, with work on the migration to Svelte 5 and AEM.'],
          approach: 'Next.js, Strapi and responsive components provided the basis for a multilingual, content-rich experience with different visual and reading directions.',
          reflection: 'Complex visual design becomes more maintainable when interaction patterns and internationalization are treated as core architecture concerns.',
        },
        es: {
          headline: 'Diseño para varios idiomas y una identidad visual expresiva.',
          summary: 'Experiencia web internacionalizada para un destino de Qiddiya City.',
          context: 'El sitio reúne contenido promocional, destinos, boletos e información para visitantes en varios idiomas y tamaños de pantalla.',
          contribution: ['Implementé secciones como directorios de socios, restaurantes e interfaces para boletos.', 'Trabajé con contenido administrado desde CMS, interacciones móviles y layouts responsive.', 'Di soporte a interfaces árabes RTL y contenido internacionalizado, participando también en la migración a Svelte 5 y AEM.'],
          approach: 'Next.js, Strapi y componentes responsive ofrecieron la base para una experiencia multilingüe rica en contenido y con distintas direcciones de lectura.',
          reflection: 'Un diseño visual complejo es más mantenible cuando los patrones de interacción y la internacionalización son parte de la arquitectura.',
        },
      },
    },
  {
      slug: 'cerifi-authoring-platform', number: '004', year: '2021–2023',
      title: 'CeriFi', visualTitle: 'CERIFI', visual: 'cerifi',
      category: { en: 'Learning authoring platform', es: 'Plataforma de autoría educativa' },
      role: { en: 'Frontend & CMS engineer', es: 'Ingeniero frontend y CMS' },
      company: 'Globant / CeriFi',
      website: 'https://cerifi.com/',
      screenshot: 'cerifi.jpg',
      screenshotContext: {
        en: 'Screenshot of the current public CeriFi corporate website. My work focused on the educational authoring platform; the screenshot provides brand context and does not depict that internal application.',
        es: 'Captura del sitio corporativo público actual de CeriFi. Mi trabajo se centró en la plataforma educativa de autoría; esta imagen aporta contexto de marca y no representa esa aplicación interna.',
      },
      tech: ['React', 'Strapi 4', 'Node.js', 'Koa', 'PostgreSQL', 'REST APIs'],
      content: {
        en: {
          headline: 'Tools for creating and managing complex professional learning content.',
          summary: 'React, Node.js and Strapi authoring workflows for an educational platform.',
          context: 'Specialized educational material requires a CMS that supports rich text, mathematical content and media workflows.',
          contribution: ['Developed reusable React/Node.js components for authoring workflows.', 'Customized Strapi-based tools including CKEditor, mathematical editors and media libraries.', 'Worked across Node.js/Koa, PostgreSQL, REST integrations, code reviews and regular deployments.'],
          approach: 'The system combined a React authoring interface with a Strapi 4 content backend, enhanced with customized editors and media management.',
          reflection: 'Effective content tools depend on maintainable interfaces and workflows designed for the people who create and organize learning materials.',
        },
        es: {
          headline: 'Herramientas para crear y administrar contenido de formación profesional.',
          summary: 'Flujos de autoría en React, Node.js y Strapi para una plataforma educativa.',
          context: 'Los contenidos educativos especializados requieren un CMS compatible con texto enriquecido, matemáticas y bibliotecas multimedia.',
          contribution: ['Desarrollé componentes React/Node.js reutilizables para procesos de autoría.', 'Personalicé herramientas basadas en Strapi, incluyendo CKEditor, editores matemáticos y bibliotecas multimedia.', 'Trabajé con Node.js/Koa, PostgreSQL, APIs REST, revisiones de código y despliegues frecuentes.'],
          approach: 'El sistema combinó una interfaz de autoría en React con un backend Strapi 4, ampliado con editores especializados y gestión de medios.',
          reflection: 'Las herramientas editoriales eficaces requieren interfaces mantenibles y procesos pensados para quienes crean y organizan materiales educativos.',
        },
      },
    },
  {
      slug: 'organizador-juridico', number: '005', year: '2026',
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
      slug: 'santillana-prometeo', number: '006', year: '2025',
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
      slug: 'amistad-live', number: '007', year: '2026',
      title: 'Amistad Live', visualTitle: 'AMISTAD\nLIVE', visual: 'amistad',
      category: { en: 'Community website', es: 'Sitio comunitario' },
      role: { en: 'Web development', es: 'Desarrollo web' },
      company: 'Amistad Live',
      tech: ['Frontend', 'Content', 'Responsive Design', 'Cloudflare'],
      website: 'https://amistad.live/',
      screenshot: 'amistad-live.jpg',
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
      slug: 'hago-constar', number: '008', year: '2026',
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
    }

];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

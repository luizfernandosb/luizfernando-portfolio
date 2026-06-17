export type Lang = 'pt' | 'en'

export const dictionary = {
  pt: {
    ui: {
      sysLang: 'SYS_LANG',
      status: 'STATUS: ACTIVE_',
      menu: 'MENU',
      clockLabel: 'SYS_TIME',
      sectionOf: 'SEÇÃO',
    },
    commands: {
      overview: 'OVERVIEW',
      stack: 'STACK',
      experience: 'LOGS_EXP',
      education: 'INFO',
      connect: 'CONNECT',
    },
    nav: {
      home: 'Início',
      about: 'Sobre',
      tech: 'Tecnologias',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      tag: '~/luiz_fernando — online',
      role: 'Desenvolvedor de Software',
      name: "Luiz Fernando Sant'Ana Bezerra",
      summary:
        'Construo aplicações web e mobile escaláveis, com integração robusta de APIs e foco real em performance, usabilidade e código limpo.',
      cta1: 'Ver Projetos',
      cta2: 'Contato',
      location: 'São Paulo, Brasil',
      available: 'Disponível para projetos',
    },
    about: {
      title: 'Sobre Mim',
      code: '// perfil.ts',
      p1: 'Desenvolvedor adaptável, movido por performance, usabilidade e boas práticas de UI/UX. Transito entre front-end e back-end criando interfaces precisas e APIs confiáveis.',
      p2: 'Gosto de transformar requisitos complexos em produtos simples de usar, sempre com atenção a detalhes, acessibilidade e manutenibilidade do código.',
    },
    tech: {
      title: 'Tecnologias',
      code: '// stack',
      subtitle: 'Ferramentas e linguagens que uso no dia a dia.',
    },
    experience: {
      title: 'Experiência Profissional',
      code: '// timeline.log',
      present: 'Momento',
      items: [
        {
          company: 'TruckMe',
          role: 'Desenvolvedor Front-end',
          period: 'Dez 2024 — Momento',
          desc: 'Atuação com Vue.js, React.js e React Native, implementando features, corrigindo bugs, integrando APIs RESTful e refatorando código com foco em performance.',
        },
        {
          company: 'Afitpilot (Bélgica)',
          role: 'Estágio — Desenvolvedor de Software',
          period: 'Jul 2025 — Out 2025',
          desc: 'Foco em Vue.js, Node.js, Python e Tailwind CSS, além de integração de soluções baseadas em LLMs (Hugging Face) para automação inteligente.',
        },
        {
          company: 'Bússola Digital',
          role: 'Estágio — Desenvolvedor Front-end',
          period: 'Mar 2022 — Jun 2023',
          desc: 'Criação de ecossistemas web e sistemas de gestão, interfaces com React.js/Vue.js (State Management) e integração financeira robusta com a Stripe API.',
        },
        {
          company: 'Desenvolvedor Freelancer',
          role: 'Full Stack Independente',
          period: 'Fev 2020 — Out 2022',
          desc: 'APIs RESTful com Node.js, Express, TypeScript, Prisma ORM, PostgreSQL e MongoDB, além de front-end responsivo com React e Tailwind.',
        },
      ],
    },
    education: {
      title: 'Educação & Certificados',
      code: '// credenciais',
      degreeLabel: 'Graduação',
      coursesLabel: 'Cursos',
      degree: {
        name: 'Gestão de Tecnologia da Informação',
        place: 'Cruzeiro do Sul',
        status: 'Cursando',
      },
      courses: [
        {
          name: 'JavaScript and TypeScript — do Básico ao Avançado',
          place: 'Udemy · 146h',
        },
        {
          name: 'Cloud Computing | AWS Discovery Day',
          place: 'KA Solution',
        },
      ],
    },
    contact: {
      title: 'Vamos Conversar',
      code: '// contato',
      subtitle:
        'Aberto a novas oportunidades e colaborações. Fale comigo pelos canais abaixo.',
      emailLabel: 'Enviar e-mail',
    },
    footer: {
      built: 'Construído com Next.js & Tailwind CSS',
    },
  },
  en: {
    ui: {
      sysLang: 'SYS_LANG',
      status: 'STATUS: ACTIVE_',
      menu: 'MENU',
      clockLabel: 'SYS_TIME',
      sectionOf: 'SECTION',
    },
    commands: {
      overview: 'OVERVIEW',
      stack: 'STACK',
      experience: 'LOGS_EXP',
      education: 'INFO',
      connect: 'CONNECT',
    },
    nav: {
      home: 'Home',
      about: 'About',
      tech: 'Tech',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      tag: '~/luiz_fernando — online',
      role: 'Software Developer',
      name: "Luiz Fernando Sant'Ana Bezerra",
      summary:
        'I build scalable web and mobile applications, with robust API integration and a real focus on performance, usability and clean code.',
      cta1: 'View Projects',
      cta2: 'Contact',
      location: 'São Paulo, Brazil',
      available: 'Available for projects',
    },
    about: {
      title: 'About Me',
      code: '// profile.ts',
      p1: 'An adaptable developer driven by performance, usability and solid UI/UX practices. I move between front-end and back-end, crafting precise interfaces and reliable APIs.',
      p2: 'I enjoy turning complex requirements into products that are simple to use, always paying attention to details, accessibility and code maintainability.',
    },
    tech: {
      title: 'Technologies',
      code: '// stack',
      subtitle: 'Tools and languages I work with every day.',
    },
    experience: {
      title: 'Professional Experience',
      code: '// timeline.log',
      present: 'Present',
      items: [
        {
          company: 'TruckMe',
          role: 'Front-end Developer',
          period: 'Dec 2024 — Present',
          desc: 'Working with Vue.js, React.js and React Native, shipping features, fixing bugs, integrating RESTful APIs and refactoring code with a performance focus.',
        },
        {
          company: 'Afitpilot (Belgium)',
          role: 'Internship — Software Developer',
          period: 'Jul 2025 — Oct 2025',
          desc: 'Focused on Vue.js, Node.js, Python and Tailwind CSS, plus integration of LLM-based solutions (Hugging Face) for intelligent automation.',
        },
        {
          company: 'Bússola Digital',
          role: 'Internship — Front-end Developer',
          period: 'Mar 2022 — Jun 2023',
          desc: 'Building web ecosystems and management systems, React.js/Vue.js interfaces (state management) and robust financial integration with the Stripe API.',
        },
        {
          company: 'Freelance Developer',
          role: 'Independent Full Stack',
          period: 'Feb 2020 — Oct 2022',
          desc: 'RESTful APIs with Node.js, Express, TypeScript, Prisma ORM, PostgreSQL and MongoDB, plus responsive front-ends with React and Tailwind.',
        },
      ],
    },
    education: {
      title: 'Education & Certificates',
      code: '// credentials',
      degreeLabel: 'Degree',
      coursesLabel: 'Courses',
      degree: {
        name: 'Information Technology Management',
        place: 'Cruzeiro do Sul',
        status: 'In progress',
      },
      courses: [
        {
          name: 'JavaScript and TypeScript — Beginner to Advanced',
          place: 'Udemy · 146h',
        },
        {
          name: 'Cloud Computing | AWS Discovery Day',
          place: 'KA Solution',
        },
      ],
    },
    contact: {
      title: "Let's Talk",
      code: '// contact',
      subtitle:
        'Open to new opportunities and collaborations. Reach me through the channels below.',
      emailLabel: 'Send e-mail',
    },
    footer: {
      built: 'Built with Next.js & Tailwind CSS',
    },
  },
} as const

export type Dict = (typeof dictionary)['pt']

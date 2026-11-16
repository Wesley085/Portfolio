import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      nav: { about: "Sobre", experience: "Experiência", skills: "Habilidades", education: "Formação", contact: "Contato" },
      hero: {
        eyebrow: "Fortaleza, CE — híbrido e remoto",
        role: "Técnico em Desenvolvimento de Sistemas e Desenvolvedor Web.",
        intro: "Desenvolvo aplicações web em PHP/Laravel, React e Node.js, com foco em código fácil de manter e soluções que escalam.",
        available: "Disponível para novas oportunidades",
        card: { title: "ficha", location: "Local", now: "Agora", nowValue: "OneCommerce · Laravel, React, n8n", status: "Status", statusValue: "Aberto a híbrido e remoto", stack: "Stack", theme: "Tema" },
        cta: "Entrar em contato",
        cv: "Ver experiência",
      },
      about: {
        title: "Sobre",
        p1: "Atuo como desenvolvedor web desde 2024, trabalhando com uma startup espanhola, e-commerce e projetos de integração. Meu dia a dia passa por manter e evoluir sistemas em Laravel, construir interfaces em React e automatizar processos com n8n.",
        p2: "Meu objetivo é aplicar o que sei sobre desenvolvimento web para criar soluções eficientes, escaláveis e de fácil manutenção, contribuindo com a equipe e com os projetos da empresa.",
        p3: "Também já fui professor de informática, o que me ajudou a explicar bem o que faço e a trabalhar com pessoas de áreas diferentes.",
      },
      experience: {
        title: "Experiência",
        present: "Atual",
        jobs: [
          {
            company: "OneCommerce",
            context: "Startup, Espanha · Remoto",
            role: "Desenvolvedor Web (PJ)",
            period: "Fev 2026 — Atual",
            points: [
              "Manutenção e evolução contínua de aplicações em PHP/Laravel, com novas funcionalidades e otimização de código legado.",
              "Soluções com Node.js e React, além de integrações e automações de processos com n8n.",
              "Gestão, manutenção e atualização de projetos WordPress estruturados via Composer.",
            ],
          },
          {
            company: "Alfa Cursos Profissionalizantes",
            context: "Pacajus, CE",
            role: "Professor de Informática",
            period: "Out 2025 — Jan 2026",
            points: [
              "Atividades práticas e conteúdos introdutórios de informática e pacote Office para turmas de diferentes áreas.",
              "Treinamentos iniciais sobre uso de computadores e apoio didático aos cursos profissionalizantes.",
            ],
          },
          {
            company: "Somos Octa",
            context: "São Paulo, SP",
            role: "Desenvolvedor Web",
            period: "Mai 2025 — Nov 2025",
            points: [
              "Manutenção e evolução do projeto Empório Naval: novas funcionalidades, correções e melhorias estruturais.",
              "Reestruturação da lógica de pagamentos para suportar múltiplos gateways, incluindo um gateway interno.",
            ],
          },
          {
            company: "OneCommerce",
            context: "Startup, Espanha · Remoto",
            role: "Desenvolvedor Web",
            period: "Set 2024 — Jan 2025",
            points: ["Desenvolvimento da API do OneChat, aplicativo de mensagens em tempo real com comunicação via WebSocket."],
          },
        ],
      },
      skills: {
        title: "Habilidades",
        groups: [
          { name: "Linguagens", items: ["HTML", "CSS", "JavaScript", "PHP", "C#", "MySQL"] },
          { name: "Frameworks e ferramentas", items: ["Laravel", ".NET", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "WordPress", "n8n"] },
        ],
      },
      education: {
        title: "Formação",
        items: [
          { degree: "Análise e Desenvolvimento de Sistemas (ADS)", school: "Uninassau", period: "2025 — 2027", note: "Em andamento" },
          { degree: "Técnico em Desenvolvimento de Sistemas", school: "EEEP Adolfo Ferreira de Sousa", period: "2022 — 2024", note: "" },
        ],
      },
      contact: {
        title: "Vamos conversar",
        text: "Estou aberto a oportunidades híbridas ou remotas. Se você tem um projeto ou uma vaga em que eu possa ajudar, escreva para mim.",
        email: "E-mail",
        phone: "Telefone",
        location: "Localização",
      },
      footer: { rights: "Wesley dos Santos Silva" },
    },
  },
  en: {
    translation: {
      nav: { about: "About", experience: "Experience", skills: "Skills", education: "Education", contact: "Contact" },
      hero: {
        eyebrow: "Fortaleza, Brazil — hybrid and remote",
        role: "Systems Development Technician and Web Developer.",
        intro: "I build web applications with PHP/Laravel, React and Node.js, focused on maintainable code and solutions that scale.",
        available: "Available for new opportunities",
        card: { title: "profile", location: "Location", now: "Now", nowValue: "OneCommerce · Laravel, React, n8n", status: "Status", statusValue: "Open to hybrid and remote", stack: "Stack", theme: "Theme" },
        cta: "Get in touch",
        cv: "See experience",
      },
      about: {
        title: "About",
        p1: "I've worked as a web developer since 2024, with a Spanish startup, e-commerce and integration projects. My day-to-day covers maintaining and evolving Laravel systems, building React interfaces and automating processes with n8n.",
        p2: "My goal is to apply what I know about web development to build efficient, scalable and maintainable solutions, contributing to the team and the company's projects.",
        p3: "I've also taught computer classes, which taught me to explain my work clearly and to collaborate with people from different fields.",
      },
      experience: {
        title: "Experience",
        present: "Current",
        jobs: [
          {
            company: "OneCommerce",
            context: "Startup, Spain · Remote",
            role: "Web Developer (contractor)",
            period: "Feb 2026 — Present",
            points: [
              "Ongoing maintenance and evolution of PHP/Laravel applications, shipping new features and optimizing legacy code.",
              "Solutions with Node.js and React, plus integrations and process automation with n8n.",
              "Managing, maintaining and updating WordPress projects structured with Composer.",
            ],
          },
          {
            company: "Alfa Cursos Profissionalizantes",
            context: "Pacajus, CE",
            role: "Computer Science Teacher",
            period: "Oct 2025 — Jan 2026",
            points: [
              "Practical activities and introductory content on computing and Office for classes from different fields.",
              "Introductory training on computer use and teaching support for vocational courses.",
            ],
          },
          {
            company: "Somos Octa",
            context: "São Paulo, SP",
            role: "Web Developer",
            period: "May 2025 — Nov 2025",
            points: [
              "Maintenance and evolution of the Empório Naval project: new features, fixes and structural improvements.",
              "Restructured payment logic to support multiple gateways, including an in-house gateway.",
            ],
          },
          {
            company: "OneCommerce",
            context: "Startup, Spain · Remote",
            role: "Web Developer",
            period: "Sep 2024 — Jan 2025",
            points: ["Built the API for OneChat, a real-time messaging app using WebSocket communication."],
          },
        ],
      },
      skills: {
        title: "Skills",
        groups: [
          { name: "Languages", items: ["HTML", "CSS", "JavaScript", "PHP", "C#", "MySQL"] },
          { name: "Frameworks and tools", items: ["Laravel", ".NET", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "WordPress", "n8n"] },
        ],
      },
      education: {
        title: "Education",
        items: [
          { degree: "Systems Analysis and Development (ADS)", school: "Uninassau", period: "2025 — 2027", note: "In progress" },
          { degree: "Systems Development Technician", school: "EEEP Adolfo Ferreira de Sousa", period: "2022 — 2024", note: "" },
        ],
      },
      contact: {
        title: "Let's talk",
        text: "I'm open to hybrid or remote opportunities. If you have a project or a role where I can help, drop me a line.",
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      footer: { rights: "Wesley dos Santos Silva" },
    },
  },
  es: {
    translation: {
      nav: { about: "Sobre mí", experience: "Experiencia", skills: "Habilidades", education: "Formación", contact: "Contacto" },
      hero: {
        eyebrow: "Fortaleza, Brasil — híbrido y remoto",
        role: "Técnico en Desarrollo de Sistemas y Desarrollador Web.",
        intro: "Desarrollo aplicaciones web con PHP/Laravel, React y Node.js, con foco en código mantenible y soluciones que escalan.",
        available: "Disponible para nuevas oportunidades",
        card: { title: "ficha", location: "Lugar", now: "Ahora", nowValue: "OneCommerce · Laravel, React, n8n", status: "Estado", statusValue: "Abierto a híbrido y remoto", stack: "Stack", theme: "Tema" },
        cta: "Ponerse en contacto",
        cv: "Ver experiencia",
      },
      about: {
        title: "Sobre mí",
        p1: "Trabajo como desarrollador web desde 2024, con una startup española, e-commerce y proyectos de integración. Mi día a día incluye mantener y evolucionar sistemas en Laravel, crear interfaces en React y automatizar procesos con n8n.",
        p2: "Mi objetivo es aplicar lo que sé de desarrollo web para crear soluciones eficientes, escalables y fáciles de mantener, aportando al equipo y a los proyectos de la empresa.",
        p3: "También fui profesor de informática, lo que me enseñó a explicar bien mi trabajo y a colaborar con personas de áreas distintas.",
      },
      experience: {
        title: "Experiencia",
        present: "Actual",
        jobs: [
          {
            company: "OneCommerce",
            context: "Startup, España · Remoto",
            role: "Desarrollador Web (autónomo)",
            period: "Feb 2026 — Actualidad",
            points: [
              "Mantenimiento y evolución continua de aplicaciones PHP/Laravel, con nuevas funcionalidades y optimización de código heredado.",
              "Soluciones con Node.js y React, además de integraciones y automatización de procesos con n8n.",
              "Gestión, mantenimiento y actualización de proyectos WordPress estructurados con Composer.",
            ],
          },
          {
            company: "Alfa Cursos Profissionalizantes",
            context: "Pacajus, CE",
            role: "Profesor de Informática",
            period: "Oct 2025 — Ene 2026",
            points: [
              "Actividades prácticas y contenidos introductorios de informática y paquete Office para clases de distintas áreas.",
              "Capacitaciones iniciales sobre el uso de computadoras y apoyo didáctico a cursos profesionalizantes.",
            ],
          },
          {
            company: "Somos Octa",
            context: "São Paulo, SP",
            role: "Desarrollador Web",
            period: "May 2025 — Nov 2025",
            points: [
              "Mantenimiento y evolución del proyecto Empório Naval: nuevas funcionalidades, correcciones y mejoras estructurales.",
              "Reestructuración de la lógica de pagos para soportar múltiples pasarelas, incluida una pasarela interna.",
            ],
          },
          {
            company: "OneCommerce",
            context: "Startup, España · Remoto",
            role: "Desarrollador Web",
            period: "Sep 2024 — Ene 2025",
            points: ["Desarrollo de la API de OneChat, aplicación de mensajería en tiempo real con comunicación vía WebSocket."],
          },
        ],
      },
      skills: {
        title: "Habilidades",
        groups: [
          { name: "Lenguajes", items: ["HTML", "CSS", "JavaScript", "PHP", "C#", "MySQL"] },
          { name: "Frameworks y herramientas", items: ["Laravel", ".NET", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "WordPress", "n8n"] },
        ],
      },
      education: {
        title: "Formación",
        items: [
          { degree: "Análisis y Desarrollo de Sistemas (ADS)", school: "Uninassau", period: "2025 — 2027", note: "En curso" },
          { degree: "Técnico en Desarrollo de Sistemas", school: "EEEP Adolfo Ferreira de Sousa", period: "2022 — 2024", note: "" },
        ],
      },
      contact: {
        title: "Hablemos",
        text: "Estoy abierto a oportunidades híbridas o remotas. Si tienes un proyecto o una vacante en la que pueda ayudar, escríbeme.",
        email: "Correo",
        phone: "Teléfono",
        location: "Ubicación",
      },
      footer: { rights: "Wesley dos Santos Silva" },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    supportedLngs: ["pt", "en", "es"],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
  });

export default i18n;

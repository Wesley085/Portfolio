import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    pt: {
        translation: {
            nav: {
                about: "Sobre",
                skills: "Skills",
                experience: "Experiência",
                contact: "Contato",
                talkToMe: "Fale comigo"
            },
            hero: {
                greeting: "👋 Olá, mundo! Eu sou",
                rolePrefix: "> ",
                roles: ["Desenvolvedor Web", "PHP & Laravel", "React Developer", "WordPress Expert"],
                description: "Técnico em Desenvolvimento de Sistemas com experiência em projetos reais — desde startups na Espanha até sistemas de gestão pública. Focado em soluções eficientes, escaláveis e com ótima experiência de usuário.",
                ctaExperience: "Ver Experiências",
                ctaContact: "Entre em Contato",
                scroll: "SCROLL"
            },
            about: {
                title: "Sobre mim",
                p1: "Sou <1>Wesley dos Santos Silva</1>, desenvolvedor web com formação técnica em Desenvolvimento de Sistemas e graduação em andamento em Análise e Desenvolvimento de Sistemas (ADS) pela Uninassau.",
                p2: "Tenho experiência prática em projetos reais — desde o desenvolvimento de APIs em tempo real para uma startup espanhola até a modernização de sistemas de gestão pública com <1>Laravel</1>. Também atuo como professor de informática, compartilhando conhecimento com novas turmas.",
                p3: "Meu foco é criar soluções que combinem <1> performance</1>, <2> segurança</2> e uma excelente <3> experiência de usuário</3>. Estou aberto a oportunidades presenciais, híbridas ou remotas.",
                badge: "FULL STACK DEV",
                stats: {
                    years: "Anos de estudo",
                    companies: "Empresas atendidas",
                    technologies: "Tecnologias",
                    learning: "Vontade de aprender"
                }
            },
            skills: {
                title: "Habilidades",
                categories: {
                    languages: "Linguagens",
                    frameworks: "Frameworks & Libs",
                    tools: "Plataformas & Ferramentas"
                },
                techsUsed: "tecnologias que já usei"
            },
            experience: {
                sectionTitle: "03. Experiência",
                title: "Experiência Profissional",
                current: "Atual",
                education: {
                    title: "Formação Acadêmica",
                    inProgress: "Em andamento"
                },
                jobs: [
                    {
                        company: "OneCommerce",
                        location: "Startup — Espanha 🇪🇸",
                        role: "Desenvolvedor Web",
                        period: "Fev 2025 — Atual",
                        description: [
                            "Desenvolvimento PHP especializado em WordPress com Composer, temas e plugins customizados.",
                            "Desenvolvimento frontend com React.js, focado em performance e segurança.",
                            "Redução de dependências externas e otimização do carregamento."
                        ]
                    },
                    {
                        company: "GestCloud",
                        location: "Cristino Castro, PI 🇧🇷",
                        role: "Desenvolvedor Web",
                        period: "Out 2025 — Atual",
                        description: [
                            "Liderança na migração de aplicações legadas (Desktop/Firebird) para arquitetura web moderna com Laravel.",
                            "Integração via API entre sistemas de Almoxarifado e Licitações, automatizando dados contratuais.",
                            "Desenvolvimento de Landing Page institucional e otimização de UI/UX no sistema de Contracheques."
                        ]
                    },
                    {
                        company: "Alfa Cursos Profissionalizantes",
                        location: "Pacajus, CE 🇧🇷",
                        role: "Professor de Informática",
                        period: "Out 2025 — Atual",
                        description: [
                            "Elaboração de atividades práticas e conteúdos sobre informática básica e pacote Office.",
                            "Condução de treinamentos iniciais para turmas de diferentes áreas profissionalizantes.",
                            "Apoio didático e criação de materiais de aprendizado."
                        ]
                    },
                    {
                        company: "Somos Octa",
                        location: "São Paulo, SP 🇧🇷",
                        role: "Desenvolvedor Web",
                        period: "Mai 2025 — Nov 2025",
                        description: [
                            "Manutenção e evolução do projeto Empório Naval, implementando novas funcionalidades.",
                            "Reestruturação da lógica de pagamentos para suportar múltiplos gateways, incluindo gateway interno.",
                            "Correções e melhorias estruturais no sistema."
                        ]
                    },
                    {
                        company: "OneCommerce",
                        location: "Startup — Espanha 🇪🇸",
                        role: "Desenvolvedor Web",
                        period: "Set 2024 — Jan 2025",
                        description: [
                            "Desenvolvimento de API para aplicativo de mensagens em tempo real (OneChat).",
                            "Implementação de comunicação via WebSocket para troca de mensagens em ambiente web."
                        ]
                    }
                ],
                academic: [
                    {
                        degree: "Técnico em Desenvolvimento de Sistemas",
                        school: "Escola Técnica Estadual Adolfo Ferreira de Sousa",
                        period: "2022 — 2024"
                    },
                    {
                        degree: "Análise e Desenvolvimento de Sistemas (ADS)",
                        school: "Uninassau SIA",
                        period: "2025 — 2027"
                    }
                ]
            },
            contact: {
                sectionTitle: "04. Contato",
                title: "Vamos <1>trabalhar juntos?</1>",
                description: "Estou aberto a oportunidades <1>presenciais</1>, <3>hibridas</3> ou <5>remotas</5>. Se você tem um projeto interessante ou uma vaga disponivel, minha caixa de entrada está sempre aberta!",
                sayHello: "✉ Diga olá"
            },
            footer: {
                developedBy: "Desenvolvido por"
            }
        }
    },
    en: {
        translation: {
            nav: {
                about: "About",
                skills: "Skills",
                experience: "Experience",
                contact: "Contact",
                talkToMe: "Talk to me"
            },
            hero: {
                greeting: "👋 Hello, world! I am",
                rolePrefix: "> ",
                roles: ["Web Developer", "PHP & Laravel", "React Developer", "WordPress Expert"],
                description: "Systems Development Technician with experience in real projects — from startups in Spain to public management systems. Focused on efficient, scalable solutions with great user experience.",
                ctaExperience: "See Experience",
                ctaContact: "Get in Touch",
                scroll: "SCROLL"
            },
            about: {
                title: "About me",
                p1: "I am <1>Wesley dos Santos Silva</1>, a web developer with a technical background in Systems Development and currently pursuing a degree in Systems Analysis and Development (ADS) at Uninassau.",
                p2: "I have practical experience in real projects — from developing real-time APIs for a Spanish startup to modernizing public management systems with <1>Laravel</1>. I also work as a computer science teacher, sharing knowledge with new classes.",
                p3: "My focus is on creating solutions that combine <1> performance</1>, <2> security</2> and an excellent <3> user experience</3>. I am open to on-site, hybrid, or remote opportunities.",
                badge: "FULL STACK DEV",
                stats: {
                    years: "Years of study",
                    companies: "Companies served",
                    technologies: "Technologies",
                    learning: "Willingness to learn"
                }
            },
            skills: {
                title: "Skills",
                categories: {
                    languages: "Languages",
                    frameworks: "Frameworks & Libs",
                    tools: "Platforms & Tools"
                },
                techsUsed: "technologies I've used"
            },
            experience: {
                sectionTitle: "03. Experience",
                title: "Professional Experience",
                current: "Current",
                education: {
                    title: "Education",
                    inProgress: "In progress"
                },
                jobs: [
                    {
                        company: "OneCommerce",
                        location: "Startup — Spain 🇪🇸",
                        role: "Web Developer",
                        period: "Feb 2025 — Present",
                        description: [
                            "PHP development specialized in WordPress with Composer, custom themes and plugins.",
                            "Frontend development with React.js, focused on performance and security.",
                            "Reduction of external dependencies and loading optimization."
                        ]
                    },
                    {
                        company: "GestCloud",
                        location: "Cristino Castro, PI 🇧🇷",
                        role: "Web Developer",
                        period: "Oct 2025 — Present",
                        description: [
                            "Leadership in migrating legacy applications (Desktop/Firebird) to modern web architecture with Laravel.",
                            "API integration between Warehouse and Bidding systems, automating contractual data.",
                            "Development of institutional Landing Page and UI/UX optimization in the Payroll system."
                        ]
                    },
                    {
                        company: "Alfa Vocational Courses",
                        location: "Pacajus, CE 🇧🇷",
                        role: "IT Teacher",
                        period: "Oct 2025 — Present",
                        description: [
                            "Preparation of practical activities and content on basic computing and Office package.",
                            "Conducting initial training for classes in different vocational areas.",
                            "Didactic support and creation of learning materials."
                        ]
                    },
                    {
                        company: "Somos Octa",
                        location: "São Paulo, SP 🇧🇷",
                        role: "Web Developer",
                        period: "May 2025 — Nov 2025",
                        description: [
                            "Maintenance and evolution of the Empório Naval project, implementing new functionalities.",
                            "Restructuring of payment logic to support multiple gateways, including internal gateway.",
                            "Structural corrections and improvements to the system."
                        ]
                    },
                    {
                        company: "OneCommerce",
                        location: "Startup — Spain 🇪🇸",
                        role: "Web Developer",
                        period: "Sep 2024 — Jan 2025",
                        description: [
                            "API development for real-time messaging application (OneChat).",
                            "Implementation of WebSocket communication for message exchange in web environment."
                        ]
                    }
                ],
                academic: [
                    {
                        degree: "Systems Development Technician",
                        school: "Adolfo Ferreira de Sousa State Technical School",
                        period: "2022 — 2024"
                    },
                    {
                        degree: "Systems Analysis and Development (ADS)",
                        school: "Uninassau SIA",
                        period: "2025 — 2027"
                    }
                ]
            },
            contact: {
                sectionTitle: "04. Contact",
                title: "Let's <1>work together?</1>",
                description: "I am open to <1>on-site</1>, <3>hybrid</3> or <5>remote</5> opportunities. If you have an interesting project or an open position, my inbox is always open!",
                sayHello: "✉ Say Hello"
            },
            footer: {
                developedBy: "Developed by"
            }
        }
    },
    es: {
        translation: {
            nav: {
                about: "Sobre Mí",
                skills: "Habilidades",
                experience: "Experiencia",
                contact: "Contacto",
                talkToMe: "Hable conmigo"
            },
            hero: {
                greeting: "👋 ¡Hola, mundo! Soy",
                rolePrefix: "> ",
                roles: ["Desarrollador Web", "PHP & Laravel", "React Developer", "Experto en WordPress"],
                description: "Técnico en Desarrollo de Sistemas con experiencia en proyectos reales — desde startups en España hasta sistemas de gestión pública. Enfocado en soluciones eficientes, escalables y con gran experiencia de usuario.",
                ctaExperience: "Ver Experiencia",
                ctaContact: "Ponerse en Contacto",
                scroll: "SCROLL"
            },
            about: {
                title: "Sobre mí",
                p1: "Soy <1>Wesley dos Santos Silva</1>, desarrollador web con formación técnica en Desarrollo de Sistemas y cursando la carrera de Análisis y Desarrollo de Sistemas (ADS) en Uninassau.",
                p2: "Tengo experiencia práctica en proyectos reales — desde el desarrollo de APIs en tiempo real para una startup española hasta la modernización de sistemas de gestión pública con <1>Laravel</1>. También trabajo como profesor de informática, compartiendo conocimientos con nuevas clases.",
                p3: "Mi enfoque es crear soluciones que combinen <1> rendimiento</1>, <2> seguridad</2> y una excelente <3> experiencia de usuario</3>. Estoy abierto a oportunidades presenciales, híbridas o remotas.",
                badge: "FULL STACK DEV",
                stats: {
                    years: "Años de estudio",
                    companies: "Empresas atendidas",
                    technologies: "Tecnologías",
                    learning: "Ganas de aprender"
                }
            },
            skills: {
                title: "Habilidades",
                categories: {
                    languages: "Lenguajes",
                    frameworks: "Frameworks & Libs",
                    tools: "Plataformas & Herramientas"
                },
                techsUsed: "tecnologías que he usado"
            },
            experience: {
                sectionTitle: "03. Experiencia",
                title: "Experiencia Profesional",
                current: "Actual",
                education: {
                    title: "Formación Académica",
                    inProgress: "En curso"
                },
                jobs: [
                    {
                        company: "OneCommerce",
                        location: "Startup — España 🇪🇸",
                        role: "Desarrollador Web",
                        period: "Feb 2025 — Actualidad",
                        description: [
                            "Desarrollo PHP especializado en WordPress con Composer, temas y plugins personalizados.",
                            "Desarrollo frontend con React.js, enfocado en rendimiento y seguridad.",
                            "Reducción de dependencias externas y optimización de carga."
                        ]
                    },
                    {
                        company: "GestCloud",
                        location: "Cristino Castro, PI 🇧🇷",
                        role: "Desarrollador Web",
                        period: "Oct 2025 — Actualidad",
                        description: [
                            "Liderazgo en la migración de aplicaciones heredadas (Desktop/Firebird) a arquitectura web moderna con Laravel.",
                            "Integración vía API entre sistemas de Almacén y Licitaciones, automatizando datos contractuales.",
                            "Desarrollo de Landing Page institucional y optimización de UI/UX en el sistema de Nóminas."
                        ]
                    },
                    {
                        company: "Alfa Cursos Profesionalizantes",
                        location: "Pacajus, CE 🇧🇷",
                        role: "Profesor de Informática",
                        period: "Oct 2025 — Actualidad",
                        description: [
                            "Elaboración de actividades prácticas y contenidos sobre informática básica y paquete Office.",
                            "Realización de capacitaciones iniciales para clases de diferentes áreas profesionales.",
                            "Apoyo didáctico y creación de materiales de aprendizaje."
                        ]
                    },
                    {
                        company: "Somos Octa",
                        location: "São Paulo, SP 🇧🇷",
                        role: "Desarrollador Web",
                        period: "May 2025 — Nov 2025",
                        description: [
                            "Mantenimiento y evolución del proyecto Empório Naval, implementando nuevas funcionalidades.",
                            "Reestructuración de la lógica de pagos para soportar múltiples pasarelas, incluyendo pasarela interna.",
                            "Correcciones y mejoras estructurales en el sistema."
                        ]
                    },
                    {
                        company: "OneCommerce",
                        location: "Startup — España 🇪🇸",
                        role: "Desarrollador Web",
                        period: "Sep 2024 — Ene 2025",
                        description: [
                            "Desarrollo de API para aplicación de mensajería en tiempo real (OneChat).",
                            "Implementación de comunicación vía WebSocket para intercambio de mensajes en entorno web."
                        ]
                    }
                ],
                academic: [
                    {
                        degree: "Técnico en Desarrollo de Sistemas",
                        school: "Escuela Técnica Estatal Adolfo Ferreira de Sousa",
                        period: "2022 — 2024"
                    },
                    {
                        degree: "Análisis y Desarrollo de Sistemas (ADS)",
                        school: "Uninassau SIA",
                        period: "2025 — 2027"
                    }
                ]
            },
            contact: {
                sectionTitle: "04. Contacto",
                title: "¿Vamos a <1>trabajar juntos?</1>",
                description: "Estoy abierto a oportunidades <1>presenciales</1>, <3>híbridas</3> o <5>remotas</5>. Si tienes un proyecto interesante o una vacante, ¡mi bandeja de entrada siempre está abierta!",
                sayHello: "✉ Di hola"
            },
            footer: {
                developedBy: "Desarrollado por"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

import { createI18n } from 'vue-i18n';

// Mensajes en diferentes idiomas
const messages = {
  en: {
    home: 'HOME',
    education: 'EDUCATION',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    profile: 'PROFILE',
    profileText: 'Student in the 10th semester of Computer Engineering, equipped with advanced skills in programming, research, and technical problem analysis. I am results-oriented and focused on the practical application of my knowledge to optimize processes and enhance efficiency in a corporate environment. I seek opportunities to contribute to the company´s success while strengthening my skills and growing professionally in a challenging and collaborative setting.',
    skills: 'SKILLS',
    programmingLanguages: 'Programming Languages',
    frameworks: 'Frameworks',
    otherSkills: 'Other Skills',
    workExperience: 'WORK EXPERIENCE',
    assistantTitle1: 'Assistant SSOMAC - GRUPO FLK',
    assistantDate1: 'Jul 2023 - Oct 2023',
    assistantDescription1: 'Managed and processed large volumes of data, transforming them into relevant information for the preparation of key reports presented to regulatory entities. Coordinated the logistics of distributing Personal Protective Equipment (PPE), overseeing compliance with delivery deadlines and ensuring proper distribution across various provinces through effective tracking. Conducted processing and analysis of images obtained by drones, assisting in the generation of technical reports and in strategic decision-making for the company’s projects. Performed IT functions, including the acquisition of software licenses and ensuring their proper installation and functioning on company equipment.',
    assistantTitle2: 'Data Analyst, Logistics and IT',
    assistantDate2 : 'Nov 2022 - Jul 2024',
    assistantDescription2: 'Provided support in the administrative area and collaborated on documentation for obtaining ISO 9001 and 45001 certifications.',
    educationTitle: 'EDUCATION',
    educationDescription: 'Universidad Ricardo Palma - Computer Engineering (2020 - Present)',
    contactTitle: 'CONTACT',
    contactPhone: 'Phone: 966-401-791',
    contactEmail: 'Email',
    contactAddress: 'Address: Lima, Peru',
    Proyecto1: 'This project was developed as part of my thesis at Ricardo Palma University. It is a Mobile Web System designed to efficiently manage the accreditation service for machinery and operators at ‘Grupo FLK’. Built with modern technologies such as Vue, Vite, and Supabase, this system aims to optimize and streamline the accreditation processes, ensuring a more agile and effective workflow.',
    ButtonviewProject: 'view project',
    ButtonviewRepository: 'View Repository',
    Portafolio: 'PORTFOLIO'
  },
  es: {
    home: 'INICIO',
    education: 'EDUCACIÓN',
    experience: 'EXPERIENCIA',
    contact: 'CONTACTO',
    profile: 'PERFIL',
    profileText: 'Estudiante de 10º semestre de Ingeniería Informática con competencias avanzadas en programación, investigación y análisis de problemas técnicos. Estoy orientado a resultados y enfocado en la aplicación práctica de mis conocimientos para optimizar procesos y mejorar la eficiencia en un entorno corporativo. Busco oportunidades para contribuir al éxito de la empresa, mientras fortalezco mis habilidades y crezco profesionalmente en un entorno desafiante y colaborativo.',
    skills: 'HABILIDADES',
    programmingLanguages: 'Lenguajes de Programación',
    frameworks: 'Frameworks',
    otherSkills: 'Otras Habilidades',
    workExperience: 'EXPERIENCIA LABORAL',
    assistantTitle1: 'Asistente SSOMAC - GRUPO FLK',
    assistantDate1: 'Jul 2023 - Oct 2023',
    assistantDescription1: 'Brindé apoyo en el área administrativa y colaboré en la documentación para la obtención de las certificaciones ISO 9001 y 45001.',
    assistantTitle2: 'Analista de datos, Logística y TI ',
    assistantDate2: 'Nov 2022 - Jul 2024',
    assistantDescription2: '• Gestioné y procesé grandes volúmenes de datos, transformándolos en información relevante para la elaboración de informes clave presentados a entidades regulatorias• Coordiné la logística de distribución de Equipos de Protección Personal (EPPs), supervisando el cumplimiento de los plazos de entrega y la correcta distribución en distintas provincias, mediante un seguimiento eficaz. • Realicé el procesamiento y análisis de imágenes obtenidas por drones, apoyando en la generación de reportes técnicos y en la toma de decisiones estratégicas para los proyectos de la empresa. • Desempeñé funciones en TI, incluyendo la adquisición de licencias de software y la garantía de su correcta instalación y funcionamiento en los equipos de la empresa. ',
    educationTitle: 'EDUCACIÓN',
    educationDescription: 'Universidad Ricardo Palma - Ingeniería Informática (2020 - Actualidad)',
    contactTitle: 'CONTACTO',
    contactPhone: 'Teléfono: 966-401-791',
    contactEmail: 'Email',
    contactAddress: 'Dirección: Lima, Perú',
    Proyecto1: 'Este proyecto fue desarrollado como parte de mi tesis en la Universidad Ricardo Palma. Se trata de un Sistema Web Móvil diseñado para gestionar de manera eficiente el servicio de acreditación de maquinaria y operadores en el ‘Grupo FLK’. Este sistema, construido con tecnologías modernas como Vue, Vite y Supabase, busca optimizar y facilitar los procesos de acreditación, asegurando un flujo de trabajo más ágil y eficaz.',
    ButtonviewProject: 'Ver Proyecto',
    ButtonviewRepository: 'Ver Repositorio',
    Portafolio: 'PORTFOLIO'
  },
  fr: {
    home: 'ACCUEIL',
    education: 'ÉDUCATION',
    experience: 'EXPÉRIENCE',
    contact: 'CONTACT',
    profile: 'PROFIL',
    profileText: 'Étudiant en 10ème semestre d´Ingénierie Informatique, doté de compétences avancées en programmation, recherche et analyse de problèmes techniques. Je suis orienté vers les résultats et concentré sur l´application pratique de mes connaissances pour optimiser les processus et améliorer l´efficacité dans un environnement d´entreprise. Je cherche des opportunités pour contribuer au succès de l´entreprise tout en renforçant mes compétences et en grandissant professionnellement dans un environnement stimulant et collaboratif.',
    skills: 'COMPÉTENCES',
    programmingLanguages: 'Langages de Programmation',
    frameworks: 'Cadres',
    otherSkills: 'Autres Compétences',
    workExperience: 'EXPÉRIENCE PROFESSIONNELLE',
    assistantTitle1: 'Assistant SSOMAC - GROUPE FLK',
    assistantDate1: 'Jul 2023 - Oct 2023',
    assistantDescription1: 'A fourni un soutien dans le domaine administratif et a collaboré à la documentation pour l\'obtention des certifications ISO 9001 et 45001.',
    assistantTitle2: 'Analyste de données, Logistique et TI',
    assistantDate2: 'Nov 2022 - Jul 2024',
    assistantDescription2: 'Géré et traité de grands volumes de données, les transformant en informations pertinentes pour la préparation de rapports clés présentés aux entités réglementaires. Coordiné la logistique de distribution des Équipements de Protection Individuelle (EPI), supervisant le respect des délais de livraison et assurant une distribution correcte dans différentes provinces grâce à un suivi efficace. Réalisé le traitement et l´analyse des images obtenues par drones, contribuant à la génération de rapports techniques et à la prise de décisions stratégiques pour les projets de l´entreprise.Exercé des fonctions en TI, y compris l´acquisition de licences de logiciels et la garantie de leur installation et de leur fonctionnement correct sur les équipements de l´entreprise.',
    educationTitle: 'ÉDUCATION',
    educationDescription: 'Université Ricardo Palma - Ingénierie Informatique (2020 - Présent)',
    contactTitle: 'CONTACT',
    contactPhone: 'Téléphone: 966-401-791',
    contactEmail: 'Email',
    contactAddress: 'Adresse: Lima, Pérou',
    Proyecto1: 'Ce projet a été développé dans le cadre de ma thèse à l’Université Ricardo Palma. Il s’agit d’un Système Web Mobile conçu pour gérer efficacement le service d’accréditation des machines et des opérateurs au sein du ‘Groupe FLK’. Construit avec des technologies modernes telles que Vue, Vite et Supabase, ce système vise à optimiser et à rationaliser les processus d’accréditation, garantissant ainsi un flux de travail plus agile et efficace.',
    ButtonviewProject: 'Voir le Projet',
    ButtonviewRepository: 'Voir le Dépôt',
    Portafolio: 'PORTFOLIO'
  }
};

// Crear una instancia de i18n
const i18n = createI18n({
  locale: 'es', // Idioma por defecto
  messages
});

export default i18n;

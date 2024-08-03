import { createI18n } from 'vue-i18n';

// Mensajes en diferentes idiomas
const messages = {
  en: {
    home: 'HOME',
    education: 'EDUCATION',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    profile: 'PROFILE',
    profileText: 'Student in 9th semester of Engineering with skills in programming, research, and problem solving. Looking to apply my knowledge in a work environment, learn, and grow professionally.',
    skills: 'Skills',
    programmingLanguages: 'Programming Languages',
    frameworks: 'Frameworks',
    otherSkills: 'Other Skills',
    workExperience: 'Work Experience',
    assistantTitle: 'Assistant SSOMAC - GRUPO FLK (Jun 2023 - Jul 2023)',
    assistantDescription: 'Provided support in the administrative area and collaborated on documentation for obtaining ISO 9001 and 45001 certifications.',
    educationTitle: 'Education',
    educationDescription: 'Universidad Ricardo Palma - Computer Engineering (2020 - Present)',
    contactTitle: 'Contact',
    contactPhone: 'Phone: 966-401-791',
    contactEmail: 'Email',
    contactAddress: 'Address: Cristobal de Peralta Sur 825'
  },
  es: {
    home: 'INICIO',
    education: 'EDUCACIÓN',
    experience: 'EXPERIENCIA',
    contact: 'CONTACTO',
    profile: 'PERFIL',
    profileText: 'Estudiante de 9º semestre de Ingeniería con habilidades en programación, investigación y resolución de problemas. Busco aplicar mis conocimientos en un entorno de trabajo, aprender y crecer profesionalmente.',
    skills: 'Habilidades',
    programmingLanguages: 'Lenguajes de Programación',
    frameworks: 'Frameworks',
    otherSkills: 'Otras Habilidades',
    workExperience: 'Experiencia Laboral',
    assistantTitle: 'Asistente SSOMAC - GRUPO FLK (Jun 2023 - Jul 2023)',
    assistantDescription: 'Brindé apoyo en el área administrativa y colaboré en la documentación para la obtención de las certificaciones ISO 9001 y 45001.',
    educationTitle: 'Educación',
    educationDescription: 'Universidad Ricardo Palma - Ingeniería Informática (2020 - Actualidad)',
    contactTitle: 'Contacto',
    contactPhone: 'Teléfono: 966-401-791',
    contactEmail: 'Email',
    contactAddress: 'Dirección: Cristobal de Peralta Sur 825'
  },
  fr: {
    home: 'ACCUEIL',
    education: 'ÉDUCATION',
    experience: 'EXPÉRIENCE',
    contact: 'CONTACT',
    profile: 'PROFIL',
    profileText: 'Étudiant en 9ème semestre d\'ingénierie avec des compétences en programmation, recherche et résolution de problèmes. Cherche à appliquer mes connaissances dans un environnement de travail, apprendre et grandir professionnellement.',
    skills: 'Compétences',
    programmingLanguages: 'Langages de Programmation',
    frameworks: 'Cadres',
    otherSkills: 'Autres Compétences',
    workExperience: 'Expérience Professionnelle',
    assistantTitle: 'Assistant SSOMAC - GROUPE FLK (Juin 2023 - Juil 2023)',
    assistantDescription: 'A fourni un soutien dans le domaine administratif et a collaboré à la documentation pour l\'obtention des certifications ISO 9001 et 45001.',
    educationTitle: 'Éducation',
    educationDescription: 'Université Ricardo Palma - Ingénierie Informatique (2020 - Présent)',
    contactTitle: 'Contact',
    contactPhone: 'Téléphone: 966-401-791',
    contactEmail: 'Email',
    contactAddress: 'Adresse: Cristobal de Peralta Sur 825'
  }
};

// Crear una instancia de i18n
const i18n = createI18n({
  locale: 'es', // Idioma por defecto
  messages
});

export default i18n;
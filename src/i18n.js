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
    otherSkills: 'Other Skills'
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
    otherSkills: 'Otras Habilidades'
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
    otherSkills: 'Autres Compétences'
  }
};

// Crear una instancia de i18n
const i18n = createI18n({
  locale: 'es', // Idioma por defecto
  messages
});

export default i18n;

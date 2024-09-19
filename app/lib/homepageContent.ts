// lib/homepageContent.ts

export const homepageContent = {
  header: {
    title: 'Guido Salcedo',
    navLinks: [
      { href: '#about', label: 'Sobre mí' },
      { href: '#skills', label: 'Habilidades' },
      { href: '#contact', label: 'Contacto' },
    ],
  },
  aboutSection: {
    title: 'Desarrollador Backend',
    description: [
      'Con aproximadamente 6 años de experiencia en desarrollo backend, me especializo en la creación de soluciones eficientes y escalables.',
      'Actualmente, formo parte del equipo de Openbanking en MODO, donde sentamos las bases para escalar nuevos productos a los distintos actores del ecosistema financiero en Argentina.',
    ],
  },
  skillsSection: {
    title: 'Habilidades',
    skills: [
      {
        icon: 'Code',
        title: 'Desarrollo Backend',
        description:
          'Experiencia con TypeScript y Node.js, trabajando principalmente con el framework NestJS, y en proceso de profundizar en Go para construir APIs y servicios eficientes.',
      },
      {
        icon: 'Database',
        title: 'Bases de Datos',
        description:
          'Diseño e implementación de estructuras de datos optimizadas utilizando PostgreSQL y DynamoDB.',
      },
      {
        icon: 'Palette',
        title: 'Herramientas Cloud',
        description:
          'Uso de AWS, incluyendo Lambda, SQS, IAM, DynamoDB, CloudWatch y API Gateway.',
      },
      {
        icon: 'Sparkles',
        title: 'Documentación Técnica',
        description:
          'Enfoque constante en la creación de documentación clara y completa para facilitar el trabajo de equipos técnicos.',
      },
    ],
  },
  contactSection: {
    linkedin: 'https://www.linkedin.com/in/guidosalcedo/',
  },
};

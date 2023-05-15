import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Diogo Alves',
  title: "Ola, eu sou o Diogo Alves, seja bem vindo ao meu portfólio!",
  description:
    "Sou um desenvolvedor web Full Stack apaixonado, com experiência em aplicações web com PHP, Laravel, React.js, Next.js e desenvolvimento mobile em ReactNative. Dentre as linguagens eu domino Js/Ts, C# e o PHP",
  resumeLink:
    'https://drive.google.com/file/d/1S7qOwk9RAiqb3NMPSsx4ddSEZQsolSr5/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'DiogoAlves2004',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://diogoalves.netlify.app/',
  linkedin: 'https://www.linkedin.com/in/diogo-alves2004/',
  github: 'https://github.com/DiogoAlves2004',

};

export const skillsSection: SkillsSectionType = {
  title: 'O que eu faço',
  subTitle: 'DESENVOLVEDOR INQUIETO DE FULL STACK QUE QUER EXPLORAR CADA STACK DE TECNOLOGIA',
  data: [
    {
      title: 'Desenvolvimento Full Stack',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Construindo Aplicativos de Página Única responsivos e LPs em React.js'
        ),
        emoji(
          '⚡ Construindo aplicações web para negocios locais em PHP e React.js'
        ),
        emoji('⚡ Construindo sites estáticos responsivos usando Next.js'),
        emoji('⚡ Construindo APIs RESTful em Node.js e PHP com o Laravel Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'logos:typescript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Sass',
          fontAwesomeClassName: 'logos:sass',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Desenvolvimento de Aplicações Mobile Hibridas',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experiencia com desenvolvimento de aplicações Android e Ios'),
        emoji(
          '⚡ Interfaces intuitivas e principios de Ux Design'
        )
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'React Native',
          fontAwesomeClassName: 'logos:react',
        },
        {
          skillName: 'Android',
          fontAwesomeClassName: 'logos:android',
        },
        {
          skillName: 'Ios',
          fontAwesomeClassName: 'logos:apple',
        },
      ],
    },
    {
      title: 'Soft Skiils e mais sobre min',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Apaixonado por jogos e por academia'
        ),
        emoji(
          '⚡ Clean code, Metodos Ageis...'
        ),
        emoji(
          '⚡ Criativo e dedicado'
        ),
        emoji(
          '🎓 Graduando em Analise e desenvolvimento de sistemas - Newton Paiva'
        ),
      ],
      softwareSkills: [

      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'C#',
    progressPercentage: '60',
  },
  {
    Stack: 'PHP - Laravel',
    progressPercentage: '70',
  },
  {
    Stack: 'Js/Ts - React, Next, Node',
    progressPercentage: '90',
  },
  {
    Stack: 'Mobile - React Native',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Newton Paiva',
    subHeader: 'Análise e desenvolvimento de Sistemas',
    duration: 'Fevereiro 2023 - Julho 2025',
    desc: 'Minha primeira graduação na area aonde busco aprofundar cada vez mais, alem de melhorar meu networking',
    descBullets: [
      'POO',
      'C',
      'Eng/Arquitetura de softwares',
      'Sistemas de Informação',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'New Garden',
    desc: 'Site institucional/Landing Page construida para uma empresa de jardinagem Britanica',
    link: 'https://rad-cobbler-9cabd7.netlify.app/',
  },
  {
    name: 'Portfolio SPA ',
    desc: 'Meu primeiro projeto em React.js um portfolio SPA simples com skills e barra de progresso.',
    github: 'https://github.com/DiogoAlves2004/portfoliov1',
    link: 'https://diogoportfoliov1.netlify.app/',
  },
  {
    name: 'D-Movies',
    desc: 'Galeria de filmes com nota, o projeto explora o consumo das funcinalidades oferecidas pela API publica oferecida pela themoviedb.org.',
    github: 'https://github.com/DiogoAlves2004/d-movies',
    link: 'https://d-movies.netlify.app/',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Freelancer',
    company: '',
    companyLogo: 'https://media.istockphoto.com/id/1209859756/pt/vetorial/www-icon-go-to-web-website-icon-www-icon-with-hand-cursor-or-arrow-in-simple-flat-design.jpg?s=170667a&w=0&k=20&c=63jhpzTeLLeRLUAiJRu0fLa-uw8ZF-AFQzlrTbm4u-k=',
    date: '*',
    desc: 'Trabalhei como desenvolvedor freelancer em projetos pequenos na minha cidade, como landing pages ou sites institucioanais.',
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'New Garden',
    feedback:
      'Foi muito criativo, além de ter um site responsivo. Proporcionou-me um excelente profissionalismo e um design surpreendente.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Diogo Alves - Fullstack',
  description:
    'Um cativante desenvolvedor Fullstack apaixonado por interfaces intuitivas.',
  author: 'Diogo Alves',
  image: 'https://media.licdn.com/dms/image/D4D03AQF8BwtbnKT64w/profile-displayphoto-shrink_200_200/0/1675366933774?e=1689811200&v=beta&t=GN2_S6gFkhQ8kn4OT_3x-B_2XYKV05hp8RTff5T-SC0',
  url: 'https://diogoalves.vercel.app/',
  keywords: [
    'Diogo',
    'Diogo Alves',
    'Frontend',
    'Backend',
    'Portfolio',
    'PHP',
    'Laravel',
    'Next',
    'Javascript',
    'Developer',
    'Junior developer',
    'Deenvolvedor Junior',
  ],
};

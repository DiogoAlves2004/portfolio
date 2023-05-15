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
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
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
    github: 'https://rad-cobbler-9cabd7.netlify.app/',
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
    companyLogo: 'https://previews.dropbox.com/p/thumb/AB5lclb9Wi3cQa3UJmM_krVn8xVs_hBEH1MhZvzO8Feqj29UVYuL7H00PY_PQDDvZtYTVB2EtZXYnsRxL6ZN2VwcquXMCHJMoKHpsaxNf0Oeyj0TY3oxJ3UTruuIsfUcmNIkTqnu7sHJyz6dlz6XPwGMywyLg5pV-LgS4K8dWEYhGrlP_4OcKVEgH5jux_hUTcQAmcvxqpzb-z1wu7ZNfZ28co8na0dthlTE0DAKHCtXvNft1tmof1Zmol9A30tdozUpr3Xk3bzLrkpmoosGJ9TVT9mr_FKOyz1CGKZmNCSwNPSGVXJdlwcf4CQ7wjFsq3snRss-8RaK1A9AT_JlvzneRvmaTa9ZMgZkrM7oiTbtLR5em0lagaHkhsG0zx0FAhQ/p.jpeg',
    date: '*',
    desc: 'Trabalhei como desenvolvedor freelancer em projetos pequenos na minha cidade, como landing pages ou sites institucioanais.',
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Hanzla Tauqeer',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Hanzla Tauqeer',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};

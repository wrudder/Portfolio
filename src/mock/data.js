import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'William Rudder',
  subtitle: "I'm a Junior Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile0.jpg',
  paragraphOne: "I am a junior web developer based in Sydney, specialising in full stack web development. I have 2 years of professional experience in the media industry, working in content and scheduling roles. I have finally found my passion and can't wait to dive in and broaden my skillset.",
  paragraphTwo: "I have always had a passion for computers and how they work. I've built many from scratch to fuel my video game cravings and am always up to date with the latest tech, both for web development and hardware. Game engines and 3D libraries had a huge role in sparking my interest and now I look to develop professionally as a software engineer.",
  paragraphThree: 'Please find my Resume below.',
  resume: 'https://wrudder.github.io/Resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'art.png',
    title: 'Photo Gallery - Three.js',
    info: 'A Virtual Art Gallery built for a photography business. This project is currently being used in a photography business!',
    info2: '',
    url: 'https://wrudder.github.io/FinalProject/',
    repo: 'https://github.com/wrudder/FinalProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '8ball.png',
    title: '8ball Pool Game - Phaser2',
    info: 'This game was built with Phaser 2 as part of a group project, each of us created our own game. Javascript was the language used to create the project.',
    info2: '',
    url: 'https://cullsgit.github.io/games/',
    repo: 'https://github.com/CullsGit/games', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snippet1.png',
    title: 'Snippet',
    info: 'A code sharing platform to encourage students to collaborate. Built with Ruby on Rails and bootstrap for the CSS.',
    info2: 'To view posts, you will need to be allocated to a group by myself.',
    url: 'https://serene-plains-76920.herokuapp.com/posts',
    repo: 'https://github.com/wrudder/Project1', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'tictactoe.png',
    title: 'Tic Tac Toe',
    info: 'This was my first project, this was done using Javascript and jCanvas for the winning effect.',
    info2: 'To view posts, you will need to be allocated to a group by myself.',
    url: 'https://wrudder.github.io/project0/',
    repo: 'https://github.com/wrudder/project0', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'william.rudder1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/willrudder1',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/williamrudder/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wrudder',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

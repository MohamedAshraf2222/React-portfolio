import {
//   web,
//   javascript,
//   typescript,
  // html,
//   css,
//   reactjs,
//   tailwind,
//   git,
//   figma,
//   threejs,
  gym1,
  gym2,
  gpt3,
  ticketBooking,
  ecommerce1,
  ecommerce2,
  recipes,
  landing,
  dpeProject,
  movies,
  datesReminder,
  questionAnswer,
  resturantMenu,
} from "../assets/projects";
import {
  css,
  figma,
  git,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  typescript,
  next,
  bootstrap,
  algo,
  github,
} from "../assets/technologies";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
//   {
//     title: "Frontend Developer",
//     icon: web,
//   },
  // {
  //   title: "ReactJs Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Frontend Developer",
  //   icon: backend,
  // },
];

const experience = [
  {
    jobTitle: "Frontend Developer React Js",
    company: "Freelance",
    date: "Nov 2024 - current",
  },
  {
    jobTitle: "Frontend Developer React Js",
    company: "Vzadi",
    date: "Nov 2023 - April 2024",
  },
  {
    jobTitle: "Frontend Developer (Contract)",
    company: "IRSAA",
    date: "Aug 2023 - Nov 2023",
  },
];
const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Data Structures and Algorithms",
    icon: algo,
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "react responsive e-commerce website allow users to add items to card ,delete items and purchase for them ,the website is protected by authorization and connected to firebase so to sign in you have to create new account or simply type abc222@gmail.com for username and 123456 for password.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce1,
    source_code_link:
      "https://github.com/MohamedAshraf2222/React-Ecommerce-website",
    live_demo_link: "https://react-ecommerce-website-orcin.vercel.app/",
  },
  {
    name: "movies",
    description:
      "React movies website with movie API, Search, react-bootstrap, react hooks with great design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/MohamedAshraf2222/movies",
    live_demo_link: "https://movies-delta-three.vercel.app/",
  },
  {
    name: "Around the world",
    description:
      "react airplane ticket booking website allow users to login , register ,logout. the website is protected by authorization and connected to firebase so to sign in you have to create new account or simply type abc222@gmail.com for username and 123456 for password.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ticketBooking,
    source_code_link:
      "https://github.com/MohamedAshraf2222/React-flight-ticket-booking-site",
    live_demo_link: "https://react-flight-ticket-booking-site.vercel.app/",
  },
  {
    name: "GPT-3",
    description:
      "react responsive scientific website with amazing features, modern design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link:
      "https://github.com/MohamedAshraf2222/React-Responsive-Modren-Website",
    live_demo_link: "https://react-responsive-modren-website.vercel.app/",
  },
  {
    name: "GYM",
    description: "GYM website with great design made by native html and css .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: gym1,
    source_code_link: "https://github.com/MohamedAshraf2222/Gym-Website",
    live_demo_link: "https://gym-website-nine.vercel.app/",
  },
  {
    name: "Fitbody",
    description:
      "react responsive GYM website with animated components and amazing features with great design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gym2,
    source_code_link:
      "https://github.com/MohamedAshraf2222/React-Responsive-GYM-Website",
    live_demo_link: "https://react-responsive-gym-website.vercel.app/",
  },
  {
    name: "Amazon",
    description:
      "react responsive ecommerce website with animated components and amazing features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce2,
    source_code_link:
      "https://github.com/MohamedAshraf2222/responsive-ecommerce-webpage",
    live_demo_link: "https://responsive-ecommerce-webpage.vercel.app/",
  },
  {
    name: "Recipes",
    description:
      "react Recipes website with great design , multiple pages with react routing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: recipes,
    source_code_link:
      "https://github.com/MohamedAshraf2222/responsive-ecommerce-webpage",
    live_demo_link: "https://recipes-website-tau.vercel.app/",
  },
  {
    name: "Landing Page",
    description: "React Landing page with great design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/MohamedAshraf2222/landing-page",
    live_demo_link: "https://landing-page-mauve-sigma.vercel.app/",
  },
  {
    name: "Minimal Shopping",
    description:
      "React Minimal Shopping E-commerce application , using Api , Routing .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dpeProject,
    source_code_link:
      "https://github.com/MohamedAshraf2222/DPE-Graduation-Project",
    live_demo_link: "https://minimal-shopping-e-commerce.vercel.app/",
  },
  {
    name: "Resturant menu",
    description:
      "React Resturant menu website with react-bootstrap , react hooks and animated components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: resturantMenu,
    source_code_link: "https://github.com/MohamedAshraf2222/resturant-menu",
    live_demo_link: "https://resturant-menu-smoky.vercel.app/",
  },

  {
    name: "Question and answer",
    description:
      "React Question and answer website with react-bootstrap , react hooks and notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: questionAnswer,
    source_code_link:
      "https://github.com/MohamedAshraf2222/question-and-answer",
    live_demo_link: "https://question-and-answer-navy.vercel.app/",
  },
  {
    name: "Dates Reminder",
    description:
      "React Dates Reminder website with react bootstrap, react hooks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: datesReminder,
    source_code_link: "https://github.com/MohamedAshraf2222/dates-reminder",
    live_demo_link: "https://dates-reminder.vercel.app/",
  },
];

export { services, technologies, projects, experience };

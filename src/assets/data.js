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
  shopperProject
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
    id: 1,
    name: "Vite React Project",
    description:
      "• Developed a modern web application using Vite, React, and Tailwind CSS for a fast and responsive user experience.\n" +
      "• Implemented React Router DOM for seamless navigation and React Toastify for user notifications.\n" +
      "• Utilized TypeScript for type safety and improved code quality.\n" +
      "• Configured ESLint and Prettier for consistent code formatting and linting.\n" +
      "• Deployed the application using Vite's build and preview commands for optimized production performance.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: shopperProject,
    source_code_link:
      "https://github.com/MohamedAshraf2222/SHOPPER-Vite-E-commerce",
    live_demo_link: "https://shopper-vite-e-commerce-5foj.vercel.app/",
    featured: true,
    category: "Web Development",
    date: "2025-03-07",
  },
  {
    id: 2,
    name: "E-Commerce",
    description:
      "• Built a comprehensive e-commerce platform, enabling customers to manage shopping carts, register accounts, and authenticate via login credentials.\n" +
      "• Leveraged React.js and Context API for efficient state management and implemented JavaScript for enhanced interactivity.\n" +
      "• Incorporated Firebase for real-time database management and user authentication.\n" +
      "• Ensured full responsiveness and cross-device accessibility to reach a broader audience.",
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
    featured: true, // Indicates if the project is featured
    category: "E-Commerce", // Category of the project
    date: "2023-05-15", // Date of project completion
  },
  {
    id: 3,
    name: "Movies",
    description:
      "• Developed a fully responsive website using React and Bootstrap to showcase popular movies and series worldwide, with detailed information for each.\n" +
      "• Integrated RESTful APIs to fetch real-time data, providing users with voting scores, vote counts, movie storylines, and release dates.\n" +
      "• Created a seamless user interface with Figma and implemented with ReactJS, enhancing user engagement.",
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
    featured: false,
    category: "Entertainment",
    date: "2023-04-20",
  },
  {
    id: 4,
    name: "Around the World",
    description:
      "• Designed and developed a flight ticket booking platform with user authentication and registration features.\n" +
      "• Integrated Firebase for secure user authentication and real-time data management.\n" +
      "• Utilized React.js and Ensured a responsive design\n",
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
    featured: true,
    category: "Travel",
    date: "2023-06-10",
  },
  {
    id: 5,
    name: "GPT-3",
    description:
      "• Developed a modern, responsive website showcasing the capabilities of GPT-3 technology.\n" +
      "• Implemented React.js and Tailwind CSS for a sleek and dynamic user interface.\n" +
      "• Designed interactive components to enhance user engagement and provide a seamless browsing experience.\n" +
      "• Ensured cross-browser compatibility and mobile responsiveness for optimal performance.",
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
      "https://github.com/MohamedAshraf2222/React-Responsive-Modern-Website",
    live_demo_link: "https://react-responsive-modern-website.vercel.app/",
    featured: true,
    category: "Technology",
    date: "2023-03-25",
  },
  {
    id: 6,
    name: "GYM",
    description:
      "• Designed and developed a responsive gym website using native HTML and CSS.\n" +
      "• Created a visually appealing layout with modern design elements to attract users.\n" +
      "• Ensured cross-device compatibility and responsiveness for a seamless user experience.",
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
    featured: false,
    category: "Fitness",
    date: "2023-02-15",
  },
  {
    id: 7,
    name: "Fitbody",
    description:
      "• Developed a responsive gym website with animated components and modern design features.\n" +
      "• Utilized React.js and Tailwind CSS for dynamic and interactive user interfaces.\n" +
      "• Integrated smooth animations and transitions to enhance user engagement.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: true,
    category: "Fitness",
    date: "2023-07-01",
  },
  {
    id: 8,
    name: "Amazon",
    description:
      "• Built a responsive e-commerce platform with animated components and modern design features.\n" +
      "• Utilized React.js and Tailwind CSS for dynamic and interactive user interfaces.\n" +
      "• Integrated smooth animations and transitions to enhance user engagement.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: true,
    category: "E-Commerce",
    date: "2023-08-05",
  },
  {
    id: 9,
    name: "Recipes",
    description:
      "• Developed a responsive recipes website with multiple pages and React routing.\n" +
      "• Utilized React.js and Tailwind CSS for a modern and dynamic user interface.\n" +
      "• Integrated smooth animations and transitions to enhance user engagement.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Food",
    date: "2023-09-12",
  },
  {
    id: 10,
    name: "Landing Page",
    description:
      "• Designed and developed a responsive landing page with modern design elements.\n" +
      "• Utilized React.js and Tailwind CSS for a sleek and dynamic user interface.\n" +
      "• Ensured cross-browser compatibility and mobile responsiveness for optimal performance.",
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
    featured: false,
    category: "Landing Page",
    date: "2023-10-01",
  },
  {
    id: 11,
    name: "Minimal Shopping",
    description:
      "• Developed a minimalistic e-commerce application using React and RESTful APIs.\n" +
      "• Integrated routing and dynamic data fetching for a seamless shopping experience.\n" +
      "• Utilized React.js and CSS for a clean and modern user interface.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: true,
    category: "E-Commerce",
    date: "2023-11-15",
  },
  {
    id: 12,
    name: "Restaurant Menu",
    description:
      "• Developed a responsive restaurant menu website with React and Bootstrap.\n" +
      "• Integrated dynamic components and animations for enhanced user engagement.\n" +
      "• Utilized React hooks for efficient state management and data handling.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Food",
    date: "2023-12-05",
  },
  {
    id: 13,
    name: "Question and Answer",
    description:
      "• Developed a responsive Q&A platform with React and Bootstrap.\n" +
      "• Integrated notifications and dynamic components for enhanced user engagement.\n" +
      "• Utilized React hooks for efficient state management and data handling.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Education",
    date: "2024-01-10",
  },
  {
    id: 14,
    name: "Dates Reminder",
    description:
      "• Developed a responsive dates reminder application with React and Bootstrap.\n" +
      "• Integrated dynamic components and animations for enhanced user engagement.\n" +
      "• Utilized React hooks for efficient state management and data handling.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Productivity",
    date: "2024-02-20",
  },
  // {
  //   id: 4,
  //   name: "GPT-3",
  //   description:
  //     "React responsive scientific website with amazing features and a modern design.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gpt3,
  //   source_code_link:
  //     "https://github.com/MohamedAshraf2222/React-Responsive-Modern-Website",
  //   live_demo_link: "https://react-responsive-modern-website.vercel.app/",
  //   featured: true,
  //   category: "Technology",
  //   date: "2023-03-25",
  // },
  // {
  //   id: 5,
  //   name: "GYM",
  //   description:
  //     "GYM website with a great design made using native HTML and CSS.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: gym1,
  //   source_code_link: "https://github.com/MohamedAshraf2222/Gym-Website",
  //   live_demo_link: "https://gym-website-nine.vercel.app/",
  //   featured: false,
  //   category: "Fitness",
  //   date: "2023-02-15",
  // },
  // {
  //   id: 6,
  //   name: "Fitbody",
  //   description:
  //     "React responsive GYM website with animated components, amazing features, and a great design.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gym2,
  //   source_code_link:
  //     "https://github.com/MohamedAshraf2222/React-Responsive-GYM-Website",
  //   live_demo_link: "https://react-responsive-gym-website.vercel.app/",
  //   featured: true,
  //   category: "Fitness",
  //   date: "2023-07-01",
  // },
  // {
  //   id: 7,
  //   name: "Amazon",
  //   description:
  //     "React responsive e-commerce website with animated components and amazing features.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ecommerce2,
  //   source_code_link:
  //     "https://github.com/MohamedAshraf2222/responsive-ecommerce-webpage",
  //   live_demo_link: "https://responsive-ecommerce-webpage.vercel.app/",
  //   featured: true,
  //   category: "E-Commerce",
  //   date: "2023-08-05",
  // },
  // {
  //   id: 8,
  //   name: "Recipes",
  //   description:
  //     "React recipes website with a great design, multiple pages, and react routing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: recipes,
  //   source_code_link:
  //     "https://github.com/MohamedAshraf2222/responsive-ecommerce-webpage",
  //   live_demo_link: "https://recipes-website-tau.vercel.app/",
  //   featured: false,
  //   category: "Food",
  //   date: "2023-09-12",
  // },
  // {
  //   id: 9,
  //   name: "Landing Page",
  //   description: "React landing page with a great design.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: landing,
  //   source_code_link: "https://github.com/MohamedAshraf2222/landing-page",
  //   live_demo_link: "https://landing-page-mauve-sigma.vercel.app/",
  //   featured: false,
  //   category: "Landing Page",
  //   date: "2023-10-01",
  // },
  // {
  //   id: 10,
  //   name: "Minimal Shopping",
  //   description:
  //     "React minimal shopping e-commerce application using an API and routing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: dpeProject,
  //   source_code_link:
  //     "https://github.com/MohamedAshraf2222/DPE-Graduation-Project",
  //   live_demo_link: "https://minimal-shopping-e-commerce.vercel.app/",
  //   featured: true,
  //   category: "E-Commerce",
  //   date: "2023-11-15",
  // },
  // {
  //   id: 11,
  //   name: "Restaurant Menu",
  //   description:
  //     "React restaurant menu website with react-bootstrap, react hooks, and animated components.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react-bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: resturantMenu,
  //   source_code_link: "https://github.com/MohamedAshraf2222/resturant-menu",
  //   live_demo_link: "https://resturant-menu-smoky.vercel.app/",
  //   featured: false,
  //   category: "Food",
  //   date: "2023-12-05",
  // },
  // {
  //   id: 12,
  //   name: "Question and Answer",
  //   description:
  //     "React question and answer website with react-bootstrap, react hooks, and notifications.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react-bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: questionAnswer,
  //   source_code_link:
  //     "https://github.com/MohamedAshraf2222/question-and-answer",
  //   live_demo_link: "https://question-and-answer-navy.vercel.app/",
  //   featured: false,
  //   category: "Education",
  //   date: "2024-01-10",
  // },
  // {
  //   id: 13,
  //   name: "Dates Reminder",
  //   description:
  //     "React dates reminder website with react-bootstrap and react hooks.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react-bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: datesReminder,
  //   source_code_link: "https://github.com/MohamedAshraf2222/dates-reminder",
  //   live_demo_link: "https://dates-reminder.vercel.app/",
  //   featured: false,
  //   category: "Productivity",
  //   date: "2024-02-20",
  // },
];

const projectss = [
  {
    id: 4,
    name: "GPT-3",
    description:
      "• Developed a modern, responsive website showcasing the capabilities of GPT-3 technology.\n" +
      "• Implemented React.js and Tailwind CSS for a sleek and dynamic user interface.\n" +
      "• Designed interactive components to enhance user engagement and provide a seamless browsing experience.\n" +
      "• Ensured cross-browser compatibility and mobile responsiveness for optimal performance.",
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
      "https://github.com/MohamedAshraf2222/React-Responsive-Modern-Website",
    live_demo_link: "https://react-responsive-modern-website.vercel.app/",
    featured: true,
    category: "Technology",
    date: "2023-03-25",
  },
  {
    id: 5,
    name: "GYM",
    description:
      "• Designed and developed a responsive gym website using native HTML and CSS.\n" +
      "• Created a visually appealing layout with modern design elements to attract users.\n" +
      "• Ensured cross-device compatibility and responsiveness for a seamless user experience.",
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
    featured: false,
    category: "Fitness",
    date: "2023-02-15",
  },
  {
    id: 6,
    name: "Fitbody",
    description:
      "• Developed a responsive gym website with animated components and modern design features.\n" +
      "• Utilized React.js and Tailwind CSS for dynamic and interactive user interfaces.\n" +
      "• Integrated smooth animations and transitions to enhance user engagement.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: true,
    category: "Fitness",
    date: "2023-07-01",
  },
  {
    id: 7,
    name: "Amazon",
    description:
      "• Built a responsive e-commerce platform with animated components and modern design features.\n" +
      "• Utilized React.js and Tailwind CSS for dynamic and interactive user interfaces.\n" +
      "• Integrated smooth animations and transitions to enhance user engagement.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: true,
    category: "E-Commerce",
    date: "2023-08-05",
  },
  {
    id: 8,
    name: "Recipes",
    description:
      "• Developed a responsive recipes website with multiple pages and React routing.\n" +
      "• Utilized React.js and Tailwind CSS for a modern and dynamic user interface.\n" +
      "• Integrated smooth animations and transitions to enhance user engagement.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Food",
    date: "2023-09-12",
  },
  {
    id: 9,
    name: "Landing Page",
    description:
      "• Designed and developed a responsive landing page with modern design elements.\n" +
      "• Utilized React.js and Tailwind CSS for a sleek and dynamic user interface.\n" +
      "• Ensured cross-browser compatibility and mobile responsiveness for optimal performance.",
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
    featured: false,
    category: "Landing Page",
    date: "2023-10-01",
  },
  {
    id: 10,
    name: "Minimal Shopping",
    description:
      "• Developed a minimalistic e-commerce application using React and RESTful APIs.\n" +
      "• Integrated routing and dynamic data fetching for a seamless shopping experience.\n" +
      "• Utilized React.js and CSS for a clean and modern user interface.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: true,
    category: "E-Commerce",
    date: "2023-11-15",
  },
  {
    id: 11,
    name: "Restaurant Menu",
    description:
      "• Developed a responsive restaurant menu website with React and Bootstrap.\n" +
      "• Integrated dynamic components and animations for enhanced user engagement.\n" +
      "• Utilized React hooks for efficient state management and data handling.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Food",
    date: "2023-12-05",
  },
  {
    id: 12,
    name: "Question and Answer",
    description:
      "• Developed a responsive Q&A platform with React and Bootstrap.\n" +
      "• Integrated notifications and dynamic components for enhanced user engagement.\n" +
      "• Utilized React hooks for efficient state management and data handling.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Education",
    date: "2024-01-10",
  },
  {
    id: 13,
    name: "Dates Reminder",
    description:
      "• Developed a responsive dates reminder application with React and Bootstrap.\n" +
      "• Integrated dynamic components and animations for enhanced user engagement.\n" +
      "• Utilized React hooks for efficient state management and data handling.\n" +
      "• Ensured full responsiveness and cross-device compatibility for optimal performance.",
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
    featured: false,
    category: "Productivity",
    date: "2024-02-20",
  },
];

export { services, technologies, projects, experience };

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
  shopperProject,
  portfolioProject,
  adminDashboard,
  phanox,
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

// New projects Id

//  18. 6c5a0b7b3c9a1e8d4f2e
//  19. 1b9e4f6a0d5f8d3a7e2c
// 20. 4f2e6c5a0b7b3c9a1e8d
const projects = [
  {
    id: "5f8d3a7e2c1b9e4f6a0d",
    name: "Phanox E-commerce App",
    description:
      "• Developed a modern e-commerce application using Next.js 15, Sanity for content management, and Stripe for secure payment processing.\n" +
      "• Integrated Sanity CMS to manage product data, categories, and dynamic content for a seamless admin experience.\n" +
      "• Implemented Stripe for payment processing, ensuring secure and reliable transactions.\n" +
      "• Utilized Next.js for server-side rendering (SSR) and static site generation (SSG) for optimized performance.\n" +
      "• Added React Hot Toast for user-friendly notifications and Canvas Confetti for celebratory effects on successful purchases.\n" +
      "• Designed a responsive and intuitive UI with Tailwind CSS and React Icons for a consistent design system.\n",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: phanox,
    source_code_link:
      "https://github.com/MohamedAshraf2222/phanox-ecommerce-app",
    live_demo_link: "https://phanox-ecommerce-app.vercel.app/",
    featured: true,
    category: "Web Development",
    date: "2025-03-21",
  },
  {
    id: "7b3c9a1e8d4f2e6c5a0b",
    name: "React Admin Dashboard",
    description:
      "• Developed a comprehensive and feature-rich admin dashboard using React, Material-UI, and Syncfusion components for a modern and professional UI.\n" +
      "• Integrated Syncfusion components such as grids, charts, calendars, and rich text editors for advanced data visualization and management.\n" +
      "• Utilized React Router DOM for seamless navigation and React Icons for a consistent icon set.\n" +
      "• Implemented Tailwind CSS for custom styling and responsive design.\n" +
      "• Deployed the application using React Scripts for optimized production performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "purple-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: adminDashboard,
    source_code_link:
      "https://github.com/MohamedAshraf2222/React-Admin-Dashboard",
    live_demo_link: "https://react-admin-dashboard-tau-five.vercel.app/",
    featured: true,
    category: "Web Development",
    date: "2025-05-20",
  },
  {
    id: "9e4f6a0d5f8d3a7e2c1b",
    name: "Vite React Project",
    description:
      "• Developed a modern web application using Vite, React, and Tailwind CSS for a fast and responsive user experience.\n" +
      "• Implemented React Router DOM for seamless navigation and React Toastify for user notifications.\n" +
      "• Utilized TypeScript for type safety and improved code quality.\n" +
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
    id: "2c1b9e4f6a0d5f8d3a7e",
    name: "Responsive Portfolio Website",
    description:
      "• Developed a highly interactive and responsive portfolio website using React, Tailwind CSS, and Framer Motion for smooth animations.\n" +
      "• Integrated 3D elements using React Three Fiber and Drei for an immersive user experience.\n" +
      "• Implemented React Router DOM for seamless navigation and React Tilt for interactive hover effects.\n" +
      "• Utilized Swiper for responsive carousels and React Vertical Timeline Component for showcasing achievements.\n" +
      "• Deployed the application using React Scripts for optimized production performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
    ],
    image: portfolioProject,
    source_code_link:
      "https://github.com/your-username/responsive-portfolio-website",
    live_demo_link: "https://your-portfolio-website-demo-link.com",
    featured: true,
    category: "Web Development",
    date: "2025-04-15",
  },
  {
    id: "8d4f2e6c5a0b7b3c9a1e",
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
    id: "6a0d5f8d3a7e2c1b9e4f",
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
    id: "3a7e2c1b9e4f6a0d5f8d",
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
    id: "1e8d4f2e6c5a0b7b3c9a",
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
    id: "4f6a0d5f8d3a7e2c1b9e",
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
    id: "0b7b3c9a1e8d4f2e6c5a",
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
    id: "a0d5f8d3a7e2c1b9e4f6",
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
    id: "c5a0b7b3c9a1e8d4f2e6",
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
    id: "e4f6a0d5f8d3a7e2c1b9",
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
    id: "2e6c5a0b7b3c9a1e8d4f",
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
    id: "9a1e8d4f2e6c5a0b7b3c",
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
    id: "d3a7e2c1b9e4f6a0d5f8",
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
    id: "b9e4f6a0d5f8d3a7e2c1",
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

export { technologies, projects, experience };

// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import shadcnLogo from "./assets/tech_logo/shadcn.jpg";
import zustandLogo from "./assets/tech_logo/Zustand.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import websocketLogo from "./assets/tech_logo/websocket.jpg";
import pineconeLogo from "./assets/tech_logo/pinecone.jpg";
import azureLogo from "./assets/tech_logo/Azure-Logo.png";
import langchainLogo from "./assets/tech_logo/Langchain.png";
import prismaLogo from "./assets/tech_logo/prisma.jpg";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import renderLogo from "./assets/tech_logo/Render_Logo.jpg";
import railwayLogo from "./assets/tech_logo/railway.png";
import stataLogo from "./assets/tech_logo/stata.jpg";
import cursorLogo from "./assets/tech_logo/Cursor.png";

// Experience Section Logo's
import gywsLogo from "./assets/company_logo/gyws.png";
import tsgLogo from "./assets/company_logo/tsg.png";


// Education Section Logo's
import lapsLogo from "./assets/education_logo/laps.jpg";
import kgpLogo from "./assets/education_logo/IIT_Kharagpur_Logo.svg";


// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Shadcn", logo: shadcnLogo },
      { name: "Zustand", logo: zustandLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "WebSocket", logo: websocketLogo },
      { name: "PineCone", logo: pineconeLogo },
      { name: "Azure", logo: azureLogo },
      { name: "Langchain", logo: langchainLogo },
      { name: "Prisma", logo: prismaLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
      { name: "Railway", logo: railwayLogo },
      { name: "Stata", logo: stataLogo },
      { name: "Cursor", logo: cursorLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: tsgLogo,
    role: "Secretary Web",
    company: "Technology Students' Gymkhana, IIT Kharagpur",
    date: "Oct 2024 - Apr 2025",
    desc: "Maintained functionality, security, and updates for the Gymkhana Website, addressing bugs and optimizing overall performance. Developed a prototype frontend for a Gym Slot Booking System using React.js, showcasing a responsive and user-friendly interface. Collaborated with the Student's Alumni Cell to build a platform connecting students with alumni for mentorship and career growth.",
    skills: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "Next JS",
      "Frontend Development",
      "UI/UX Design",
      "Website Maintenance",
      "Collaboration"
    ],
  },
  {
    id: 1,
    img: gywsLogo,
    role: "Senior Executive Member",
    company: "Gopali Youth Welfare Society",
    date: "May 2024 - May 2025",
    desc: "Actively contributed to a student-run NGO, supporting grassroots education and welfare initiatives for underprivileged children. Led and organized the Freshers' Introductory Seminar, assisted in recruitment, and supported key events like Aashayein. Contributed to Admin Panel development and enhanced the GYWS Website, improving backend workflows and overall experience.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React JS",
      "Event Management",
      "Team Collaboration",
      "Admin Panel Development",
      "Backend"
    ],
  },
];


export const education = [
  {
    id: 0,
    img:kgpLogo,
    school: "IIT Kharagpur",
    date: "2023 - 2027",
    grade: "8.32 / 10 CGPA",
    degree: "B.S. in Economics",
  },
  {
    id: 1,
    img:lapsLogo,
    school: "Little Angle Public School, Pichhore",
    date: "2012 - 2022",
    grade: "94.6%",
    degree: "CBSE",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];

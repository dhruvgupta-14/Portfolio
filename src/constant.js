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
// import renderLogo from "./assets/tech_logo/Render_Logo.jpg";
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
import secondBrainFe from "./assets/work_logo/second-brain-fe.png";
import secondBrainBe from "./assets/work_logo/second-brain-be.png";
import nestedComment from "./assets/work_logo/nested-comment.png";
import linka from "./assets/work_logo/linka.png";


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
    title: "Second Brain Frontend",
    description:
      "Second Brain is a modern and interactive React.js application that showcases advanced frontend development skills. Built with React, Tailwind CSS, and TypeScript, the app features a highly responsive and visually appealing interface, dynamic content rendering for links, notes, documents, and images, and smooth, intuitive interactions. I implemented AI-powered semantic search and a chatbot, ensuring seamless user experiences with real-time queries and fast results. The project highlights my ability to create reusable components, manage complex state efficiently, and design user-centric layouts with clean aesthetics and polished animations.",
    image: secondBrainFe,
    tags: ["React", "Tailwind CSS", "TypeScript", "Authentication"],
    github:
      "https://github.com/dhruvgupta-14/second-brain-fe",
    webapp: "",
  },
  {
    id: 1,
    title: "Second Brain Backend",
    description:
      "Second Brain Backend powers a productivity-focused web application that replaces inefficient personal note-taking via messaging apps with a structured and searchable content system. While the backend is Node.js and Express-based, the project demonstrates strong API design, data modeling, and integration skills that directly impact the frontend experience. I implemented organized endpoints for storing and retrieving diverse content types—including notes, links, images, and tweets—enabling a responsive and dynamic frontend. The API supports semantic search using Pinecone, allowing meaningful, fast searches, and real-time chat with WebSockets, ensuring smooth live interactions. Authentication and user management are robust, with JWT sessions, encrypted passwords, and profile support, enabling a seamless and secure user interface. Overall, this project highlights my ability to create backend services that empower rich, interactive frontend experiences.",
    image:secondBrainBe ,
    tags: [
      "Node.js",
      "TypeScript",
      "WebSockets",
      "Pinecone",
      "Azure Blob",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/dhruvgupta-14/second-brain-be",
    webapp: "",
  },
  {
    id: 2,
    title: "Nested Comment FullStack",
    description:
      "Nested Comment Web App (Frontend) is part of a full-stack project designed to provide a modern, secure, and interactive platform for managing user discussions. Built with React and Tailwind CSS, the frontend delivers a smooth user experience with protected routes, global authentication management via AuthContext, and seamless integration with backend APIs. Users can sign up, log in, and interact with comments, while admins have a dedicated dashboard to manage discussions, delete comments, and maintain platform quality. The app showcases a nested comment structure, enabling threaded conversations, and highlights my ability to create responsive, user-friendly interfaces that work hand-in-hand with secure authentication and backend logic, making it a complete full-stack solution.",
    image: nestedComment,
    tags: ["React JS", "Tailwind", "Axios", "NodeJs", "JavaScript","MongoDb","jwt","bcryptjs"],
    github: "https://github.com/dhruvgupta-14/NestedCommet-fe",
    webapp: "https://nested-commet-fe.vercel.app/login",
  },
  {
    id: 3,
    title: "LinkA Modern Landing Page",
    description:
      "Contact Management App is a modern and responsive React application that demonstrates advanced frontend development skills. Built with React and Tailwind CSS, the app allows users to seamlessly view, search, and add contacts, combining API-fetched data from randomuser.me with locally stored entries via localStorage. The interface features smooth animations, hover effects, and a consistent modern theme, including dark mode support, ensuring a polished user experience. Key frontend highlights include reusable components, dynamic state management using React Context, API integration with Axios, and responsive layouts optimized for all screen sizes. This project showcases my ability to design interactive, user-friendly, and visually appealing frontend applications that handle both dynamic data and user input efficiently.",
    image: linka,
    tags: ["React JS", "TailwindCSS", "Random User API", "Axios","Custom Animination"],
    github: "https://github.com/dhruvgupta-14/tria-react-assignment",
    webapp: "https://tria-react-assignment.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "RAG Frontend",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: "",
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/dhruvgupta-14/RAG-Frontend",
  //   webapp: "",
  // },
  // {
  //   id: 5,
  //   title: "RAG Backend",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: "",
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/dhruvgupta-14/RAG-Backend",
  //   webapp: "",
  // },
  
];

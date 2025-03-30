
import android from "../assets/android.png";
import java from "../assets/java.png";
import bootstrap from "../assets/bootstrap.png";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ExpressJs,
  SQL,
  Firebase,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  sage,
  cbse,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Web and Android Developer" ,
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "ExpressJs",
    icon: ExpressJs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const educations = [
  {
    title: "Bachelor of Technology ( CSE )",
    company_name: "SAGE University Bhopal",
    icon: sage,
    iconBg: "#383E56",
    date: "August 2022 - Current",
    points: ["Semester 1st - SGPA - 8.5", "Semester 2nd - SGPA - 8.48","Semester 3rd - SGPA - 9.33", "Semester 4th - SGPA - 9.21"],
  },
  {
    title: "Bal Bharti School Prayagraj",
    company_name: "CBSE",
    icon: cbse,
    iconBg: "#E6DEDD",
    date: "June 2020 - March 2022",
    points: ["Class 12th - 83.80%", "Class 10th - 84%"],
  },
  {
    title: "Bal Bharti School Prayagraj",
    company_name: "CBSE",
    icon: cbse,
    iconBg: "#E6DEDD",
    date: "June 2014 - March 2022",
    points: ["Class V - XII"],
  },
];

const projects = [
  {
    name: "Krishika E-Commerce Application for Farmers",
    description:
      "Krishika is an e-commerce app that empowers farmers to buy/sell crops, check market prices, and scan for AI-powered crop insights. With a secure payment gateway and robust tech stack (Java, XML, Firebase), it streamlines agriculture for a smarter, more profitable future. ",
    tags: [
      {
        name: "XML",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Vikasyadav068",
  },
  {
    name: "User Authentication",
    description:
      "Implemented robust user authentication with Gmail, emphasizing security through salting, session cookies, and OAuth 2.0. Highlights include unique salting and seamless user experience.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "google-Oauth",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Vikasyadav068",
  },
  {
    name: "Tinder Clone",
    description:
      "Created a MERN Stack Tinder-Clone, honing skills in MongoDB, Express.js, React, and Node.js. Built a seamless user experience, gaining practical insights for dynamic applications. Ready for new challenges!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vikasyadav068",
  },
];

export {services, technologies, educations, projects };


import android from "../assets/android.png";
import java from "../assets/java.png";
import bootstrap from "../assets/bootstrap.png";
import solar from "../assets/solar.png";
import krishika from "../assets/krishika_.jpg";
import attendance from "../assets/attendance.png";
import college from "../assets/college.png"; // ✅ Add this new import



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
  cbse,
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
    company_name: "Bhopal",
    icon: college,
    iconBg: "#383E56",
    date: "August 2022 - Current",
    points: ["Semester 1st - SGPA - 8.5", "Semester 2nd - SGPA - 8.48","Semester 3rd - SGPA - 9.33", "Semester 4th - SGPA - 9.21","Semester 5th - SGPA - 9.1","Semester 6th - SGPA - "],
  },
  {
    title: "Bal Bharti School Prayagraj",
    company_name: "CBSE",
    icon: cbse,
    iconBg: "#E6DEDD",
    date: "June 2014- March 2022",
    points: ["Class 12th - 83.80%", "Class 10th - 84%","Class V - XII"],
  },
  
];

const projects = [
  {
    name: "Krishika E-Commerce Application for Farmers",
    description:
      "Krishika is an e-commerce app that empowers farmers to buy/sell crops, check market prices.With a secure payment gateway,it streamlines agriculture for a smarter,more profitable future. ",
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
    image: krishika,
    source_code_link: "https://github.com/Vikasyadav068",
  },
  {
    name: "Face Attendance System",
    description:
      " The system captures student images, uploads them to a cloud database, and marks attendance after verifying the identity using face recognition. Students can also view their last marked attendance with a photo and check their previous attendance history (date & time only).",
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
    image: attendance,
    source_code_link: "https://github.com/Vikasyadav068",
  },
  {
    name: "Solar System",
    description:
      "This project simulates the motion of planets revolving around the Sun, while the Moon orbits the Earth. Built using HTML, CSS, and JavaScript, it visually represents planetary motion with smooth animations. The system follows predefined orbital paths, creating a dynamic and engaging experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: solar,
    source_code_link: "https://github.com/Vikasyadav068",
  },
];

export {services, technologies, educations, projects };

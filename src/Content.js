// import images
import Hero_person from "./assets/images/Hero/manuu.png";

import solidity from "./assets/images/Skills/solidity.png";
import docker from "./assets/images/Skills/docker.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import next from "./assets/images/Skills/next.png";
import ethereum from "./assets/images/Skills/ethereum.png";
import fabric from "./assets/images/Skills/fabric.png";
// import express from "./assets/images/Skills/express.png";
import javascript from "./assets/images/Skills/javascript.png";
import html from "./assets/images/Skills/html5.png";
import express from "./assets/images/Skills/express.png";
import sql from "./assets/images/Skills/sql.png";
import tailwind from "./assets/images/Skills/tailwind.png";

import services_logo1 from "./assets/images/Services/logo6.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo5.png";
import services_logo4 from "./assets/images/Services/logo4.png";
import services_logo5 from "./assets/images/Services/logo9.png";
import services_logo6 from "./assets/images/Services/logo7.png";
import services_logo7 from "./assets/images/Services/logo8.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/kickoff.png";
import project4 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/kbacourse.png";
import project6 from "./assets/images/Projects/zillowDapp.png";
import project7 from "./assets/images/Projects/quiz.png";
import project8 from "./assets/images/Projects/project-8.png"
import person_project from "./assets/images/Projects/techie.png";

import hack1 from "./assets/images/Hackethon/poap.jpg"
import hack2 from "./assets/images/Hackethon/polkadot.gif"
import hack3 from "./assets/images/Hackethon/graph.gif"
import hack4 from "./assets/images/Hackethon/blockhack.webp";
import hack5 from "./assets/images/Hackethon/based.webp"

import aelf from "./assets/images/Hackethon/aelf-elf-seeklogo.svg";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "MANU",
    LastName: "NARAYANAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "I'm a Blockchain  student with a passion for Software Development. seeking to work in a challenging position in an organization that will allow me to apply my acquired knowledge of the field, provide opportunity for professional growth.",
      },
      {
        count: "",
        text: "Currently pursuing a Postgraduate Diploma in Blockchain Technology from Kerala Blockchain Academy. Gained six months of hands-on exposure in full-stack development through Web2 and blockchain technologies ",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Solidity",
        para: "Smart contract programming language for Ethereum and other blockchain platforms.",
        logo: solidity,
      },
      {
        name: "Node.js",
        para: "JavaScript runtime environment for building fast, scalable server-side applications.",
        logo: nodejs,
      },
      {
        name: "Ethereum",
        para: "Blockchain platform enabling decentralized applications and smart contracts.",
        logo: ethereum,
      },
      {
        name: "React.js",
        para: "JavaScript library for building dynamic, component-based user interfaces.",
        logo: reactjs,
      },
      {
        name: "MongoDB",
        para: "NoSQL database for managing large-scale, flexible data structures.",
        logo: mongodb,
      },
      {
        name: "Docker",
        para: "Platform for developing, shipping, and running applications in containers.",
        logo: docker,
      },
      {
        name: "Hyperledger Fabric",
        para: "Enterprise-grade blockchain framework for developing secure networks.",
        logo: fabric,
      },
      {
        name: "Next.js",
        para: "React framework with hybrid static and server-side rendering for optimized web apps.",
        logo: next,
      },
      {
        name: "Express",
        para: "Minimalist web framework for Node.js to build robust APIs and web applications.",
        logo: express,
      },
      {
        name: "HTML",
        para: "Standard markup language for creating web pages and web applications.",
        logo: html,
      },
      {
        name: "JavaScript",
        para: "Versatile programming language for building interactive and dynamic websites.",
        logo: javascript,
      },
      {
        name: "SQL",
        para: "Language used for managing and querying relational databases.",
        logo: sql,
      },
      {
        name: "Tailwind",
        para: "Utility-first CSS framework for rapidly building custom user interfaces.",
        logo: tailwind,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Full-stack web development using modern frameworks and tools to build responsive, scalable applications.",
        logo: services_logo1,
      },
      {
        title: "UI/UX Designing",
        para: "Designing intuitive user interfaces and experiences to enhance user engagement and satisfaction.",
        logo: services_logo2,
      },
      {
        title: "Frontend Development",
        para: "Building visually appealing, responsive frontends using HTML, CSS, JavaScript, and modern frameworks.",
        logo: services_logo3,
      },
      {
        title: "Backend Development",
        para: "Developing secure, efficient server-side logic and APIs with Node.js, Express, and databases.",
        logo: services_logo4,
      },
      {
        title: "Blockchain Integration",
        para: "Integrating blockchain technology into applications, enabling secure and decentralized solutions.",
        logo: services_logo5,
      },
      {
        title: "Hyperledger Fabric Networks",
        para: "Creating and managing Hyperledger Fabric networks for enterprise blockchain solutions.",
        logo: services_logo6,
      },
      {
        title: "Smart Contract Development",
        para: "Developing and deploying secure smart contracts for blockchain applications.",
        logo: services_logo7,
      },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "KickOff Social Media App",
        image: project2,
        github_url: "https://github.com/Manufg07/KickOff_Project_Final.git",
        vercel_url: "https://kick-off-project-final.vercel.app/",
      },
      {
        title: "CertiLedger",
        image: project3,
        github_url: "https://github.com/Manufg07/CertiLedger_.git",
        vercel_url: "",
      },
      {
        title: "Online Grievance Redressal System",
        image: project4,
        github_url:
          "https://github.com/Manufg07/Online-Grievance-Redressal-System.git",
        vercel_url: "",
      },
      {
        title: "KBA Courses",
        image: project5,
        github_url: "https://github.com/Manufg07/KBA_Courses_Docker.git",
        vercel_url: "",
      },
      {
        title: "Zillow Dapp",
        image: project6,
        github_url: "https://github.com/Manufg07/Zillow_Dapp.git",
        vercel_url: "",
      },
      {
        title: "Tantalum Supplychain-Hyperledger Fabric Project",
        image: project8,
        github_url: "https://github.com/Manufg07/Tantalum_Supplychain.git",
        vercel_url: "",
      },
      {
        title: "Quiz_Next.js",
        image: project7,
        github_url: "https://github.com/Manufg07/Quiz_Next.Js.git",
        vercel_url: "",
      },
      {
        title: "MarketPlace",
        image: project1,
        github_url: "https://github.com/Manufg07/MarketPlace",
        vercel_url: "https://market-place-theta-two.vercel.app",
      },
    ],
  },

  hackathons: {
    title: "Hackathons",
    subtitle: "SHOWCASING MY PARTICIPATION",
    hackathon_content: [
      {
        name: "ETHIndia 2024",
        poap: hack1,
        project: "ZeroCHECK",
        description:
          "As a proud participant in ETHIndia 2024, one of the largest Ethereum hackathons, I had the opportunity to collaborate with some of the brightest minds in the blockchain ecosystem.",
        // description: "ZeroCHECK, a web app using ZKP technology for secure, privacy-preserving identity verification, deployable on Ethereum, Polygon, and BNB, ideal for privacy-focused use cases like finance, voting, and access control.",
        link: "https://github.com/Manufg07/ZeroCHECK.git",
      },
      {
        name: "BlockHack 2024",
        poap: hack4,
        project: "Obsidian Horizon",
        description:"I participated in BlockHack 2024, organized by Kerala Blockchain Academy, a platform for students and blockchain enthusiasts to explore and innovate within the Ethereum ecosystem, contributing to its growth and adoption.",
          // "Obsidian Horizon is a Web3 exploration game built on Ethereum, where players explore maps, solve tasks, and earn tokens and NFTs, featuring a token swap platform, staking, and an NFT marketplace.",
        // description: "ZeroCHECK, a web app using ZKP technology for secure, privacy-preserving identity verification, deployable on Ethereum, Polygon, and BNB, ideal for privacy-focused use cases like finance, voting, and access control.",
        link: "https://github.com/Manufg07/OBSIDIAN-HORIZON.git",
      },
      {
        name: "Based India",
        poap: hack5,
        project: "Zero-KP Verify",
        description:"I participated in Based India, a regional Buildathon empowering builders to solve community challenges and create innovative onchain solutions, as part of the global Based Around the World series.",
          // "Zero-KP Verify is a web-based application leveraging zero-knowledge proofs and Layer 2 blockchain to securely verify identities while preserving privacy and ensuring scalability.",
        // description: "ZeroCHECK, a web app using ZKP technology for secure, privacy-preserving identity verification, deployable on Ethereum, Polygon, and BNB, ideal for privacy-focused use cases like finance, voting, and access control.",
        link: "https://github.com/Manufg07/base_india-ZKP.git",
      },
      {
        name: "Polkadot",
        poap: hack2,
        description:
          "Received for participating in the Polkadot workshop at ETHIndia 2024, where I explored Substrate and Polkadot's interoperable blockchain ecosystem.",
        // link: "https://project-link2.com",
      },
      {
        name: "The Graph",
        poap: hack3,
        project: "Project Name 2",
        description:
          "Awarded for attending The Graph workshop at ETHIndia 2024, gaining insights into decentralized data indexing and querying using GraphQL.",
        // link: "https://project-link2.com",
      },
    ],
  },

  achievements: {
    title: "Achievements",
    subtitle: "CELEBRATING MILESTONES",
    achievement_content: [
      {
        name: "Aelfinity Developer Workshop",
        description:
          "Winner in Aelfinity Developer Workshop series conducted by aelf Blockchain in collaboration with Kerala Blockchain Academy..",
        badge: aelf,
      },
    ],
  },

  Education: {
    title: "Education",
    subtitle: "MY ACADEMIC BACKGROUND",
    education_content: [
      {
        education: "Post Graduate",
        img: avatar1, // Replace with an appropriate image
        course: "Master of Computer Application",
        college: "Pondicherry University",
        cgpa: "8.14 CGPA",
      },
      {
        education: "Under Graduate",
        img: avatar2,
        course: "B.Sc. Computer Science",
        college: "Government College Kasaragod, Kannur University",
        cgpa: "73.38% (First Class in March 2021)",
      },
      {
        education: "Diploma",
        img: avatar4,
        course: "PG Diploma in Blockchain",
        college: "Kerala Blockchain Academy(2024)",
        cgpa: "",
      },
      {
        education: "Higher Secondary",
        img: avatar3,
        course: "Computer Science",
        college: "Government Higher Secondary School Udma (2016-2018)",
        cgpa: "81.83%",
      },
      {
        education: "SSLC",
        img: avatar3,
        course: "General Education",
        college: "Government High School Bare (March 2016)",
        cgpa: "98%",
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR Projects",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "With expertise in backend development, full-stack solutions, blockchain integration, and smart contract development, I am ready to bring your project ideas to life with cutting-edge technology and efficient solutions.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "manunarayananfg@gmail.com",
        icon: GrMail,
        link: "mailto:manunarayananfg@gmail.com",
      },
      {
        text: "+91 7558883695",
        icon: MdCall,
        link: "https://wa.me/7558883695",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/manucazrod",
      },
      {
        text: "GitHub",
        icon: FaGithub,
        link: "https://github.com/Manufg07",
      },
      {
        text: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/manu-narayanan07",
      },
      {
        text: "Discord",
        icon: FaDiscord,
        link: "https://discord.com/invite/manu0077907",
      },
      {
        text: "Twitter",
        icon: FaTwitter,
        link: "https://twitter.com/ManuN165",
      },
    ],
  },

  Footer: {
    text: "",
  },
};

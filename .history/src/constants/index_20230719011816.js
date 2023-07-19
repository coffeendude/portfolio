import { PlaneGeometry } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    // starbucks,
    // tesla,
    shopify,
    cofense,
    deloitte,
    codeup,
    stomp,
    carrent,
    jobit,
    tripguide,
    threejs,
    doom,
    a_logo
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
      title: "Platform Engineer",
      icon: creator,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: `Platform Engineer |       Site Reliability Engineer`,
      company_name: "Cofense",
      icon: cofense,
      iconBg: "#383E56",
      date: "June 2021 - July 2023",
      points: [
        "Data-focused Platform Engineer overseeing data store upgrades across multiple environments, including script rehearsal/testing and (secops) compliance, for MySQL and PostgreSQL migration to AWS Aurora.", "Successfully developed and implemented an LSTM model in just a week and a half to test the feasibility of auto-generating corporate-style emails for spam filtering. Contributed to both infrastructure and code development for this proof-of-concept project.", "Assisted in selecting and designing GitLab machine runners to optimize CI/CD pipeline runners, reducing cloud machine costs and enhancing CI/CD performance through improved availability.", "Implemented an Elasticsearch custom service upgrade to resolve security vulnerabilities found in the bundled ES JDK.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "R9B/Delloite",
      icon: deloitte,
      iconBg: "#E6DEDD",
      date: "December 2020 - June 2021",
      points: [
        "Integral developer for a backend feature on a data integration HUNT platform, connecting Redis queues via REST API endpoints. Enabled indexed requests to databases and provided support for new and upgraded DB inputs.","Collaborated with senior developer to debug c++ garbage collection and optimize performance for multi-platform HUNT modules recording user activity over networks.",
      ],
    },
    {
      title: "Student",
      company_name: "Codeup",
      icon: codeup,
      iconBg: "#383E56",
      date: "March 2020 - September 2020",
      points: [
        "Codeup is a fully-immersive, project-based, and intensive 20 week full stack Java career accelerator that provides students with 670+ hours of expert instruction in software development.",
      ],
    },
    {
      title: "Performer",
      company_name: "STOMP",
      icon: stomp,
      iconBg: "#E6DEDD",
      date: "August 2016 - Jan 2020",
      points: [
        "As a performer with the New York, North American Tour, and World Tour companies it was my responsibility to quickly learn the performance material with the flexibility for on the fly changes to the show. The ability to react appropriately and improvise on the spot in live performance situations is a constant as casts rotate every show providing for a unique experience of cooperative teamwork.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Doom Demo Game Engine",
      description:
        "A complete Doom game engine built in python using pygame. I've made some modifications but the original architecture and design decends from youtube channel Coder Space.  ",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: doom,
      source_code_link: "https://gitlab.com/needcoffeedev/90s-game-nostalgia",
      website_link: "https://ddge.cloud",
      artist_link: "https://www.youtube.com/channel/UCwe6kcllhainHICL1vnq41g",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
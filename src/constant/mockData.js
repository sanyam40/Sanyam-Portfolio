import {
  c,java,docker,express,html,spring,react,nodejs,mongodb,mysql,javascript,jenkins,
  ncu,sdvm,python,
  cloud,plenty,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Jun 2023",
      endDate: "Jul 2023",
      position: "Full Stack Intern",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: cloud,
        name: "Cloudwindmill Solutions LLP",
        info: "",
      },
      description:
        "Developed a CV Screening App using Spring Boot for the backend and React.js for the frontend. The application was successfully deployed on the Microsoft Azure Cloud Server.",
      links: [],
    },
    {
      id: "prof_exp_2",
      startDate: "May 2023",
      endDate: "Jun 2023",
      position: "Freelance Web Developer",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: plenty,
        name: "PlentyFullMedicare Pvt Ltd",
        info: "",
      },
      description:
        "Independently developed a website for showcasing Poultry Products for the company - plentyfullmedicare.com. Utilized a tech stack that included HTML, CSS, JS, and Bootstrap to create a user-friendly and visually appealing interface.",
      links: [],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: ncu,
      course: "B.Tech CSE in Full Stack Development",
      institution: "The NorthCap University, Gurugram, India",
      degree: "",
      startDate: "2021",
      endDate: "2025 (Expected)",
    },
    {
      id: "edu_2",
      icon: sdvm,
      course: "CBSE (Class XII)",
      institution: "S.D. Vidya Mandir School, Panipat, India",
      degree: "",
      startDate: "",
      endDate: "2021",
    },
    {
      id: "edu_3",
      icon: sdvm,
      course: "CBSE (Class X)",
      institution: "S.D. Vidya Mandir School, Panipat, India",
      degree: "",
      startDate: "",
      endDate: "2019",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: java,
      name: "Java",
      description: "Programming Language",
    },
    {
      id: "skill_2",
      icon: c,
      name: "C++",
      description: "Programming Language",
    },
    {
      id: "skill_3",
      icon: spring,
      name: "Spring Boot",
      description: "Backend Development",
    },
    {
      id: "skill_4",
      icon: nodejs,
      name: "Node.js",
      description: "Backend Development",
    },
    {
      id: "skill_5",
      icon: express,
      name: "Express.js",
      description: "Backend Development",
    },
    {
      id: "skill_6",
      icon: javascript,
      name: "JavaScript",
      description: "Frontend Development",
    },
    {
      id: "skill_7",
      icon: react,
      name: "React.js",
      description: "Frontend Development",
    },
    {
      id: "skill_8",
      icon: html,
      name: "HTML5",
      description: "Frontend Development",
    },
    {
      id: "skill_9",
      icon: jenkins,
      name: "Jenkins",
      description: "DevOps",
    },
    {
      id: "skill_10",
      icon: docker,
      name: "Docker",
      description: "DevOps",
    },
    {
      id: "skill_11",
      icon: mongodb,
      name: "MongoDB",
      description: "Database",
    },
    {
      id: "skill_12",
      icon: mysql,
      name: "MySQL",
      description: "Database",
    },
  ],
  projects: [
    {
      id: "project_1",
      name: "Billing Application",
      startDate: "Dec 2023",
      tech: "React.js, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap, Razorpay, Google OAuth, Nodemailer",
      logos:[react,nodejs,mongodb,html],
      description:
        "Developed a robust Billing Application using the MERN Stack. Feature-rich billing system with role-based authentication, Google sign-in, Razorpay integration, and automated email notifications, enhancing user experience and security. Implemented a comprehensive admin module allowing bill generation, updates, and deletions.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Billing-Application_v2" },
        { name: "Live", url: "https://billing-application-git-main-sanyam40.vercel.app/" },
      ],
    },
    {
      id: "project_2",
      name: "Hotel Rating Service - MicroServices (Backend)",
      startDate: "Jun 2023",
      tech: "Spring Boot, Spring Cloud, Spring Security, Hibernate, Resilience4j, MySQL, Okta, Postman",
      logos:[spring,mysql],
      description:
        "Developed a Spring Boot backend application with three microservices: UserService, HotelService, & RatingService. Implemented essential components, including API Gateway, Discovery Client, Spring Eureka Registry, Resilience4j Circuit Breaker, Retry Mechanism, Hibernate, and Spring Security with Okta. Ensured reliability and functionality through rigorous testing with Postman, resulting in a robust and efficient system.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/HotelRatingService-MicroServices" },
      ],
    },
    {
      id: "project_3",
      name: "Project Tracking Application",
      startDate: "May 2023",
      tech: "Spring MVC, Spring Security, Maven, JDBC Template, MySQL, HTML, CSS, Bootstrap",
      logos:[spring,mysql,html],
      description:
        "Built a robust JIRA-like project tracking app, streamlining admin and user project management using Spring MVC. Admin Module with CRUD operations for project management, role assignment, and progress tracking, alongside a User Module enabling intuitive registration, project viewing, and seamless comment integration. Employed Spring Framework's MVC architecture, Maven for project management, and JDBC Template for efficient MySQL database interaction. Designed a responsive front-end with HTML, and CSS, enhancing overall usability.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Project-Tracking-Application" },
      ],
    },
    {
      id: "project_4",
      name: "Attendance Marking System",
      startDate: "March 2023",
      tech: "Python Flask, HTML, CSS",
      logos:[html,python],
      description:
        "Python Flask-based attendance marking system. The system reads a CSV file to determine and record attendance (Present/Absent).Technologies used:Backend: Python Flask,Frontend: HTML & CSS.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Attendance-marking-system" },
      ],
    },
  ],
};

export default DATA;

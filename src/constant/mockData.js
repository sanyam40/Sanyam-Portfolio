import {
  c,java,docker,express,html,spring,react,nodejs,mongodb,mysql,javascript,jenkins,
  ncu,sdvm,python,REACTNATIVE,github_actions,terraform,aws,
  cloud,plenty,Kubernetes
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
      icon: REACTNATIVE,
      name: "React Native",
      description: "App Development",
    },
    {
      id: "skill_9",
      icon: jenkins,
      name: "Jenkins",
      description: "DevOps",
    },
    {
      id: "skill_10",
      icon: github_actions,
      name: "Github Actions",
      description: "DevOps",
    },
    {
      id: "skill_10",
      icon: docker,
      name: "Docker",
      description: "DevOps",
    },
    

    {
      id: "skill_10",
      icon: Kubernetes,
      name: "Kubernetes",
      description: "DevOps",
    },
    {
      id: "skill_9",
      icon: terraform,
      name: "Terraform",
      description: "DevOps",
    },
    {
      id: "skill_9",
      icon: aws,
      name: "AWS",
      description: "Cloud",
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
      name: "Ultimate CI/CD Pipeline",
      startDate: "March 2024",
      tech: "Jenkins, Docker, Kubernetes, AWS",
      logos:[react],
      description:
        "Implemented CI/CD pipeline with Jenkins, Docker, SonarQube, and Kubernetes for React.js apps, automating build, test, and deployment phases for accelerated software releases. Utilized Kubernetes for containerized deployments, ensuring consistency and enabling seamless scaling for enhanced reliability.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Ultimate-CICD-Pipeline" },
      ],
    },
    {
      id: "project_1",
      name: "React Native Mini Apps",
      startDate: "Jan 2024",
      tech: "React Native",
      logos:[react],
      description:
        "Check out my Projects Repository, where each project covers key concepts in React Native app development. These projects were crafted to deepen my understanding of React Native and its ecosystem.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/React-Native-Projects" },
      ],
    },
    {
      id: "project_2",
      name: "Billing Application",
      startDate: "Dec 2023",
      tech: "React.js, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap, Razorpay, Google OAuth, Nodemailer",
      logos:[react,nodejs,mongodb,html],
      description:
        "Created a feature-rich billing application utilizing the MERN Stack, integrating role-based authentication, Google sign-in, Razorpay payment gateway, and automated email notifications for enhanced user experience and security. Developed an admin module facilitating bill generation, updates, and deletions.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Billing-Application_v2" },
      ],
    },
    {
      id: "project_3",
      name: "Hotel Rating Service - MicroServices (Backend)",
      startDate: "Jun 2023",
      tech: "Spring Boot, Spring Cloud, Spring Security, Hibernate, Resilience4j, MySQL, Okta, Postman",
      logos:[spring,mysql],
      description:
      "Built a Spring Boot backend with three microservices: UserService, HotelService, & RatingService. Utilized API Gateway, Spring Eureka Registry, Resilience4j Circuit Breaker, Hibernate, and Spring Security with Okta. Conducted thorough testing with Postman for reliability, resulting in a robust system.",
        links: [
        { name: "GitHub", url: "https://github.com/sanyam40/HotelRatingService-MicroServices" },
      ],
    },
    {
      id: "project_4",
      name: "Project Tracking Application",
      startDate: "May 2023",
      tech: "Spring MVC, Spring Security, Maven, JDBC Template, MySQL, HTML, CSS, Bootstrap",
      logos:[spring,mysql,html],
      description:
      "Created a JIRA-like project tracking app using Spring MVC, featuring an Admin Module for project management and a User Module for intuitive registration and project viewing. Utilized Spring Framework's MVC architecture, Maven, and JDBC Template for efficient MySQL database interaction. Designed a responsive front-end with HTML and CSS to enhance usability.  ",
          links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Project-Tracking-Application" },
      ],
    },
  ],
};

export default DATA;

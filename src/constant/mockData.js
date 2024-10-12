import {
  c, java, docker, html, spring, react, nodejs, mongodb, mysql, jenkins,
  ncu, sdvm, github_actions, terraform, typescript,
  cloud, Kubernetes, nextjs,azure
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_",
      startDate: "Jun 2024",
      endDate: "Present",
      position: "Full Stack Intern",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: cloud,
        name: "Xansr Media Pvt. Ltd.",
        info: "",
      },
      description:
        "Working on GenAI applications to transform media content through hyper-personalization and gamification. Specializing in front-end with Next.js, scalable microservices using Node.js, and Azure infrastructure with Terraform, ARM templates, and CI/CD. Utilizing Docker, Snyk, and SonarQube for DevOps and security, and following OOPs and TDD in Agile environments.",
      links: [],
    },
    {
      id: "prof_exp_2",
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
        "Worked as a Full Stack Developer, leveraging Spring Boot and React.js to develop a CV Screening App that reduced manual screening time by 20%. Successfully deployed scalable web solutions on Microsoft Azure Virtual Machines, automating resource scaling based on usage.",
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
      id: "skill_2",
      icon: c,
      name: "C++",
      description: "Programming Language",
    },
    {
      id: "skill_1",
      icon: java,
      name: "Java",
      description: "Programming Language",
    },
    {
      id: "skill_ts",
      icon: typescript,
      name: "Typescript",
      description: "Programming Language",
    },
    {
      id: "skill_4",
      icon: nodejs,
      name: "Node.js",
      description: "Backend Development",
    },
    {
      id: "skill_7",
      icon: react,
      name: "React.js",
      description: "Frontend Development",
    },
    {
      id: "skill_3",
      icon: nextjs,
      name: "NextJS",
      description: "Full Stack Development",
    },
    {
      id: "skill_3",
      icon: spring,
      name: "Spring Boot",
      description: "Backend Development",
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
      id: "skill_9",
      icon: terraform,
      name: "Terraform",
      description: "DevOps",
    },
    {
      id: "skill_9",
      icon: azure,
      name: "Microsoft Azure",
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
      logos: [react],
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
      logos: [react],
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
      logos: [react, nodejs, mongodb, html],
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
      logos: [spring, mysql],
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
      logos: [spring, mysql, html],
      description:
        "Created a JIRA-like project tracking app using Spring MVC, featuring an Admin Module for project management and a User Module for intuitive registration and project viewing. Utilized Spring Framework's MVC architecture, Maven, and JDBC Template for efficient MySQL database interaction. Designed a responsive front-end with HTML and CSS to enhance usability.  ",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Project-Tracking-Application" },
      ],
    },
  ],
};

export default DATA;

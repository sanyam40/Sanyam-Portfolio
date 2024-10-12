import {
  c, java, docker, spring, react, nodejs, mongodb, mysql, jenkins,
  ncu, sdvm, github_actions, terraform, typescript,
  cloud, Kubernetes, nextjs, azure, xansr,git
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_",
      startDate: "Jun 2024",
      endDate: "Present",
      position: "Full Stack Developer",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: xansr,
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
      endDate: "2025",
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
      icon: git,
      name: "Git",
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
      tech: "Jenkins, Docker, SonarQube, Kubernetes, AWS",
      description:
        "• Engineered a complete CI/CD pipeline for a React.js application, reducing deployment time by 70%. Automated the build, test, and deployment phases.Utilized Kubernetes for containerized deployments, ensuring seamless scaling and 100% environment consistency.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Ultimate-CICD-Pipeline" },
      ],
    },
    {
      id: "project_2",
      name: "Billing Application",
      tech: "MERN Stack, Google Sign-In, Razorpay",
      description:
        "• Developed a full-stack billing system with role-based authentication and payment integration using Razorpay.Designed and built an admin module with features like bill generation, updates, and automated email notifications, improving operational efficiency.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Billing-Application_v2" },
      ],
    },
    {
      id: "project_3",
      name: "Hotel Rating Service - MicroServices",
      tech: "Spring Boot, Spring Eureka, Resilience4j, Hibernate",
      description:
        "• Built a hotel rating service with three microservices using Spring Boot: UserService, HotelService, and RatingService.Implemented API Gateway and Circuit Breaker for enhanced system reliability and failover mechanisms",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/HotelRatingService-MicroServices" },
      ],
    },
    {
      id: "project_4",
      name: "Project Tracking Application",
      tech: "Maven, Spring MVC, JDBC Template, AOP, HTML, CSS",
      description:
        "• Developed a Spring Framework-based project tracking application with admin features for project management, assignment, and progress tracking.Implemented user functionalities like registration, login, and project viewing, ensuring smooth project management and interaction.",
      links: [
        { name: "GitHub", url: "https://github.com/sanyam40/Project-Tracking-Application" },
      ],
    },
  ],
};

export default DATA;

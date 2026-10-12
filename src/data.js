// ============================================================
//  All portfolio content lives here. Edit this file to update
//  the site – no need to touch the components.
// ============================================================

export const profile = {
  name: "Tharushika Rukshani",
  title: "Software Engineering Graduate",
  photo: {
    src: "/images/me.jpg",
    alt: "Tharushika Rukshani - Software Engineer",
  },
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "React.js Developer",
    "Problem Solver",
  ],
  location: "Malabe, Sri Lanka",
  phone: "077-148-2910",
  email: "tharushirukshani251@gmail.com",
  linkedin: "http://www.linkedin.com/in/tharushika-rukshani-437b77343",
  github: "https://github.com/Tharushika251",
  cv: "/Tharushika_Rukshani_CV.pdf",
  tagline:
    "I build reliable, user-focused web applications — from responsive React interfaces to REST APIs and databases.",
  formEndpoint: "https://formspree.io/f/xeaezdkg",
};

export const about = {
  paragraphs: [
    "I'm an Information Technology graduate specializing in Software Engineering from the Sri Lanka Institute of Information Technology (SLIIT). I enjoy turning ideas into clean, dependable software and learning the modern tools that make that possible.",
    "I recently completed a six-month remote Software Engineer internship with QMatrixAI (UK-based), where I built features with React.js, Laravel and MySQL, tested and fixed defects, wrote technical documentation, and worked in an Agile team across different time zones.",
    "Alongside my studies I have built a range of projects — from a microservice migration framework to a social media app and a cloud-native food ordering platform. I'm now looking for an entry-level software development or IT role where I can contribute, keep growing and help build great products.",
  ],
  highlights: [
    { value: "6 mo", label: "Remote internship" },
    { value: "5+", label: "Projects built" },
    { value: "15+", label: "Technologies used" },
    { value: "2026", label: "SLIIT graduate" },
  ],
  photo: { 
    src: "/images/profile.jpg", 
    alt: "Portrait of Tharushika Rukshani" 
  },
};

export const education = [
  {
    title: "BSc (Hons) in Information Technology – Software Engineering",
    place: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "July 2022 – July 2026",
  },
  {
    title: "Advanced Certificate in English",
    place: "Rajarata University of Sri Lanka",
    period: "Apr 2022 – Apr 2023",
  },
  {
    title: "Short Course in Human Resource Management",
    place: "Open University of Sri Lanka",
    period: "May 2022 – Aug 2022",
  },
  {
    title: "G.C.E. Advanced Level (Science Stream)",
    place: "Royal College, Polonnaruwa",
    period: "Jan 2018 – Jan 2020",
  },
];

export const courses = [
  {
    title: "A Beginner's Guide to Enterprise Resource Planning (ERP) Systems",
    provider: "Alison",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern (Remote)",
    company: "QMatrixAI (UK-Based)",
    period: "Nov 2025 – Apr 2026",
    points: [
      "Developed and maintained web application features using React.js, Laravel (PHP) and MySQL.",
      "Tested application functionality, identified defects and implemented bug fixes to improve system reliability.",
      "Collaborated with a remote team through Agile practices, sprint planning and GitHub-based code reviews.",
      "Prepared and maintained technical documentation for APIs and reusable UI components.",
      "Worked with team members across different time zones using online collaboration tools.",
    ],
    tech: ["React.js", "Laravel", "PHP", "MySQL", "GitHub", "Agile"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "Figma", "Android Studio"],
  },
  {
    category: "Auth & Security",
    items: ["JSON Web Tokens (JWT)", "Clerk Authentication"],
  },
  {
    category: "Engineering Practice",
    items: [
      "REST API Integration",
      "Debugging",
      "Software Testing",
      "Responsive Web Design",
      "Technical Documentation",
    ],
  },
];

export const softSkills = [
  "Analytical Thinking & Problem-Solving",
  "Communication & Team Collaboration",
  "Time Management & Organization",
  "Adaptability & Continuous Learning",
  "Technical Documentation",
  "Agile Teamwork & Remote Collaboration",
];

export const projects = [
  {
    title: "FractalX",
    subtitle: "Automated Microservice Migration Framework",
    date: "Apr 2026",
    description:
      "A framework that automates the decomposition of Spring Boot monoliths into microservices using AST-driven analysis. Contributed to service communication, service discovery and API Gateway integration, alongside a React-based administration dashboard.",
    tech: ["Java", "Spring Boot", "React.js", "Docker"],
    github: "",
    live: "",
    featured: true,
  },
  {
    title: "Pingy",
    subtitle: "Social Media Application",
    date: "Aug 2025",
    description:
      "Developed the frontend of a social media application featuring authentication, user profiles, posts, stories, user discovery and real-time messaging.",
    tech: ["React.js", "Clerk"],
    github: "",
    live: "",
    featured: false,
  },
  {
    title: "AcademIQ",
    subtitle: "Quiz Management System",
    date: "June 2025",
    description:
      "A role-based quiz platform for teachers and students with quiz management, timed assessments, automated results, performance analysis and JWT authentication.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"],
    github: "",
    live: "",
    featured: false,
  },
  {
    title: "Foodie",
    subtitle: "Cloud-Native Food Ordering & Delivery System",
    date: "Apr 2025",
    description:
      "Built features for a microservices-based food ordering platform, including restaurant and menu management and order processing, secured with role-based access control.",
    tech: ["React.js", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    github: "",
    live: "",
    featured: false,
  },
  {
    title: "Rest Countries API",
    subtitle: "Country Explorer",
    date: "Apr 2025",
    description:
      "A responsive application that displays country information using REST API integration, with detailed country pages, search-friendly browsing and a favorites feature.",
    tech: ["React.js", "REST APIs", "CSS"],
    github: "",
    live: "",
    featured: false,
  },
];

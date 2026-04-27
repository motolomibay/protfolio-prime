export const personalInfo = {
  name: "Motolomi Feleke",
  title: "Full Stack Developer & AI Engineer",
  tagline:
    "I build scalable web applications and integrate AI to solve real-world problems.",
  email: "motolomifeleke@gmail.com",
  github: "https://github.com/motolomifeleke",
  linkedin: "https://linkedin.com/in/motolomifeleke",
  location: "Addis Ababa, Ethiopia",
  availableForRemote: true,
};

export const aboutText = `Full Stack Web Developer & AI Integrator with a BSc in Software Engineering from Addis Ababa University.
I specialize in building production-grade web applications using the MERN stack and integrating AI capabilities
including RAG pipelines, agentic workflows, and LLM orchestration. Currently working remotely with US-based
companies building ESG management systems and AI-powered medical platforms. I've solved 500+ algorithmic
problems through the A2SV Coding Academy, and I'm passionate about building technology that creates real impact.`;

export const stats = [
  { label: "DSA Problems Solved", value: "500+" },
  { label: "Years Experience", value: "3+" },
  { label: "Projects Delivered", value: "10+" },
];

export const skills = {
  frontend: {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Native",
      "Flutter",
    ],
  },
  backend: {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  ai: {
    title: "AI & ML",
    items: [
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "Vector Databases",
      "LLM Integration",
      "AI Orchestration",
      "Agentic AI Workflows",
    ],
  },
  database: {
    title: "Database & Cloud",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Git/GitHub",
      "Docker",
      "Vercel",
    ],
  },
};

export const experiences = [
  {
    role: "Full-Stack Web Developer & AI Automation Engineer",
    company: "Hydrus.AI / sdl.engineering",
    location: "US-Based (Remote)",
    period: "Oct 2025 – Present",
    highlights: [
      "Building an ESG carbon emission management system using the MERN stack",
      "Developing AI automation for Sifnos.ai medical platform",
      "Implementing RAG pipelines and vector databases for intelligent data retrieval",
      "Designing agentic AI workflows using LangChain and LangGraph",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Addis Software",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2022 – Aug 2024",
    highlights: [
      "Led performance optimization initiatives across multiple projects",
      "Collaborated with cross-functional teams to deliver scalable solutions",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    role: "Junior Web Developer (Intern)",
    company: "E-Tech",
    location: "Addis Ababa, Ethiopia",
    period: "Mar 2025 – Present",
    highlights: [
      "Developing ERP applications with React, Node.js, Django",
      "Working with MongoDB and PostgreSQL for data management",
      "Building responsive interfaces with modern JavaScript frameworks",
    ],
  },
];

export const projects = [
  {
    slug: "esg-carbon-tracker",
    title: "ESG Carbon Emission Management System",
    description:
      "Full-stack ESG management platform for tracking and managing carbon emissions. Built with MERN stack featuring real-time dashboards, reporting, and compliance tracking.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Real-time carbon emission dashboards",
      "Automated compliance reporting",
      "Role-based access control",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/motolomifeleke/esg-carbon-tracker",
    featured: true,
  },
  {
    slug: "sifnos-ai-medical",
    title: "Sifnos.ai Medical Platform",
    description:
      "AI-powered medical platform with RAG pipelines for intelligent medical data retrieval. Implements agentic AI workflows for automated medical document processing.",
    techStack: [
      "Python",
      "LangChain",
      "LangGraph",
      "React",
      "Vector DB",
      "RAG",
    ],
    highlights: [
      "RAG pipeline for medical document retrieval",
      "Agentic AI workflows for automated processing",
      "Vector database integration for semantic search",
    ],
    category: "AI / Full Stack",
    githubUrl: "https://github.com/motolomifeleke/sifnos-ai",
    featured: true,
  },
  {
    slug: "portfolio-website",
    title: "Developer Portfolio",
    description:
      "Modern developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Server-side rendering for SEO",
      "Smooth scroll animations",
      "Mobile-first responsive design",
    ],
    category: "Frontend",
    githubUrl: "https://github.com/motolomifeleke/portfolio",
    featured: true,
  },
];

export const certifications = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM (via Coursera)",
    year: "2025",
    description:
      "Professional Certificate covering React, Node.js, Cloud, DevOps, and full-stack development practices.",
    certificateUrl: "https://coursera.org/verify/professional-cert/F66Y4A5CXCRY",
  },
  {
    title: "AI Career Essentials (AiCE)",
    issuer: "ALX",
    year: "2025",
    description:
      "AI fundamentals, prompt engineering, and practical AI application development.",
    certificateUrl: "",
  },
  {
    title: "A2SV Coding Academy",
    issuer: "A2SV",
    year: "2023",
    description:
      "Intensive 1-year program. Solved 500+ problems on LeetCode & Codeforces. Advanced DSA and competitive programming.",
    certificateUrl: "",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

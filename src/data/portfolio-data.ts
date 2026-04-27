export const personalInfo = {
  name: "Motolomi Feleke",
  title: "Full Stack Engineer & AI Engineer",
  tagline:
    "I build scalable web applications and integrate AI to solve real-world problems.",
  email: "motolomifeleke@gmail.com",
  github: "https://github.com/motolomibay",
  linkedin: "https://linkedin.com/in/motolomifeleke",
  location: "Addis Ababa, Ethiopia",
  availableForRemote: true,
};

export const aboutText = `Full Stack Engineer & AI Engineer with 5+ years of production-grade experience in Python and TypeScript.
I hold a BSc in Software Engineering from Addis Ababa University (CGPA 3.70) and specialize in building
scalable web applications and integrating AI capabilities including RAG pipelines, agentic workflows,
and LLM orchestration. Currently working as an AI Training Engineer at Revelo, contributing to RLHF
and model-training workflows. I've solved 500+ algorithmic problems through the A2SV Coding Academy,
and I'm passionate about building technology that creates real impact.`;

export const stats = [
  { label: "DSA Problems Solved", value: "500+" },
  { label: "Years Experience", value: "5+" },
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
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  ai: {
    title: "AI & ML",
    items: [
      "RLHF",
      "LLM Evaluation",
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "Vector Databases",
      "LLM Integration",
      "Agentic AI Workflows",
    ],
  },
  database: {
    title: "Database & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Docker",
      "CI/CD",
      "Git/GitHub",
      "Vercel",
    ],
  },
};

export const experiences = [
  {
    role: "AI Training Engineer",
    company: "Revelo",
    location: "Remote",
    period: "Oct 2025 – Present",
    highlights: [
      "Designing and running model-training workflows for LLM improvement",
      "Conducting RLHF (Reinforcement Learning from Human Feedback) evaluations",
      "Reviewing and annotating AI-generated code for quality and correctness",
      "Contributing to data pipelines that improve model alignment and performance",
    ],
  },
  {
    role: "Senior Full-Stack Engineer & AI Automation Engineer",
    company: "Hydrus.AI / sdl.engineering",
    location: "US-Based (Remote)",
    period: "Mar 2023 – Sep 2025",
    highlights: [
      "Built an ESG carbon emission management system serving 50K+ daily API requests",
      "Developed AI automation for Sifnos.ai medical platform",
      "Implemented RAG pipelines and vector databases for intelligent data retrieval",
      "Designed agentic AI workflows using LangChain and LangGraph",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Addis Software",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2022 – Feb 2023",
    highlights: [
      "Led performance optimization initiatives across multiple client projects",
      "Collaborated with cross-functional teams to deliver scalable solutions",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "E-Tech Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "Mar 2021 – May 2022",
    highlights: [
      "Developed ERP applications with React, Node.js, and Django",
      "Worked with MongoDB and PostgreSQL for data management",
      "Built responsive interfaces with modern JavaScript frameworks",
    ],
  },
];

export const projects = [
  {
    slug: "esg-carbon-tracker",
    title: "ESG Carbon Emission Management System",
    description:
      "Full-stack ESG management platform for tracking and managing carbon emissions. Built with MERN stack featuring real-time dashboards, reporting, and compliance tracking. Handles 50K+ daily API requests.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Real-time carbon emission dashboards",
      "Automated compliance reporting",
      "50K+ daily API requests at scale",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/motolomibay/esg-carbon-tracker",
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
    githubUrl: "https://github.com/motolomibay/sifnos-ai",
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
    githubUrl: "https://github.com/motolomibay/protfolio-prime",
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
      "Intensive program focused on advanced DSA and competitive programming. Solved 500+ problems on LeetCode & Codeforces.",
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

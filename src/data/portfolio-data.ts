export const personalInfo = {
  name: "Motolomi Feleke",
  title: "Full-Stack Engineer → AI Engineer",
  tagline:
    "I build production AI products with engineered feedback loops — models that measurably improve through user interaction.",
  email: "motolomifeleke@gmail.com",
  github: "https://github.com/motolomibay",
  linkedin: "https://www.linkedin.com/in/motolomi-feleke-fanta-987ba6328/",
  location: "Addis Ababa, Ethiopia",
  availableForRemote: true,
};

export const aboutText = `Full-stack engineer with 5+ years shipping production Python and TypeScript systems, now building AI products full-time as Lead Engineer at Privy-MVP.

At Privy I own the full AI stack: LLM applications on Vercel AI SDK + Fireworks AI (MiniMax-M2.1, 228B MoE), end-to-end observability with Logfire and OpenTelemetry, a custom cross-session memory system with insight extraction and semantic retrieval, and evaluation pipelines (golden sets + LLM-as-judge) so every prompt change ships behind measurable quality gates.

Prior work includes an ESG platform handling 50K+ daily API requests at Hydrus.AI, RAG pipelines and vector search for a medical product, and AI model-training data at Revelo.

I treat AI as an engineering discipline — every feedback loop is measured, every system is production-grade. BSc Software Engineering (AAU, CGPA 3.70) · 500+ DSA problems · IBM Full-Stack · ALX AiCE.`;

export const stats = [
  { label: "Years of Production Experience", value: "5+" },
  { label: "Daily API Requests Served", value: "50K+" },
  { label: "DSA Problems Solved", value: "500+" },
  { label: "Projects Delivered", value: "10+" },
];

export const services = [
  {
    icon: "🤖",
    title: "AI Agent Systems",
    description:
      "Custom LLM-powered agents and multi-step agentic workflows using LangChain and LangGraph. From single-task bots to complex multi-agent pipelines.",
    tags: ["LangChain", "LangGraph", "OpenAI", "Python"],
  },
  {
    icon: "🔍",
    title: "RAG Pipelines",
    description:
      "Retrieval-Augmented Generation systems with vector database integration and semantic search. Make your data queryable by AI.",
    tags: ["RAG", "Vector DBs", "LangChain", "FastAPI"],
  },
  {
    icon: "⚡",
    title: "Production Full-Stack Apps",
    description:
      "End-to-end web applications built with Django, FastAPI, React, and Next.js. Async-first, tested, and ready for scale.",
    tags: ["Django", "FastAPI", "React", "Next.js", "TypeScript"],
  },
  {
    icon: "🔗",
    title: "API Integration & Automation",
    description:
      "Connect systems, automate workflows, and replace manual processes with reliable backend services and event-driven pipelines.",
    tags: ["REST", "GraphQL", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    icon: "🧪",
    title: "LLM Evaluation & RLHF",
    description:
      "Code and output evaluation for AI model training. Identifying hallucinations, edge cases, and security issues in AI-generated code.",
    tags: ["RLHF", "LLM Evaluation", "Python", "TypeScript"],
  },
  {
    icon: "🏗",
    title: "Codebase Modernization",
    description:
      "Legacy Python to async/await, JavaScript to strict TypeScript, untested monoliths to modular services with CI/CD.",
    tags: ["Python", "TypeScript", "Docker", "GitHub Actions"],
  },
];

export const skills = {
  frontend: {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
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
      "async/await",
      "WebSockets",
    ],
  },
  ai: {
    title: "AI & LLM Engineering",
    items: [
      "Vercel AI SDK",
      "Fireworks AI / MiniMax",
      "LLM Observability (Logfire, OpenTelemetry)",
      "LLM Evals (offline + LLM-as-judge)",
      "RAG Pipelines",
      "Vector Databases",
      "Agents & Tool Calling",
      "Memory Systems",
      "RLHF Data",
      "LangChain",
      "Prompt Engineering",
      "Streaming + Structured Outputs",
    ],
  },
  devops: {
    title: "Data & DevOps",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Git",
      "Vercel",
    ],
  },
};

export const experiences = [
  {
    role: "Lead Engineer",
    company: "Privy-MVP",
    location: "Remote",
    period: "Feb 2026 – Present",
    highlights: [
      "Build production LLM agents with tool calling using Vercel AI SDK + Fireworks AI (MiniMax-M2.1, 228B MoE) — three coaching modes (Vent, Decision Lab, Reframe) each driven by framework-specific system prompts",
      "Design and ship a cross-session memory system from scratch: automatic insight extraction per turn, memory compaction, 60%-threshold similarity dedup, and a natural-language searchMemories tool agents invoke at runtime",
      "Instrument the full LLM stack with Logfire / OpenTelemetry: per-request tracing, token counts, latency histograms, prompt-cache hit-rate, and cost attribution per feature",
      "Design offline evaluation pipelines (golden sets + LLM-as-judge regression suites) so every prompt change ships behind measurable quality gates",
      "Own the full product: Next.js 16 + PostgreSQL + Drizzle backend, WebAuthn passkey auth, AES-256-GCM vault, IP rate limiting, Stripe subscriptions, and the React/Tailwind UI",
    ],
  },
  {
    role: "AI Training Engineer (Python / TypeScript)",
    company: "Revelo",
    location: "Remote",
    period: "Oct 2025 – Feb 2026",
    highlights: [
      "Produced RLHF and fine-tuning datasets for Python/TypeScript models: annotated preference pairs, failure modes, edge cases, and security vulnerabilities with detailed rationales shaping model training",
      "Evaluated model-generated code for correctness, hallucinations, and behavioral drift across async/await, generators, decorators, and TypeScript strict-mode patterns",
      "Built deep understanding of how training data quality translates to model evaluation metrics — from annotation consistency to behavioral coverage",
    ],
  },
  {
    role: "Senior Full-Stack Engineer & AI Automation Engineer",
    company: "Hydrus.AI / sdl.engineering",
    location: "US-Based (Remote)",
    period: "Mar 2023 – Sep 2025",
    highlights: [
      "Built ESG carbon emissions platform processing 50K+ daily API requests across FastAPI, Django, and Node.js",
      "Designed agentic AI workflows for Sifnos.ai medical platform using LangChain and LangGraph",
      "Built RAG pipelines and vector database integrations for intelligent medical document retrieval and semantic search",
      "Led codebase migration from legacy Python to async/await patterns and introduced strict TypeScript across Node.js layer",
      "Collaborated with distributed engineers across 3 time zones, championing code reviews and async communication",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Addis Software",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2022 – Feb 2023",
    highlights: [
      "Improved API throughput by 30% through Redis caching, query tuning, and async refactoring across Django and Node.js services",
      "Reduced deployment errors by 60% by designing CI/CD pipelines with GitHub Actions enabling daily release cycles",
      "Mentored 4 junior developers on clean code, modern Python idioms, and testing best practices",
      "Authored post-mortems and documentation to prevent regressions across Python and JavaScript stacks",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "E-Tech Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "Mar 2021 – May 2022",
    highlights: [
      "Built web applications and ERP solutions using Django and React/TypeScript for clients in healthcare, retail, and logistics",
      "Reduced page load times by 35% by implementing real-time WebSocket features and optimizing rendering",
      "Built secure RESTful APIs with Django REST Framework and Node.js, integrated with PostgreSQL and MongoDB for multi-tenant systems",
    ],
  },
];

export const projects = [
  {
    slug: "privy-mvp",
    title: "Privy — Privacy-First AI Coaching Platform",
    description:
      "Production AI coaching platform with three specialized agents (Vent, Decision Lab, Reframe). Features streaming LLM responses, a cross-session memory system with automatic insight extraction and semantic retrieval, full LLM observability with Logfire/OpenTelemetry, and WebAuthn passkey auth with an AES-256-GCM encrypted vault.",
    techStack: [
      "Next.js 16",
      "Vercel AI SDK",
      "Fireworks AI",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Logfire",
      "OpenTelemetry",
      "Stripe",
      "WebAuthn",
    ],
    highlights: [
      "Three LLM coaching agents with tool calling and framework-specific system prompts",
      "Cross-session memory system: insight extraction, compaction, 60% similarity dedup, semantic search",
      "Full LLM observability: request tracing, token/latency metrics, prompt-cache hit-rate, cost attribution",
    ],
    category: "AI Engineering",
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "esg-carbon-tracker",
    title: "ESG Carbon Emission Management System",
    description:
      "Production full-stack ESG platform tracking and managing carbon emissions at scale. Real-time dashboards, automated compliance reporting, and a multi-tenant API layer handling 50K+ daily requests.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
    highlights: [
      "50K+ daily API requests in production",
      "Real-time carbon emission dashboards with automated compliance reporting",
      "Multi-tenant architecture with role-based access control",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/motolomibay/esg-carbon-tracker",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "sifnos-ai-medical",
    title: "Sifnos.ai — AI-Powered Medical Platform",
    description:
      "Agentic AI backend for an intelligent medical platform. RAG pipelines retrieve and reason over medical documents; LangGraph orchestrates multi-step agentic workflows for automated document processing and semantic search.",
    techStack: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Vector DB",
      "React",
    ],
    highlights: [
      "RAG pipeline for medical document retrieval and reasoning",
      "Multi-step agentic workflows with LangGraph for automated processing",
      "Vector database + semantic search for intelligent data access",
    ],
    category: "AI Automation",
    githubUrl: "https://github.com/motolomibay/sifnos-ai",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "portfolio-website",
    title: "Developer Portfolio",
    description:
      "This portfolio — built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion. Server-rendered, mobile-first, and fully data-driven.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Server-side rendering for SEO",
      "Smooth scroll animations with Framer Motion",
      "Mobile-first responsive design",
    ],
    category: "Frontend",
    githubUrl: "https://github.com/motolomibay/protfolio-prime",
    liveUrl: "https://protfolio-prime.vercel.app",
    featured: false,
  },
];

export const certifications = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM Skills Network",
    year: "2025",
    description:
      "Professional Certificate covering React, Node.js, Cloud, DevOps, and full-stack development practices.",
    certificateUrl: "https://coursera.org/verify/professional-cert/F66Y4A5CXCRY",
  },
  {
    title: "AI Career Essentials (AiCE)",
    issuer: "ALX — African Leadership X",
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
      "Intensive algorithms and data structures program. Solved 500+ problems on LeetCode and Codeforces.",
    certificateUrl: "",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

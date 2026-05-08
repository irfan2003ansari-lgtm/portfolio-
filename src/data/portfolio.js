import { Code2, Database, Wrench } from "lucide-react";

export const profile = {
  name: "Irfan Ansari",
  shortName: "Irfan",
  role: "Java Full Stack Developer",
  location: "India",
  email: "irfan2003isro@gmail.com",
  image: "/irfan-profile.jpg",
  resume: "/IrfanResume.pdf",
  github: "https://github.com/irfan2003ansari-lgtm",
  instagram: "https://www.instagram.com/irfan_141_/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  { value: "B.Tech", label: "Electronics and Communication" },
  { value: "Aug 2025", label: "QSpiders Java full-stack training" },
  { value: "Full Stack", label: "Software development focus" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "React.js", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive UI", level: 94 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      { name: "Java", level: 86 },
      { name: "JDBC", level: 80 },
      { name: "Hibernate", level: 78 },
      { name: "Spring Boot", level: 76 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "VS Code", level: 90 },
      { name: "Eclipse", level: 84 },
      { name: "IntelliJ IDEA", level: 82 },
      { name: "Git and GitHub", level: 86 },
    ],
  },
];

export const projects = [
  {
    title: "Advocate Website",
    description:
      "A responsive website built for an advocate, published on Netlify with a clean public-facing layout and GitHub source code.",
    tags: ["Website", "Netlify", "GitHub"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    liveUrl: "https://adv-firoz.netlify.app/",
    githubUrl: "https://github.com/irfan2003ansari-lgtm/advocateWeb",
  },
  {
    title: "Employee Management System",
    description:
      "A Java application for managing employee records using JDBC for database connectivity and MVC architecture for clean separation of responsibilities.",
    tags: ["Java", "JDBC", "MVC"],
    gradient: "from-fuchsia-500 via-purple-600 to-blue-700",
  },
  {
    title: "Automatic Car Parking System",
    description:
      "An academic electronics project completed with a team, using sensors, Arduino-based control, an LCD display, and a servo gate to automate parking slot detection.",
    tags: ["Arduino", "Sensors", "Team Project"],
    gradient: "from-emerald-400 via-cyan-500 to-blue-700",
    image: "/parking-model.jpeg",
    gallery: ["/parking-model.jpeg", "/parking-collage.jpeg", "/parking-team.jpg"],
  },
];

export const timeline = [
  {
    period: "Aug 2025 - Present",
    title: "Java Full Stack Developer Trainee, QSpiders",
    description:
      "Completing industrial training focused on Java full-stack development, backend fundamentals, database connectivity, and web application workflows.",
  },
  {
    period: "2021 - 2025",
    title: "B.Tech in Electronics and Communication",
    description:
      "Built a strong engineering foundation and developed a growing interest in software development, problem solving, and modern web technologies.",
  },
  {
    period: "Academic Project",
    title: "Automatic Car Parking System",
    description:
      "Completed a team electronics project using sensors, Arduino control, LCD status output, and a servo gate to demonstrate automated parking management.",
  },
  {
    period: "Ongoing",
    title: "Full-Stack Project Practice",
    description:
      "Practicing frontend interfaces, Java backend concepts, database integration, and developer tooling with VS Code, Eclipse, IntelliJ IDEA, and GitHub.",
  },
];

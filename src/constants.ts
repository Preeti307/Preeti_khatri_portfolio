/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  category: "Data Analysis" | "Web Development" | "Hardware";
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  phase: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: "Certification" | "Award" | "Achievement";
  verified: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Superstore Data Analysis",
    description: "Comprehensive analysis of retail data to identify sales trends, profit margins, and customer segments.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/Preeti307/superstore-data-analysis",
    year: "2024",
    category: "Data Analysis"
  },
  {
    id: "2",
    title: "Swiggy Data Analysis",
    description: "In-depth exploration of food delivery data to understand restaurant performance and customer preferences.",
    tags: ["Python", "Pandas", "Data Visualization"],
    link: "https://github.com/Preeti307/swiggy-data-analysis",
    year: "2024",
    category: "Data Analysis"
  },
  {
    id: "3",
    title: "Blinkit Data Analysis",
    description: "Analyzing quick-commerce delivery patterns and inventory management through data insights.",
    tags: ["Python", "Numpy", "Pandas", "Seaborn"],
    link: "https://github.com/Preeti307/blinkit-data-analysis",
    year: "2024",
    category: "Data Analysis"
  },
  {
    id: "4",
    title: "Myntra Clone",
    description: "A fully responsive e-commerce frontend clone featuring modern UI/UX and product catalogs.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://github.com/Preeti307/Myntra-clone",
    year: "2023",
    category: "Web Development"
  },
  {
    id: "5",
    title: "Diwali Sales Analysis",
    description: "Seasonal sales data analysis to predict demand and optimize inventory for festive periods.",
    tags: ["Python", "Data Cleaning", "Matplotlib"],
    link: "https://github.com/Preeti307/diwalisales-data-analysis",
    year: "2024",
    category: "Data Analysis"
  },
  {
    id: "6",
    title: "Video Game Sales Analysis",
    description: "Global video game sales trends analysis across different platforms and genres over decades.",
    tags: ["Python", "Pandas", "Exploratory Data Analysis"],
    link: "https://github.com/Preeti307/videogamesales-data-analysis",
    year: "2023",
    category: "Data Analysis"
  },
  {
    id: "7",
    title: "Formless Website",
    description: "Experimental web design focusing on fluid layouts and unconventional navigation patterns.",
    tags: ["HTML", "CSS", "Modern UI"],
    link: "https://github.com/Preeti307/Formless_website",
    year: "2023",
    category: "Web Development"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Engineering Foundations",
    role: "Computer Science Student",
    period: "2022 — 2023",
    phase: "PHASE 01",
    description: "Built rigorous programming fundamentals from the ground up — C, C++, and core CS theory. Developed the analytical precision that separates engineers from coders."
  },
  {
    id: "2",
    company: "Data Analysis Mastery",
    role: "Aspiring Data Scientist",
    period: "2023 — 2024",
    phase: "PHASE 02",
    description: "Mastered Python, Pandas, and visualization libraries. Conducted deep dives into large datasets like Swiggy, Blinkit, and Superstore to extract actionable insights."
  },
  {
    id: "3",
    company: "Web Development & AI",
    role: "Full Stack Explorer",
    period: "2024 — Present",
    phase: "PHASE 03",
    description: "Transitioning from data to delivery. Building responsive web clones and exploring AI integrations with Gemini to create intelligent user experiences."
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2024",
    type: "Certification",
    verified: true
  },
  {
    id: "2",
    title: "Hackathon Participant",
    issuer: "State Level Hackathon",
    year: "2024",
    type: "Award",
    verified: true
  }
];

export const SKILLS_NODES = [
  { id: "Python", group: "Data", color: "#4F9DFF" },
  { id: "Pandas", group: "Data", color: "#4F9DFF" },
  { id: "Numpy", group: "Data", color: "#4F9DFF" },
  { id: "Matplotlib", group: "Data", color: "#4F9DFF" },
  { id: "Seaborn", group: "Data", color: "#4F9DFF" },
  { id: "HTML", group: "Web", color: "#A066FF" },
  { id: "CSS", group: "Web", color: "#A066FF" },
  { id: "JavaScript", group: "Web", color: "#A066FF" },
  { id: "C++", group: "Core", color: "#FF00E5" },
  { id: "Java", group: "Core", color: "#FF00E5" }
];

export const SKILLS_LINKS = [
  { source: "Python", target: "Pandas" },
  { source: "Python", target: "Numpy" },
  { source: "Pandas", target: "Matplotlib" },
  { source: "Pandas", target: "Seaborn" },
  { source: "HTML", target: "CSS" },
  { source: "CSS", target: "JavaScript" }
];

export const CONTACT_INFO = {
  email: "preetikhatri307@gmail.com",
  linkedin: "https://www.linkedin.com/in/preeti-khatri-614689319/",
  github: "https://github.com/Preeti307",
  location: "Indore, MP, India"
};

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

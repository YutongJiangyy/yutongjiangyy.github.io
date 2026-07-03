export type SocialPlatform =
  | "email"
  | "github"
  | "linkedin"
  | "google-scholar"
  | "x"
  | "website";

export interface SocialLink {
  label: string;
  href: string;
  platform: SocialPlatform;
}

export interface Bio {
  name: string;
  title?: string;
  affiliation?: string;
  location?: string;
  email: string;
  shortBio?: string;
  researchInterestText: string;
  cvLinks: { label: string; href: string }[];
  social: SocialLink[];
}

export interface NewsItem {
  date: string;
  title: string;
  text?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  thumbnailAlt?: string;
  link?: string;
  thumbnail?: string;
  badge?: string;
}

export interface ExperienceItem {
  type: "internship" | "award";
  title: string;
  organization: string;
  location?: string;
  period?: string;
  year?: string;
  description?: string;
}

export const bio: Bio = {
  name: "Yutong Jiang",
  title: "Master in AI and Data Visualization, Tongji University",
  affiliation: "Bachelor in Digital Media and Communication Design, Tongji University",
  location: "Shanghai, China",
  email: "jiangyytong@outlook.com",
  shortBio:
    "I am a human–computer interaction researcher focusing on interactive systems, creativity support tools, and AI-augmented interfaces. My work combines qualitative studies with prototype-driven experimentation.",
  researchInterestText:
    "Seeking to leverage my background in interaction design to create AI-empowered educational solutions. I aim to solve practical problems by applying user-centric methodologies to discover unmet needs and translate them into innovative, impactful learning experiences.",
  cvLinks: [
    { label: "CV (English)", href: "/publications/CV-Jiang.pdf" },
  ],
  social: [
    {
      label: "Email",
      href: "mailto:jiangyytong@outlook.com",
      platform: "email",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=xmcbIsIAAAAJ",
      platform: "google-scholar",
    },
    {
      label: "GitHub",
      href: "https://github.com/jiangyutong-eden",
      platform: "github",
    },
  ],
};

export const aboutMeText =
  "I am a second-year master's student in Artificial Intelligence and Data Design at Tongji University. My work lies at the intersection of human-computer interaction, AI-mediated communication, and inclusive design, with a particular interest in educational technologies and collaborative learning experiences.";

export const news: NewsItem[] = [
  {
    date: "2026.03",
    title: "Excited to share that two of our papers were accepted at CHI 2026.",
  },
  {
    date: "2025.12",
    title: "Attended SIGGRAPH Asia 2025 in Hong Kong.",
  },
  {
    date: "2025.10",
    title: "Attended CSCW 2025 in Bergen, Norway.",
    text: "It was a wonderful opportunity to learn from inspiring work in the community.",
  },
];

export const education: EducationItem[] = [
  {
    school: "Tongji University",
    degree: "M.Eng.",
    major: "Artificial Intelligence and Data Design",
    period: "2024 – 2027",
    location: "Shanghai, China",
  },
  {
    school: "Tongji University",
    degree: "B.A.",
    major: "Media and Communication Design",
    period: "2019 – 2024",
    location: "Shanghai, China",
  },
];

export const researchInterests: string[] = [
  "Human–Computer Interaction (HCI)",
  "Creativity support tools",
  "Human–AI collaboration",
  "Interactive data visualization",
  "Design tools & prototyping",
];

export const publications: Publication[] = [
  {
    title:
      "Bridging Visual Asymmetry: Exploring AI-Mediated Communication Support for Parents with Visual Impairments and Their Sighted Children in Outdoor Informal Learning",
    authors:
      "Yutong Jiang, Zixuan Zhang, Jiaying Xu, Qingyun Zheng, Qian Guo, Qinyang Wang, Qi Wang, Guanhong Liu",
    venue: "CHI 2026",
    year: "2026",
    badge: "CHI 2026",
    link: "https://doi.org/10.1145/3772318.3790604",
    thumbnail: "/publications/chi26_1.jpg",
    thumbnailAlt:
      "A distributed AI system supporting joint attention and communication between visually impaired parents and sighted children during outdoor informal learning.",
  },
  {
    title:
      "PrivWeb: Unobtrusive and Content-aware Privacy Protection for Web Agents",
    authors:
      "Shuning Zhang*, Yutong Jiang*, Rongjun Ma, Yuting Yang, Mingyao Xu, Zhixin Huang, Xin Yi, Hewu Li (*equal contribution)",
    venue: "CHI 2026",
    year: "2026",
    badge: "CHI 2026",
    link: "https://doi.org/10.1145/3772318.3790919",
    thumbnail: "/publications/chi26_2.jpg",
    thumbnailAlt:
      "A privacy-aware system that detects and manages sensitive information during web-agent interactions.",
  },
  {
    title:
      "When Stars Shine through Silence: Affective Visualization as Empowerment for Victims of Subway Harassment",
    authors: "Yutong Jiang, Xiaoke Yan, Chuyi Zheng, Yang Shi, Qing Chen, Nan Cao",
    venue: "SIGGRAPH Asia Posters 2025",
    year: "2025",
    badge: "SIGGRAPH Asia Posters 2025",
    link: "https://doi.org/10.1145/3757374.3771477",
    thumbnail: "/publications/siggraph25.png",
    thumbnailAlt:
      "An affective visualization system highlighting emotional experiences of subway harassment victims.",
  },
  {
    title:
      "I Can Only Guess Where She's Looking: Challenges and Design Strategies for Supporting Outdoor Informal Learning Between Parents with Visual Impairments and Their Sighted Children",
    authors:
      "Yutong Jiang*, Qingyun Zheng*, Zixuan Zhang*, Qian Guo*, Jiaying Xu*, Shuchang Xu, Guanhong Liu (*equal contribution)",
    venue: "CSCW Companion 2025",
    year: "2025",
    badge: "CSCW Companion 2025",
    link: "https://doi.org/10.1145/3715070.3749238",
    thumbnail: "/publications/cscw25.jpg",
    thumbnailAlt:
      "A study investigating communication and attention challenges in informal learning between visually impaired parents and sighted children.",
  },
  {
    title:
      "City of Wander: Visualizing Scientific Literature for Knowledge Exploration Using Visual Metaphors",
    authors: "Guanhong Liu, Yutong Jiang, Xiaoke Yan, Nan Cao, Yang Shi",
    venue: "CHI EA 2025",
    year: "2025",
    badge: "CHI EA 2025",
    link: "https://doi.org/10.1145/3706599.3720280",
    thumbnail: "/publications/chiea25.png",
    thumbnailAlt:
      "A visualization system using metaphor-driven layouts to explore scientific literature.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    type: "internship",
    title: "Technology Intern",
    organization: "Disney",
    location: "Shanghai, China",
    period: "2024.02 - 2024.05",
  },
  {
    type: "internship",
    title: "Product Operation Intern",
    organization: "Feishu, Bytedance",
    location: "Shanghai, China",
    period: "2023.12 - 2024.02",
  },
  {
    type: "internship",
    title: "Visualization Design Intern",
    organization: "iDVX Lab, Tongji University",
    location: "Shanghai, China",
    period: "2023.06 - 2024.09",
  },
  {
    type: "award",
    title: "1st Place – Visual Data Storytelling Contest",
    organization: "IEEE PacificVis",
    year: "2025",
  },
  {
    type: "award",
    title: "2nd Place – Design Factory Global Challenge",
    organization: "Design Factory Global Network",
    year: "2025",
  },
  {
    type: "award",
    title: "Annual Selected Works",
    organization: "China Data Content Conference",
    year: "2025",
  },
  {
    type: "award",
    title: "National Scholarship",
    organization: "Ministry of Education of China",
    year: "2025",
  },
  {
    type: "award",
    title: "Outstanding Graduate",
    organization: "Shanghai Municipal Education Commission",
    year: "2024",
  },
  {
    type: "award",
    title: "National Scholarship",
    organization: "Ministry of Education of China",
    year: "2022",
  },
];

export const internships: ExperienceItem[] = experiences.filter((e) => e.type === "internship");
export const awards: ExperienceItem[] = experiences.filter((e) => e.type === "award");

export const researchInterestText: string = bio.researchInterestText;

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
  summary: string;
  description: string;
  thumbnailAlt?: string;
  link?: string;
  thumbnail?: string;
  additionalImages?: { src: string; alt: string }[];
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
    summary:
      "An AI-mediated system that supports shared attention and communication during outdoor learning.",
    description:
      "This work investigates how parents with visual impairments and their sighted children coordinate attention, questions, and learning in outdoor settings. It translates these needs into an AI-mediated design that helps families share observations while preserving the parent's role in guiding the experience.",
    link: "https://doi.org/10.1145/3772318.3790604",
    thumbnail: "/publications/bridge-web-1.png",
    thumbnailAlt:
      "The Bond system workflow supporting interest detection and prompt generation between visually impaired parents and sighted children.",
    additionalImages: [
      {
        src: "/publications/bridge-web-2.png",
        alt: "A three-phase empirical study process covering needs grounding, design refinement, and field deployment.",
      },
      {
        src: "/publications/bridge-web-3.png",
        alt: "The conceptual framing of symbiotic learning and AI-mediated shifts toward balanced parent-child interaction.",
      },
      {
        src: "/publications/bridge-2.png",
        alt: "A parent and child exploring a museum exhibit together during outdoor informal learning.",
      },
    ],
  },
  {
    title:
      "PrivWeb: Unobtrusive and Content-aware Privacy Protection for Web Agents",
    authors:
      "Shuning Zhang*, Yutong Jiang*, Rongjun Ma, Yuting Yang, Mingyao Xu, Zhixin Huang, Xin Yi, Hewu Li (*equal contribution)",
    venue: "CHI 2026",
    year: "2026",
    summary:
      "A content-aware privacy layer that protects sensitive information during web-agent use.",
    description:
      "PrivWeb identifies sensitive content as web agents browse and act on a user's behalf, then provides context-aware protection at the moment it is needed. The design aims to reduce unnecessary interruption while giving users clearer control over what an agent can access or disclose.",
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
    summary:
      "An affective visualization that makes subway-harassment experiences visible and supports empowerment.",
    description:
      "This project explores how visual storytelling can communicate the emotional weight of subway harassment without reducing lived experiences to statistics. Its star-based visual language brings individual accounts together to support reflection, awareness, and solidarity.",
    link: "https://doi.org/10.1145/3757374.3771477",
    thumbnail: "/publications/siggraph25.png",
    thumbnailAlt:
      "An affective visualization system highlighting emotional experiences of subway harassment victims.",
    additionalImages: [
      {
        src: "/publications/stars-1.png",
        alt: "Additional project image for When Stars Shine through Silence.",
      },
      {
        src: "/publications/stars-2.png",
        alt: "Additional interface image for When Stars Shine through Silence.",
      },
      {
        src: "/publications/stars-3.png",
        alt: "Visual encoding details for When Stars Shine through Silence.",
      },
    ],
  },
  {
    title:
      "I Can Only Guess Where She's Looking: Challenges and Design Strategies for Supporting Outdoor Informal Learning Between Parents with Visual Impairments and Their Sighted Children",
    authors:
      "Yutong Jiang*, Qingyun Zheng*, Zixuan Zhang*, Qian Guo*, Jiaying Xu*, Shuchang Xu, Guanhong Liu (*equal contribution)",
    venue: "CSCW Companion 2025",
    year: "2025",
    summary:
      "A study of the communication barriers families encounter during outdoor informal learning.",
    description:
      "The study examines how parents with visual impairments and their sighted children establish shared attention and exchange contextual information outdoors. It identifies recurring coordination challenges and offers design strategies for more inclusive family learning technologies.",
    link: "https://doi.org/10.1145/3715070.3749238",
    thumbnail: "/publications/cscw25-web.png",
    thumbnailAlt:
      "A system diagram showing AI-mediated interaction between parents and children through audio feedback and real-time visual perception.",
  },
  {
    title:
      "City of Wander: Visualizing Scientific Literature for Knowledge Exploration Using Visual Metaphors",
    authors: "Guanhong Liu, Yutong Jiang, Xiaoke Yan, Nan Cao, Yang Shi",
    venue: "CHI EA 2025",
    year: "2025",
    summary:
      "A visual-metaphor system that turns literature exploration into navigation through a knowledge city.",
    description:
      "City of Wander maps scholarly relationships into an explorable city-like environment. By combining spatial organization with familiar visual metaphors, it helps readers discover research areas, trace connections, and move between overview and detail.",
    link: "https://doi.org/10.1145/3706599.3720280",
    thumbnail: "/publications/chiea25.png",
    thumbnailAlt:
      "A visualization system using metaphor-driven layouts to explore scientific literature.",
    additionalImages: [
      {
        src: "/publications/city-2.png",
        alt: "Additional interface view from the City of Wander project.",
      },
      {
        src: "/publications/city-3.png",
        alt: "The City of Wander interface showing visual-encoding categories and a timeline for literature exploration.",
      },
    ],
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

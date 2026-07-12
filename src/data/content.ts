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
    "My research broadly explores how human-centered technologies can support people's learning, communication, and everyday practices. I am especially interested in AI-supported learning and informal learning, examining how learning experiences can become more engaging, accessible, and situated in everyday life. I also engaged with broader HCI topics such as social media analysis, accessibility, and data visualization.\n\nMy background combines qualitative research, design inquiry, and hands-on prototyping, including interviews, surveys, participatory design, observation, and field studies. My first-authored work has been published at leading venues such as CHI, CSCW, and Siggraph Asia.",
  cvLinks: [
    { label: "CV (English)", href: "/publications/CV_yutong.pdf" },
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
      "Reframes assistive AI from visual compensation toward relational mediation in mixed-ability family learning.",
    description:
      "Through interviews and observations with 11 families, a design consultation, and a Wizard-of-Oz field study with 14 families, we examine barriers and AI support for outdoor informal learning. We developed Bond, an AI mediator combining a child-worn camera and parent-facing prompts, which strengthened joint attention, dialogue, and parental confidence, motivating the Symbiotic Learning framework as a framework for inclusive, co-constructed learning.",
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
      "Balances web-agent privacy oversight with automation through sensitivity-based, tiered delegation.",
    description:
      "Formative interviews with 15 users reveal incomplete mental models and tension between granular control and cognitive load. We build and evaluate PrivWeb through technical testing and a 14-user study, showing that localized redaction and tiered intervention improve privacy protection and trust without increasing cognitive load.",
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
      "Shifts harassment visualization from victimization toward courage, solidarity, and collective empowerment.",
    description:
      "We analyze 637 Xiaohongshu posts, 1,381 comments, and 12 policies on Shanghai subway harassment. The resulting interactive star metaphor foregrounds resistance, community support, and institutional response, proposing affective visualization as a way to counter emotional detachment, encourage speaking up, and foster collective awareness.",
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
      "Identifies relational imbalances that visual asymmetry creates in outdoor family learning.",
    description:
      "Through interviews with nine parents and observations of two families, we examine barriers to outdoor informal learning and identify over-involved, hands-off, and limited-support patterns. The Symbiotic Education Model translates these findings into child-led sensing, conversational scaffolding, and parent empowerment for more balanced co-learning.",
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
      "Turns 3,052 TVCG papers into a dual-perspective, immersive literature city.",
    description:
      "Using 3,052 TVCG papers, we map themes, citations, and publication years onto parametric buildings and roads. A domain case study and informal VR exhibition testing suggest that dual-perspective exploration makes complex literature more intuitive, memorable, and engaging for non-experts.",
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

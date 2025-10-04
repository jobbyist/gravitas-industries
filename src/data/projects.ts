import jobbyistLogo from "@/assets/jobbyist-logo.png";
import laundriLogo from "@/assets/laundri-logo.png";
import skinlabsLogo from "@/assets/skinlabs-logo.png";
import yuteLogo from "@/assets/yute-logo.png";
import outlandrLogo from "@/assets/outlandr-logo.png";
import auntietinisLogo from "@/assets/auntietinis-logo.png";
import hausofauraLogo from "@/assets/hausofaura-logo.png";
import monogamyLogo from "@/assets/monogamy-logo.png";

export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  link: string;
  domainValue?: string;
  status: "ongoing" | "upcoming";
  initialViews: number;
  initialLikes: number;
}

export const projects: Project[] = [
  {
    id: "jobbyist",
    name: "Jobbyist",
    description: "Africa's Premier Job Discovery & Career Management Platform",
    fullDescription:
      "Jobbyist is revolutionizing the African job market by providing a comprehensive platform that connects job seekers with their dream opportunities. Our advanced matching algorithms, career development resources, and intuitive interface make job hunting seamless and effective. From entry-level positions to executive roles, Jobbyist empowers professionals across Africa to discover, apply, and secure meaningful employment while helping companies find the perfect talent.",
    logo: jobbyistLogo,
    link: "https://jobbyist.africa",
    domainValue: "1,250",
    status: "ongoing",
    initialViews: 8542,
    initialLikes: 342,
  },
  {
    id: "laundri",
    name: "Laundri",
    description: "AI-Powered Fashion Label Creation & Design Tool",
    fullDescription:
      "Laundri transforms the fashion industry by democratizing brand creation. Our AI-powered platform enables aspiring fashion entrepreneurs to design professional clothing labels, create cohesive brand identities, and generate stunning visual assets. Whether you're launching a boutique streetwear line or an eco-friendly fashion brand, Laundri provides the tools, templates, and AI assistance to bring your vision to life without requiring extensive design experience.",
    logo: laundriLogo,
    link: "https://laundri.co.za",
    domainValue: "890",
    status: "ongoing",
    initialViews: 6234,
    initialLikes: 287,
  },
  {
    id: "skinlabs",
    name: "SkinLabs",
    description: "Your All-In-One Skincare Nexus",
    fullDescription:
      "SkinLabs is your personalized skincare companion, combining cutting-edge technology with dermatological expertise. Our platform analyzes your unique skin type, concerns, and goals to recommend customized skincare routines and products. With ingredient analysis, product reviews, and expert guidance, SkinLabs helps you navigate the complex world of skincare with confidence. Track your progress, discover new products, and achieve your healthiest skin yet.",
    logo: skinlabsLogo,
    link: "https://skinlabs.co.za",
    domainValue: "1,420",
    status: "ongoing",
    initialViews: 7891,
    initialLikes: 412,
  },
  {
    id: "yute",
    name: "YUTE",
    description: "SA's Next-Generation Financial Wellness & Literacy Platform",
    fullDescription:
      "YUTE is on a mission to empower South African youth with the financial knowledge and tools they need to build lasting wealth. Our gamified learning platform makes financial literacy engaging and accessible, covering everything from budgeting basics to investment strategies. With interactive modules, real-world simulations, and personalized financial planning tools, YUTE helps young South Africans develop healthy money habits and achieve financial independence.",
    logo: yuteLogo,
    link: "https://yute.co.za",
    domainValue: "438",
    status: "ongoing",
    initialViews: 9156,
    initialLikes: 523,
  },
  {
    id: "outlandr",
    name: "Outlandr",
    description: "The Expert Emigration Pre-Assessment & Travel Roadmap Tool",
    fullDescription:
      "Outlandr simplifies the complex emigration journey by providing comprehensive pre-assessments and personalized roadmaps for aspiring emigrants. Our platform evaluates your qualifications, skills, and circumstances against destination country requirements, providing realistic insights into your emigration prospects. With step-by-step guidance, document checklists, and expert resources, Outlandr turns the daunting emigration process into a clear, manageable path to your new life abroad.",
    logo: outlandrLogo,
    link: "https://outlandr.co.za",
    domainValue: "765",
    status: "ongoing",
    initialViews: 5623,
    initialLikes: 198,
  },
  {
    id: "auntietinis",
    name: "Auntie Tini's",
    description: "On-Demand Herbal Tincture Formulated with Love by Auntie Tini",
    fullDescription:
      "Experience the wisdom of traditional herbal remedies through Auntie Tini's, where ancient botanical knowledge meets modern conversational AI. Chat with Auntie Tini herself to discuss your wellness needs and receive personalized herbal tincture recommendations. Each formula is crafted with care using premium organic ingredients, blending time-honored herbal traditions with contemporary health science. From sleep support to immune boosting, Auntie Tini has a natural remedy formulated just for you.",
    logo: auntietinisLogo,
    link: "https://auntietini.shop",
    domainValue: "1,180",
    status: "ongoing",
    initialViews: 4567,
    initialLikes: 234,
  },
  {
    id: "hausofaura",
    name: "HausOfAura",
    description: "AI-Powered Home Improvement & Interior Design Marketplace",
    fullDescription:
      "HausOfAura revolutionizes home transformation by combining AI-driven design recommendations with a curated marketplace of premium home improvement products and services. Our intelligent platform analyzes your space, style preferences, and budget to suggest personalized design schemes and product selections. Connect with vetted contractors, browse exclusive furniture collections, and visualize your dream home before making any commitments. From minor refreshes to major renovations, HausOfAura makes beautiful living spaces accessible to everyone.",
    logo: hausofauraLogo,
    link: "#",
    domainValue: "2,340",
    status: "upcoming",
    initialViews: 3421,
    initialLikes: 156,
  },
  {
    id: "monogamy",
    name: "Monogamy",
    description: "Digital Asset Management & AI Workflow Automation for Law Firms",
    fullDescription:
      "Monogamy transforms legal practice management with cutting-edge digital asset organization and AI-powered workflow automation. Purpose-built for law firms, our platform streamlines document management, case file organization, and administrative tasks through intelligent automation. From contract analysis to deadline tracking, Monogamy's AI assists legal professionals in managing their caseload more efficiently, reducing administrative burden and allowing lawyers to focus on what matters most—serving their clients with excellence.",
    logo: monogamyLogo,
    link: "#",
    domainValue: "3,850",
    status: "upcoming",
    initialViews: 2789,
    initialLikes: 98,
  },
];

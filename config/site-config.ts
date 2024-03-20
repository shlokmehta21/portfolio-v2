export type GridItemLayout = "1x2" | "2x2" | "4x3";
export type GridItemtype = "social" | "experience" | "skill" | "project";

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemtype;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonSecondaryText?: string;
  buttonLink?: string;
  image?: string;
  tags?: string[];
  workExperience?: string[];
  location?: string;
  siteLink?: string;
  githubLink?: string;
  pageLink?: string;
}

export const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Resume/CV",
    icon: "download",
    description:
      "Download my Resume/CV to learn more about my work experience and education history.",
    color: "#fff",
    buttonTitle: "Download",
    pageLink: "/resume",
    buttonLink:
      "https://drive.google.com/file/d/1_e2eThQ_x_xYvwM9OAlK6alCKtSU9PL_/view",
  },
  {
    layout: "1x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "@shlokmehta21",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/shlok-mehta-759347192/",
    color: "#fff",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@shlokmehta21",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/shlokmehta21",
    color: "#fff",
  },
  {
    layout: "2x2",
    type: "experience",
    title: "Software Engineer @Dr Inbox Inc",
    description: "November 2023 - March 2024",
    location: "Cambridge, ON",
    workExperience: [
      "Spearheaded the migration of the application's codebase from a Single Page Application (SPA) framework to a Server-Side Rendering (SSR) architecture using Svelte.js and Next.js 14, enhancing app performance and security by 70%. This significant improvement in load times and security measures led to increased user satisfaction.",
      "Designed and implemented a comprehensive testing infrastructure utilizing Playwright, which streamlined the testing process, reduced bugs in production by 80%, and improved deployment efficiency and product reliability.",
      "Developed an innovative feature enabling doctors to create and share custom forms with patients for online completion and submission via fax or email, directly contributing to enhanced patient care and generating significant new revenue streams.",
      "Revamped the landing page and main app interface to be more responsive and user-friendly, resulting in a marked improvement in user experience (UX) and a significant increase in user engagement rates.",
    ],
  },
  {
    layout: "2x2",
    type: "experience",
    title: "Software Engineer @Ultimate World",
    description: "June 2023 - November 2023",
    location: "Toronto, ON",
    workExperience: [
      "Led the development of Vaato AI, an AI-powered contextual conversation partner designed to revolutionize interview preparation, utilizing Next.js, TypeScript, and Supabase for a seamless, scalable, and responsive user experience.",
      "Integrated machine learning algorithms, including the use of OpenAI's API, to simulate realistic interview scenarios in Vaato AI. This advanced integration enables users to practice and hone their interviewing skills through highly personalized feedback and insights, significantly enhancing the tool's ability to prepare users for real-world interviews.",
      "Collaborated closely with UX/UI designers to develop a user-friendly interface for Vaato AI, focusing on ease of use and accessibility, resulting in a 40% increase in user engagement.",
    ],
  },
  {
    layout: "4x3",
    type: "project",
    title: "Mood AI",
    icon: "project",
    description:
      "Your mental well-being companion for emotional analysis, mood tracking, and self-awareness.",
    tags: ["NextJs", "Typescript", "Prisma", "MySQL", "OpenAI API"],
    image: "/projects/moodai.png",
    siteLink: "https://mood-virid.vercel.app/",
    githubLink: "https://github.com/shlokmehta21/mood-journal-ai",
  },
  {
    layout: "4x3",
    type: "project",
    title: "Easy Rider",
    icon: "project",
    description:
      "Connects travelers with drivers for seamless ride-sharing, booking, and communication.",

    tags: ["React Native", "Typescript", "NodeJs", "ExpressJs", "MongoDB"],
    image: "/projects/easyrider.png",
    siteLink: "https://github.com/shlokmehta21/EasyRider",
    githubLink: "https://github.com/shlokmehta21/EasyRider",
  },
  {
    layout: "4x3",
    type: "project",
    title: "Football Store",
    icon: "project",
    description:
      "Buy, track orders, and manage products for an all-in-one online experience.",
    tags: [
      "ReactJS",
      "Typescript",
      "Redux",
      "NodeJs",
      "MongoDB",
      "ExpressJS",
      "Stripe API",
    ],
    image: "/projects/footballstore.png",
    siteLink: "https://footballshoestore.netlify.app/",
    githubLink:
      "https://github.com/shlokmehta21?tab=repositories&q=football&type=&language=&sort=",
  },
];

export const siteConfig = {
  creator: "Shlok Mehta",
  title: "Software Engineer",
  bio: "Building software & AI products to make the world a better place.",
  location: "Toronto, ON",
  locationLink: "https://maps.app.goo.gl/j8ruwjA1HJaCCrjs5",
  email: "shlok_mehta@outlook.com",
  items: GridItems,
} as const;

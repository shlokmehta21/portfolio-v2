export type GridItemLayout = "1x2" | "2x2" | "4x3";
export type GridItemtype = "social" | "experiance" | "skill" | "project";

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
  siteLink?: string;
  githubLink?: string;
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
    buttonLink:
      "https://drive.google.com/file/d/1R5yxLSHrq-hyZEtDMUhaS9FDevCAmfUj/view?usp=drive_link",
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
  {
    layout: "2x2",
    type: "experiance",
    title: "Freelance Software Engineer @Ultimate World.",
    description: "June 2023 - Present",
  },
  {
    layout: "2x2",
    type: "experiance",
    title: "Software Development intern @Vadict Inc.",
    description: "April 2021 - June 2021",
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

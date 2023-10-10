export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "4x2" | "4x4";
export type GridItemtype = "social" | "experiance" | "skills" | "projects";

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
}

export const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Download CV",
    icon: "download",
    username: "@ShlokMehta",
    description:
      "Download my CV to learn more about my work experience and education history and to my projects.",
    color: "#fff",
    buttonTitle: "Download",
    buttonLink:
      "https://drive.google.com/file/d/1SLUiccdzWma7USM3I5etildqQH5EcQ-r/view",
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
];

export const siteConfig = {
  creator: "Shlok Mehta",
  title: "Software Engineer",
  bio: "Building AI products to make the world a better place.",
  location: "Toronto, ON",
  locationLink: "https://maps.app.goo.gl/j8ruwjA1HJaCCrjs5",
  email: "shlok_mehta@outlook.com",
  items: GridItems,
} as const;

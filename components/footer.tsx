import { FC } from "react";
import { ThemeToggle } from "./theme-toggle";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="border-t w-full border-neutral-200 dark:border-neutral-800 pt-5 text-xs flex items-center justify-between">
      <div className="text-neutral-500">
        Built by @shlokmehta21 | &copy;2023 shlokmehta21. All Rights Reserved.
      </div>
      <ThemeToggle />
    </footer>
  );
};

export default Footer;

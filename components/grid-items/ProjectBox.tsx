import { GridItemInterface, siteConfig } from "@/config/site-config";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface ProjectBoxProps {
  item: GridItemInterface;
}

const ProjectBox: FC<ProjectBoxProps> = ({ item }) => {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 dark:text-white ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-lg md:text-2xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm md:text-lg leading-relaxed text-gray-700 dark:text-white/70">
            {item.description}
          </p>

          <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
            {item?.tags?.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.6rem] md:text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center mt-3 sm:mt-auto gap-5">
            <Link
              href={item.siteLink as string}
              target="_blank"
              className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/25"
            >
              <ExternalLinkIcon size={16} />
              View
            </Link>

            <Link
              href={item.githubLink as string}
              target="_blank"
              className="flex items-center  gap-2 border border-neutral-200 dark:border-neutral-800 px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/25"
            >
              <GithubIcon size={16} />
              GitHub
            </Link>
          </div>
        </div>

        <Image
          src={item.image as string}
          priority
          loading="eager"
          width={500}
          height={500}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden md:block top-8 md:-right-20 2xl:right-10 w-[28.25rem] rounded-lg 
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </div>
  );
};

export default ProjectBox;

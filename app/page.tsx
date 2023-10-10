import GridItem from "@/components/grid-item";
import SocialBox from "@/components/grid-items/SocialBox";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

const gridItems = new Array(65).fill(0);

const gridItems2 = [
  {
    className: "rounded-md bg-neutral-200 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-1 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-1 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-4 row-span-3",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-2 row-span-2",
  },
  {
    className: "rounded-md bg-neutral-200 col-span-2 row-span-2",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10 px-10">
      {/* Left Side */}
      <section className="flex-1 h-full max-w-md p-8">
        <div className="flex flex-col h-full rounded-md space-y-3 ">
          {/* Avatar */}
          <div>
            <Image
              className="rounded-full"
              src="/pfp.png"
              alt="Avatar Image"
              width={120}
              height={120}
              priority
              loading="eager"
            />
          </div>

          {/* Content container */}
          <div>
            {/* Title */}
            <div className="flex items-center">
              <p className="text-xl text-primary font-semibold">
                {siteConfig.title}
              </p>
              <div className=" flex items-center justify-between ml-4 bg-green-500/25 px-3 py-1 rounded-full">
                <span className="relative flex h-3 w-3 align-top">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className=" ml-2 text-md text-green-600 dark:text-green-300">
                  Open to work
                </p>
              </div>
            </div>
            {/* Full name */}
            <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
            {/* Bio */}
            <p className="text-2xl text-neutral-500 font-light">
              {siteConfig.bio}
            </p>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-6 justify-between pb-5">
            <a
              className=" flex items-center gap-2 w-full border border-neutral-200 dark:border-neutral-800 px-3 py-2 rounded-md"
              href={siteConfig.locationLink}
            >
              <MapPin size="16" />
              {siteConfig.location}
            </a>

            <a
              className=" flex items-center gap-2 w-full border border-neutral-200 dark:border-neutral-800 px-3 py-2 rounded-md"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail size="16" />
              Contact Me
            </a>
          </div>
          {/* Footer */}
          <footer className="border-t border-neutral-200 dark:border-neutral-800 pt-5 text-xs flex items-center justify-between">
            <div className="text-neutral-500">
              Built by @shlokmehta21 | &copy;2023 shlokmehta21. All Rights
              Reserved.
            </div>
            <ThemeToggle />
          </footer>
        </div>
      </section>
      {/* right */}
      <section className="flex-1 h-full p-6">
        {/* Grid Container */}
        <div className="w-full h-full overflow-y-auto p-6 scrollbar grid grid-cols-4 auto-rows-[76px] gap-10">
          {/* Grid items */}
          {siteConfig.items.map((item, i) => (
            <GridItem key={item.title + i} size={item.layout}>
              {item.type === "social" ? (
                <SocialBox item={item} />
              ) : (
                <div>Not here</div>
              )}
            </GridItem>
          ))}
        </div>
      </section>
    </main>
  );
}

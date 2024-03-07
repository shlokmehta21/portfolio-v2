import { FC } from "react";
import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Footer from "./footer";
import Chat from "./chat/Chat";

interface LeftSideProps {}

const LeftSide: FC<LeftSideProps> = ({}) => {
  return (
    <section className="relative z-20 w-full h-full xl:max-w-md pt-8 px-8 xl:p-8">
      <div className="flex flex-col h-full w-full rounded-md space-y-3 ">
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
          <div className="flex items-start sm:items-center flex-col-reverse sm:flex-row">
            <p className="text-lg sm:text-xl text-primary font-medium">
              {siteConfig.title}
            </p>

            <div className="flex items-center justify-between mb-2 sm:mb-0 sm:ml-3 bg-green-500/25 px-2 sm:px-2 md:px-3 py-1 rounded-full">
              <span className="relative flex h-3 w-3 align-top">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="ml-2 text-xs md:text-md text-green-600 dark:text-green-300">
                Open to work
              </p>
            </div>
          </div>
          {/* Full name */}
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            {siteConfig.creator}
          </h1>
          {/* Bio */}
          <p className="text-lg sm:text-2xl text-neutral-500 font-light">
            {siteConfig.bio}
          </p>
        </div>
        {/* Buttons Container */}
        <div className="flex items-center gap-3 pt-4">
          <a
            href={`${siteConfig.locationLink}`}
            target="_blank"
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-xs sm:text-sm font-medium border rounded-md border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800/25"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-xs sm:text-sm font-medium border rounded-md border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800/25"
          >
            <Mail size="14" />
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-3 pb-5">
          <Chat />
        </div>
        {/* Footer */}
        <div className="hidden xl:block">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default LeftSide;

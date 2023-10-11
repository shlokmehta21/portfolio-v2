"use client";
import { siteConfig } from "@/config/site-config";
import { FC, useEffect } from "react";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/SocialBox";
import ProjectBox from "./grid-items/ProjectBox";
import WorkBox from "./grid-items/WorkBox";
import { stagger, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

const staggerDelay = stagger(0.02);

interface RightSideProps {}

const RightSide: FC<RightSideProps> = ({}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.15,
          type: "spring",
          damping: 35,
          stiffness: 330,
          delay: staggerDelay,
        }
      );
    }
  }, [scope]);
  return (
    <section className="">
      {/* Grid Container */}
      <div
        ref={scope}
        className="w-full h-full xl:overflow-y-auto p-6 scrollbar grid grid-cols-1 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10"
      >
        {/* Grid items */}
        {siteConfig.items.map((item, i) => (
          <GridItem key={item.title + i} size={item.layout}>
            {item.type === "social" ? <SocialBox item={item} /> : <></>}

            {item.type === "project" ? <ProjectBox item={item} /> : <></>}

            {item.type === "experiance" ? <WorkBox item={item} /> : <></>}
          </GridItem>
        ))}
      </div>
    </section>
  );
};

export default RightSide;

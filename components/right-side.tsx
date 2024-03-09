"use client";
import { GridItemInterface, siteConfig } from "@/config/site-config";
import { FC, useEffect, useState } from "react";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/SocialBox";
import ProjectBox from "./grid-items/ProjectBox";
import WorkBox, { TitleComponent } from "./grid-items/WorkBox";
import { stagger, useAnimate } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
} from "@/components/ui/drawer";
import { FollowerPointerCard } from "./ui/following-pointer";

const staggerDelay = stagger(0.02);

interface RightSideProps {}

const RightSide: FC<RightSideProps> = ({}) => {
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const [cardItem, setCardItem] = useState<GridItemInterface>();

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
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        shouldScaleBackground
        snapPoints={["800px", "0"]}
      >
        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/40" />

          <DrawerContent className=" border-stone-900 overflow-x-scroll">
            <DrawerDescription>
              <div className="w-full py-12">
                <div className="container space-y-12 px-4 md:space-y-16 md:px-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center justify-between">
                      Work Experience
                      <button
                        className="font-thin text-md text-gray-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 ease-in-out"
                        onClick={() => setOpen(false)}
                      >
                        x
                      </button>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Heres a summary of my work experience and accomplishments{" "}
                      {cardItem?.title}.
                    </p>
                  </div>
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Software Engineer</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cardItem?.title.split("@")[1]}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cardItem?.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:grid w-full grid-cols-5 items-start gap-4">
                        <div className="col-span-1 text-gray-500 dark:text-gray-400 text-base">
                          Responsibilities & Achievements
                        </div>
                        <div className="col-span-4 grid gap-2 text-base">
                          <ul className="list-disc ml-3 sm:ml-0">
                            {cardItem?.workExperience?.map((exp, i) => (
                              <li key={exp + i}>{exp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t w-full dark:border-stone-600" />

                  <div className="space-y-12">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Tech Stack
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Technologies and tools I used during my tenure.
                      </p>
                      {cardItem?.title.split("@")[1] === "Dr Inbox Inc" && (
                        <ul className="text-base">
                          <li>
                            Language:{" "}
                            <span className="text-neutral-500">
                              JavaScript, Typescript, Python
                            </span>
                          </li>
                          <li>
                            Framework:{" "}
                            <span className="text-neutral-500">
                              React, NextJs, SvelteKit, Django
                            </span>
                          </li>
                          <li>
                            Database:{" "}
                            <span className="text-neutral-500">
                              MongoDB, DynamoDB
                            </span>
                          </li>
                          <li>
                            Tools:{" "}
                            <span className="text-neutral-500">
                              Git, Docker, AWS
                            </span>
                          </li>
                          <li>
                            Others:{" "}
                            <span className="text-neutral-500">
                              REST, CI/CD, Jest, Playwright
                            </span>
                          </li>
                        </ul>
                      )}

                      {cardItem?.title.split("@")[1] === "Ultimate World" && (
                        <ul className="text-base">
                          <li>
                            Language:{" "}
                            <span className="text-neutral-500">
                              JavaScript, Typescript
                            </span>
                          </li>
                          <li>
                            Framework:{" "}
                            <span className="text-neutral-500">
                              React, NextJs
                            </span>
                          </li>
                          <li>
                            Database:{" "}
                            <span className="text-neutral-500">Supabase</span>
                          </li>
                          <li>
                            Tools:{" "}
                            <span className="text-neutral-500">
                              Git, Docker, Vercel
                            </span>
                          </li>
                          <li>
                            Others:{" "}
                            <span className="text-neutral-500">
                              REST, CI/CD, Jest
                            </span>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </DrawerDescription>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>

      <section>
        {/* Grid Container */}
        <div
          ref={scope}
          className="w-full h-full xl:overflow-y-auto p-6 scrollbar grid grid-cols-1 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10"
        >
          {/* Grid items */}
          {siteConfig.items.map((item, i) => (
            <GridItem
              key={item.title + i}
              size={item.layout}
              onClick={() => {
                if (item.type === "experience") {
                  setOpen(true);
                  setCardItem(item);
                }
              }}
            >
              {item.type === "social" && <SocialBox item={item} />}

              {item.type === "experience" && (
                <FollowerPointerCard
                  title={<TitleComponent title={"Click to learn more"} />}
                >
                  <WorkBox item={item} />
                </FollowerPointerCard>
              )}

              {item.type === "project" && <ProjectBox item={item} />}
            </GridItem>
          ))}
        </div>
      </section>
    </>
  );
};

export default RightSide;

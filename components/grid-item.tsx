import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { FC } from "react";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center border border-neutral-100 dark:border-neutral-800 ",
  {
    variants: {
      size: {
        "1x2": "col-span-1 row-span-2 p-8",
        "2x2": "col-span-1 md:col-span-2 row-span-2 p-8",
        "4x3": "col-span-1 md:col-span-4 row-span-3 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem: FC<GridItemProps> = ({ size, children }) => {
  const { theme } = useTheme();
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    //@ts-ignore
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.8,
      }}
      className={cn(variants({ size }))}
      // @ts-ignore
      onMouseMove={handleMouseMove}
      style={{
        background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  ${
                    theme === "dark"
                      ? "rgba(173, 173, 173, 0.1)"
                      : "rgba(0,0,0,0.1)"
                  } 0%,
                  transparent 80%
                )
              `,
      }}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;

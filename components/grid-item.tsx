import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center",
  {
    variants: {
      size: {
        "1x2": "col-span-1 row-span-2 p-8",
        "2x1": "col-span-2 row-span-1",
        "2x2": "col-span-2 row-span-2 p-8",
        "2x4": "col-span-2 row-span-4",
        "4x2": "col-span-4 row-span-2 ",
        "4x4": "col-span-4 row-span-4",
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
  return <div className={cn(variants({ size }))}>{children}</div>;
};

export default GridItem;

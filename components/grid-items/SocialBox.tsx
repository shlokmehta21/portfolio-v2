"use client";
import { GridItemInterface } from "@/config/site-config";
import { FC } from "react";
import Button from "../button";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

interface SocialBoxProps {
  item: GridItemInterface;
}

const SocialBox: FC<SocialBoxProps> = ({ item }) => {
  return (
    <Link href={item.pageLink ?? (item.buttonLink as string)} target="_blank">
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        {item.icon === "github" ? <GithubIcon /> : <></>}
        {item.icon === "linkedin" ? <LinkedinIcon /> : <></>}
        {item.icon === "download" ? <DownloadIcon /> : <></>}
        {/* Button */}
        <div className="xl:hidden md:hidden sm:hidden">
          {item.buttonTitle === "Download" ? (
            <></>
          ) : (
            <Button
              text={(item.buttonTitle as string) ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={item.color}
            />
          )}
        </div>
        {item.layout === "2x2" && (
          <Button
            text={(item.buttonTitle as string) ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )}
      </div>
      {/* Content container */}
      <div className="mt-2">
        {/* Title */}
        <div className=" text-lg font-semibold">{item.title}</div>
        {/* Username */}
        <div className="text-sm text-neutral-500">{item.username}</div>
        {/* Description */}
        {item.description && (
          <div className="text-sm text-neutral-500 mt-1">
            {item.description}
          </div>
        )}
      </div>
      {/* button */}

      {item.layout === "1x2" && (
        <div className="mt-2 hidden sm:block">
          <Button
            text={(item.buttonTitle as string) ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        </div>
      )}
    </Link>
  );
};

export default SocialBox;

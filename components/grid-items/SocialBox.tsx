import { GridItemInterface } from "@/config/site-config";
import { FC } from "react";
import Icon from "../icons";
import Button from "../button";

interface SocialBoxProps {
  item: GridItemInterface;
}

const SocialBox: FC<SocialBoxProps> = ({ item }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <Icon type={item.icon as string} />
        {/* Button */}
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
        <div className="text-lg font-semibold">{item.title}</div>
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
        <div className="mt-2">
          <Button
            text={(item.buttonTitle as string) ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        </div>
      )}
    </div>
  );
};

export default SocialBox;

import { GridItemInterface } from "@/config/site-config";
import { Briefcase } from "lucide-react";
import { FC } from "react";

interface WorkBoxProps {
  item: GridItemInterface;
}

const WorkBox: FC<WorkBoxProps> = ({ item }) => {
  return (
    <section>
      <div className="mt-2">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase size={24} />
          Experiance
        </div>
        <div className="text-lg font-semibold mb-2 md:mb-0">{item.title}</div>
        <div className="text-sm text-neutral-500">{item.username}</div>
        <div className="text-sm text-neutral-500 mt-1">{item.description}</div>
      </div>
    </section>
  );
};

export default WorkBox;

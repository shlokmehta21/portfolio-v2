"use client";
import { FC } from "react";
import { Dice1, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import Indicator from "./Indicator";

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-xs sm:text-sm font-medium border rounded-md border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800/25">
          <MessageCircle size="14" />
          Chat with me
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[525px] z-50 border-neutral-200 dark:border-neutral-800 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span>Chat with me</span>
            <Indicator />
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-96 lg:h-[500px] overflow-y-auto">
          <ChatMessages className="px-2 py-3 flex-1" />
          <ChatInput className="px-4" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Chat;

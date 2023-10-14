"use client";
import { MessagesContext } from "@/context/Messages";
import { Message } from "@/lib/validators";
import { cn } from "@/utils/cn";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useToast } from "@/components/ui/use-toast";
import { text } from "stream/consumers";
import { CornerDownLeft, Loader2 } from "lucide-react";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { toast } = useToast();

  const [input, setInput] = useState<string>("");
  const {
    messages,
    addMessage,
    removeMessage,
    setIsMessageUpdating,
    updateMessage,
  } = useContext(MessagesContext);

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [message] }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.body;
    },
    onMutate(message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream returned from server");

      // construct new message to add
      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      // add new message to state
      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      // clean up
      setIsMessageUpdating(false);
      setInput("");

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },
    onError: (_, message) => {
      console.log("error", message);

      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  return (
    <div
      {...props}
      className={cn("border-t border-neutral-200 dark:border-neutral-800")}
    >
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          rows={2}
          maxRows={4}
          disabled={isLoading}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Ask a question or say hi!"
          className="peer disabled:opacity-50 pr-14 font-medium rounded-lg px-4 resize-none border-none outline-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 dark:text-neutral-200 dark:bg-neutral-800/25 text-sm sm:leading-6"
        />

        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
            {isLoading ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <CornerDownLeft
                cursor={input ? "pointer" : "not-allowed"}
                onClick={(e) => {
                  e.preventDefault();

                  const message = {
                    id: nanoid(),
                    isUserMessage: true,
                    text: input,
                  };

                  sendMessage(message);
                }}
                className="w-3 h-3"
              />
            )}
          </kbd>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ChatInput;

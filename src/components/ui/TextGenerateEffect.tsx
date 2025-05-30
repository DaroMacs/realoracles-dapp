"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          console.log(word);

          return (
            <motion.span
              key={word + idx}
              className={"dark:text-white text-black opacity-0"}
              style={{
                ...(idx === 0 || idx === 3 || idx === 6
                  ? {
                      background:
                        "linear-gradient(90deg, #446dcd, #4bb6d3, #6ef2cc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : {}),
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word === "On-Chain" ? (
                <>
                  <br />
                  On-Chain
                </>
              ) : (
                word
              )}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

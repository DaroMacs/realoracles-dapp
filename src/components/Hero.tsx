"use client";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

import { GoArrowUpRight } from "react-icons/go";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const { authenticated } = usePrivy();
  const router = useRouter();

  return (
    <div className="pt-24">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#4bb6d3"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#6ef2cc"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm md:text-base text-center text-blue-100 max-w-80 pb-12">
            Powered by{" "}
            <span
              style={{
                color: "#446dcd",
              }}
            >
              IRL-Oracld
            </span>
          </p>

          <TextGenerateEffect
            words="Verifiable, Accessible and Transparent Physical Data On-Chain"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-8"
          />

          {authenticated && (
            <MagicButton
              title={"Go to Dashboard"}
              icon={<GoArrowUpRight />}
              position="right"
              handleClick={() => router.push("/dashboard")}
              otherClasses="!bg-[#161A31]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

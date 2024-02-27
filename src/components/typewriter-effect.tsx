"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Innovate",
    },
    {
      text: "Integrate",
    },
    {
      text: "Inspire.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-2 lg:py-4">
  <p className="text-center text-neutral-600 dark:text-neutral-200 text-sm sm:text-base lg:text-lg max-w-lg mb-4">
    A seasoned full-stack developer passionate about creating digital
    solutions that make an impact. Let's embark on a coding adventure!
  </p>
  <TypewriterEffectSmooth words={words} />
  <div className="flex flex-col md:flex-row gap-4 mt-8">
    <button className="w-full p-2 md:w-auto h-10 md:h-12 rounded-xl bg-black border border-transparent text-white text-sm md:text-base">
      Discover my projects
    </button>
    <button className="w-full p-2 md:w-auto h-10 md:h-12 rounded-xl bg-white border border-black text-black text-sm md:text-base">
      Get in touch
    </button>
  </div>
</div>

  );
}

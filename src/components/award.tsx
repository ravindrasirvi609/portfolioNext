import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface AwardProps {
  // Define your props here
}

const Awards: React.FC<AwardProps> = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-sky-200 mb-4">Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            1st Runner Up in Hackathon for Web Development
          </h3>
          <p className="text-gray-700 dark:text-neutral-300 mb-2">
            Parul University
          </p>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            2st Runner Up in Techno-Fest Events in inter-colleages
          </h3>
          <p className="text-gray-700 dark:text-neutral-300 mb-2">
            Parul University
          </p>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Awards;

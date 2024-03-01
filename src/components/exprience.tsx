import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface ExperienceProps {
  // Define your props here
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Angular Developer
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 mb-2">
              June 2023 - Present
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              <a href="#" className="underline">
                Samcom
              </a>{" "}
              | Ahemdabad, India
            </p>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Solutions Developer
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 mb-2">
              November 2022 - May 2023
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              <a href="https://quadwave.com/" className="underline">
                Quadwave Consulting pvt. ltd.
              </a>{" "}
              | Pune, India
            </p>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Solutions Developer Intern
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 mb-2">
              April 2022 - Octomber 2022
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              <a href="https://quadwave.com/" className="underline">
                Quadwave Consulting pvt. ltd.
              </a>{" "}
              | Pune, India
            </p>
          </BackgroundGradient>
        </div>
      </section>
    </div>
  );
};

export default Experience;

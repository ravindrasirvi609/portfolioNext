import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface CertiFicateProps {
  // Define your props here
}

const Certification: React.FC<CertiFicateProps> = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-sky-200 mb-4">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-2xl font-bold text-black dark:text-white">
          Angular: The Complete Guide (2022 Edition)
        </h3>
        <p className="text-gray-700 dark:text-neutral-300 mb-2">Udemy</p>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-2xl font-bold text-black dark:text-white">
          The Complete 2022 Web Development Bootcamp
        </h3>
        <p className="text-gray-700 dark:text-neutral-300 mb-2">Udemy</p>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-2xl font-bold text-black dark:text-white">
          Azure Fundamentals (AZ-900)
        </h3>
        <p className="text-gray-700 dark:text-neutral-300 mb-2">Udemy</p>
      </BackgroundGradient>
      </div>
    </section>
  );
};

export default Certification;

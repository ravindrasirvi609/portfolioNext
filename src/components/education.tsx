import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface EducationProps {
  // Define your props here
}

const Education: React.FC<EducationProps> = () => {
  return (
    <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 mb-2">
              2019 - 2023
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              <a href="https://paruluniversity.ac.in/" className="underline">
                Parul University
              </a>{" "}
              | Vadodara, India
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
              Higher Secondary School
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 mb-2">2018</p>
            <p className="text-gray-700 dark:text-neutral-300">
              <a
                href="https://rajeduboard.rajasthan.gov.in/"
                className="underline"
              >
                Rajsthan Board of Secondary Education
              </a>{" "}
              | Jodhpur, India
            </p>
          </BackgroundGradient>
        </div>
      </section>
    </div>
  );
};

export default Education;

import React from "react";

interface ExperienceProps {
  // Define your props here
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold text-black mb-2">Angular Developer</h3>
            <p className="text-gray-700 mb-2">June 2023 - Present</p>
            <p className="text-gray-700">
              <a href="#" className="underline">
                Samcom
              </a>{" "}
              | Ahemdabad, India
            </p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold text-black mb-2">Solutions Developer</h3>
            <p className="text-gray-700 mb-2">November 2022 - May 2023</p>
            <p className="text-gray-700">
              <a href="https://quadwave.com/" className="underline">
                Quadwave Consulting pvt. ltd.
              </a>{" "}
              | Pune, India
            </p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold text-black mb-2">
              Solutions Developer Intern
            </h3>
            <p className="text-gray-700 mb-2">April 2022 - Octomber 2022</p>
            <p className="text-gray-700">
              <a href="https://quadwave.com/" className="underline">
                Quadwave Consulting pvt. ltd.
              </a>{" "}
              | Pune, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

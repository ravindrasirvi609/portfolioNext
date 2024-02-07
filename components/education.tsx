import React from "react";

interface EducationProps {
  // Define your props here
}

const Education: React.FC<EducationProps> = () => {
  return (
    <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="text-gray-700 mb-2">2019 - 2023</p>
            <p className="text-gray-700">
              <a href="https://paruluniversity.ac.in/" className="underline">
                Parul University
              </a>{" "}
              | Vadodara, India
            </p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">Higher Secondary School</h3>
            <p className="text-gray-700 mb-2">2018</p>
            <p className="text-gray-700">
              <a
                href="https://rajeduboard.rajasthan.gov.in/"
                className="underline"
              >
                Rajsthan Board of Secondary Education
              </a>{" "}
              | Jodhpur, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

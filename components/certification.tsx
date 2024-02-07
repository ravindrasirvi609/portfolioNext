import React from "react";

interface CertiFicateProps {
  // Define your props here
}

const Certification: React.FC<CertiFicateProps> = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-sky-200 mb-4">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 border rounded-md shadow-md bg-sky-500">
          <h3 className="text-xl font-bold mb-2">
            Angular: The Complete Guide (2022 Edition)
          </h3>
          <p className="text-gray-700 mb-2">Udemy</p>
        </div>
        <div className="p-4 border rounded-md shadow-md bg-sky-500">
          <h3 className="text-xl font-bold mb-2">
            The Complete 2022 Web Development Bootcamp
          </h3>
          <p className="text-gray-700 mb-2">Udemy</p>
        </div>
      </div>
    </section>
  );
};

export default Certification;

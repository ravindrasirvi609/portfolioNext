import React from "react";

interface AwardProps {
  // Define your props here
}

const Awards: React.FC<AwardProps> = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-sky-200 mb-4">Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 border rounded-md shadow-md bg-sky-500">
          <h3 className="text-xl font-bold mb-2">
            1st Runner Up in Hackathon for Web Development
          </h3>
          <p className="text-gray-700 mb-2">Parul University</p>
        </div>
        <div className="p-4 border rounded-md shadow-md bg-sky-500">
          <h3 className="text-xl font-bold mb-2">
            2st Runner Up in Techno-Fest Events in inter-colleages
          </h3>
          <p className="text-gray-700 mb-2">Parul University</p>
        </div>
      </div>
    </section>
  );
};

export default Awards;

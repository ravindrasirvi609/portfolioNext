import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"

const SkillCard = ({ title, items }: { title: string, items: string[] }) => (
  <div className="p-4 border rounded-md shadow-md bg-sky-800">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description }: { title: string, description: string }) => (
  <div className="p-4 border rounded-md shadow-md bg-sky-800">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default function Home() {
  const skills = [
    {
      title: "Frontend Development",
      items: ["React.js", "Next.js", "HTML, CSS, JavaScript"],
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "Database Management (MongoDB, MySQL)"],
    },
    {
      title: "Other Skills",
      items: ["Version Control (Git)", "API Design and Integration", "UI/UX Design"],
    },
  ];

  const projects = [
    { title: "Project 1", description: "Description of the project goes here." },
    { title: "Project 2", description: "Description of the project goes here." },
    // Add more projects as needed
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-24 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div className="relative flex items-center justify-center w-full h-64 md:h-96 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      <div className="text-center">
        <h1 className="font-bold text-4xl md:text-6xl mb-4 text-sky-800">
          Welcome! I'm Ravindra,
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          A seasoned full-stack developer passionate about creating digital
          solutions that make an impact. Let's embark on a coding adventure!
        </p>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Innovate, Integrate, Inspire
        </p>
        <p className="text-lg md:text-xl text-sky-800 mt-4">
          <a href="#" className="underline">
            Discover my projects
          </a>{" "}
          or{" "}
          <a href="#" className="underline">
            get in touch
          </a>{" "}
          to discuss your unique ideas.
        </p>
      </div>

      {/* Skills Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Contact</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="input"
              id="message"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="btn bg-red-400 rounded-3xl text-sky-800 font-bold py-2 px-4 hover:bg-red-800"
            type="button"
            
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

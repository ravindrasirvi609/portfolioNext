import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="p-4 border rounded-md shadow-md bg-sky-500">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-4 border rounded-md shadow-md bg-sky-500">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default function Home() {
  const skills = [
    {
      title: "Frontend Development",
      items: [
        "Angular",
        "React.js",
        "Next.js",
        "HTML, CSS, JavaScript",
        "Typescript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "ASP.Net Core",
        "Node.js",
        "Express.js",
        "Database Management (MongoDB, MySQL)",
      ],
    },
    {
      title: "Other Skills",
      items: [
        "Version Control (Git)",
        "API Design and Integration",
        "UI/UX Design",
        "Agile Methodologies",
        "CI/CD",
        "Docker",
      ],
    },
  ];

  const projects = [
    {
      title: "Business Risk Management Web Application",
      description:
        "Implemented a comprehensive business risk management system, identifying, classifying, and assigning impact scores to enhance financial stability and operational efficiency. Achieved a 24% reduction in non-essential costs while prioritizing resources through total-cost analysis.",
    },
    {
      title: "Social: Angular Social Media Web Application",
      description:
        "Crafted a dynamic social media app using Angular, enabling users to create, like, and comment on posts. The app also includes a real-time chat feature, fostering engaging interactions and seamless communication among users.",
    },
    {
      title: "Pharma Event Registration Platform (Next.js 14)",
      description:
        "Engineered a Next.js 14 project for Pharma Students and Conferences Registration. This platform ensures secure authentication, real-time updates, and responsiveness. Integrated payment gateways facilitate smooth transactions, offering an efficient solution for both students and conference organizers. Explore the firsthand experience through the project link.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-24 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div className="relative flex items-center justify-center w-full h-64 md:h-96 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <div className="text-center">
        <h1 className="font-bold text-4xl md:text-6xl mb-4 text-sky-800">
          Welcome! I'm Ravindra,
        </h1>
        <SpeedInsights></SpeedInsights>
        <p className="text-lg md:text-xl text-gray-700">
          A seasoned full-stack developer passionate about creating digital
          solutions that make an impact. Let's embark on a coding adventure!
        </p>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Innovate, Integrate, Inspire
        </p>
        {/* <p className="text-lg md:text-xl text-sky-800 mt-4">
          <a href="#" className="underline">
            Discover my projects
          </a>{" "}
          or{" "}
          <a href="#" className="underline">
            get in touch
          </a>{" "}
          to discuss your unique ideas.
        </p> */}
      </div>

      {/* About Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Ravindra"
              width={300}
              height={300}
              className="rounded-full"
              layout="responsive"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-700">
              Highly motivated Computer Science and Engineering graduate with
              one year of professional experience as a Full Stack Developer.
              Possesses a strong understanding of web development principles,
              with profciency in HTML, CSS, TypeScript, and ASP.NET Core.
              Skilled in designing and developing responsive web applications
              using Angular, as well as integrating APIs and optimizing web
              performance. Committed to delivering high-quality work and eager
              to continue expanding skills and knowledge in the eld of software
              development.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              I have worked with clients from all over the world and I am
              passionate about learning new technologies and frameworks. I am
              currently looking for a full-time role in an innovative and
              challenging environment.
            </p>
          </div>
        </div>
      </section>

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

      {/* Experience Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">Angular Developer</h3>
            <p className="text-gray-700 mb-2">June 2023 - Present</p>
            <p className="text-gray-700">
              <a href="#" className="underline">
                Samcom
              </a>{" "}
              | Ahemdabad, India
            </p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">Solutions Developer</h3>
            <p className="text-gray-700 mb-2">November 2022 - May 2023</p>
            <p className="text-gray-700">
              <a href="#" className="underline">
                Quadwave Consulting pvt. ltd.
              </a>{" "}
              | Pune, India
            </p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">
              Solutions Developer Intern
            </h3>
            <p className="text-gray-700 mb-2">April 2022 - Octomber 2022</p>
            <p className="text-gray-700">
              <a href="#" className="underline">
                Quadwave Consulting pvt. ltd.
              </a>{" "}
              | Pune, India
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="text-gray-700 mb-2">2019 - 2023</p>
            <p className="text-gray-700">
              <a href="#" className="underline">
                Parul University
              </a>{" "}
              | Vadodara, India
            </p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">Higher Secondary School</h3>
            <p className="text-gray-700 mb-2">2018</p>
            <p className="text-gray-700">
              <a href="#" className="underline">
                Rajsthan Board of Secondary Education
              </a>{" "}
              | Jodhpur, India
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Certifications</h2>
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

      {/* Awards Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">
              1st Runner Up in Hackathon
            </h3>
            <p className="text-gray-700 mb-2">Parul University</p>
          </div>
          <div className="p-4 border rounded-md shadow-md bg-sky-500">
            <h3 className="text-xl font-bold mb-2">
              1st Runner Up in Hackathon
            </h3>
            <p className="text-gray-700 mb-2">Parul University</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Contact</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
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

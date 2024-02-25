"use client";
import Image from "next/image";
import { ProjectCard } from "../components/projectcard";
import Experience from "../components/exprience";
import Education from "../components/education";
import Certification from "../components/certification";
import Awards from "../components/award";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Get the section element by its ID
    const section = document.getElementById("rainbow-section");

    // Function to check if the section is in the viewport
    function isInViewport(element: HTMLElement | null) {
      if (element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      }
      return false;
    }

    // Function to handle the scroll event
    function handleScroll() {
      if (section && isInViewport(section)) {
        section.classList.add("rainbow-background");
        section.style.opacity = "1";
      } else if (section){
        section.classList.remove("rainbow-background");
        section.style.opacity = "0";
      }
    }

    // Add the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      items: [
        "Angular",
        "React.js",
        "Next.js",
        "HTML",
        "CSS",
        "JavaScript",
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
        "RESTful APIs",
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
        "kubernates",
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
      title: "Social:Social Media Web Application",
      description:
        "Crafted a dynamic social media app using Angular, enabling users to create, like, and comment on posts. The app also includes a real-time chat feature, fostering engaging interactions and seamless communication among users.",
    },
    {
      title: "Pharma Student Registration Platform (Next.js 14)",
      description:
        "Engineered a Next.js 14 project for Pharma Students and Conferences Registration. This platform ensures secure authentication, real-time updates, and responsiveness. Integrated payment gateways facilitate smooth transactions, offering an efficient solution for both students and conference organizers. Explore the firsthand experience through the project link.",
    },
    {
      title: "Event Management (Next.js 14)",
      description:
        "Event Management Tools Used: Clerk Authentication, ShadCN UI, and Stripe Payment Gateway. With this application, organizations can create events, and users have the option to join these events, which may have optional prices.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-24 bg-gradient-to-r from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="my-8 lg:my-16 xl:my-24 flex flex-col lg:flex-row items-center justify-center">
        <div className="content text-center lg:text-left">
          <h2 className="text-base md:text-4xl xl:text-5xl font-bold mb-4">
            Welcome!
          </h2>
          <h2 className="text-base md:text-4xl xl:text-5xl font-bold mb-4">
            Welcome!
          </h2>
        </div>
      </section>
      <div className="text-center">
        <h1
          className="font-bold text-4xl md:text-6xl my-12 text-sky-200"
          id="rainbow-section"
        >
          I'm Ravindra,
        </h1>

        <p className="text-lg md:text-xl text-sky-300">
          A seasoned full-stack developer passionate about creating digital
          solutions that make an impact. Let's embark on a coding adventure!
        </p>
        <p className="text-xl md:text-2xl text-sky-400 font-bold mt-4">
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
      <section className="mt-44">
        <h2 className="text-3xl font-bold text-sky-200 mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center md:w-96 md:h-96">
            <Image
              src="/profile.jpg"
              alt="Ravindra"
              width={300}
              height={300}
              className="rounded-full"
            />
            <h3 className="text-xl font-bold text-sky-200 mt-4">Ravindra</h3>
            <p className="text-base md:text-xl lg:text-lg text-sky-400">
              Full Stack Developer
            </p>
          </div>
          <div className="md:w-full text-center">
            <p
              id="rainbow-section"
              className="text-base md:text-xl lg:text-lg text-sky-400"
            >
              Highly motivated Computer Science and Engineering graduate with
              two years of professional experience as a Full Stack Developer.
              Possesses a strong understanding of web development principles,
              with proficiency in{" "}
              <span className="text-sky-200">
                HTML, CSS, TypeScript, JavaScript{" "}
              </span>{" "}
              and <span className="text-sky-200">ASP.NET Core.</span> Skilled in
              designing and developing responsive web applications using{" "}
              <span className="text-sky-200">Angular</span> and{" "}
              <span className="text-sky-200">Next JS</span> Frameworks, as well
              as integrating APIs and optimizing web performance. Committed to
              delivering high-quality work and eager to continue expanding
              skills and knowledge in the field of software development.
            </p>
            <p className="text-base md:text-xl lg:text-lg text-sky-400 mt-4">
              I have worked with clients from all over the world and I am
              passionate about learning new technologies and frameworks. I am
              currently looking for a full-time role in an innovative and
              challenging environment.
            </p>
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="flex flex-wrap justify-center items-center">
            <Image
              src={"/assets/angular-new.png"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />
            <Image
              src={"/assets/React-icon.svg.png"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />
            <Image
              src={"/assets/next-js.svg"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />
            <Image
              src={"/assets/JavaScript-logo.png"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />
            <Image
              src={"/assets/Typescript_logo_2020.svg.png"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />
            <Image
              src={"/assets/Tailwind_CSS_Logo.svg.png"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />
            <Image
              src={"/assets/Bootstrap_logo.svg.png"}
              alt={""}
              width={100}
              height={100}
              className="m-4"
            />

            <Image
              src={"/assets/netcore.png"}
              alt={""}
              width={200}
              height={200}
              className="m-4"
            />
            <Image
              src={"/assets/Node.png"}
              alt={""}
              width={200}
              height={200}
              className="m-4"
            />
            <Image
              src={"/assets/MongoDB-Logo.png"}
              alt={""}
              width={200}
              height={200}
              className="m-4"
            />
            <Image
              src={"/assets/mysql.png"}
              alt={""}
              width={200}
              height={200}
              className="m-4"
            />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ title, items }) => (
            // <SkillCard key={index} {...skill} />
            <div className="p-4 border rounded-md shadow-md bg-sky-500">
              <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
              <ul className="list-disc list-inside">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <Experience />
      {/* Education Section */}
      <Education />
      {/* Certifications Section */}
      <Certification />
      {/* Awards Section */}
      <Awards />
      {/* Contact Section */}
      <section className="container mx-auto p-4 md:py-12 bg-sky-500 rounded-lg shadow-md mt-16">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact
        </h2>

        <form className="max-w-md mx-auto px-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </section>{" "}
    </main>
  );
}

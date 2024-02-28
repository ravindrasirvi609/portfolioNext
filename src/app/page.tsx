"use client";
import Image from "next/image";
import { ProjectCard } from "../components/projectcard";
import Experience from "../components/exprience";
import Education from "../components/education";
import Certification from "../components/certification";
import Awards from "../components/award";
import { ThreeDCardDemo } from "@/components/tech-card";
import { SparklesPreview } from "@/components/spark";
import { TypewriterEffectSmoothDemo } from "@/components/typewriter-effect";
import { projects, skills, words } from "@/data";
import { MeteorsDemo } from "@/components/meteorscards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-16 lg:p-24 bg-slate-900 md:ml-72 lg:ml-2">
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
      <div className="text-center mx-auto max-w-screen-lg px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-sky-200">
          <SparklesPreview />
        </h1>
        <TypewriterEffectSmoothDemo />
        {/* Add responsive styling to the paragraph if needed */}
        {/* <p className="text-base md:text-lg lg:text-xl text-sky-800 mt-4">
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
            <TextGenerateEffect words={words} />
            {/* <p
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
            </p> */}
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex items-center justify-center">
              <ThreeDCardDemo />
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ title, items }, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-md bg-sky-500"
            >
              <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
              <ul className="list-disc list-inside">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
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
            <MeteorsDemo key={index} {...project} />
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

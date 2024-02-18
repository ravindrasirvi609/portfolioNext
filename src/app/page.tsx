import Image from "next/image";
import { SkillCard } from "../../components/skillcard";
import { ProjectCard } from "../../components/projectcard";
import Experience from "../../components/exprience";
import Education from "../../components/education";
import Certification from "../../components/certification";
import Awards from "../../components/award";
import Contact from "../../components/contact";

export default function Home() {
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
        <h1 className="font-bold text-4xl md:text-6xl my-12 text-sky-200">
          I'm Ravindra,
        </h1>

        <p className="text-lg md:text-xl text-sky-300">
          A seasoned full-stack developer passionate about creating digital
          solutions that make an impact. Let's embark on a coding adventure!
        </p>
        <p className="text-lg md:text-xl text-sky-400 mt-4">
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
              layout="responsive"
            />
          </div>
          <div className="md:w-full text-center">
            <p className="text-base md:text-xl lg:text-lg text-sky-400">
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
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
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
      <Contact />
    </main>
  );
}

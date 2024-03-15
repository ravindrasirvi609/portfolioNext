"use client";
import Image from "next/image";
import Experience from "../components/exprience";
import Education from "../components/education";
import Certification from "../components/certification";
import Awards from "../components/award";
import { ThreeDCardDemo } from "@/components/tech-card";
import { SparklesPreview } from "@/components/spark";
import { TypewriterEffectSmoothDemo } from "@/components/typewriter-effect";
import { projects, skillList, skills, words } from "@/data";
import { MeteorsDemo } from "@/components/meteorscards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const contactLinks = [
  {
    icon: <FaEnvelope className="mr-2" />,
    text: "Email",
    href: "mailto:sirviravindra609@gmail.com",
  },
  {
    icon: <FaPhone className="mr-2" />,
    text: "Contact No.",
    href: "tel:+918107199052",
  },
  {
    icon: <FaLinkedin className="mr-2" />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/ravindra-sirvi/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: <FaGithub className="mr-2" />,
    text: "GitHub",
    href: "https://github.com/ravindrasirvi609",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
const ContactLink = ({ icon, text, href, target, rel }: any) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      className="flex items-center text-xl text-sky-300 hover:text-sky-200"
      href={href}
      target={target}
      rel={rel}
    >
      {icon}
      {text}
    </motion.a>
  );
};
export default function Home() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    message: ''
  });
  const [Loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a timeout
    }, 10000); // Adjust timeout duration as needed (e.g., 10 seconds)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timer);
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(newLocation);
          console.log("Location:", newLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoading(false); // Set loading state to false on error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoading(false); // Set loading state to false if geolocation is not supported
    }

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  useEffect(() => {
    if (location) {
      submitHandler(location);
    }
  }, [location]);

  const submitHandler = async (location: { latitude: number; longitude: number; }) => {
    try {
      const response = await axios.post("/api/addVisitor", location);
      console.log(response);
    } catch (error) {
      console.error("Error submitting location:", error);
    }
  };

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Show loader

    try {
      const response = await axios.post("/api/userData", formData);
      console.log(response);
      setIsSubmitted(true); // Mark form as submitted

      // You can add a message or perform any other action to indicate successful submission here
    } catch (error) {
      console.error("Error submitting user:", error);
      // Handle error state here
    }
    finally {
      setLoading(false); // Hide loader regardless of success or failure
      setFormData({ // Reset form fields
        name: '',
        mobileNo: '',
        email: '',
        message: ''
      });
    }
  };


  return (
    //  <BackgroundGradientAnimation>

    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-16 lg:p-24 bg-slate-900 extra-margin">
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
      </div>
      {/* About Section */}
      <section className="mt-44">
        <h2 className="text-3xl font-bold text-sky-200 mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center md:w-96 md:h-96 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Ravindra"
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105 rotate-3"
              style={{ perspective: "1000px" }}
            />

            <h3 className="text-xl font-bold text-sky-200 mt-4">Ravindra</h3>
            <p className="text-base md:text-xl lg:text-lg text-sky-400">
              Full Stack Developer
            </p>
            <div className="flex mt-4 space-x-4">
              {contactLinks.map((link) => (
                <ContactLink key={link.text} {...link} />
              ))}
            </div>
          </div>
          <div className="md:w-full text-center">
            <TextGenerateEffect words={words} />
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
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect
            items={skills.map((skill, index) => ({
              title: skill.title,
              description: (
                <ul className="list-disc ml-6">
                  {skill.items.map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              ),
              link: "",
            }))}
          />
        </div>
      </section>
      {/* Projects Section */}
      <section className="mt-12" id="projects">
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
      <section
        className="container mx-auto p-4 md:py-12 rounded-lg shadow-md mt-16"
        id="contact"
      >
        <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute inset-0 z-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Contact
          </p>

          <form className="w-full max-w-md px-4 relative z-10" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
            </div>

            <div className="mb-4">
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 mb-2">Mobile No.</label>
              <input type="number" id="mobileNo" value={formData.mobileNo} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Mobile No" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" rows={4} placeholder="Your Message"></textarea>
            </div>
            {Loading && <div>Loading...</div>}
            {isSubmitted && <div>Form submitted successfully!</div>}
            <button type="submit" disabled={Loading} className="w-full mb-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
          </form>
        </div>
      </section>
    </main >
    //   </BackgroundGradientAnimation>
  );
}

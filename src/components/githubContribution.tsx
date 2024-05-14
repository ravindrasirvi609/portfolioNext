import React, { useEffect } from "react";
import { gsap, Power3, TimelineLite } from "gsap"; // Use gsap for all animation functions
import Link from "next/link";

const GithubContributions = () => {
  useEffect(() => {
    const tl = new TimelineLite({ delay: 0.5 }); // Create a TimelineLite for sequenced animations

    // Animate the title: Fade in and slide down from top
    tl.from(".text-3xl", 1, {
      opacity: 0,
      y: -50,
      ease: Power3.easeOut,
    });

    tl.from(".text-lg", 1, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
    });

    tl.from(".github-chart", 1, {
      opacity: 0,
      ease: Power3.easeOut,
    });

    tl.staggerFromTo(
      ".github-chart img",
      0.3,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, ease: Power3.easeOut },
      0.1
    );

    // Add a unique GSAP animation
    tl.from(".github-chart img", 1, {
      rotation: 360,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="mt-20 text-center transition-all duration-500">
      <h1 className="text-3xl font-black mb-4 text-white transition-all duration-500">
        My Github Contributions
      </h1>
      <p className="text-lg text-bold mb-8 text-pink-500  transition-all duration-500">
        Check out my GitHub activity over time:
      </p>
      <div className="github-chart">
        <a
          href="https://github.com/ravindrasirvi609"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-lg shadow-lg transition-all duration-500"
            src="https://ghchart.rshah.org/FF00FF/ravindrasirvi609"
            alt="Ravindra's Github chart"
            width={1000}
            height={600}
          />
        </a>
      </div>
    </div>
  );
};

export default GithubContributions;

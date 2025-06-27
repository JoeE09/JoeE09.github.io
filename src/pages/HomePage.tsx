import ProjectsSection from "@/components/ProjectsSection";
import { useState, useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TechnologiesList from "@/components/TechnologiesList";
import Timeline6 from "@/components/Timeline6";
import MainSkills2 from "@/components/MainSkills2";

export default function HomePage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   setCursorPos({ x: e.clientX, y: e.clientY });
  // };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setVisible(inside);
      if (inside) {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

  window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-gray-900">

      {/* Intro + About */}
      <section 
        ref={sectionRef}
        className="relative bg-gray-900 text-white px-6 md:px-12 py-12 min-h-[70vh] flex items-center justify-center text-center"
        // onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
      {/* Cursor Glow Circle */}
      <div
        className={`pointer-events-none fixed z-20 w-40 h-40 rounded-full bg-white/10 blur-xl transition-opacity duration-300`}
        style={{
          left: cursorPos.x - 80,
          top: cursorPos.y - 80,
          opacity: visible ? 1 : 0,
        }}
      ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[700px] aspect-square bg-white/10 blur-3xl rounded-full z-0 animate-delayed-fade opacity-0"></div>

        <div className="mx-auto z-10 relative text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-customGreen text-center drop-shadow-glow">
            <AnimatedText delayStep={0.35} duration={0.7} translateAmount={-15}>Engineer. Automator. Developer.</AnimatedText>
            {/* {["Engineer.", "Automator.", "Toolmaker."].map((word, idx) => (
              <span
                key={idx}
                className="inline-block animate-fade-down drop-shadow-glow"
                style={{ animationDelay: `${idx * 0.5}s`, animationFillMode: "both" }}
              >
                {word}&nbsp;
              </span>
            ))} */}
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedText delayStep={0.05} baseDelay={1.5} translateAmount={-7} translateDirection = "X" duration={0.3}>
              <p className="text-lg text-gray-300 mb-4">
                I'm Joseph — I engineer tools that make work faster and life simpler.
              </p>
            </AnimatedText>
            <AnimatedText delayStep={0.017} baseDelay={2.6} alternate="word" translateAmount={8} translateDirection = "X" duration={0.6}>
              <p className="text-md text-gray-400">
                I'm a mechanical engineer that specializes in designing tools to eliminate repetitive tasks and extract insights from data, whether it's extending engineering capabilities or streamlining operations for any business. I've developed custom software add-ins, automation systems, intuitive interfaces, and personal tools to enhance productivity and make both work and life simpler.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-white px-6 md:px-12 pt-20 bg-gradient-to-b from-gray-100 to-white">
        <h3 className="home-header mb-2">
          Overview
        </h3>
        <p className="text-md text-gray-500 text-center mb-10">
          A summary of my engineering journey and the skills I've developed along the way
        </p>
        <Timeline6 />
        <h3 className="text-3xl font-bold text-customGreen text-center mb-2 mt-10">
          Skills
        </h3>
        <p className="text-md text-gray-500 text-center mb-8">
          Some of the key skills I've built through projects, education, and work experience
        </p>
        <MainSkills2 />
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white px-6 md:px-12 py-20">
        <h3 className="home-header mb-2">
          Projects
        </h3>
        <p className="text-md text-gray-500 text-center mb-16">
          A collection of solutions I've developed, from personal tools to professional projects
        </p>
        <ProjectsSection />
      </section>

      {/* Technologies */}
      {<section id="technologies" className="bg-white px-6 md:px-12 pb-12 pt-6 flex flex-col items-center">
        <h3 className="home-header mb-2">Technologies I Use</h3>
        <p className="text-md text-gray-500 text-center mb-16">
          Some of the technologies and tools I work with
        </p>
        
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Data and Automation
            </h2>
            <TechnologiesList 
              technologies={["Excel", "VBA", "Power Query", "PowerBI", "Google Apps Script", "Power Automate"]}
            />
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Programming
            </h2>
            <TechnologiesList 
              technologies={["Python", "JavaScript", "C#", "Java", "C++", "MATLAB"]}
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Web Interfaces
            </h2>
            <TechnologiesList 
              technologies={["HTML","CSS","JavaScript", "TypeScript", "React", "Tailwind CSS", "Vite", "Node.js"]}
            />
          </div>
      </section>}

      {/* Interests */}
      {/* <section id="interests" className="bg-gray-100 px-6 md:px-12 py-16">
        <h3 className="text-3xl font-semibold text-center text-customGreen mb-10">Interests</h3>

        <div className="mx-auto space-y-10">

          <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-xl text-center font-semibold mb-4 text-gray-800">Piano</h4>
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="aspect-[16/9] lg:w-1/2">
              <iframe
                src="https://www.youtube.com/embed/pCXl8jyikPc"
                title="Piano Performance"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
              <p className="text-sm text-gray-500">
                A recording of me playing Transcendental Étude No. 12 ("Chasse-Neige") by Franz Liszt
              </p>
            </div>

            <div className="lg:w-1/2 text-gray-700">
              <p className="text-md mb-2">
                
              </p>
            </div>
          </div>
        </div>

          <div className="bg-white rounded-xl shadow-md p-4">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Khan Academy Game</h4>
            <div className="relative min-h-[400px] overflow-hidden">
              <KABombDodge />
            </div>
          </div>
        </div>
      </section> */}
      
    </div>
  );
}

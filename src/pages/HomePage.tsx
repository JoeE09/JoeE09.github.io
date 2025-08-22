import ProjectsSection from "@/components/ProjectsSection";
import { useState, useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Timeline6 from "@/components/Timeline6";
import MainSkills2 from "@/components/MainSkills2";
import SkillsList from "@/components/SkillsList";

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
            <AnimatedText delayStep={0.35} duration={0.7} translateAmount={-15}>Engineer. Automator. Analyst.</AnimatedText>
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedText delayStep={0.05} baseDelay={1.5} translateAmount={-7} translateDirection = "X" duration={0.3}>
              <p className="text-lg text-gray-300 mb-4">
                Developing smarter systems with automation, analytics, and engineering.
              </p>
            </AnimatedText>
            <AnimatedText delayStep={0.017} baseDelay={2.6} alternate="word" translateAmount={8} translateDirection = "X" duration={0.6}>
              <p className="text-md text-gray-400">
                I'm Joseph, a mechanical engineering graduate with a broad skillset encompassing mechanical design, controls, software development, automation, and data analytics. I develop tools and systems that enable teams to accomplish more with fewer errors, or create data pipelines that allow enable better decision-making. My work has been in engineering, business, and personal environments.
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
        <h3 className="home-header mb-2">Capabilities & Tools</h3>
        {/* <p className="text-md text-gray-500 text-center mb-16">
          
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Engineering & Tools
            </h2>
            <SkillsList 
              skills={["AutoCAD", "SolidWorks", "Fusion 360", "Creo Parametric", "FEA basics", "GD&T", "Drafting & blueprints", "DFM/DFA", "Fabrication", "Hand & power tools"]}
            />
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Controls & Instrumentation
            </h2>
            <SkillsList 
              skills={["DAQ systems", "Sensors & transducers", "PLCs", "HMI/SCADA basics", "Smart relays", "Raspberry Pi", "ESP32", "MQTT"]}
            />
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Data & Analytics
            </h2>
            <SkillsList 
              skills={["Excel", "VBA", "Power Query", "Power Pivot", "Power BI", "Power Automate", "Apps Script", "Python", "Pandas", "MATLAB", "SQL", "REST APIs", "Automation scripting", "Add-ins"]}
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">
              Programming
            </h2>
            <SkillsList 
              skills={["Java", "C++", "C#", "JavaScript", "TypeScript", "HTML/CSS", "React", "Git", "Linux", "Shell scripts", "Web apps"]}
            />
          </div>
        </div>
      </section>}
      
    </div>
  );
}
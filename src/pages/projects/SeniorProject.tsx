import ProjectHero from "@/components/ProjectHero";
import Links from "@/components/ProjectLinks";
import VideoDemo from "@/components/VideoDemo";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function SeniorProject() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/crane-details.png"
        animationDelay={0.01}
        title="Senior Engineering Project"
        hero={{
          left: {"title":"The Setup","bullets":["The hypothetical client was expanding their manufacturing facility with a new industrial warehouse","Our project involved 3 teams: materials handling, mechanical, and structural"]},
          right: {"title":"My Contribution","bullets":["I was responsible for the structural design of the crane system, including load calculations and material selection.","Designed the layout and support structure for the crane in accordance with structural standards (e.g. AISC Steel Manual, Steel Specification, ASCE/SEI Codes).","Also was responsible for researching and selecting paint booths for a hypothetical production line.","Collaborated with other teams to ensure building structure could support design loads and that paint booths were compatible with material flow."]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <div className="max-w-3xl mx-auto mt-6">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview And Technical Constraints</h3>
            <p className="text-md text-gray-700 mb-4">This project was an academic simulation of a real-world engineering firm-style project. My role was split into two main parts, crane structure design and paint booth selection. Given the short timespan of the project, I spend the most time on the crane structure design, and less time on the paint booth setup (although I ensured that the paint booths met all relevant standards / constraints). Some of the main constraints for the crane design included:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Load Capacity and Rating:</strong>  The crane was required to lift a certain load (10 tons), with a particular frequency of movement.</li>
              <li><strong>Structural Standards:</strong>  There are many structural standards for the crane support structure, governing aspects such as deflection limits, safety factors, and load combinations.</li>
              <li><strong>Economics:</strong>  Support structure was to exceed the required load and deflection limits while still minimizing material usage and cost.</li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden mt-auto max-w-3xl mx-auto">
          <img src="/images/crane-section.png" alt="Crane Section" className="w-full rounded shadow" />
          <p className="text-sm text-gray-500 italic mt-2 text-center">Section View of the Crane</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="overflow-hidden mt-auto ">
            <img src="/images/crane-bumper-force.png" alt="Crane Bumper Force Estimation" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Designing a proper crane support structure involved analysis of worst-case loading scenarios</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Features</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Seamless Integration with Current Workflow:</strong></li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Proper Data Combination:</strong></li>
            </ul>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/crane-details2.png" alt="Connection Detail Views" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">The project required detailed drawings to specify how the support structure would be assembled, including the connection details.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["AutoCAD","AISC Steel Manual / Codes","Excel"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Cross-functional collaboration","Steel Design (ASD, LRFD)","Structural Analysis","Floor plan layouts"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
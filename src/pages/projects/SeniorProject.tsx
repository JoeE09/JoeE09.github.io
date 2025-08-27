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
          left: {"title":"My Role","bullets":["Participated with a team of 15 students to design an industrial warehouse (structural, mechanical, materials handling) for a hypothetical client.","Tasked to design an overhead crane system and select paint booths for the production line.","Had to ensure that the crane system and paint booths were integrated with the overall building design and met all relevant safety standards."]},
          right: {"title":"My Work","bullets":["Met with client and other team members to establish project requirements and constraints.","Researched and communicated with vendors to select equipment that met client specifications.","Conducted load analysis studies and calculated load combinations for the crane supports using relevant standards.","Selected and detailed appropriate steel components/assemblies to meet all loading and safety requirements in accordance with relevant codes and standards.","Created detailed drawings specifying equipment layouts and assembly details."]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <div className="max-w-3xl mx-auto mt-6">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview And Technical Constraints</h3>
            <p className="text-md text-gray-700 mb-4">This project was an academic simulation of a real-world engineering firm-style project. My role was split into two main parts, crane structure design and paint booth selection. Some of the main constraints for the crane design included:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Client Requirements:</strong>  Meetings with the client were required to establish design constraints for the crane system (e.g. maximum capacity, speed, service class) and paint booths (e.g. size, airflow, etc.).</li>
              <li><strong>Team Member Input:</strong>  Collaboration and communication with team members was necessary to ensure building structure could support the crane system and that adequate clearances / safety standards were maintained.</li>
              <li><strong>Structural / Safety Compliance:</strong>  The support structure design and safety standards were governed by various codes and standards (e.g. AISC, ASCE/SEI, CMAA, IBC, OSHA).</li>
              <li><strong>Economics:</strong>  Support structure was to meet all safety and serviceability requirements while minimizing material and assembly costs.</li>
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
            <p className="text-sm text-gray-500 italic mt-2 text-center">Worst-case loading scenarios were analyzed to ensure the crane support structure could withstand extreme conditions.</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Design Scope</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Load Combinations and Analysis:</strong>  The crane system was designed to accommodate various load combinations, including static, dynamic, and impact loads. Detailed analysis was performed to ensure all potential loading scenarios were considered.</li>
              <li><strong>Structural Component Selection:</strong>  Runway beams, columns, and bracing were sized to exceed load and deflection requirements while maintaining safety factors specified in AISC and ASCE/SEI standards. Built-up members were selected to optimize material usage while ensuring structural integrity.</li>
              <li><strong>Connection Detailing:</strong>  Welds, bolts, and other connections were designed to ensure proper load transfer and structural integrity. Detailing was performed to account for fabrication and assembly processes.</li>
              <li><strong>Flexible Paint Booth Setup:</strong>  Booths were specified with cross-draft airflow, OSHA-compliant ventilation, and monorail access slots so that different payload types could be accommodated without redesign.</li>
              <li><strong>Thorough Research and Compliance:</strong>  This project was entirely self-driven, requiring extensive research into relevant codes, standards, and best practices and collaboration with other engineers to ensure all aspects of the design met or exceeded industry requirements.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>
                <ul className="list-inside list-disc ml-6 text-gray-700 ">
                  <li><strong>Analysis of built-up members:</strong>  Calculating section properties of built-up members took extensive analysis, as well as stress and deflection analysis under combined loads such as shear, torsion, and biaxial bending.</li>
                </ul>
              </li>
              <li><strong>Worst-Case Loading:</strong>  Support members had to be checked for simultaneous crane usage, dynamic impact, and bracing under bumper loads. For example, end-stop impacts were modeled using work-energy methods and conservative assumptions about bumper deformation.</li>
              <li><strong>Fatigue and Serviceability:</strong>  Crane runway connections are subject to repetitive stress; detailing had to allow end rotation and minimize fatigue. Tolerances were also tight — deflection limits were L/600 vertically and L/400 laterally.</li>
              <li><strong>Cross-Team Coordination:</strong>  The crane support had to integrate with HVAC clearances, floor plans, and structural foundations. Similarly, the paint booths had to be placed for efficient material movement while respecting airflow, drainage, and structural loading.</li>
            </ul>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/crane-details2.png" alt="Connection Detail Views" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Detail views showing connections for the crane support structure</p>
          </div>
        </div>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
          <SkillsList  skills={["Cross-functional collaboration","Steel Design & Structural Analysis (ASD, LRFD)","Connection detailing (welds, bolts, base plates, anchors)","Load Calculations and Material Selection","Safety & compliance research (OSHA, IBC, AISC)","Detail and layout drawings in AutoCAD","Engineering Documentation & Reports"]} />
        </section>
      </main>
    </div>
      );
  }
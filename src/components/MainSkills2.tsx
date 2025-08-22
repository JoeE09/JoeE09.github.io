import { useState } from "react";

const skillData = [
  {
    title: "Engineering Foundations",
    description: "Engineering mindset for problem-solving, system design, and manufacturing applications",
    skills: [
      "FE Mechanical Exam passed",
      "CMfgT Certified (SME)",
      "AutoCAD drafting",
      "SolidWorks modeling",
      "Mathematical problem-solving",
    ],
    icon: "/images/gears.svg",
  },
  {
    title: "Data and Automation",
    description: "Automating manual workflows and extracting insights from data",
    skills: [
      "API integrations",
      "Data pipelines",
      "Automation scripts / suites",
      "Custom-built tools/add-ins",
      "Statistical analysis and modeling",
      "Machine learning (starting to learn)",
    ],
    icon: "images/chart-no-axes-combined.svg",
  },
  {
    title: "UI Design",
    description: "Designing clean, intuitive user interfaces to support decision-making and task automation",
    skills: [
      "GUIs for internal tools and desktop apps",
      "Responsive web apps",
      "Intuitive layouts and navigation",
      "Interactive data visualizations and dashboards"
    ],
    icon: "images/monitor.svg",
  },
  {
    title: "Verbal and Written Communication",
    description: "Clear technical writing, reports, and presentations for both technical and non-technical audiences",
    skills: [
      "User documentation and internal guides",
      "Presentation design and visual storytelling",
      "Written reports and executive summaries",
      "Proofreading, editing, and formatting"
    ],
    icon: "images/notebook-pen.svg",
  }
  
];

export default function MainSkills2() {

  const [flipped, setFlipped] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlipped((prev) => (prev === index ? null : index));
  }

  return (
      <div className="flex flex-wrap gap-6 justify-center items-center w-full">
  {skillData.map((item, i) => (
    <div
      className="flex flex-col text-center w-54 h-80 cursor-pointer perspective"
      onClick={() => toggleFlip(i)}
    >
      <div
        className={`group relative w-full h-full
                    transition-transform duration-700 transform-style preserve-3d
                    ${flipped === i ? "rotate-y-180" : ""}`}
      >
        <div className="absolute inset-0 inset-y-3 shadow-md rounded-lg bg-white z-0 
          transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 pb-5 flex flex-col rounded-lg z-10 backface-hidden">
          <div className="flex justify-center items-center mt-12
            transition duration-300 group-hover:scale-105">
            <img src={item.icon || "/images/default-icon.png"}
            className="w-20 h-auto"
            />
          </div>
          <div className="flex flex-col flex-grow justify-center px-2">
            <h3 className="text-lg font-semibold text-customGreen">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
        <div className="absolute backface-hidden h-full rotate-y-180 flex flex-col justify-center px-2">
          <ul className="list-disc list-outside pl-5 text-sm text-gray-600 text-left">
            {item.skills.map((bullet, j) => (
              <li className="mb-2" key={j}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>
  );
}

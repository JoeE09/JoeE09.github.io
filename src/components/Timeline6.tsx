import { useState } from "react";


/*
const allTimelineData = [
  {
    title: "Early Robotics / Khan Academy",
    years: "Ages 9-14",
    description: "Participated in <a href='https://www.firstinspires.org/robotics/fll' target='_blank' style='text-decoration: underline;'>FLL robotics</a> and <a href='https://www.khanacademy.org/profile/JoeE09/' target='_blank' style='text-decoration: underline;'>Khan Academy</a> game programming. Developed logical and math-based thinking.",
    bullets: [
      "Learned basic team collaboration skills",
      "Built and programmed robots with LEGO Mindstorms",
      "Programmed interactive games in p5.js",
      "Applied math, physics, and logic to build interactive games from scratch",
      "Decided that engineering was cool",
    ],
    picture: "/images/bomb-dodge.png",
  },
  {
    title: "FTC Robotics",
    years: "Ages 14–17",
    description: `Did <a href='https://www.firstinspires.org/robotics/ftc' target='_blank' style='text-decoration: underline;'>FIRST Robotics</a> throughout high school, gaining more exposure to engineering principles.`,
    bullets: [
      "Developed hands-on prototyping and 3D printing skills",
      "Designed CAD-based systems and assemblies",
      "Learned Java programming using Android Studio",
      "Applied iterative process improvements to robotic processes",
      "Worked on integrated systems with sensors and motors",
      "Decided robotics was pretty fun"
    ],
    picture: "/images/IMG_0400.JPG",
  },
  {
    title: "Mechanical Engineering Degree",
    years: "2020–2024",
    description: "Earned B.S. with 4.00 GPA. Developed a deeper problem-solving foundation.",
    bullets: [
      "Studied manufacturing and obtained CMfgT certification",
      "Passed FE mechanical exam",
      "Participated in school design contests",
      "Programmed my graphing calculator and wrote Python scripts to do problems for me",
      "Developed an overhead crane system for my senior design project"
    ],
    picture: "/images/crane-section2.png",
  },
  {
    title: "Extending through Programming / Automation",
    years: "2023–Present",
    description: "Applied engineering mindset to new problems, extending my personal and workspace capabilities with programming.",
    bullets: [
      "Streamlined business operations using Excel VBA and scripting",
      "Developed personal tools with C#/Winforms and Python/TKinter",
      "Used APIs and other integrations to extend software capabilities",
      "Started building web apps with HTML/CSS/JavaScript and React",
      "Working towards developing some mobile/web apps for myself and others",
    ],
    picture: "/images/projectPages/abeka-forecasting-pipeline.svg",
  }
    {
    title: "Junior Engineer (Eagle Systems)",
    years: "June 2024 - May 2025",
    description: "Tested and troubleshooted propulsion DAQ and test systems, building custom automations for data analysis and maintenance.",
    bullets: [
      "Learned basic team collaboration skills",
      "Built and programmed robots with LEGO Mindstorms",
      "Programmed interactive games in p5.js",
      "Applied math, physics, and logic to build interactive games from scratch",
      "Decided that engineering was cool",
    ],
    picture: "/images/TestStand_EagleSystems.jpg",
  }
    {
    title: "Operations Analyst (Abeka)",
    years: "Aug 2023-May 2024",
    description: "Developed custom automations and data pipelines to streamline operations and quality assurance for the Abeka call center.",
    bullets: [
      "Streamlined business operations using Excel VBA and scripting",
      "Developed personal tools with C#/Winforms and Python/TKinter",
      "Used APIs and other integrations to extend software capabilities",
      "Started building web apps with HTML/CSS/JavaScript and React",
      "Working towards developing some mobile/web apps for myself and others",
    ],
    picture: "/images/projectPages/abeka-forecasting-pipeline.svg",
  }
];
*/

const timelineData = [
  {
    title: "Junior Engineer (Eagle Systems)",
    years: "June 2024 - May 2025",
    description: "Tested and troubleshot propulsion DAQ and test systems, building custom automations for data analysis and maintenance.",
    bullets: [
      "Developed automated maintenance tracker with Power Automate",
      "Programmed Excel Add-in to streamline analysis",
      "Troubleshot instrumentation/software failures",
      "Performed routine maintenance and calibration",
    ],
    picture: "/images/TestStand_EagleSystems.jpg",
  },
  {
    title: "Operations Analyst (Abeka)",
    years: "Aug 2023-May 2024",
    description: "Developed custom automations and data pipelines to streamline operations and quality assurance for the Abeka call center.",
    bullets: [
      "Wrote Excel/Google scripts/macros to automate reporting",
      "Created forecasting pipeline with Power Query, Power Automate, Power Pivot",
      "Built custom dashboards and reports in Excel/Power BI",
      "Developed analytics to monitor agent performance and call center efficiency"
    ],
    picture: "/images/projectPages/abeka-forecasting-pipeline.svg",
  },
  {
    title: "Mechanical Engineering Degree",
    years: "2020–2024",
    description: "Earned B.S. with 4.00 GPA, with computer science and math minors. Passed FE mechanical exam and obtained CMfgT certification.",
    bullets: [
      "Developed an overhead crane system for senior design project",
      "Gained proficiency with AutoCAD and SolidWorks through projects and contests",
      "Studied manufacturing and practiced hands-on fabrication",
      "Wrote Python scripts to solve complex problems"
    ],
    picture: "/images/crane-section2.png",
  },
  {
    title: "Other Projects",
    years: "2016-Present",
    description: `Involved myself in personal engineering pursuits, from high school robotics to personal projects.`,
    bullets: [
      "Did Java/Android Studio Programming and 3D Printing / CAD Design in FTC robotics",
      "Developed custom productivity tools and web apps",
      "Experimented with microcontrollers and IoT devices"
    ],
    picture: "/images/IMG_0400.JPG",
  }
];

export default function Timeline6() {

  const [flipped, setFlipped] = useState<boolean[]>(
    () => Array(timelineData.length).fill(false)
  );

  const toggleFlip = (index: number) => {
    setFlipped(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };


  return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center items-center w-full">
  {timelineData.map((item, i) => (
    <div
      className="flex flex-col text-center w-66 h-100 cursor-pointer perspective"
      onClick={() => toggleFlip(i)}
    >
      <div
        className={`group relative w-full h-full
                    transition-transform duration-700 transform-style preserve-3d
                    ${flipped[i] ? "rotate-y-180" : ""}`}
      >
        <div className="absolute inset-0 inset-y-3 shadow-md rounded-lg bg-white z-0 
          transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 pb-5 flex flex-col rounded-lg z-10 backface-hidden">
          <div className="rounded-lg overflow-hidden mb-2
            transition duration-300 group-hover:scale-105">
            <img src={item.picture}
            className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="flex flex-col flex-grow justify-center px-2">
            <h3 className="text-lg font-semibold text-customGreen">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.years}</p>
            <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </div>
        </div>
        <div className="absolute backface-hidden h-full rotate-y-180 flex flex-col justify-center px-2">
          <ul className="list-disc list-outside pl-5 text-sm text-gray-700 text-left">
            {item.bullets.map((bullet, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: bullet }} className="mb-3"/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>
  );
}

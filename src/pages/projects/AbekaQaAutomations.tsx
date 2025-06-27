import ProjectHero from "@/components/ProjectHero";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function AbekaQaAutomations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/abeka-qa-automations-banner.png"
        animationDelay={0.01}
        title="Abeka QA Automations"
        hero={{
          left: {"title":"The Problem","bullets":["The QA team was overwhelmed with data from surveys and employee evaluations","Data processing was almost entirely manual","Difficult to assess agent performance over time"]},
          right: {"title":"My Solution","bullets":["Developed collections of scripts and macros to automate manual tasks","Enabled team to draw insight from data without tedious manual processing","Built automated data pipeline to view agent performance over time"]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-center text-sm text-gray-500 mb-4"><em>Note: All visuals and data shown are anonymized. No proprietary company information is included on this page.</em></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview And Technical Constraints</h3>
            <p className="text-md text-gray-700 mb-4">I built several scripts and tools in this project to automate manual tasks and extract new insights from data. Here are some key constraints I worked within:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Must be within Microsoft Office and Google Apps ecosystems (IT restrictions)</li>
              <li>No databases (SQL, NoSQL, etc.) could be used. Data was Excel or Google Sheets based</li>
              <li>Needed to integrate with their current dashboards and interfaces</li>
              <li>Built for non-technical users (minimal input to run scripts)</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Main Tools Used</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Power Automate Desktop:</strong>  Automating desktop-based tasks like preparing survey reports and cleaning data. Integrated with Excel/VBA for manipulating data.</li>
              <li><strong>Office Scripts:</strong>  Automating tasks in SharePoint-based files, integrating with the cloud. Automated manual cleaning and formatting tasks.</li>
              <li><strong>Google Apps Script:</strong>  Automating tasks in Google Sheets / Gmail, including semi-automated email notifications for quality issues.</li>
              <li><strong>APIs:</strong>  Some data required integration with the customer service platform's API (Genesys). Used JavaScript/Python to collect and process API data, then integrated it into an Excel dashboard.</li>
              <li><strong>Power Query and Power Pivot:</strong>  Used for data transformation and creation of helpful visuals.</li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden mt-auto max-w-3xl mx-auto">
          <img src="/images/projectPages/qa-data-automations-flowchart.svg" alt="Flowchart of the automation pipeline" className="w-full rounded shadow" />
          <p className="text-sm text-gray-500 italic mt-2 text-center">Flowchart of the automation pipeline</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/qa-evaluation-sheet.png" alt="Summary performance board" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Evaluators used Excel with formatting rules to quickly scan and highlight agent performance</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Features</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Minimal User Input:</strong>  Aside from some confirmation steps, most automations required only a couple clicks to run.</li>
              <li><strong>Directly Integrated Data Analysis:</strong>  Data was processed and visualized directly in their existing main Excel sheets and dashboards, so users didn't have to switch tools or learn new interfaces.</li>
              <li><strong>Semi-Automated Email Alerts:</strong>  Survey issues could be flagged with a single click, sending the relevant supervisor a pre-formatted email with relevant details.</li>
              <li><strong>Agent Performance Metric Tracking:</strong>  Integration with the Genesys API allowed seamless tracking of agent performance, helping identify most needed areas for improvement.</li>
              <li><strong>Custom Scripts:</strong>  Based on supervisor requests, I developed other custom scripts to automate specific tasks like generating reports and cleaning data.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Integration with the Genesys API:</strong>  To develop an effective pipeline that didn't require manual intervention, the data retrieval program required multiple chained API calls and complex JSON parsing.</li>
              <li><strong>Data Visualization:</strong>  Agent performance data had a wide range of inputs like question types and departments. Dividing and presenting the data in a comprehensive yet digestable format required careful planning and design.</li>
              <li><strong>Data on Multiple Platforms:</strong>  Since data was stored in multiple ways (SharePoint, Network Drive, Google Sheets), a variety of tools were needed to ensure that data sources were integrated properly.</li>
              <li><strong>Ease of Maintenance and Sustainability:</strong>  As the sole developer in the group, I had to make sure that the code was simple to understand and manage. This required making clear documentation and tutorials to clearly explain key inputs.</li>
            </ul>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/qa-data-agent-trends.png" alt="Agent performance trend dashboards" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">The agent performance trend dashboard and tables were directly in Excel, allowing easy access for the non-technical team supervisors</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Possibilities to Extend</h3>
          <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
            <li><strong>Custom Configuration Interface:</strong>  Some of the automation code required periodic configuration updates. Having a simple interface to manage configuration would allow non-technical users to easily change settings without touching the code.</li>
            <li><strong>More Flexible Data Checks:</strong>  Some Excel scripts had hardcoded data checks. Adding more flexibility to some scripts (e.g. automatic column mapping) would keep the system more adaptable to future changes without manually editing code.</li>
            <li><strong>Custom Interactive Data Dashboards:</strong>  While the current Excel-based dashboards were powerful (with custom slicers/filters), the overall UI could have been improved by integrating with Power BI or a custom web dashboard.</li>
            <li><strong>Automated Data Analysis and Insights:</strong>  Adding some automated agent performance checks to automatically flag issues would allow supervisors to focus on key issues with minimal manual analysis.</li>
            <li><strong>AI Integration:</strong>  Integrating tools like Azure AI, OpenAI, or Zapier could further automate data analysis. For example, AI could categorize survey comments and flag feedback needing supervisor attention.</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["Excel","Office Scripts","Power Automate","SharePoint","Google Apps Script","JavaScript","Python","API Integration"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Business Process Automation","Script Development","Data Pipeline Design","Data Visualization","JSON Parsing and Transformation","Cross-Platform Integration"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
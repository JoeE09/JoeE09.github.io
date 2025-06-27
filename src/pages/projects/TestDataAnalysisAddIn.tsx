import ProjectHero from "@/components/ProjectHero";
import VideoDemo from "@/components/VideoDemo";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function TestDataAnalysisAddIn() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/excel-data-tools-banner.png"
        animationDelay={0.01}
        title="Test Data Analysis Add-in"
        hero={{
          left: {"title":"The Problem","bullets":["Analyzing test data involved fragmented, manual steps","No reusable system existed for importing or plotting runs","The process was tedious, error-prone, and time-consuming"]},
          right: {"title":"My Solution","bullets":["Built a self-contained Excel add-in with VBA","Streamlined import, cleaning, and plotting with minimal user input","Designed an intuitive ribbon interface with configuration profiles","Saved hours of tedious manual work after every test run"]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-center text-sm text-gray-500 mb-2"><em>Note: All visuals and data shown are anonymized. No proprietary company information is included on this page.</em></p>
        <VideoDemo  video="/videos/excel-data-tools-demo.mp4" thumbnail="/images/projectPages/excel-data-tools-thumbnail.png" title="Here is a quick walkthrough of the import tool and batch plotting tools" caption="Users can clean and visualize multi-run test data in just a few clicks using saved configuration profiles" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview And Technical Constraints</h3>
            <p className="text-md text-gray-700 mb-4">I built this tool as a self-contained Excel add-in for test engineers without programming backgrounds. It automates the process of importing, cleaning, and plotting engine test data. Key design constraints included:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Must support trendlines, regression analysis, and tolerance bands</li>
              <li>Should be intuitive and require minimal training</li>
              <li>Should not require installing external dependencies or new tools</li>
              <li>Should work reliably without internet access</li>
            </ul>
            <p className="text-md text-gray-700 mb-4">Given these constraints, I chose to build the tool as a VBA-based Excel add-in that integrates directly into the Excel ribbon. This approach provided a native, familiar interface for the engineering team.</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Alternatives Considered</h3>
            <p className="text-md text-gray-700 mb-4">Below are some options I considered before building the Excel add-in:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Power Query + Power BI + Power Pivot:</strong>  Great for visualization, but lacks native support for trendlines and scatter plots.</li>
              <li><strong>External Tools (Python, MATLAB):</strong>  Highly customizable, but too complex for the non-programmer end users.</li>
              <li><strong>Office Scripts / Cloud-Based Add-ins:</strong>  Modern architecture, but adds dependency on cloud platforms and consistent internet access.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/excel-tools-batch-plot-menu.png" alt="Batch Plot Management Menu" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Settings menu to configure an individual data series, including data and formatting options</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Features</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>User-Friendly Ribbon Interface:</strong>  The add-in integrates directly into Excel with an intuitive ribbon menu, making it accessible even to non-technical users.</li>
              <li><strong>Automated Data Import and Cleaning:</strong>  Users can select multiple data files (Excel or CSV), and the tool automatically prepares and formats the data.</li>
              <li><strong>Flexible Plot Configuration:</strong>  Users can select a data range, apply trendlines, and generate multiple plots in one step using reusable configuration settings.</li>
              <li><strong>Centralized Plot Management:</strong>  A single menu lets users view, rename, and assign data across all plots, streamlining what used to be a tedious multi-step process.</li>
              <li><strong>Reusable Profiles for Different Test Setups:</strong>  Configuration profiles allow different engine types or testing scenarios to be handled with minimal reconfiguration.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Configuration Persistence Without External Dependencies:</strong>  Developed a system to serialize config data into hidden sheets and handle various data types natively in VBA.</li>
              <li><strong>Reusable Form Generator:</strong>  Created a tag-based form generation system that automatically binds UI controls to configuration profiles. Reduced hardcoding and made managing forms simpler.</li>
              <li><strong>Handling malformed data sources:</strong>  Developed methods to properly find data table boundaries and valid data ranges, even when the source data was not well-formed or contained empty rows/columns.</li>
              <li><strong>Automatic Column Mapping:</strong>  Implemented a robust system to automatically map data columns to plot series, giving users flexibility in their naming conventions while matching column titles to plot names.</li>
              <li><strong>Version Control:</strong>  Programmed a lightweight VBA version control tool to track codebase changes and restore previous versions, since VBA lacks built-in versioning.</li>
            </ul>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/excel-tools-data-form.png" alt="Import Data Form UI" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Settings menu for configuring data imports</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Possibilities to Extend</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Link Plots to Excel tables instead of ranges:</strong>  Would make data management simpler and less error-prone, but would lose some flexibility in data layout.</li>
              <li><strong>Auto-Tolerance Generation:</strong>  Add an option to generate tolerance bands based on baseline data (with customizable limits).</li>
              <li><strong>Data Validation:</strong>  Add a tool to validate test data against the baseline, checking for outliers or out-of-tolerance data.</li>
              <li><strong>Integrate Power Query for Data Preparation:</strong>  Use Power Query for more flexible data cleaning and transformation.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["Excel","VBA"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Excel automation","Add-in Development","Data Pipeline Design","Interface Design","Configuration Management"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
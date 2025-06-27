import ProjectHero from "@/components/ProjectHero";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function ForecastingAutomationPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/forecasting-automation-pipeline-banner.png"
        animationDelay={0.01}
        title="Forecasting Automation Pipeline"
        hero={{
          left: {"title":"The Problem","bullets":["Call center demand data collection was tedious and manual","Forecasts relied on fragile Excel formulas requiring constant upkeep","All visuals and tables were static and difficult to update"]},
          right: {"title":"My Solution","bullets":["Automated data collection using Power Automate flows","Automated data cleaning and transformation with Power Query","Integrated DAX and VBA to created more detailed forecasts","Created dynamic visualizations that could adjust to new data"]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-center text-sm text-gray-500 mb-4"><em>Note: All visuals and data shown are anonymized. No proprietary company information is included on this page.</em></p>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview And Technical Constraints</h3>
            <p className="text-md text-gray-700 mb-4">This project involved automating the collection and analysis of call center performance data, including average handle times and average wait times for every customer service queue. Key constraints included:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Must all be contained in the current forecasting Excel workbook</li>
              <li>No external databases or tools could be used</li>
              <li>Should automatically update when new data arrives</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Main Tools Used</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Power Automate:</strong>  Automated report formatting and uploading of daily data reports</li>
              <li><strong>Office Scripts:</strong>  Formatted Excel files (called via Power Automate)</li>
              <li><strong>Power Query:</strong>  Combined and transformed all data into the desired format</li>
              <li><strong>Power Pivot (DAX):</strong>  Calculated key metrics like AHT, total volume, and abandon rates, integrating slicers</li>
              <li><strong>VBA Macros:</strong>  Calculated forecasted staffing requirements (Erlang A model) based on the Power Pivot tables</li>
              <li><strong>Excel (Pivot Tables and Charts):</strong>  Stored and served data in dynamic visualizations with slicers and filters</li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden mt-auto max-w-3xl mx-auto">
          <img src="/images/projectPages/abeka-forecasting-pipeline.svg" alt="Call Center Data Pipeline" className="w-full rounded shadow" />
          <p className="text-sm text-gray-500 italic mt-2 text-center">Flowchart outlining the data pipeline from collection to visualization</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/abeka-forecasting-call-center-demand.png" alt="Inbound Calls by Month" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Using dynamic charts, it is easy to see trends in call center demand over time</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Features</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Seamless Integration with Current Workflow:</strong>  The new system was built directly in Excel and was compatible with their previous report formatting.</li>
              <li><strong>Automatic Data Updates:</strong>  Using Office Scripts and Power Query for data cleaning meant no manual work was required to update charts and tables.</li>
              <li><strong>More Detailed Analysis:</strong>  Demand data could be tracked by time, queue, department, employee type, and more, allowing for better fine-tuning of staffing.</li>
              <li><strong>Dynamic Visualizations:</strong>  The main forecasting workbook now contains a wide variety of dynamic tables and charts that give key insights into queue performance.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Proper Data Combination:</strong>  Combining data from all sources took careful handling of the different formats to ensure the final table was consistent and complete.</li>
              <li><strong>Handling Complex Inputs:</strong>  Multiple linked tables were required to properly filter and slice data for the KPI calculations.</li>
              <li><strong>Complex Slicing Across Metrics:</strong>  I used advanced DAX formulas to correctly calculate calculate KPIs even with multiple filters applied (like queue, department, and time).</li>
              <li><strong>Forecasting Model Integration:</strong>  Since the Erlang A forecasting formulas are too complex for Power Pivot, I used VBA macros to dynamically calculate staffing requirements from the Power Pivot tables.</li>
              <li><strong>Familiar Interface:</strong>  The final interface needed to be simple to use by management or other analysts. I created simplified views with clear slicers and filters to aid understanding.</li>
            </ul>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/abeka-forecasting-queues.png" alt="Demand Breakdown Charts" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">To accurately plan staffing, it is important to break down demand by queue and department.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Possibilities to Extend</h3>
          <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
            <li><strong>More interactive final dashboard:</strong>  Rebuilding the final dashboard in Power BI could allow more polished UI and flexible data views (e.g. overview vs. deep dive), making it simpler for different levels of management to use.</li>
            <li><strong>Genesys API Integration:</strong>  Daily queue performance was still downloaded manually from Genesys. Integrating the Genesys API to pull performance data would enable a no-touch data pipeline for report generation and data upload.</li>
            <li><strong>Automatic staff report creation:</strong>  Parts of the staff report were still generated manually. Adding an Office Script or VBA macro would streamline and simplify the report writing process.</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["Excel","Office Scripts","VBA","Power Automate","Power Query","Power Pivot"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Excel Automation","Data Pipeline Design","KPI Benchmarking","Demand Forecasting","DAX / VBA Integration","Dashboard Design"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
import ProjectHero from "@/components/ProjectHero";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function SleepTrendAnalyzer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero textClass="text-gray-200 space-y-1" headerClass="font-bold text-lg text-gray-200 mb-2" titleClass="text-4xl relative font-extrabold text-lighterGreen mb-6 text-center drop-shadow-glow" 
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/sleep-tracker-banner.png"
        animationDelay={0.01}
        title="Sleep Trend Analyzer"
        hero={{
          left: {"title":"The Problem","bullets":["I have trouble with consistent sleep and feeling refreshed in the morning","I lacked insight into how sleep schedules and habits affect sleep quality","I wanted data-driven ways to improve my sleep and daytime energy"]},
          right: {"title":"My Solution","bullets":["Designed a data pipeline combining manual logs, fitbit sleep data, and environmental data","Developed a easy-to-use mobile logger with Apple Shortcuts / Custom Apps Script API","(Planned) develop dashboards from a unified database to visualize sleep patterns","(Planned) use statistics/ML techniques to extract insights into what factors most affect sleep quality"]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-center text-sm text-gray-500"><em>Note: All visuals and data shown are anonymized and may not accurately reflect real sleep patterns.</em></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/sleep-tracker-flowchart.svg" alt="Sleep Tracker System Design" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">System design overview showing data flow from input sources to analysis and visualization</p>
          </div>
          <div className="">
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview and System Design</h3>
              <p className="text-md text-gray-700">My goal is to create a system to better understand my sleep habits so I can take steps to improve my sleep health. Here is my plan:</p>
            </div>
            <div className="ml-4">
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li><strong>Data Collection:</strong>  System to extract raw data from various sources.</li>
                <li><strong>Data Storage & Transformation:</strong>  Transform raw data into a unified format and store it in a database keyed by sleep session.</li>
                <li><strong>Analysis & Action:</strong>  Create dashboards and algorithms to uncover practical steps to improve my sleep quality based on the data.</li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-semibold text-customGreen text-xl">Variables To Track</h2>
              <p className="text-md text-gray-700"><strong>Sleep Quality Indicators</strong></p>
            </div>
            <div className="ml-4">
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li><em>Sleep Metrics:</em>  sleep duration, sleep latency, sleep efficiency, sleep stages</li>
                <li><em>Subjective Quality Ratings:</em>  how rested, energetic, and productive I feel</li>
              </ul>
            </div>
            <p className="text-md text-gray-700"><strong>Variables Contributing to Sleep Quality:</strong></p>
            <div className="ml-4">
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li><em>Sleep Timing:</em>  bed time, wake time, naps during the day</li>
                <li><em>Daily Habits:</em>  exercise, screen time, stress levels</li>
                <li><em>Environmental Factors:</em>  temperature, humidity, air quality</li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-semibold text-customGreen text-xl">Methods of Data Collection</h2>
            </div>
            <div className="ml-4">
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li><strong>Manual Logging:</strong>  Mobile logging interface to log daily energy/alertness/etc. with a few taps</li>
                <li><strong>Fitbit and API:</strong>  Python script to pull my sleep data from the Fitbit API</li>
                <li><strong>Environmental Sensors:</strong>  ESP32 sensors sending temperature, humidity, and air quality data to my home hub via MQTT</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Current Progress</h3>
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li>Custom mobile interface (via Apple Shortcuts) to manually log factors and push to database via custom Apps Script API endpoint</li>
                <li>Python script to pull API data scaffolded</li>
                <li>ESP32 board wired up / data logging infrastructure set up</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Next Steps</h3>
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li>Program ESP32 to send data via MQTT</li>
                <li>Consolidate all data sources into a unified database</li>
                <li>Build a dashboard to visualize and analyze the data</li>
                <li>Integrate machine learning to identify correlations between habits and sleep quality</li>
              </ul>
            </div>
          </div>
          <div className="">
            <video controls className="mt-auto mb-2">
            <source src="/videos/logging-api.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <p className="text-center text-sm text-gray-500"><em>Here is a walkthrough of the custom logger I made to quickly log data on my phone</em></p>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/sleep-tracker-dashboard.png" alt="Sleep Data Dashboard" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Some sample visualizations of sleep data</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Mobile Logging Setup:</strong>  To design a logger simple enough to use regularly, I used custom forms in Apple Shortcuts connected to a custom API endpoint in Apps Script. Logging manual metrics now takes just a few seconds.</li>
              <li><strong>Data Transformation:</strong>  Several transformations were needed to obtain a unified data format and parse timestamps into different sleep intervals/sessions.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["Python","Google Sheets","Google Apps Script","Apple Shortcuts","API Integration"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Data Analytics","IoT Integration","Mobile Interface Design","Data-Driven Process Improvement"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
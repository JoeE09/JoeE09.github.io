import ProjectHero from "@/components/ProjectHero";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function SleepTrendAnalyzer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero textClass="text-gray-200 space-y-1" headerClass="font-bold text-lg text-gray-200 mb-2" titleClass="text-4xl relative font-extrabold text-customGreen mb-6 text-center drop-shadow-glow" 
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/sleep-tracker-banner.png"
        animationDelay={0.01}
        title="Sleep Trend Analyzer"
        hero={{
          left: {"title":"The Problem","bullets":["Have trouble with consistent, quality sleep","No way to know sleep patterns or what habits most affect my sleep","Want to combine data from multiple sources to get a complete picture"]},
          right: {"title":"My Plan / Approach","bullets":["Design a unified system combining Fitbit data, manual logs, and sensor data","Develop a custom mobile interface for easy logging","Develop dashboards from a unified database to visualize sleep patterns","Use machine learning to uncover which factors most affect sleep quality"]}
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
              <p className="text-md text-gray-700">My goal is to create a system to better understand my sleep habits so I can take steps to improve my sleep health. I plan to do the following:</p>
            </div>
            <div className="ml-4">
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li>Develop a system to track variables related to sleep quality</li>
                <li>Use data visualization and machine learning to find relationships between my habits and sleep quality</li>
                <li>Apply the insights I discover to improve my overall sleep quality</li>
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
            <p className="text-md text-gray-700 mb-4"><em>Note: There could be many more variables that affect sleep quality, but I am starting with these to keep the project manageable. Additionally, I am not tracking caffeine or alcohol intake, as I do neither.</em></p>
            <div className="">
              <h2 className="font-semibold text-customGreen text-xl">Methods of Data Collection</h2>
            </div>
            <div className="ml-4">
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li><strong>Manual Logging:</strong>  develop a custom mobile interface to log bed time, wake time, subjective quality ratings, and daily habits.</li>
                <li><strong>Fitbit and API:</strong>  wear a Fitbit to bed and use the Fitbit API (via Python) to pull sleep data like sleep duration, sleep latency, and time awake. Some Fitbit data (like sleep stages) is less accurate, so it will not be a primary focus.</li>
                <li><strong>Environmental Sensors:</strong>  use an ESP32 board with sensors to send live telemetry data like temperature, humidity, and air quality.</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Current Progress</h3>
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li>I built a custom mobile interface in Apple Shortcuts for logging sleep data that integrates directly with Google Sheets via Apps Script</li>
                <li>I have a Python script scaffolded that uses Flask to pull from the Fitbit API and store the data in a database</li>
                <li>I have the ESP32 board setup purchased, but not yet set up</li>
                <li>I have a few months' worth of collected data to analyze</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Next Steps</h3>
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li>Set up the ESP32 board with sensors to log environmental data</li>
                <li>Finish the Python script to pull data from  the Fitbit API and store it in the database</li>
                <li>Combine and transform all data into a single source for analysis</li>
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
            <p className="text-md text-gray-700">So far, the main challenge has been setting up a seamless logging interface that is easy to configure and use consistently.</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Mobile Interface Design:</strong>  I created a simple logging interface on my phone that could log data with a few taps.</li>
              <li><strong>Data Integration:</strong>  I developed an API via Google Apps Script to send data from my phone to a Google Sheet automatically.</li>
              <li><strong>Logging Forms:</strong>  I created a JSON-based configuration system that allows easy adding of new logging forms.</li>
            </ul>
            <p className="text-md text-gray-700 mb-4">Some other challenges I expect to face including secure integration of the ESP32 sensors to the network, handling gaps in data (from failure to log / wear Fitbit) and calibrating the machine learning model to accurately identify patterns.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["Google Sheets","Google Apps Script","Apple Shortcuts","Python","API Integration"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Data Analytics","Live Telemetry","IOT Integration","Machine Learning","Mobile Interface Design"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
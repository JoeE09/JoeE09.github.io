import ProjectHero from "@/components/ProjectHero";
import Links from "@/components/ProjectLinks";
import VideoDemo from "@/components/VideoDemo";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function HomeEnvironmentController() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/home-environment-controller-banner.png"
        animationDelay={0.01}
        title="Home Environment Controller"
        hero={{
          left: {"title":"The Problem","bullets":["Humidity in the apartment needed careful control to protect wood furniture/instruments","Indoor air quality was unknown","Manual monitoring and adjustments were tedious or nonexistent","Unclear how thermostat settings and environmental factors affected energy costs and comfort"]},
          right: {"title":"My Solution","bullets":["Built an environment control system with Raspberry Pi hub, ESP32 sensors, and smart devices.","Implemented centralized data collection and storage","(Planned) Develop automations and rules for adjusting settings based on real-time data","(Planned) Create dashboards for visualizing data and managing settings"]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview</h3>
            <p className="text-md text-gray-700 mb-4">My goal in this project is to create a comprehensive system for monitoring and controlling my home environment. I plan to do the following:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Optimize environment variables including clean air, proper humidity, ideal temperature</li>
              <li>Better understand my living environment, such as humidity/temperature variation across rooms and air quality</li>
              <li>Understand the relationship between my home environment and other factors affecting well-being (e.g. study relationship between temperature and sleep quality)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Main Features (Planned)</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Real-time monitoring of environmental data.</li>
              <li>Automated control of smart devices based on user-defined rules.</li>
              <li>Historical data analysis and reporting via SQLite database.</li>
              <li>User-friendly dashboard for visualizing data and managing settings.</li>
              <li>Alerts and notifications for significant environmental changes.</li>
              <li>Locally hosted solution for privacy/security.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Main Components</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Raspberry Pi Hub:</strong>  Always-on central controller for data processing, automation, and dashboard hosting (analogous to a PLC + SCADA system).</li>
              <li><strong>ESP32 Sensors:</strong>  Measuring temperature, humidity, and air quality.</li>
              <li><strong>MQTT Protocol:</strong>  Enabling data transmission between the Raspberry Pi and ESP32 sensors.</li>
              <li><strong>SQLite Database:</strong>  Storing historical environmental data for analysis and reporting.</li>
              <li><strong>Python Scripts:</strong>  API-based data retrieval and device control (e.g. pulling local weather, controlling smart devices).</li>
              <li><strong>Smart Devices:</strong>  Currently a smart thermostat/smart plugs (connected to dehumidifier) for controlling temp/humidity.</li>
              <li><strong>Notification Service:</strong>  Sending alerts and notifications based on environmental changes.</li>
              <li><strong>Dashboard:</strong>  Visualizing environmental data and system status, setting environmental set points and thresholds, and creating automation schedules in a user-friendly interface.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Current Functionality</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Raspberry Pi controller and IoT network running.</li>
              <li>ESP32 sensors purchased and layouts developed.</li>
              <li>Database schema and storage system designed.</li>
              <li>Programmatic control of thermostat via API.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Next Steps</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Connect ESP32 sensors to the Raspberry Pi MQTT broker.</li>
              <li>Develop smart plug control via API.</li>
              <li>Develop dashboard for visualizing environmental data and controlling set points.</li>
              <li>Create automated alerts for environmental changes.</li>
              <li>Develop and enforce control rules and automations.</li>
              <li>Explore advanced analytics and machine learning for deeper insights.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["SQL","Raspberry Pi","ESP32","MQTT","Python","API Integration"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Data Pipeline Design","Dashboard Development","Real-Time Monitoring & Control","IoT Device Management","Control Systems","Database Management"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
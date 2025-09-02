import ProjectHero from "@/components/ProjectHero";
import Links from "@/components/ProjectLinks";
import VideoDemo from "@/components/VideoDemo";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function HomeLabInfrastructure() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/omada.png"
        animationDelay={0.01}
        title="Home Lab Infrastructure"
        hero={{
          left: {"title":"The Problem","bullets":["I wanted to pursue IoT projects without exposing my home network to potential threats.","I needed an always-on backbone to host apps and collect telemetry data from various sensors.","I wanted a lab to experiment with various self-hosted applications and tools."]},
          right: {"title":"My Solution","bullets":["Developed a home lab with a Raspberry Pi and Docker for testing and experimentation.","Segmented the network with VLANs and firewalls; managed Wi-Fi/LAN with an Omada controller.","Enabled zero-trust remote access via Tailscale VPN (no public ports).","Provisioned an MQTT broker and local SQLite storage to serve as the messaging & data layer for future projects."]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview</h3>
            <p className="text-md text-gray-700 mb-4">This lab serves as a foundation for some of my controls/analytics projects. It isolates IoT devices, hosts services, and provides a local messaging/data layer. My main focus for the lab was security, reliability, and maintainability. Below are some project ideas that inspired the lab creation:</p>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Automated meal planning tools</li>
              <li>Environmental monitoring systems</li>
              <li>Smart home hub / automations</li>
              <li>Home security and surveillance</li>
              <li>Personal cloud storage</li>
              <li>Other IoT projects or self-hosted applications</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Main Tools Used</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Network Segmentation:</strong>  VLANs to isolate networks with controller-based and device-based firewalls for enhanced security.</li>
              <li><strong>Tailscale VPN:</strong>  For remote access without exposing the lab to the public internet.</li>
              <li><strong>Raspberry Pi:</strong>  Serving as a central hub for data collection, running Docker containers, and hosting various services.</li>
              <li><strong>Headless Linux Admin:</strong>  SSH-based management and automation on the Raspberry Pi.</li>
              <li><strong>Messaging & Storage Backbone:</strong>  Mosquitto (MQTT) on the Pi and a local SQLite DB.</li>
              <li><strong>Docker:</strong>  Containerized applications for easy deployment and management.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Current Functionality</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Pi home lab online; services run in Docker.</li>
              <li>VLAN-segmented network with controller management.</li>
              <li>Tailscale VPN for remote admin.</li>
              <li>MQTT broker + local SQLite storage in place for downstream projects.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Next Steps</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Formalize backup strategy (config volumes + DB snapshots) in case of Pi failure.</li>
              <li>Publish a minimal internal status page (service list, links, notes) to assist in system maintenance.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["Raspberry Pi","SQL","MQTT","Linux","Tailscale","Docker"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Network Configuration & Security","Linux System Administration","Containerization","IoT Device Management","Self-Hosted Solutions"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
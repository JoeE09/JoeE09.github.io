---
title: Home Lab Infrastructure
---

# Hero

### The Problem
- I wanted to pursue IoT projects without exposing my home network to potential threats.
- I needed an always-on backbone to host apps and collect telemetry data from various sensors.
- I wanted a lab to experiment with various self-hosted applications and tools.

### My Solution
- Developed a home lab with a Raspberry Pi and Docker for testing and experimentation.
- Segmented the network with VLANs and firewalls; managed Wi-Fi/LAN with an Omada controller.
- Enabled zero-trust remote access via Tailscale VPN (no public ports).
- Provisioned an MQTT broker and local SQLite storage to serve as the messaging & data layer for future projects.

# TwoColumns

### Overview And Technical Constraints
This lab serves as a foundation for some of my controls/analytics projects. It isolates IoT devices, hosts services, and provides a local messaging/data layer. My main focus for the lab was security, reliability, and maintainability. Below are some project ideas that inspired the lab creation:

- Automated meal planning tools
- Environmental monitoring systems
- Smart home hub / automations
- Home security and surveillance
- Personal cloud storage
- Other IoT projects or self-hosted applications

### Main Tools Used
- **Network Segmentation:** VLANs to isolate networks with controller-based and device-based firewalls for enhanced security.
- **Tailscale VPN:** For remote access without exposing the lab to the public internet.
- **Raspberry Pi:** Serving as a central hub for data collection, running Docker containers, and hosting various services.
- **Headless Linux Admin:** SSH-based management and automation on the Raspberry Pi.
- **Messaging & Storage Backbone:** Mosquitto (MQTT) on the Pi and a local SQLite DB.
- **Docker:** Containerized applications for easy deployment and management.

# TwoColumns/

### Current Functionality
- Pi home lab online; services run in Docker.
- VLAN-segmented network with controller management.
- Tailscale VPN for remote admin.
- MQTT broker + local SQLite storage in place for downstream projects.

### Next Steps
- Formalize backup strategy (config volumes + DB snapshots).
- Publish a minimal internal status page (service list, links, notes).

# TwoColumns className="mt-2"
# Technologies
- Raspberry Pi
- SQL
- MQTT
- Linux
- Tailscale
- Docker

# Skills
- Network Configuration & Security
- Linux System Administration
- Containerization
- IoT Device Management
- Self-Hosted Solutions

# TwoColumns/
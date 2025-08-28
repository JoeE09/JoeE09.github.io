---
title: Home Environment Controller
---

# Hero

### The Problem
- Humidity in the apartment needed careful control to protect wood furniture/instruments
- Indoor air quality was unknown
- Manual monitoring and adjustments were tedious or nonexistent
- Unclear how thermostat settings and environmental factors affected energy costs and comfort

### My Solution
- Built an environment control system with Raspberry Pi hub, ESP32 sensors, and smart devices.
- Implemented centralized data collection and storage
- (Planned) Develop automations and rules for adjusting settings based on real-time data
- (Planned) Create dashboards for visualizing data and managing settings


### Overview
My goal in this project is to create a comprehensive system for monitoring and controlling my home environment. I plan to do the following:
- Optimize environment variables including clean air, proper humidity, ideal temperature
- Better understand my living environment, such as humidity/temperature variation across rooms and air quality
- Understand the relationship between my home environment and other factors affecting well-being (e.g. study relationship between temperature and sleep quality)

### Main Features (Planned)
- Real-time monitoring of environmental data.
- Automated control of smart devices based on user-defined rules.
- Historical data analysis and reporting via SQLite database.
- User-friendly dashboard for visualizing data and managing settings.
- Alerts and notifications for significant environmental changes.
- Locally hosted solution for privacy/security.

### Main Components

- **Raspberry Pi Hub:** Always-on central controller for data processing, automation, and dashboard hosting (analogous to a PLC + SCADA system).
- **ESP32 Sensors:** Measuring temperature, humidity, and air quality.
- **MQTT Protocol:** Enabling data transmission between the Raspberry Pi and ESP32 sensors.
- **SQLite Database:** Storing historical environmental data for analysis and reporting.
- **Python Scripts:** API-based data retrieval and device control (e.g. pulling local weather, controlling smart devices).
- **Smart Devices:** Currently a smart thermostat/smart plugs (connected to dehumidifier) for controlling temp/humidity.
- **Notification Service:** Sending alerts and notifications based on environmental changes.
- **Dashboard:** Visualizing environmental data and system status, setting environmental set points and thresholds, and creating automation schedules in a user-friendly interface.

# TwoColumns className="mt-2"

### Current Functionality
- Raspberry Pi controller and IoT network running.
- ESP32 sensors purchased and layouts developed.
- Database schema and storage system designed.
- Programmatic control of thermostat via API.

### Next Steps
- Connect ESP32 sensors to the Raspberry Pi MQTT broker.
- Develop smart plug control via API.
- Develop dashboard for visualizing environmental data and controlling set points.
- Create automated alerts for environmental changes.
- Develop and enforce control rules and automations.
- Explore advanced analytics and machine learning for deeper insights.

  # TwoColumns/

# TwoColumns className="mt-2"
# Technologies
- SQL
- Raspberry Pi
- ESP32
- MQTT
- Python
- API Integration

# Skills
- Data Pipeline Design
- Dashboard Development
- Real-Time Monitoring & Control
- IoT Device Management
- Control Systems
- Database Management
# TwoColumns/
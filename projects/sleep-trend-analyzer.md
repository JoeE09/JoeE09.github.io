---
title: Sleep Trend Analyzer
banner: /images/projectPages/sleep-tracker-banner.png
---

# Hero textClass="text-gray-200 space-y-1" headerClass="font-bold text-lg text-gray-200 mb-2" titleClass="text-4xl relative font-extrabold text-lighterGreen mb-6 text-center drop-shadow-glow"

### The Problem
- I have trouble with consistent sleep and feeling refreshed in the morning
- I lacked insight into how sleep schedules and habits affect sleep quality
- I wanted data-driven ways to improve my sleep and daytime energy

### My Solution
- Designed a data pipeline combining manual logs, fitbit sleep data, and environmental data
- Developed a easy-to-use mobile logger with Apple Shortcuts / Custom Apps Script API
- (Planned) develop dashboards from a unified database to visualize sleep patterns
- (Planned) use statistics/ML techniques to extract insights into what factors most affect sleep quality

*Note: All visuals and data shown are anonymized and may not accurately reflect real sleep patterns.* className="text-center text-sm text-gray-500"

# TwoColumns className="mt-10"

# ![Sleep Tracker System Design](/images/projectPages/sleep-tracker-flowchart.svg)
System design overview showing data flow from input sources to analysis and visualization

# Div
### Overview and System Design
My goal is to create a system to better understand my sleep habits so I can take steps to improve my sleep health. Here is my plan: className="text-md text-gray-700"
# Div className="ml-4"
- **Data Collection:** System to extract raw data from various sources.
- **Data Storage & Transformation:** Transform raw data into a unified format and store it in a database keyed by sleep session.
- **Analysis & Action:** Create dashboards and algorithms to uncover practical steps to improve my sleep quality based on the data.
# Div/

## Variables To Track className="font-semibold text-customGreen text-xl"

**Sleep Quality Indicators** className="text-md text-gray-700"
# Div className="ml-4"
- *Sleep Metrics:* sleep duration, sleep latency, sleep efficiency, sleep stages
- *Subjective Quality Ratings:* how rested, energetic, and productive I feel
# Div/

**Variables Contributing to Sleep Quality:** className="text-md text-gray-700"
# Div className="ml-4"
- *Sleep Timing:* bed time, wake time, naps during the day
- *Daily Habits:* exercise, screen time, stress levels
- *Environmental Factors:* temperature, humidity, air quality
# Div/

## Methods of Data Collection className="font-semibold text-customGreen text-xl"
# Div className="ml-4"
- **Manual Logging:** Mobile logging interface to log daily energy/alertness/etc. with a few taps
- **Fitbit and API:** Python script to pull my sleep data from the Fitbit API
- **Environmental Sensors:** ESP32 sensors sending temperature, humidity, and air quality data to my home hub via MQTT
# Div/

# Div/

# Div

### Current Progress
- Custom mobile interface (via Apple Shortcuts) to manually log factors and push to database via custom Apps Script API endpoint
- Python script to pull API data scaffolded
- ESP32 board wired up / data logging infrastructure set up

### Next Steps
- Program ESP32 to send data via MQTT
- Consolidate all data sources into a unified database
- Build a dashboard to visualize and analyze the data
- Integrate machine learning to identify correlations between habits and sleep quality

# Div/

# Div
<video controls className="mt-auto mb-2">
  <source src="/videos/logging-api.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Here is a walkthrough of the custom logger I made to quickly log data on my phone* className="text-center text-sm text-gray-500"

# Div/

# ![Sleep Data Dashboard](/images/projectPages/sleep-tracker-dashboard.png)
Some sample visualizations of sleep data

### Technical Challenges
- **Mobile Logging Setup:** To design a logger simple enough to use regularly, I used custom forms in Apple Shortcuts connected to a custom API endpoint in Apps Script. Logging manual metrics now takes just a few seconds.
- **Data Transformation:** Several transformations were needed to obtain a unified data format and parse timestamps into different sleep intervals/sessions.

# TwoColumns/

# TwoColumns className="mt-2"
# Technologies
- Python
- Google Sheets
- Google Apps Script
- Apple Shortcuts
- API Integration

# Skills
- Data Analytics
- IoT Integration
- Mobile Interface Design
- Data-Driven Process Improvement
# TwoColumns/
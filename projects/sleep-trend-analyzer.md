---
title: Sleep Trend Analyzer
---

# Hero textClass="text-gray-200 space-y-1" headerClass="font-bold text-lg text-gray-200 mb-2" titleClass="text-4xl relative font-extrabold text-customGreen mb-6 text-center drop-shadow-glow"

### The Problem
- I have trouble with consistent sleep and feeling refreshed in the morning
- I have no way to know sleep patterns or what habits most affect my sleep
- I need to have better sleep quality to improve overall productivity

### My Solution
- Designed a data pipeline combining manual logs, fitbit sleep data, and environmental data
- Developed a custom mobile interface for seamless manual logging
- Developed dashboards from a unified database to visualize sleep patterns
- Using machine learning and other analytics to identify trends and correlations

*Note: All visuals and data shown are anonymized and may not accurately reflect real sleep patterns.* className="text-center text-sm text-gray-500"

# TwoColumns className="mt-10"

# ![Sleep Tracker System Design](/images/projectPages/sleep-tracker-flowchart.svg)
System design overview showing data flow from input sources to analysis and visualization

# Div
### Overview and System Design
My goal is to create a system to better understand my sleep habits so I can take steps to improve my sleep health. I plan to do the following: className="text-md text-gray-700"
# Div className="ml-4"
- Develop a system to track variables related to sleep quality
- Use data visualization and machine learning to find relationships between my habits and sleep quality
- Apply the insights I discover to improve my overall sleep quality
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
- **Mobile Logging Setup:** In order to consistently do manual logs, I needed a frictionless process I could do reliably. Creating such an interface required several steps, including designing custom forms/integrating those into apple shortcuts, building a backend API to receive the data, and then properly storing and managing the data.
- **Data Transformation:** Transforming raw data and telemetry into a usable format took various steps, including analyzing sleep/wake times to determine which days, cross-referencing environmental data with sleep times to determine temperature gradients across sleep cycles.
- **Complex Data Correlations:** Identifying and analyzing complex correlations between various data points (e.g., how changes in room temperature affect sleep quality) required advanced statistical techniques and machine learning models.


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
- Machine Learning
- Data-Driven Process Improvement
# TwoColumns/
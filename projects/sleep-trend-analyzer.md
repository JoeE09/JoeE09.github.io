---
title: Sleep Trend Analyzer
---

# Hero textClass="text-gray-200 space-y-1" headerClass="font-bold text-lg text-gray-200 mb-2" titleClass="text-4xl relative font-extrabold text-customGreen mb-6 text-center drop-shadow-glow"

### The Problem
- Have trouble with consistent, quality sleep
- No way to know sleep patterns or what habits most affect my sleep
- Want to combine data from multiple sources to get a complete picture

### My Plan / Approach
- Design a unified system combining Fitbit data, manual logs, and sensor data
- Develop a custom mobile interface for easy logging
- Develop dashboards from a unified database to visualize sleep patterns
- Use machine learning to uncover which factors most affect sleep quality

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
*Note: There could be many more variables that affect sleep quality, but I am starting with these to keep the project manageable. Additionally, I am not tracking caffeine or alcohol intake, as I do neither.*

## Methods of Data Collection className="font-semibold text-customGreen text-xl"
# Div className="ml-4"
- **Manual Logging:** Developed a custom mobile interface to log bed time, wake time, subjective quality ratings, and daily habits.
- **Fitbit and API:** Wore a Fitbit to bed and used the Fitbit API (via Python) to pull sleep data like sleep duration, sleep latency, and time awake. Some Fitbit data (like sleep stages) is less accurate, so it will not be a primary focus.
- **Environmental Sensors:** Used an ESP32 board with sensors to send live telemetry data like temperature, humidity, and air quality.
# Div/

# Div/

# Div

### Current Progress
- I built a custom mobile interface for logging sleep data that integrates directly with Google Sheets via Apps Script
- I have a Python script scaffolded that uses Flask to pull from the Fitbit API and store the data in a database
- I have the ESP32 board setup purchased, but not yet set up

### Next Steps
- Set up the ESP32 board with sensors to log environmental data
- Finish the Python script to pull data from Fitbit and store it in the database
- Combine and transform all data into a single database for analysis
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
So far, the main challenge has been setting up a seamless logging interface that it easy to configure and effortless enough to use consistently. Here were some considerations: className="text-md text-gray-700"
- **Mobile Interface Design:** I created a simple logging interface on my phone that could log data with a few taps.
- **Data Integration:** I developed an API via Google Apps Script so I could send data from my phone to a Google Sheet and have the program automatically enter the data.
- **Logging Forms:** I created a JSON-based configuration system that allows easy adding of new logging forms. This took some work to implement in Apple Shortcuts, since it is not made for complex data structures.

Some other challenges I expect to face including secure integration of the ESP32 sensors to the network, handling gaps in data (from failure to log / wear Fitbit) and calibrating the machine learning model to accurately identify patterns.

# TwoColumns/

# TwoColumns className="mt-2"
# Technologies
- Google Sheets
- Google Apps Script
- Apple Shortcuts
- Python
- API Integration

# Skills
- Data Analytics
- Live Telemetry
- IOT Integration
- Machine Learning
- Mobile Interface Design
- KPI Development
# TwoColumns/
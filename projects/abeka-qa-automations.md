---
title: Abeka QA Automations
---

# Hero

### The Problem
- The QA team was overwhelmed with data from surveys and employee evaluations
- Data processing was almost entirely manual
- Difficult to assess agent performance over time

### My Solution
- Developed collections of scripts and macros to automate manual tasks
- Enabled team to draw insight from data without tedious manual processing
- Built automated data pipeline to view agent performance over time

*Note: All visuals and data shown are anonymized. No proprietary company information is included on this page.* className="text-center text-sm text-gray-500 mb-4"

# TwoColumns

### Overview And Technical Constraints
I built several scripts and tools in this project to automate manual tasks and extract new insights from data. Here are some key constraints I worked within:
- Must be within Microsoft Office and Google Apps ecosystems (IT restrictions)
- No databases (SQL, NoSQL, etc.) could be used. Data was Excel or Google Sheets based
- Needed to integrate with their current dashboards and interfaces
- Built for non-technical users (minimal input to run scripts)

### Main Tools Used
- **Power Automate Desktop:** Automating desktop-based tasks like preparing survey reports and cleaning data. Integrated with Excel/VBA for manipulating data.
- **Office Scripts:** Automating tasks in SharePoint-based files, integrating with the cloud. Automated manual cleaning and formatting tasks.
- **Google Apps Script:** Automating tasks in Google Sheets / Gmail, including semi-automated email notifications for quality issues.
- **APIs:** Some data required integration with the customer service platform's API (Genesys). Used JavaScript/Python to collect and process API data, then integrated it into an Excel dashboard.
- **Power Query and Power Pivot:** Used for data transformation and creation of helpful visuals.

# TwoColumns/


# ![Flowchart of the automation pipeline](/images/projectPages/qa-data-automations-flowchart.svg) className="max-w-3xl mx-auto"
Flowchart of the automation pipeline


# TwoColumns className="mt-10"

# ![Summary performance board](/images/projectPages/qa-evaluation-sheet.png)
Evaluators used Excel with formatting rules to quickly scan and highlight agent performance

### Features
- **Minimal User Input:**  
  Aside from some confirmation steps, most automations required only a couple clicks to run.

- **Directly Integrated Data Analysis:**  
  Data was processed and visualized directly in their existing main Excel sheets and dashboards, so users didn't have to switch tools or learn new interfaces.

- **Semi-Automated Email Alerts:**  
  Survey issues could be flagged with a single click, sending the relevant supervisor a pre-formatted email with relevant details.

- **Agent Performance Metric Tracking:**  
  Integration with the Genesys API allowed seamless tracking of agent performance, helping identify most needed areas for improvement.

- **Custom Scripts:**  
  Based on supervisor requests, I developed other custom scripts to automate specific tasks like generating reports and cleaning data.

### Technical Challenges
- **Integration with the Genesys API:**  
    To develop an effective pipeline that didn't require manual intervention, the data retrieval program required multiple chained API calls and complex JSON parsing.
- **Data Visualization:**  
    Agent performance data had a wide range of inputs like question types and departments. Dividing and presenting the data in a comprehensive yet digestable format required careful planning and design.
- **Data on Multiple Platforms:**  
    Since data was stored in multiple ways (SharePoint, Network Drive, Google Sheets), a variety of tools were needed to ensure that data sources were integrated properly.
- **Ease of Maintenance and Sustainability:**  
    As the sole developer in the group, I had to make sure that the code was simple to understand and manage. This required making clear documentation and tutorials to clearly explain key inputs.

# ![Agent performance trend dashboards](/images/projectPages/qa-data-agent-trends.png)
The agent performance trend dashboard and tables were directly in Excel, allowing easy access for the non-technical team supervisors

# TwoColumns/

### Possibilities to Extend class="max-w-3xl mx-auto"
- **Custom Configuration Interface:**  
  Some of the automation code required periodic configuration updates. Having a simple interface to manage configuration would allow non-technical users to easily change settings without touching the code.
- **More Flexible Data Checks:**  
    Some Excel scripts had hardcoded data checks. Adding more flexibility to some scripts (e.g. automatic column mapping) would keep the system more adaptable to future changes without manually editing code.
- **Custom Interactive Data Dashboards:**  
    While the current Excel-based dashboards were powerful (with custom slicers/filters), the overall UI could have been improved by integrating with Power BI or a custom web dashboard.
- **Automated Data Analysis and Insights:**  
  Adding some automated agent performance checks to automatically flag issues would allow supervisors to focus on key issues with minimal manual analysis.
- **AI Integration:**  
  Integrating tools like Azure AI, OpenAI, or Zapier could further automate data analysis. For example, AI could categorize survey comments and flag feedback needing supervisor attention.

# TwoColumns className="mt-2"
# Technologies
- Excel
- Office Scripts
- Power Automate
- SharePoint
- Google Apps Script
- JavaScript
- Python
- API Integration

# Skills
- Business Process Automation
- Script Development
- Data Pipeline Design
- Data Visualization
- JSON Parsing and Transformation
- Cross-Platform Integration
# TwoColumns/
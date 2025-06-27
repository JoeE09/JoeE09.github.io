---
title: Forecasting Automation Pipeline
---

# Hero

### The Problem
- Call center demand data collection was tedious and manual
- Forecasts relied on fragile Excel formulas requiring constant upkeep
- All visuals and tables were static and difficult to update

### My Solution
- Automated data collection using Power Automate flows
- Automated data cleaning and transformation with Power Query
- Integrated DAX and VBA to created more detailed forecasts
- Created dynamic visualizations that could adjust to new data

*Note: All visuals and data shown are anonymized. No proprietary company information is included on this page.* className="text-center text-sm text-gray-500 mb-4"

# Div className="max-w-3xl mx-auto mt-6"
### Overview And Technical Constraints
This project involved automating the collection and analysis of call center performance data, including average handle times and average wait times for every customer service queue. Key constraints included:
- Must all be contained in the current forecasting Excel workbook
- No external databases or tools could be used
- Should automatically update when new data arrives

### Main Tools Used
- **Power Automate:** Automated report formatting and uploading of daily data reports
- **Office Scripts:** Formatted Excel files (called via Power Automate)
- **Power Query:** Combined and transformed all data into the desired format
- **Power Pivot (DAX):** Calculated key metrics like AHT, total volume, and abandon rates, integrating slicers
- **VBA Macros:** Calculated forecasted staffing requirements (Erlang A model) based on the Power Pivot tables
- **Excel (Pivot Tables and Charts):** Stored and served data in dynamic visualizations with slicers and filters
# Div/

# ![Call Center Data Pipeline](/images/projectPages/abeka-forecasting-pipeline.svg) className="max-w-3xl mx-auto"
Flowchart outlining the data pipeline from collection to visualization

# TwoColumns className="mt-10"

# ![Inbound Calls by Month](/images/projectPages/abeka-forecasting-call-center-demand.png)
Using dynamic charts, it is easy to see trends in call center demand over time

### Features
- **Seamless Integration with Current Workflow:**  
  The new system was built directly in Excel and was compatible with their previous report formatting.

- **Automatic Data Updates:**  
  Using Office Scripts and Power Query for data cleaning meant no manual work was required to update charts and tables.

- **More Detailed Analysis:**  
  Demand data could be tracked by time, queue, department, employee type, and more, allowing for better fine-tuning of staffing.

- **Dynamic Visualizations:**  
  The main forecasting workbook now contains a wide variety of dynamic tables and charts that give key insights into queue performance.

### Technical Challenges
- **Proper Data Combination:**  
  Combining data from all sources took careful handling of the different formats to ensure the final table was consistent and complete.

- **Handling Complex Inputs:**  
  Multiple linked tables were required to properly filter and slice data for the KPI calculations.

- **Complex Slicing Across Metrics:**  
  I used advanced DAX formulas to correctly calculate calculate KPIs even with multiple filters applied (like queue, department, and time).

- **Forecasting Model Integration:**  
  Since the Erlang A forecasting formulas are too complex for Power Pivot, I used VBA macros to dynamically calculate staffing requirements from the Power Pivot tables.

- **Familiar Interface:**  
  The final interface needed to be simple to use by management or other analysts. I created simplified views with clear slicers and filters to aid understanding.

# ![Demand Breakdown Charts](/images/projectPages/abeka-forecasting-queues.png)
To accurately plan staffing, it is important to break down demand by queue and department.

# TwoColumns/


### Possibilities to Extend class="max-w-3xl mx-auto"
- **More interactive final dashboard:**  
  Rebuilding the final dashboard in Power BI could allow more polished UI and flexible data views (e.g. overview vs. deep dive), making it simpler for different levels of management to use.
- **Genesys API Integration:**  
  Daily queue performance was still downloaded manually from Genesys. Integrating the Genesys API to pull performance data would enable a no-touch data pipeline for report generation and data upload.
- **Automatic staff report creation:**  
  Parts of the staff report were still generated manually. Adding an Office Script or VBA macro would streamline and simplify the report writing process.

# TwoColumns className="mt-2"
# Technologies
- Excel
- Office Scripts
- VBA
- Power Automate
- Power Query
- Power Pivot


# Skills
- Excel Automation
- Data Pipeline Design
- KPI Benchmarking
- Demand Forecasting
- DAX / VBA Integration
- Dashboard Design
# TwoColumns/
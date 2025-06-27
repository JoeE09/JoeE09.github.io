---
title: Senior Engineering Project (Unfinished)
---

# Hero

### The Setup
- 

### My Contribution
- 

# Div className="max-w-3xl mx-auto mt-6"
### Overview And Technical Constraints
This project was an academic simulation of a real-world engineering firm-style project.

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
  I had to use advanced DAX formulas to correctly calculate calculate KPIs even with multiple filters applied (like queue, department, and time).

- **Forecasting Model Integration:**  
  Since the Erlang A forecasting formulas are too complex for Power Pivot, VBA macros were required to dynamically calculate staffing requirements from the Power Pivot tables.

- **Familiar Interface:**  
  The final interface needed to be simple to use by the management who lacked knowledge of Power Pivot or Power Query. I created simplified views with clear slicers and filters to aid understanding.

# ![Demand Breakdown Charts](/images/projectPages/abeka-forecasting-queues.png)
To obtain accurate data for staffing strategies, it was essential to track performance by queue and department.

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
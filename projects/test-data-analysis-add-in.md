---
title: Test Data Analysis Add-in
---

# Hero

### The Problem
- Analyzing test data involved fragmented, manual steps
- No reusable system existed for importing or plotting runs
- The process was tedious, error-prone, and time-consuming

### My Solution
- Built a self-contained Excel add-in with VBA
- Streamlined import, cleaning, and plotting with minimal user input
- Designed an intuitive ribbon interface with configuration profiles
- Saved hours of tedious manual work after every test run

*Note: All visuals and data shown are anonymized. No proprietary company information is included on this page.* className="text-center text-sm text-gray-500 mb-2"

# Demo
- Here is a quick walkthrough of the import tool and batch plotting tools
- Users can clean and visualize multi-run test data in just a few clicks using saved configuration profiles

# TwoColumns className="mt-10"
### Overview And Technical Constraints
I built this tool as a self-contained Excel add-in for test engineers without programming backgrounds. It automates the process of importing, cleaning, and plotting engine test data. Key design constraints included:
- Must support trendlines, regression analysis, and tolerance bands
- Should be intuitive and require minimal training
- Should not require installing external dependencies or new tools
- Should work reliably without internet access

Given these constraints, I chose to build the tool as a VBA-based Excel add-in that integrates directly into the Excel ribbon. This approach provided a native, familiar interface for the engineering team.

### Alternatives Considered
Below are some options I considered before building the Excel add-in:
- **Power Query + Power BI + Power Pivot:** Great for visualization, but lacks native support for trendlines and scatter plots.
- **External Tools (Python, MATLAB):** Highly customizable, but too complex for the non-programmer end users.
- **Office Scripts / Cloud-Based Add-ins:** Modern architecture, but adds dependency on cloud platforms and consistent internet access.

# TwoColumns/

# TwoColumns className="mt-2"

# ![Batch Plot Management Menu](/images/projectPages/excel-tools-batch-plot-menu.png)
Settings menu to configure an individual data series, including data and formatting options

### Features
- **User-Friendly Ribbon Interface:**  
  The add-in integrates directly into Excel with an intuitive ribbon menu, making it accessible even to non-technical users.

- **Automated Data Import and Cleaning:**  
  Users can select multiple data files (Excel or CSV), and the tool automatically prepares and formats the data.

- **Flexible Plot Configuration:**  
  Users can select a data range, apply trendlines, and generate multiple plots in one step using reusable configuration settings.

- **Centralized Plot Management:**  
  A single menu lets users view, rename, and assign data across all plots, streamlining what used to be a tedious multi-step process.

- **Reusable Profiles for Different Test Setups:**  
  Configuration profiles allow different engine types or testing scenarios to be handled with minimal reconfiguration.

### Technical Challenges
- **Configuration Persistence Without External Dependencies:** Developed a system to serialize config data into hidden sheets and handle various data types natively in VBA.
- **Reusable Form Generator:** Created a tag-based form generation system that automatically binds UI controls to configuration profiles. Reduced hardcoding and made managing forms simpler.
- **Handling malformed data sources:** Developed methods to properly find data table boundaries and valid data ranges, even when the source data was not well-formed or contained empty rows/columns.
- **Automatic Column Mapping:** Implemented a robust system to automatically map data columns to plot series, giving users flexibility in their naming conventions while matching column titles to plot names.
- **Version Control:** Programmed a lightweight VBA version control tool to track codebase changes and restore previous versions, since VBA lacks built-in versioning.

# ![Import Data Form UI](/images/projectPages/excel-tools-data-form.png)
Settings menu for configuring data imports

# TwoColumns/

# Div className="max-w-2xl mx-auto"
### Possibilities to Extend
- **Link Plots to Excel tables instead of ranges:** Would make data management simpler and less error-prone, but would lose some flexibility in data layout.
- **Auto-Tolerance Generation:** Add an option to generate tolerance bands based on baseline data (with customizable limits).
- **Data Validation:** Add a tool to validate test data against the baseline, checking for outliers or out-of-tolerance data.
- **Integrate Power Query for Data Preparation:** Use Power Query for more flexible data cleaning and transformation.
# Div/

# TwoColumns className="mt-2"
# Technologies
- Excel
- VBA

# Skills
- Excel automation
- Add-in Development
- Data Pipeline Design
- Interface Design
- Configuration Management
# TwoColumns/
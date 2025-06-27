---
title: My Portfolio Website
---

## My Portfolio Website className="text-center font-extrabold text-4xl text-customGreen mb-12"

# Div className="max-w-3xl mx-auto mb-6" 
### Overview
I designed this portfolio site to showcase my projects and skills in a polished, responsive, and easy-to-update format. I built the site from scratch so I could have full control over the design, as well as build practical skills in web development, which I hope to apply in the future, whether for building custom apps, interfaces, or dashboards.

### Design Iterations className="mt-2"
- **Initial Scaffold in Word:** I started with a simple Word document to outline the structure and content.
- **Tried Jekyll Templates:** I experimented with Jekyll but found the configuration structure a bit rigid.
- **Decided on a Custom React App:** I decided to build from scratch using React and Tailwind CSS for flexibility and control. I had done some web design using vailla HTML and CSS, so I wanted to gain understanding of a component-based design framework.
- **Tried YAML for Configuration:** I tried using YAML to manage project entries and content, but found it too limited for page layouts. I opted to use JSON instead for configuration and markdown for content (with some YAML frontmatter for metadata).
- **Finalized with Markdown based Project Pages:** I settled on using Markdown for project descriptions combined with a custom parser to convert to TSX, allowing for a combination of simplicity and flexibility.

# Div/

# TwoColumns className="mt-2"

# Div
### Features
- Markdown-driven project pages with automatic component mapping
- Responsive card grid with dynamic hover behavior
- Flip card interface for tech stack summaries
- Centralized asset and config management using YAML and JSON
- Consistent design system with Tailwind and custom animation components

### Technical Challenges
- **Markdown to TSX Transformation:** I needed a way to convert Markdown project descriptions into React components while maintaining flexibility.
- **Regex and Text Parsing:** I used regex to extract and transform Markdown content into structured data for rendering.
- **Custom Animations:** I implemented custom animations for text and card transitions to enhance the user experience.
- **Unpacking Nested Structures:** I used recursive logic to unpack nested list structures in the markdown AST (Abstract Syntax Tree), ensuring proper transformation to React components.

# Div/

# ![Markdown to TSX Example](/images/projectPages/portfolio-markdown-translation.png)
My custom Markdown converter included direct support for styling within markdown, allowing for seamless translation to React components, combining the simplicity of Markdown with the flexibility of React.

# TwoColumns/

# TwoColumns className="mt-2"
# Technologies
- HTML
- CSS
- TypeScript
- React
- Tailwind CSS
- Vite
- Node.js

# Skills
- YAML / JSON Configuration
- Responsive Web Design
- Component-Based Architecture
- Markdown to TSX Transformation
- Regex and AST Parsing
- Presentation and Media Editing
# TwoColumns/
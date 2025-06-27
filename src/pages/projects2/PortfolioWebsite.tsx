import ResponsiveBlurredImage from "@/components/ResponsiveBlurredImage";
import AnimatedText from "@/components/AnimatedText";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function PortfolioWebsite() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <section ref={sectionRef} className="px-6 pb-12 pt-8 border-b border-gray-200 w-full bg-cover bg-center overflow-hidden">
        <ResponsiveBlurredImage src="/images/projectPages/portfolio-website-banner.png" referenceRef={sectionRef} animationDelay={0.01} animationDuration={1.5} />
        <div className="max-w-5xl mx-auto z-10">
          <AnimatedText baseDelay={0.01} delayStep={0.1} duration={1.5} translateAmount={-20}>
            <h1 className="text-4xl relative font-extrabold text-customGreen mb-6 text-center">
              My Portfolio Website
            </h1>
          </AnimatedText>
        </div>
      </section>
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Overview</h3>
            <p className="text-md text-gray-700 mb-4">I designed this portfolio site to showcase my projects and skills in a polished, responsive, and easy-to-update format. I built the site from scratch so I could have full control over the design, as well as build practical skills in web development, which I hope to apply in the future, whether for building custom apps, interfaces, or dashboards.</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center mt-2">Design Iterations</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Initial Scaffold in Word:</strong>  I started with a simple Word document to outline the structure and content.</li>
              <li><strong>Tried Jekyll Templates:</strong>  I experimented with Jekyll but found the configuration structure a bit rigid.</li>
              <li><strong>Decided on a Custom React App:</strong>  I decided to build from scratch using React and Tailwind CSS for flexibility and control. I had done some web design using vailla HTML and CSS, so I wanted to gain understanding of a component-based design framework.</li>
              <li><strong>Tried YAML for Configuration:</strong>  I tried using YAML to manage project entries and content, but found it too limited for page layouts. I opted to use JSON instead for configuration and markdown for content (with some YAML frontmatter for metadata).</li>
              <li><strong>Finalized with Markdown based Project Pages:</strong>  I settled on using Markdown for project descriptions combined with a custom parser to convert to TSX, allowing for a combination of simplicity and flexibility.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <div className="">
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Features</h3>
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li>Markdown-driven project pages with automatic component mapping</li>
                <li>Responsive card grid with dynamic hover behavior</li>
                <li>Flip card interface for tech stack summaries</li>
                <li>Centralized asset and config management using YAML and JSON</li>
                <li>Consistent design system with Tailwind and custom animation components</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
              <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
                <li><strong>Markdown to TSX Transformation:</strong>  I needed a way to convert Markdown project descriptions into React components while maintaining flexibility.</li>
                <li><strong>Regex and Text Parsing:</strong>  I used regex to extract and transform Markdown content into structured data for rendering.</li>
                <li><strong>Custom Animations:</strong>  I implemented custom animations for text and card transitions to enhance the user experience.</li>
                <li><strong>Unpacking Nested Structures:</strong>  I used recursive logic to unpack nested list structures in the markdown AST (Abstract Syntax Tree), ensuring proper transformation to React components.</li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/portfolio-markdown-translation.png" alt="Markdown to TSX Example" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">My custom Markdown converter included direct support for styling within markdown, allowing for seamless translation to React components, combining the simplicity of Markdown with the flexibility of React.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList className="" technologies={["HTML","CSS","TypeScript","React","Tailwind CSS","Vite","Node.js"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList className="" skills={["YAML / JSON Configuration","Responsive Web Design","Component-Based Architecture","Markdown to TSX Transformation","Regex and AST Parsing","Presentation and Media Editing"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
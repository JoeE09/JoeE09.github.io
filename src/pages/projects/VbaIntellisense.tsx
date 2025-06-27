import ProjectHero from "@/components/ProjectHero";
import VideoDemo from "@/components/VideoDemo";
import TechnologiesList from "@/components/TechnologiesList";
import SkillsList from "@/components/SkillsList";
import { useRef } from "react";

export default function VbaIntellisense() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white text-gray-900">
      <ProjectHero  
        sectionRef={sectionRef}
        bannerImage="/images/projectPages/vba-intellisense-banner.png"
        animationDelay={0.01}
        title="VBA IntelliSense"
        hero={{
          left: {"title":"The Need","bullets":["VBA is widely used for Excel and Word macros, but...","The built-in editor lacks autocomplete and navigation","Writing and maintaining macros is slow and error-prone","VBA code can't be run outside the built-in editor"]},
          right: {"title":"What I Built","bullets":["A standalone IntelliSense tool for the VBA editor","Adds context-aware hints, autocomplete, and jump-to-definition","Improves speed and confidence when editing VBA macros"]}
        }}
      />
      <main className="max-w-6xl px-6 py-10 mx-auto">
        <VideoDemo className="mb-10" video="/videos/vba-intellisense-demo.mp4" thumbnail="/images/projectPages/vba-intellisense-thumbnail.png" title="Here's a short demonstration of the IntelliSense tool in action — including launching the tray app, triggering autocomplete in the VBE editor, and exiting from the system tray." caption="Autocomplete suggestions and symbol navigation inside the Visual Basic Editor (VBE)" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/vba-declaration.png" alt="Go to declaration navigation panel" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Go to declaration navigation panel, allowing for quick navigation through the codebase</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Features</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li>Context-aware symbol suggestions based on scope</li>
              <li>Smart indexing of declarations and references across modules</li>
              <li>Runs as a background tray app that detects the active VBE window</li>
              <li>Lightweight global keyboard hook for real-time suggestions</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Technical Challenges</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>No Plugin Model:</strong>  Since there's no way to hook directly into the VBE, I had to create a lightweight window watcher that attaches to the correct COM object when the editor is in focus.</li>
              <li><strong>Raw Code Access Only:</strong>  The VBE exposes just plain text, not a code model. I developed a custom parser to extract symbols and build a searchable index of declarations and references.</li>
              <li><strong>Manual Scope Tracking:</strong>  To suggest relevant symbols, I built a line-level scope inference engine that tracks module-level vs. block-level context.</li>
              <li><strong>Input Limitations:</strong>  Since VBE doesn’t expose user input events, I used a system-level global keyboard hook to detect when the user was typing and to intercept relevant keys.</li>
              <li><strong>Symbol Database:</strong>  I designed a dynamic in-memory symbol table to store declarations and efficiently match user input with available suggestions.</li>
              <li><strong>Interop and Threading:</strong>  Working with COM safely required careful threading and error handling to avoid race conditions or application crashes.</li>
            </ul>
          </div>
          <div className="overflow-hidden mt-auto ">
            <img src="/images/projectPages/vba-debugger.png" alt="Symbol Debugger UI showing parsed symbols with details" className="w-full rounded shadow" />
            <p className="text-sm text-gray-500 italic mt-2 text-center">Internal Symbol Debugger used to verify scope, type, and declaration line for each parsed VBA symbol</p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Options Considered</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>VS Code VBA Extensions:</strong>  Rejected because they lack context awareness and cannot interact with the actual VBE runtime environment or COM object models.</li>
              <li><strong>Using Office Scripts Instead of VBA:</strong>  Powerful for online workflows, but not useful inside the local VBE editor or for realtime development productivity tools.</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold text-customGreen mb-2 text-center ">Possibilities to Extend</h3>
            <ul className="list-inside list-disc ml-2 text-gray-700 space-y-1 mb-2">
              <li><strong>Hotkey Toggle for IntelliSense:</strong>  Would allow users to disable hints temporarily, such as while writing comments or strings.</li>
              <li><strong>String-aware Suggestion Control:</strong>  Tool could detect if the user is typing inside a string and suppress suggestions accordingly.</li>
              <li><strong>Symbol Search Box:</strong>  Would be helpful to quickly find and navigate to specific symbols across all modules.</li>
              <li><strong>Docstring Integration:</strong>  Could support special comment formats to inject helpful descriptions into tooltip popovers for each symbol.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Technologies Used</h2>
            <TechnologiesList  technologies={["C#","WinForms","VBA / VBE","Windows API","COM Interop"]} />
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ">Skills Used</h2>
            <SkillsList  skills={["Custom symbol parsing","Extending legacy tools","Desktop app integration","Data indexing","Developer productivity","COM interop workflows"]} />
          </section>
        </div>
      </main>
    </div>
      );
  }
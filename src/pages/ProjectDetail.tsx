import ProjectsSection from "@/components/ProjectsSection";
import { useParams } from "react-router-dom";
const pages = import.meta.glob("@/pages/projects/*.tsx", { eager: true });
const projectComponents: Record<string, React.ComponentType> = {};

Object.entries(pages).forEach(([path, mod]) => {
  const rawKey = path.split("/").pop()!.replace(/\.tsx$/, "");
  // Convert to kebab-case with lowercase letters after uppercase
  // e.g. "MyProject" -> "my-project"
  // e.g. "AnotherExample" -> "another-example"
  // e.g. "ProjectWithNumbers123" -> "project-with-numbers-123"
  const key = rawKey
    .replace(/([a-z])([A-Z])/g, "$1-$2")  // split lower→upper
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")  // split acronyms
    .toLowerCase();
  // let key = rawKey[0].toLowerCase(); // start with first character in lowercase
  // for (const char of rawKey[1] ? rawKey.slice(1) : "") {
  //   if (char.toLowerCase() !== char) {
  //     key += "-" + char.toLowerCase();
  //   }
  //   else {
  //     key += char;
  //   }
  // }
  projectComponents[key] = (mod as { default: React.ComponentType }).default;
});

export default function ProjectDetail() {
  const { slug } = useParams();
  const Component = slug ? projectComponents[slug] : null;

  return (
    <div className="bg-white text-gray-900">
      {Component ? (
        <Component />
      ) : (
        <div className="p-6 text-red-600 text-center">Project not found</div>
      )}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-customGreen text-center mt-8 mb-4">
          View Other Projects
        </h2>
        <ProjectsSection exclude={[slug || '']} />
      </div>
    </div>
  );
}
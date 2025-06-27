import logoMapData from "@/data/logoMap.json";
const logoMap = logoMapData as Record<string, string>;

interface TechnologiesListProps {
  technologies: string[];
  className?: string;
}

export default function TechnologiesList({ technologies }: TechnologiesListProps) {
  return (
    <div className="flex flex-wrap justify-start gap-x-6 gap-y-6">
      {technologies.map((tech, idx) => (
        <div
          key={idx}
          className="flex flex-col w-20 items-center transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <img src={logoMap[tech]} alt={tech} className="w-12 h-12 mb-2" />
          <span className="text-sm text-gray-700 text-center">{tech}</span>
        </div>
      ))}
    </div>
  );
}

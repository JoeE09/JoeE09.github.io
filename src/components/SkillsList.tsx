interface SkillsListProps {
  skills: string[];
  className?: string;
}

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-sm">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-green-100 text-green-800 px-3 py-1 rounded-full transition-transform duration-200 ease-in-out hover:scale-105"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
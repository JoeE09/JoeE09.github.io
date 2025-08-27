// SkillsBubble.tsx
import * as React from "react";
import projectJson from "@/data/projects.json";
import { useEffect, useRef } from "react";

const projectsFixed = projectJson.reduce((acc: Record<string, string>, proj) => {
  acc[proj.slug] = proj.title;
  return acc;
}, {});

/** Buckets must match your pillars.json ids */
export type PillarId = string;

export interface SkillCategoryContext {
  bullets?: string[];
  projects?: string[];   // slugs that exist in your projects index
  blog?: string[];       // optional blog slugs/urls
  experience?: string[]; // slugs that exist in your experiences index
}

export interface Skill {
  slug: string;
  label: string;
  synonyms?: string[];
  priority?: number;
  categories: Partial<Record<PillarId, SkillCategoryContext>>;
}

/** Minimal index entry used for linking */
export interface IndexItem {
  title: string;
  url: string;
}
export type IndexMap = Record<string, IndexItem>;

export interface SkillsBubbleProps {
  /** The single skill record from skills.json */
  skill: Skill;

  /** Optional: which pillar’s context to show (Data vs Controls vs Software, etc.) */
  pillarId?: PillarId;

  /** Visual tweaks */
  size?: "sm" | "md" | "lg";
  className?: string;

  /** If you want to control the open state externally */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/** Utility: choose the best-available pillar context if none was provided */
function pickBestPillar(skill: Skill): PillarId | undefined {
  const order: PillarId[] = ["data", "controls", "software", "engineering"];
  for (const id of order) if (skill.categories[id]) return id;
  return undefined;
}

export const SkillsBubble: React.FC<SkillsBubbleProps> = ({
  skill,
  pillarId,
  size = "md",
  className,
  open: controlledOpen,
  onOpenChange,
}) => {
  const fallbackPillar = React.useMemo(() => pillarId ?? pickBestPillar(skill), [pillarId, skill]);
  const ctx = (fallbackPillar ? skill.categories[fallbackPillar] : undefined) ?? {};

  // Uncontrolled vs controlled open state
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const toggle = () => {
    const next = !isOpen;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        toggle(); // call your close handler
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggle]);

  const idBase = `skill-${skill.slug}-${fallbackPillar ?? "all"}`;
  const panelId = `${idBase}-panel`;

  const sizeClasses =
    size === "sm"
      ? "px-2 py-1 text-xs"
      : size === "lg"
      ? "px-4 py-2 text-base"
      : "px-3 py-1.5 text-sm";

  return (
    <div ref={wrapperRef} className={`relative inline-block ${className ?? ""}` }>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        className={[
          "inline-flex items-center gap-2 rounded-full border-none",
          " bg-green-100 text-green-800",
          "transition-transform duration-200 ease-in-out hover:scale-105",
          // "hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300",
          "transition-shadow",
          "cursor-pointer",
          sizeClasses,
        ].join(" ")}
        title={fallbackPillar ? `${skill.label} • ${fallbackPillar}` : skill.label}
      >
        <span className="font-medium">{skill.label}</span>
        <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden>
          <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* Details panel */}
      {isOpen && (
        <div
          id={panelId}
          className="absolute mt-2 w-[min(28rem,90vw)] rounded-xl border border-emerald-200 bg-white p-4 shadow-lg z-30"
          role="region"
          aria-label={`${skill.label} details`}
        >
          {/* {fallbackPillar && (
            <div className="mb-1 text-xs uppercase tracking-wide text-emerald-700/70">
              {fallbackPillar}
            </div>
          )} */}

          {/* <h4 className="text-base font-semibold text-emerald-900">{skill.label}</h4> */}

          {/* Bullets */}
          {ctx?.bullets && ctx.bullets.length > 0 ? (
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm text-emerald-900/90">
              {ctx.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-emerald-900/70">Context coming soon.</p>
          )}

          {/* Links */}
          <div className="mt-3 flex flex-wrap gap-6 text-sm">
            {ctx?.projects && ctx.projects.length > 0 && (
              <div>
                <div className="font-medium text-emerald-700">Relevant projects</div>
                <ul className="mt-1 space-y-1">
                  {ctx.projects.map((pid) => {
                    const p = projectsFixed[pid];
                    // console.log(pid, JSON.stringify(projectsFixed, null, 2));
                    return p ? (
                      <li key={pid}>
                        <a className="underline decoration-emerald-300 underline-offset-2 hover:text-emerald-900" href={`/projects/${pid}`}>
                          {p}
                        </a>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}

            {ctx?.experience && ctx.experience.length > 0 && (
              <div>
                {/* <div className="font-medium text-emerald-700">Work experience</div>
                <ul className="mt-1 space-y-1">
                  {ctx.experience.map((eid) => {
                    const e = experiencesFixed[eid];
                    return e ? (
                      <li key={eid}>
                        <a className="underline decoration-emerald-300 underline-offset-2 hover:text-emerald-900" href={e.url}>
                          {e.title}
                        </a>
                      </li>
                    ) : null;
                  })}
                </ul> */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
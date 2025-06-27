import {
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaPlay,
  FaLink
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface LinkItem {
  label: string;
  href: string;
  icon?: string;
}

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaGlobe,
  FaPlay,
  FaLink
};

interface LinksProps {
  links: LinkItem[];
  className?: string;
  itemClassName?: string;
}

export default function ProjectLinks({ links, className = "", itemClassName = "" }: LinksProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {links.map((link, idx) => {
        const Icon = link.icon ? iconMap[link.icon] ?? FaExternalLinkAlt : FaExternalLinkAlt;
        return (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-medium transition-colors 
                ${itemClassName || "text-customGreen hover:text-emerald-400"}`}
          >
            <Icon size={36} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}

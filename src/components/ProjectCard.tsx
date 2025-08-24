// src/components/ProjectCard.tsx
import { useRef } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  hoverGif?: string;
  status?: string; // "In Progress" | "On Hold" | "Testing" | "Complete";
  company?: string;
  link?: string;
}

const statusColorMap: Record<string, string> = {
  "In Progress": "border-blue-500 text-blue-600",
  "On Hold": "border-red-500 text-red-600",
  "Testing": "border-purple-500 text-purple-600",
  "Complete": "border-green-500 text-green-600",
};

export default function ProjectCard({
  slug,
  title,
  description,
  imageUrl,
  hoverGif,
  status,
  company,
  link,
}: ProjectCardProps) {
  const normalizedLink =
    link || `/projects/${slug}`;

  // video element reference so we can control playback from the parent container
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasHover = Boolean(hoverGif && hoverGif.trim() !== "");
  const hasHoverGif = hasHover && (hoverGif!.endsWith(".gif") || hoverGif!.endsWith(".mp4"));
  const hasHoverImg = hasHover && !hasHoverGif;

  /**
   * Play the hover video when the pointer enters the card
   */
  const handleMouseEnter = () => {
    if (videoRef.current) {
      // browsers return a Promise from play(); ignore errors silently
      videoRef.current.play().catch(() => {});
    }
  };

  /**
   * Pause & reset the video when the pointer leaves the card
   */
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const content = (
    <div
      className="group flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        {/* base image */}
        <img
          src={imageUrl}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 ${
    hasHoverGif ? "group-hover:opacity-0" : ""
  }`}
        />

        {/* mp4/gif overlay */}
        {hasHoverGif && (
          <>
            <video
              ref={videoRef}
              src={hoverGif}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* corner icon */}
            <img
              src={imageUrl}
              alt={`${title} icon`}
              className="absolute bottom-2 right-2 w-12 h-12 rounded shadow-md group-hover:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none"
            />
          </>
        )}

        {/* static hover image */}
        {hasHoverImg && (
          <img
            src={hoverGif}
            alt={`${title} hover`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>

      {/* text section */}
      <div className="flex-1 flex flex-col justify-between p-4 bg-white">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-customGreen mb-2">{title}</h2>
          <div className="flex items-center gap-8 mb-2">
            {status && (
              <span
                className={`text-[0.85rem] font-medium rounded-full px-3 py-0.5 border ${
    statusColorMap[status] || "border-gray-400 text-gray-600"
  }`}
              >
                {status}
              </span>
            )}
            {company && (
              <span className="text-[0.85rem] font-medium text-gray-500">{company}</span>
            )}
          </div>
        </div>
        <p className="text-md text-gray-600">{description}</p>
      </div>
    </div>
  );

  return normalizedLink.startsWith("http") ? (
    <a href={normalizedLink} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link to={normalizedLink}>{content}</Link>
  );
}
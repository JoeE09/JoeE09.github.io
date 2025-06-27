import React from "react";

interface VideoDemoProps {
  className?: string;
  video: string;
  thumbnail: string;
  title?: string;
  caption?: string;
}

const VideoDemo: React.FC<VideoDemoProps> = ({
  className = "",
  video,
  thumbnail,
  title,
  caption,
}) => (
  <div className={`max-w-3xl mx-auto px-4 ${className}`}>
    <h2 className="text-2xl font-semibold text-customGreen text-center mb-2">Demo</h2>
    {title && (
      <p className="text-gray-700 mb-4 text-center">{title}</p>
    )}
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-2">
      <video className="w-full h-full" controls poster={thumbnail}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    {caption && (
      <p className="text-sm text-gray-500 italic text-center">{caption}</p>
    )}
  </div>
);

export default VideoDemo;
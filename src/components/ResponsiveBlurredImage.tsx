import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface ResponsiveBlurredImageProps {
  src: string;
  blurAmount?: number;
  className?: string;
  referenceRef?: React.RefObject<HTMLElement | null>;
  animationDelay?: number; // delay before applying blur in ms
  animationDuration?: number; // delay before applying blur in ms
  overlayOpacity?: number; // opacity of the overlay
  backgroundGradient?: string; // optional background gradient
}

export default function ResponsiveBlurredImage({
  src,
  blurAmount = 4,
  className = "",
  referenceRef,
  animationDelay = 0.75, // delay before applying blur in s
  animationDuration = 1, // duration of blur animation in s
  overlayOpacity = 0, // opacity of the overlay
  backgroundGradient = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6))`,
}: ResponsiveBlurredImageProps) {
    const [blur, setBlur] = useState(0);

    useEffect(() => {
    const timer = setTimeout(() => {
        setBlur(blurAmount);
    }, animationDelay*1000); // give time for initial mount

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blurAmount]);
  const containerRef = useRef<HTMLDivElement>(null);
  const measuredRef = referenceRef ?? containerRef;
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useLayoutEffect(() => {
    setTimeout(() => {
      if (measuredRef.current) {
        const rect = measuredRef.current.getBoundingClientRect();

        setDimensions({
          width: rect.width,
          height: rect.height,
          top: rect.top, // or just use 0 if it's always flush with top
          left: rect.left,
        });
      }
    }, 20);

  // Only update size on resize, not position
  const handleResize = () => {
    if (!measuredRef.current) return;
    const rect = measuredRef.current.getBoundingClientRect();
    setDimensions(prev => ({
      ...prev,
      width: rect.width,
      height: rect.height,
    }));
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [measuredRef]);


  return (
      <div className="overflow-hidden">
      <img
        src={src}
        alt="Blurred Background"
        className={className}
        style={{
            position: "absolute",
            inset: 0,
          width: dimensions.width,
          height: dimensions.height,
          marginTop: dimensions.top,
          objectFit: "cover",
          clipPath: "inset(0)",
          filter: `blur(${blur}px)`,
          transition: `filter ${animationDuration}s`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          position: "absolute",
          inset: 0,
          width: dimensions.width,
          height: dimensions.height,
          marginTop: dimensions.top,
          objectFit: "cover",
          backgroundImage: backgroundGradient,
          opacity: overlayOpacity,
        }}
      ></div>
      </div>
  );
}

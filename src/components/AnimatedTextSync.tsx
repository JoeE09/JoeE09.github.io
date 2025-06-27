import React from "react";
import AnimatedText from "./AnimatedText";

interface AnimatedTextSyncProps {
  children: React.ReactNode;
  baseDelay?: number;
  delayStep?: number;
  blockDelayStep?: number;
  className?: string;
  translateAmount?: number;
  duration?: number;
  translateDirection?: "X" | "Y";
  alternate?: "word" | "block" | "none";
  blockAlternate?: boolean;
}

export default function AnimatedTextSync({
  children,
  baseDelay = 0,
  delayStep = 0.06,
  blockDelayStep = 0,
  className = "",
  translateAmount = 20,
  duration = 0.6,
  translateDirection = "Y",
  alternate = "none",
  blockAlternate = false

}: AnimatedTextSyncProps) {
  return (
    <>
      {React.Children.map(children, (child, idx) => (
        <AnimatedText
          baseDelay={baseDelay + blockDelayStep * idx}
          delayStep={delayStep}
          className={className}
          translateAmount={translateAmount * ((blockAlternate && idx % 2 === 1) ? -1 : 1)} // alternate sign for each child
          duration={duration}
          translateDirection={translateDirection}
          alternate={alternate}
        >
          {child}
        </AnimatedText>
      ))}
    </>
  );
}

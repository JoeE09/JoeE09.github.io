import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface AnimatedTextProps {
  children: React.ReactNode;
  delayStep?: number;
  baseDelay?: number;
  className?: string;
  translateAmount?: number;
  duration?: number; // duration of animation in seconds
  translateDirection?: "Y" | "X"; // new prop
  alternate?: "word" | "block" | "none"; // new prop
}

interface WordState {
  visible: boolean;
}

export default function AnimatedText({
  children,
  delayStep = 0.06,
  baseDelay = 0,
  className = "",
  translateAmount = 20,
  duration = 0.6,
  translateDirection = "Y", // default to Y
  alternate = "none", // default to none
}: AnimatedTextProps) {
  const wordIndexRef = useRef(0);
  const spaceIndexRef = React.useRef(-1);
  const blockIndexRef = useRef(0); // for block alternation
  // const [wordStates, setWordStates] = useState<WordState[]>([]);
  const location = useLocation();
  
  // Extract and animate words
  const animateWords = (node: React.ReactNode): React.ReactNode => {
    wordIndexRef.current = 0;
    spaceIndexRef.current = -1; // reset space index
    blockIndexRef.current = 0;
    const states: WordState[] = [];

    // Helper to determine block alternation
    // let currentBlock = 0;
    const process = (node: React.ReactNode, blockLevel = 0): React.ReactNode => {
      if (typeof node === "string") {
        const words = node.split(/(\s+)/); // preserve spaces
        return words.map((word) => {
          const isWhitespace = /^\s+$/.test(word);
          const index = isWhitespace ? spaceIndexRef.current-- : wordIndexRef.current++;

          states.push({ visible: false });

          // Determine translateAmount sign
          let flip = 1;
          if (alternate === "word") {
            flip = index % 2 === 0 ? 1 : -1;
          } else if (alternate === "block") {
            flip = blockLevel % 2 === 0 ? 1 : -1;
          }
          // "none" keeps flip = 1

          const translate =
            translateDirection === "Y"
              ? `translateY(${flip * translateAmount}px)`
              : `translateX(${flip * translateAmount}px)`;

          return (
            <span
              key={index}
              style={
                    {
                      display: "inline-block",
                      opacity: 0,
                      transform: translate,
                      transition: `opacity ${duration}s ease, transform ${duration}s ease`,
                      transitionDelay: `${baseDelay + (isWhitespace ? wordIndexRef.current : index) * delayStep}s`,
                    }
              }
              data-word-index={index}
            >
              {word === " " ? "\u00A0" : word}
            </span>
          );
        });
      }

      if (Array.isArray(node)) {
        return node.map((child, i) => (
          <React.Fragment key={i}>{process(child, blockLevel)}</React.Fragment>
        ));
      }

      if (React.isValidElement(node)) {
        // For block alternation, increment blockLevel for each block element
        const element = node as React.ReactElement<{ children?: React.ReactNode }>;
        const isBlock =
          typeof node.type === "string" &&
          ["div", "p", "section", "article", "li", "ul", "ol", "h1", "h2", "h3", "h4", "h5", "h6"].includes(node.type);
        const nextBlockLevel = isBlock ? blockIndexRef.current++ : blockLevel;
        return React.cloneElement(node, undefined, process((element.props.children), nextBlockLevel));
      }

      return node;
    };

    const output = process(node, 0);
    // setWordStates(states);
    return output;
  };

  const [animatedContent, setAnimatedContent] = useState<React.ReactNode>(() =>
    animateWords(children)
  );

  useEffect(() => {
    setAnimatedContent(animateWords(children));

    void document.body.offsetHeight;

    const spans = document.querySelectorAll("[data-word-index]");
    spans.forEach((span) => {
      (span as HTMLElement).style.opacity = "1";
      (span as HTMLElement).style.transform =
        translateDirection === "Y" ? "translateY(0)" : "translateX(0)";
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return <div className={className}>{animatedContent}</div>;
}
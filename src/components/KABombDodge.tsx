import { useRef, useEffect, useState } from "react";
import p5 from "p5";
import KABombDodgeSketch from "./KABombDodgeSketch";
import { useKeyboardControls } from "./useKeyboardControls";

export default function KABombDodge() {
  const sketchContainer = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [focused, setFocused] = useState(false);
  const keys = useKeyboardControls(focused);

  useEffect(() => {
    if (!loaded || !sketchContainer.current) return;

    const canvas = new p5((p) => KABombDodgeSketch(p, keys), sketchContainer.current);

    return () => {
      canvas.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        focused &&
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focused]);

  return (
    <div
      ref={sketchContainer}
      tabIndex={0}
      className="relative w-full h-[400px] bg-gray-100 rounded-md outline-none"
      onMouseEnter={() => setLoaded(true)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          Hover to load game...
        </div>
      )}
    </div>
  );
}

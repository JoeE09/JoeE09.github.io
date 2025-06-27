import React from "react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedTextSync from "@/components/AnimatedTextSync";
import ResponsiveBlurredImage from "@/components/ResponsiveBlurredImage";

interface ProjectHeroProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
  bannerImage: string;
  animationDelay: number;
  title: string;
  hero: {
    left: { title: string; bullets: string[] };
    right: { title: string; bullets: string[] };
  };
  headerClass?: string;
  textClass?: string;
  titleClass?: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  sectionRef,
  bannerImage,
  animationDelay,
  title,
  hero,
  headerClass = "font-semibold text-lg text-gray-800 mb-2",
  textClass = "text-gray-600 space-y-1",
  titleClass = "text-4xl relative font-extrabold text-customGreen mb-6 text-center",
}) => (
  <section
    ref={sectionRef}
    className="px-6 pb-12 pt-8 border-b border-gray-200 w-full bg-cover bg-center overflow-hidden"
  >
    <ResponsiveBlurredImage
      src={bannerImage}
      referenceRef={sectionRef}
      animationDelay={animationDelay}
      animationDuration={1.5}
    />
    <div className="max-w-5xl mx-auto z-10">
      <AnimatedText
        baseDelay={animationDelay}
        delayStep={0.1}
        duration={1.5}
        translateAmount={-20}
      >
        <h1 className={titleClass}>
          {title}
        </h1>
      </AnimatedText>
      <div className="relative grid md:grid-cols-2 gap-8">
        <div className={textClass}>
          <AnimatedText
            baseDelay={animationDelay + 0.2}
            delayStep={0.05}
            translateAmount={-10}
          >
            <h3 className={headerClass}>
              {hero.left.title}
            </h3>
          </AnimatedText>
          <AnimatedTextSync
            baseDelay={animationDelay + 0.5}
            delayStep={0.04}
            blockAlternate={true}
            translateDirection="X"
          >
            {hero.left.bullets.map((b, i) => (
              <p key={i}>• {b}</p>
            ))}
          </AnimatedTextSync>
        </div>
        <div className={textClass}>
          <AnimatedText
            baseDelay={animationDelay + 0.6}
            delayStep={0.05}
            translateAmount={-10}
          >
            <h3 className={headerClass}>
              {hero.right.title}
            </h3>
          </AnimatedText>
          <AnimatedTextSync
            baseDelay={animationDelay + 0.8}
            delayStep={0.04}
            blockAlternate={true}
            translateDirection="X"
          >
            {hero.right.bullets.map((b, i) => (
              <p key={i}>• {b}</p>
            ))}
          </AnimatedTextSync>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectHero;

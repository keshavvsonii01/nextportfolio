import TrueFocus from "../ui/TrueFocus";
import TiltedCard from "../ui/TiltedCard";
import BlurText from "../ui/BlurText";

const About = () => {
  return (
    <>
      <div
        className="p-6 mt-6 h-dvh flex flex-col items-center justify-center"
        id="about"
      >
        <div className="p-8 mt-24 md:mt-0 lg:mt-2">
          <TrueFocus
            sentence="How I work"
            manualMode={false}
            blurAmount={4}
            borderColor="rgb(209,202,222)"
            animationDuration={1.4}
            pauseBetweenAnimations={0.8}
            glowColor="rgba(209,202,222, 0.6)"
          />
        </div>

        <div className="p-2 text-center mt-4 md:mb-4 lg:mb-6">
          <TiltedCard
            imageSrc="/images/aboutme.jpg"
            altText="Keshav Soni"
            captionText="Keshav Soni"
            containerHeight="80%"
            containerWidth="100%"
            imageHeight="48vh"
            imageWidth="60vw"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </div>
        <div className={`text-center mt-2`}>
          <BlurText
            text={`I specialize in building high-conversion landing pages for SaaS founders and startups.

            My focus is simple: clear messaging, strong visual hierarchy, and fast performance — so visitors immediately understand your product and take action.

            I work closely with founders, keep communication clear, and deliver polished landing pages in 5–7 days.`}
            delay={50}
            animateBy="words"
            direction="top"
            className="text-medium sm:text-lg md:font-medium lg:font-normal md:text-xl lg:text-2xl my-4"
          />
        </div>
        <div className="text-center">
          <h1 className="text-sm text-neutral-500 lg:-mt-2">
            Conversion First Design • SaaS-focused • Fast turnaround (5-7 days)
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;

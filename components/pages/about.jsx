import TrueFocus from "../ui/TrueFocus";
import TiltedCard from "../ui/TiltedCard";
import BlurText from "../ui/BlurText";

const About = () => {
  return (
    <>
      <div className="p-6 mt-4 h-screen flex flex-col items-center justify-center">
        <TrueFocus
          sentence="About Me"
          manualMode={false}
          blurAmount={4}
          borderColor="rgb(209,202,222)"
          animationDuration={1.4}
          pauseBetweenAnimations={0.8}
          glowColor="rgba(209,202,222, 0.6)"
        />
        <div className="p-2 text-center my-8">
          <TiltedCard
            imageSrc="/images/aboutme.jpg"
            altText="Keshav Soni"
            captionText="Keshav Soni"
            containerHeight="400px"
            containerWidth="800px"
            imageHeight="400px"
            imageWidth="800px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </div>
        <div className="text-center mt-4">
          <BlurText
            text="Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-2xl my-4 line-clamp-3"
          />
        </div>
      </div>
    </>
  );
};

export default About;

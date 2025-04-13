import TrueFocus from "../ui/TrueFocus";
import Image from "next/image";
import SplitText from "../ui/SplitText";

const About = () => {
  return (
    <>
      <div className="p-6 m-4 h-screen flex flex-col items-center justify-center">
        <TrueFocus
          sentence="About Me"
          manualMode={false}
          blurAmount={4}
          borderColor="rgb(209,202,222)"
          animationDuration={1.4}
          pauseBetweenAnimations={0.8}
          glowColor="rgba(209,202,222, 0.6)"
        />
        <Image
          src={"/images/aboutme.jpg"}
          alt="About Me"
          width={800}
          height={600}
          className="rounded-2xl mx-auto my-6"
        />
        <div className="text-center mt-4">
          <p className="text-xl font-light"></p>
          <SplitText
            text=" Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape."
            className="text-2xl font-semibold text-center"
            delay={15}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
      </div>
    </>
  );
};

export default About;

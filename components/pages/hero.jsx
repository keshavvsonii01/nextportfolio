import CircularText from "../ui/CircularText";
import TextPressure from "../ui/TextPressure";

const Hero = () => {
  return (
    <>
      <div className=""></div>{" "}
      <div
        className="flex flex-col items-center justify-center h-screen"
        id="hero"
      >
        <div style={{ width: "80%", overflow: "hidden" }}>
          <TextPressure
            text="Hi There, I'm Keshav Soni!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
            className="text-9xl"
          />
        </div>{" "}
      </div>
      <div className="absolute p-6 md:p-10 lg:p-14 bottom-0 right-0 md:right-8 z-50">
          <CircularText
            text="Keshav*Soni*"
            onHover="speedUp"
            spinDuration={8}
            className="custom-class"
          />
        </div>
    </>
  );
};

export default Hero;

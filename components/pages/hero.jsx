import CircularText from "../ui/CircularText";
import TextPressure from "../ui/TextPressure";

const Hero = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center h-screen">

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
        </div>
      </div>
    </>
  );
};

export default Hero;

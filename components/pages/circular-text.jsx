import CircularText from "../ui/CircularText";

const CircularTextPage = () => {
  return (
    <>
      <div className="bottom-0 w-1/2 h-1/2  overflow-hidden z-10">
        <CircularText
          text="Keshav*Soni*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
    </>
  );
};

export default CircularTextPage;

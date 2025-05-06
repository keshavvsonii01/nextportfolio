import CircularText from "../ui/CircularText";

const Loader = ({ fadeOut }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-all duration-700 ease-in-out
        ${
          fadeOut
            ? "opacity-20 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }
      `}
      >
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

export default Loader;

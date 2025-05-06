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
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    </>
  );
};

export default Loader;

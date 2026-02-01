import CircularText from "../ui/CircularText";

const Hero = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center  text-left px-10 md:px-14 lg:px-20 py-22 md:py-28 lg:py-32 space-y-2 md:space-y-4 lg:space-y-6">
        <div>
          <h1 className=" text-4xl md:text-6xl text-white font-medium tracking-tight">
            High-conversion landing pages
            <br />
            <span className="text-neutral-300">for SaaS & startups</span>
          </h1>
        </div>
        <div>
          <h1 className=" mt-6 text-lg md:text-xl text-neutral-300 max-w-xl">
            I build fast, clean, conversion-focused web experiences that turn
            visitors into signups.
          </h1>
        </div>
        <div>
          <h1 className=" mt-4 text-sm text-neutral-400">
            Hi, I’m Keshav Soni — frontend developer & freelancer.
          </h1>
        </div>
        <div>
          <h1 className="text-sm text-neutral-500 lg:-mt-2">
            Delivered in 5–7 days • SaaS-focused • Conversion-driven{" "}
          </h1>
        </div>
        <button className="mt-10 px-6 py-3 w-56 lg:w-64 rounded-full border border-neutral-600 hover:border-neutral-200 hover:bg-neutral-950 font-medium transition-300">
          Get a Landing Page
        </button>
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

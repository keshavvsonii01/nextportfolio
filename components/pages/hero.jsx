import CircularText from "../ui/CircularText";

const Hero = () => {
  return (
    <>
      <div
        className="
          relative
          min-h-screen
          flex flex-col justify-center
          text-left
          px-10 md:px-14 lg:px-20
          py-22 md:py-28 lg:py-32
          pb-36 md:pb-28
          space-y-2 md:space-y-4 lg:space-y-6
        "
      >
        <div>
          <h1 className="text-4xl md:text-6xl text-white font-medium tracking-tight">
            SOFTWARE ENGINEER · FULL STACK · AI
            <br />
            <span className="text-neutral-300 text-3xl md:text-4xl">
              Building products from idea to production.
            </span>
          </h1>
        </div>

        <div>
          <h1 className="mt-6 text-lg md:text-xl text-neutral-300 max-w-xl">
            I build full-stack web applications and AI-powered products across
            the frontend, backend, and everything in between.
          </h1>
        </div>

        <div>
          <h1 className="mt-4 text-sm text-neutral-400">
            Hi, I’m Keshav Soni — a Software Engineer.
          </h1>
        </div>

        <div>
          <h1 className="text-sm text-neutral-500 lg:-mt-2">
            React · Next.js · C#/.NET · AI
          </h1>

          <h1 className="text-sm">
            <a
              href="https://drive.google.com/file/d/1jx3RUHKOGKppmn8IeHQV1rHkb3nfFxZE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </h1>

          <h1 className="text-sm">
            <a
              href="https://www.linkedin.com/in/keshavvsonii01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin ↗
            </a>
          </h1>

          <h1 className="text-sm">
            <a
              href="https://x.com/Keshavv01"
              target="_blank"
              rel="noopener noreferrer"
            >
              X ↗
            </a>
          </h1>
        </div>

        <button className="mt-10 px-6 py-3 w-56 lg:w-64 rounded-full border border-neutral-600 hover:border-neutral-200 hover:bg-neutral-950 font-medium transition-300 cursor-pointer">
          <a
            href="https://github.com/keshavvsonii01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore My Work →
          </a>
        </button>
      </div>

      {/* Circular text */}
      <div className="absolute bottom-4 right-4 md:bottom-0 md:right-8 lg:right-14 z-20 scale-75 md:scale-100">
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
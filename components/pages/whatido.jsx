import SplitText from "../ui/SplitText";
import FlowingMenu from "../ui/FlowingMenu";

const Whatido = () => {
  const demoItems = [
    {
      link: "#",
      text: "FULL-STACK WEB DEVELOPMENT",
      text2:
        "End-to-end web applications with modern frontend architectures, APIs, authentication, and database-driven workflows.",
      image:
        "https://picsum.photos/600/400?grayscale&blur=2&random=1",
    },
    {
      link: "#",
      text: "C# / .NET BACKEND & APIs",
      text2:
        "REST APIs, business logic, data models, and backend services built with C#/.NET, Node.js, SQL, and modern development practices.",
      image:
        "https://picsum.photos/600/400?grayscale&blur=2&random=2",
    },
    {
      link: "#",
      text: "REACT / NEXT.JS APPLICATIONS",
      text2:
        "Turning requirements into maintainable software through thoughtful architecture, iteration, testing, and performance optimization.",
      image:
        "https://picsum.photos/600/400?grayscale&blur=2&random=3",
    },
    {
      link: "#",
      text: "AI INTEGRATION & AUTOMATION",
      text2:
        "Integrating LLMs and AI APIs into practical products, workflows, and user experiences.",
      image:
        "https://picsum.photos/600/400?grayscale&blur=2&random=4",
    },
  ];

  return (
    <>
      <div
        className="
          min-h-screen h-auto
          md:h-dvh
          mx-6 md:m-10
          mt-14
        "
        id="Services"
      >
        {/* Heading */}
        <div className="flex flex-col items-center w-full mt-12 sm:my-4">
          <SplitText
            text="WHAT YOU GET"
            className="text-[3.2rem] md:text-[4.4rem] lg:text-8xl font-extrabold text-center mt-8 md:mt-4 p-4"
            delay={200}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{
              opacity: 1,
              transform: "translate3d(0,0,0)",
            }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>

        {/* Subtitle */}
        <div className="px-4">
          <h1 className="text-center text-lg font-light text-neutral-400 mt-4">
            A software engineer proficient across web, backend & AI.
          </h1>
        </div>

        {/* Content */}
        <div className="mt-12 md:mt-10 p-2">

          {/* Desktop / Tablet */}
          <div className="hidden md:block h-[600px] relative">
            <FlowingMenu items={demoItems} />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-0 px-2">
            {demoItems.map((item, index) => (
              <div
                key={item.text}
                className="border-b border-white/10 py-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs text-neutral-600 pt-1">
                    0{index + 1}
                  </span>

                  <span className="text-base font-semibold leading-6 text-neutral-200">
                    {item.text}
                  </span>
                </div>

                <p className="mt-3 pl-8 text-sm leading-6 text-neutral-500">
                  {item.text2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatido;
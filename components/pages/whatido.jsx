import SplitText from "../ui/SplitText";
import FlowingMenu from "../ui/FlowingMenu";

const Whatido = () => {
  const demoItems = [
    {
      link: "#",
      text: "FULL-STACK WEB DEVELOPMENT",
      text2: "End-to-end web applications with modern frontend architectures, APIs, authentication, and database-driven workflows.",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=1",
    },
    {
      link: "#",
      text: "C# / .NET BACKEND & APIs",
      text2: "REST APIs, business logic, data models, and backend services built with C#/.NET, Node.js, SQL, and modern development practices.",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=2",
    },
    {
      link: "#",
      text: "REACT / NEXT.JS APPLICATIONS",
      text2: "Turning requirements into maintainable software through thoughtful architecture, iteration, testing, and performance optimization.",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=3",
    },
    {
      link: "#",
      text: "AI INTEGRATION & AUTOMATION",
      text2: "Integrating LLMs and AI APIs into practical products, workflows, and user experiences.",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=4",
    },
  ];
  return (
    <>
      <div className="h-dvh m-10 mt-14" id="Services">
        <div className="flex flex-col items-center w-full mt-12 sm:my-4">
          <SplitText
            text="WHAT YOU GET"
            className="text-[3.2rem] md:text-[4.4rem] lg:text-8xl font-extrabold text-center mt-8 md:mt-4 p-4"
            delay={200}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div>
          <h1 className="text-center text-lg font-light text-neutral-400 mt-4">A software engineer proficient across web, backend & AI.</h1>
        </div>
        <div className="md:mt-10 p-2">
          <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatido;

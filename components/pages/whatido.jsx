import SplitText from "../ui/SplitText";
import FlowingMenu from "../ui/FlowingMenu";

const Whatido = () => {
  const demoItems = [
    {
      link: "#",
      text: "Full-Stack Web Development",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=1",
    },
    {
      link: "#",
      text: "Modern Web Design & UI Crafting",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=2",
    },
    {
      link: "#",
      text: "AI-Integrated Application Building",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=3",
    },
    {
      link: "#",
      text: "Search Engine Optimization (SEO) Strategy",
      image: "https://picsum.photos/600/400?grayscale&blur=2&random=4",
    },
  ];
  return (
    <>
      <div className="h-dvh m-2" id="Services">
        <div className="flex flex-col items-center w-full mt-12 sm:my-4">
          <SplitText
            text="WHAT I DO"
            className="text-[3.3rem] md:text-[4.4rem] lg:text-8xl font-extrabold text-center mt-4 p-4"
            delay={200}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div className="md:mt-4 p-2">
          <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatido;

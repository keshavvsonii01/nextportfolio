import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import SplitText from "../ui/SplitText";

const Projects = () => {
  // const items = [
  //   {
  //     image: "/images/pic14.png",
  //     link: "https://ideagenie.netlify.app/",
  //     title: "IDEA GENIE",
  //     description: "An AI-powered web app that generates ideas for you.",
  //   },
  //   {
  //     image: "/images/pic12.png",
  //     link: "https://kreativevilla.in/",
  //     title: "KREATIVEVILLA",
  //     description: "A Social Media Marketing Agency.",
  //   },
  //   {
  //     image: "/images/pic15.png",
  //     link: "https://aiessaypro.netlify.app/",
  //     title: "AI Essay Generator",
  //     description: "An AI-powered web app that generates essays for you.",
  //   },
  //   // {
  //   //   image: "https://picsum.photos/600/600?grayscale",
  //   //   link: "https://google.com/",
  //   //   title: "Item 4",
  //   //   description: "This is pretty cool, right?",
  //   // },
  // ];

  return (
    <>
      <div className="h-svh" id="Works">
        <div className="h-screen bg-black text-white  p-8 mx-4  shadow-xl rounded-lg">
          <div className="flex flex-col items-center w-full my-2">
            <SplitText
              text="PROJECTS."
              className="text-8xl font-extrabold text-center p-2 m-2"
              delay={200}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          {/* <div style={{ height: "100%", position: "relative" }}>
          <InfiniteMenu className="text-xl" items={items} />
        </div> */}
          <div className="flex p-2 mx-6 mb-4 shadow-2xl rounded-xl">
            <div className="flex flex-2/4 w-3/4 justify-around p-4 rounded-2xl">
              <MagicCard>
                <div className="p-4 flex flex-col items-center justify-center">
                  <Image
                    src="/images/pic14.png"
                    alt="pic14"
                    width={400}
                    height={500}
                    className="rounded-lg w-fit"
                  />
                  <div className="flex flex-col items-center justify-center text-center my-6">
                    <p className="m-4 text-2xl font-bold">IDEA GENIE</p>
                    <span className="text-lg italic ">
                      An AI-powered web app that generates ideas for you.
                    </span>
                  </div>

                  <ShimmerButton>
                    <a href="https://ideagenie.netlify.app/" target="_blank">
                      View!
                    </a>
                  </ShimmerButton>
                </div>
              </MagicCard>
            </div>
            <div className="flex flex-2/4 w-3/4 justify-around p-4 rounded-2xl">
              <MagicCard>
                <div className="p-4 flex flex-col items-center justify-center">
                  <Image
                    src="/images/pic15.png"
                    alt="pic14"
                    width={400}
                    height={500}
                    className="rounded-lg w-fit"
                  />
                  <div className="flex flex-col items-center justify-center text-center my-6">
                    <p className="m-4 text-2xl font-bold">AI ESSAY GENERATOR</p>
                    <span className="text-lg italic ">
                      An AI-powered web app that generates essays for you.
                    </span>
                  </div>

                  <ShimmerButton>
                    {" "}
                    <a href="https://aiessaypro.netlify.app/" target="_blank">
                      View!
                    </a>
                  </ShimmerButton>
                </div>
              </MagicCard>
            </div>
            <div className="flex flex-2/4 w-3/4 justify-around p-4 rounded-2xl">
              <MagicCard>
                <div className="p-4 flex flex-col items-center justify-center">
                  <Image
                    src="/images/pic12.png"
                    alt="pic14"
                    width={400}
                    height={500}
                    className="rounded-lg w-fit"
                  />
                  <div className="flex flex-col items-center justify-center text-center my-6">
                    <p className="m-4 text-2xl font-bold">KREATIVEVILLA</p>
                    <span className="text-lg italic ">
                      A Social Media Marketing Agency.
                    </span>
                  </div>

                  <ShimmerButton>
                    {" "}
                    <a href="https://aiessaypro.netlify.app/" target="_blank">
                      View!
                    </a>
                  </ShimmerButton>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

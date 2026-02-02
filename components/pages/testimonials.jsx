import SplitText from "../ui/SplitText";
import SpotlightCard from "../ui/SpotLightCard";

const Testimonials = () => {
  return (
    <>
      <div className="h-fit mt-6" id="Testimonials">
        <div className="flex flex-col items-center w-full mt-2 mb-4">
          <SplitText
            text="DON'T TAKE MY WORD FOR IT."
            className="text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] font-extrabold text-center m-2"
            delay={75}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div>
            <span className=" font-light text-center text-lg md:text-xl mt-2">
              Feedback from founders and clients I’ve worked with.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-4 sm:p-6 w-4/5 md:w-3/4 lg:w-2/3 items-center justify-center mx-auto">
          <div className="w-full  flex flex-col items-center justify-center">
            <SpotlightCard
              className="custom-spotlight-card w-full hover:scale-106 transition-transform duration-200 mb-4"
              spotlightColor="rgba(241, 228, 238, 0.2)"
            >
              <div className="flex flex-1 items-center text-center gap-x-4 mt-6">
                <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-full overflow-hidden border border-amber-50">
                  <img
                    alt="Rishi Singh"
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src="./images/rishisingh.webp"
                  />
                </div>
                <div className="gap-y-0 flex text-base flex-col">
                  <span className="tracking-base text-sm">
                    Rishi Pratap Singh
                  </span>
                  <span className="leading-base text-pretty text-sm ">
                    <a href="https://rishipratap.com/">Client</a>
                  </span>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex items-center p-3  md:p-5 justify-center gap-x-4">
                <p className=" text-medium  md:text-lg  mt-2 text-center">
                  “Working with Keshav was a great experience. Communication was
                  clear, delivery was always on time, and he had a strong
                  understanding of what the product needed. He quickly grasped
                  requirements and translated them into clean, effective
                  solutions.
                  <br /> A pleasure to work with.”
                </p>
              </div>
            </SpotlightCard>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <SpotlightCard
              className="custom-spotlight-card w-full hover:scale-106 transition-transform duration-200"
              spotlightColor="rgba(241, 228, 238, 0.2)"
            >
              <div className="flex flex-1 items-center text-center gap-x-4 mt-6">
                <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-full overflow-hidden border border-amber-50">
                  <img
                    alt="Harsh Verma"
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src="./images/harshverma.webp"
                  />
                </div>
                <div className="gap-y-0 flex text-base 2xl:text-h5 flex-col">
                  <span className="tracking-base text-sm">Harsh Verma</span>
                  <span className="leading-base text-pretty text-sm ">
                    <a href="https://kreativevilla.in/">Startup Founder</a>
                  </span>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex items-center p-3 md:p-5 justify-center gap-x-4">
                <p className=" text-medium md:text-lg mt-2 text-center">
                  “Keshav handled the design and development for KreativeVilla
                  with a strong focus on quality and performance. The work
                  exceeded our expectations in terms of speed, execution, and
                  attention to detail.
                  <br /> We’re happy to collaborate with him again on future
                  projects.”
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

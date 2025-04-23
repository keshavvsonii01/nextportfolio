import SplitText from "../ui/SplitText";
import SpotlightCard from "../ui/SpotLightCard";

const Testimonials = () => {
  return (
    <>
      <div className="h-svh mt-6" id="Testimonials">
        <div className="flex flex-col items-center w-full mt-2">
          <SplitText
            text="DON'T TAKE MY WORD FOR IT."
            className="text-[5.5rem] font-extrabold text-center m-2"
            delay={75}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div className="flex flex-col p-6 w-2/3 items-center justify-center mx-auto">
          <div className="w-full  flex flex-col items-center justify-center">
            <SpotlightCard
              className="custom-spotlight-card flex flex-col w-full hover:scale-106 transition-transform duration-200"
              spotlightColor="rgba(241, 228, 238, 0.8)"
            >
              <div className="flex flex-1 items-center text-center gap-x-4 mt-6">
                <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border border-amber-50">
                  <img
                    alt="Rishi Singh"
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src="./images/rishisingh.webp"
                  />
                </div>
                <div className="gap-y-0 flex text-base 2xl:text-h5 flex-col">
                  <span className="tracking-base">Rishi Pratap Singh</span>
                  <span className="leading-base text-pretty  ">
                    <a href="https://rishipratap.com/">Video Editor</a>
                  </span>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex items-center justify-center gap-x-4">
                <p className=" text-lg mt-2 text-center">
                  "I've had the pleasure of working with Keshav, he's just
                  exceptional — clear communication, punctual, and a development
                  visionary. He immediately knows what the client needs. <br />A
                  pleasure to work with!"
                </p>
              </div>
            </SpotlightCard>
          </div>
          <div className="w-full my-2 flex flex-col items-center justify-center">
            <SpotlightCard
              className="custom-spotlight-card w-full hover:scale-106 transition-transform duration-200"
              spotlightColor="rgba(241, 228, 238, 0.8)"
            >
              <div className="flex flex-1 items-center text-center gap-x-4 mt-6">
                <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border border-amber-50">
                  <img
                    alt="Harsh Verma"
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src="./images/harshverma.webp"
                  />
                </div>
                <div className="gap-y-0 flex text-base 2xl:text-h5 flex-col">
                  <span className="tracking-base">Harsh Verma</span>
                  <span className="leading-base text-pretty  ">
                    <a href="https://kreativevilla.in/">
                      Founder@KreativeVilla
                    </a>
                  </span>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex items-center justify-center gap-x-4">
                <p className=" text-lg mt-2 text-center">
                  "Keshav's design and development for KreativeVilla, a social
                  marketing website, surpassed standards, embodying speed,
                  skills and commitnent. <br />
                  We're all up for future projects with him."
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

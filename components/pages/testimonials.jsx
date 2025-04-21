import SplitText from "../ui/SplitText";

const Testimonials = () => {
  return (
    <>
      <div className="h-svh mt-6 flex justify-center shadow-xl rounded-lg">
        <div>
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
      </div>
    </>
  );
};

export default Testimonials;

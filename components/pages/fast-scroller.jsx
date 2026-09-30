import ScrollVelocity from "../ui/ScrollVelocity";

const FastScroller = () => {
  return (
    <>
      <div className="relative">
       
          {" "}
          <ScrollVelocity
            texts={["SOFTWARE ENGINEER ✦ FULL STACK DEVELOPMENT ✦ AI ENGINEERING", "✦ WEB APPLICATIONS ✦ BACKEND SYSTEMS ✦ BUILDING IN PUBLIC"]}
            velocity={100}
            className="custom-scroll-text"
          />
      </div>
    </>
  );
};

export default FastScroller;

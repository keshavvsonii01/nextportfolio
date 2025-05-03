import ScrollVelocity from "../ui/ScrollVelocity";

const FastScroller = () => {
  return (
    <>
      <div className="relative">
       
          {" "}
          <ScrollVelocity
            texts={["Full Stack Developer", "FreeLancer"]}
            velocity={100}
            className="custom-scroll-text"
          />
      </div>
    </>
  );
};

export default FastScroller;

import ScrollVelocity from "../ui/ScrollVelocity";

const FastScroller = () => {
  return (
    <>
      <div className="relative">
       
          {" "}
          <ScrollVelocity
            texts={["• High-conversion landing pages • SaaS & startups", "• Conversion-driven • Fast delivery"]}
            velocity={100}
            className="custom-scroll-text"
          />
      </div>
    </>
  );
};

export default FastScroller;

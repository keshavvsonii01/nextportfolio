import ScrollVelocity from "../ui/ScrollVelocity";

const FastScroller = () => {
    return (
        <>
         <ScrollVelocity
        texts={["Full Stack Developer", "FreeLancer"]}
        velocity={100}
        className="custom-scroll-text"
      />
        </>
    )
};

export default FastScroller;
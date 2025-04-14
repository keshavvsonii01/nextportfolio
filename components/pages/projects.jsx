import InfiniteMenu from "../ui/InfiniteMenu";

const Projects = () => {
  const items = [
    {
      image: "/images/pic14.png",
      link: "https://ideagenie.netlify.app/",
      title: "IDEA GENIE",
      description: "An AI-powered web app that generates ideas for you.",
    },
    {
      image: "/images/pic12.png",
      link: "https://kreativevilla.in/",
      title: "KREATIVEVILLA",
      description: "A Social Media Marketing Agency.",
    },
    {
      image: "/images/pic15.png",
      link: "https://aiessaypro.netlify.app/",
      title: "AI Essay Generator",
      description: "An AI-powered web app that generates essays for you.",
    },
    // {
    //   image: "https://picsum.photos/600/600?grayscale",
    //   link: "https://google.com/",
    //   title: "Item 4",
    //   description: "This is pretty cool, right?",
    // },
  ];

  return (
    <>
      <div className="h-screen">
       
        <div style={{ height: "100%", position: "relative" }}>
          <InfiniteMenu className='text-xl' items={items} />
        </div>
      </div>
    </>
  );
};

export default Projects;

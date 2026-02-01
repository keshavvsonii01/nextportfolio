const Contact = () => {
  return (
    <>
      <div
        className=" flex flex-col items-center justify-center text-center h-dvh"
        id="contact"
      >
        <h1 className="text-normal md:text-2xl md:font-light border-b-2 border-stone-300 m-4">
          Got a Project? Need an unfair advantage?
        </h1>
        <div className="p-3 md:p-6">
          <a href="/contact">
            <img
              alt="Get In Touch"
              loading="lazy"
              className=" w-full h-full"
              src="./images/getintouch.svg"
            />
          </a>
          <hr className="border-b-3 border-stone-400" />
        </div>
        <div className="text-sm font-light md:text-base">
          <h1>
            Let’s build a high-converting landing page in 5–7 days.
          </h1>
          <br />
          Email me → &nbsp;
          <a href="mailto:keshavvsonii01@gmail.com" className="font-bold">keshavvsonii01@gmail.com</a>
          <br />
          <span className="text-neutral-400 text-sm">
            Usually replies within 24 hours.
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;

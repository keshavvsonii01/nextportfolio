const Contact = () => {
  return (
    <>
      <div
        className=" flex flex-col items-center justify-center text-center h-dvh"
        id="contact"
      >
        <h1 className="text-normal md:text-2xl md:font-light border-b-2 border-stone-300 m-4">
          LET'S BUILD SOMETHING!
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
            I'm always interested in building useful products, solving interesting problems, and working with good people.
          </h1>
          <br />
          Email me → &nbsp;
          <a href="mailto:keshavvsonii01@gmail.com" className="font-bold">keshavvsonii01@gmail.com</a>
          <br />
          <span className="text-sm">
            Open to software engineering opportunities, collaborations, and interesting problems.
          </span>
          <br />
          <span className="text-neutral-400 text-sm">
            Software engineering · Full-stack development · AI
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;

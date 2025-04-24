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
      </div>
    </>
  );
};

export default Contact;

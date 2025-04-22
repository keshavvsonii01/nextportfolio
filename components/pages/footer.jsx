import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center text-lg font-light">
        <div className="p-4 gap-x-4 flex flex-row justify-evenly items-center">
          <span className="hover:underline cursor-pointer">
            <Link href="#hero">Home</Link>
          </span>
          <span className="">© 2024 KESHAV SONI</span>
          <span className="hover:underline cursor-pointer">
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

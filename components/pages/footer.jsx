// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <div className="flex flex-row justify-evenly items-center text-lg font-light">
//         <div className="p-4 gap-x-4 flex flex-row justify-evenly items-center">
//           <span className="hover:underline cursor-pointer">
//             <Link href="#hero">Home</Link>
//           </span>
//           <span className="">© 2025 KESHAV SONI</span>
//           <span className="hover:underline cursor-pointer">
//             <Link href="/contact">Contact</Link>
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="px-6 sm:px-[4%] 3xl:px-[10%] pb-8 3xl:pb-16 pt-8 sm:pt-[5%] relative mt-2">
        <div className="grid grid-cols-2 gap-y-7 gap-x-7 lg:gap-y-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-6 lg:col-span-6 flex flex-col text-xl">
            <span className="flex link-text font-bold uppercase text-3xl mb-3 border-b-2 border-stone-600">
              Navigation
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <Link
                href={"#hero"}
                className="leading-base font-medium block relative overflow-hidden group h-fit link-text w-fit"
              >
                <span className="link1">Home</span>
              </Link>
              <Link
                href={"#about"}
                className="leading-base font-medium block relative overflow-hidden group h-fit link-text w-fit"
              >
                <span className="link1">About</span>
              </Link>
              <Link
                href={"#Services"}
                className="leading-base font-medium block relative overflow-hidden group h-fit link-text w-fit"
              >
                <span className="link1">Services</span>
              </Link>
              <Link
                href={"#Works"}
                className="leading-base font-medium block relative overflow-hidden group h-fit link-text w-fit"
              >
                <span className="link1">Works</span>
              </Link>
              <Link
                href={"#Testimonials"}
                className="leading-base font-medium block relative overflow-hidden group h-fit link-text w-fit"
              >
                <span className="link1">Reviews</span>
              </Link>
              <Link
                href={"/contact"}
                className="leading-base font-medium block relative overflow-hidden group h-fit link-text w-fit"
              >
                <span className="link1">Contact</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-3 flex flex-col text-xl">
            <span className="flex font-bold uppercase link-text text-3xl mb-3 border-b-2 border-stone-600">
              Socials
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <a
                target="_blank"
                className="font-medium block relative overflow-hidden group h-fit link-text leading-base w-fit"
                href="https://www.linkedin.com/in/keshavvsoni01/"
              >
                <span className="link1">Linkedin</span>
              </a>
              <a
                target="_blank"
                className="font-medium block relative overflow-hidden group h-fit link-text leading-base w-fit"
                href="https://github.com/keshavvsonii01"
              >
                <span className="link1">Github</span>
              </a>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col text-xl">
            <span className="flex pb-1 font-bold uppercase link-text mb-3 text-3xl border-b-2 border-stone-600">
              Resources
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <a
                target="_blank"
                className="font-medium block relative overflow-hidden group h-fit link-text leading-base w-fit"
                href="https://www.framer.com/motion/"
              >
                <span className="link1">Framer Motion</span>
              </a>
              <a
                target="_blank"
                className="font-medium block relative overflow-hidden group h-fit link-text leading-base w-fit"
                href="https://ui.shadcn.com/"
              >
                <span className="link1">ShadcnUI</span>
              </a>
              <a
                target="_blank"
                className="font-medium block relative overflow-hidden group h-fit link-text leading-base w-fit"
                href="https://www.reactbits.dev/"
              >
                <span className="link1">React Bits</span>
              </a>
              <a
                target="_blank"
                className="font-medium block relative overflow-hidden group h-fit link-text leading-base w-fit"
                href="https://keshavsoni.netlify.app/"
              >
                <span className="link1">Portfolio V1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="p-2 text-center">
          <span className="text-xl font-light">© 2025 KESHAV SONI</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

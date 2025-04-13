import About from "@/components/pages/about";
import FastScroller from "@/components/pages/fast-scroller";
import Hero from "@/components/pages/hero";
import Marquee from "@/components/pages/Marquee";
import Whatido from "@/components/pages/whatido";

export default function Home() {
  return (
    <>
  
        <Hero />
        <FastScroller />
        <Marquee />
        <About />
      
        {/* <Whatido /> */}
    </>
  );
}

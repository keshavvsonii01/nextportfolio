import About from "@/components/pages/about";
import FastScroller from "@/components/pages/fast-scroller";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Testimonials from "@/components/pages/testimonials";
import Whatido from "@/components/pages/whatido";

export default function Home() {
  return (
    <>
      <Hero />
      <FastScroller />
      <About />
      <Whatido />
      <Projects />
      <Testimonials />
    </>
  );
}

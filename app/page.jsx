import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import FastScroller from "@/components/pages/fast-scroller";
import Footer from "@/components/pages/footer";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Testimonials from "@/components/pages/testimonials";
import Whatido from "@/components/pages/whatido";
import LenisWrapper from "@/components/LenisWrapper";
import "lenis/dist/lenis.css";

export default function Home() {
  return (
    <>
      <LenisWrapper>
        <Hero />
      </LenisWrapper>

      <FastScroller />

      <LenisWrapper>
        <About />
        <Whatido />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </LenisWrapper>
    </>
  );
}

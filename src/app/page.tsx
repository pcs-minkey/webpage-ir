import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import History from "@/components/History";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <History />
      <Partners />
      <Contact />
    </>
  );
}

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Tape,
  Testimonials,
} from "@/sections";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

import Hero from "../components/hero";
import Performance from "../components/performance";
import Features from "../components/features";
import Prices from "../components/prices";
import FAQ from "../components/faq";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center overflow-hidden">
      <Hero />
      <Performance />
      <Features />
      <div className="h-[80vh]"></div>
      <Prices />
      <FAQ />
      <Footer />
    </main>
  );
}
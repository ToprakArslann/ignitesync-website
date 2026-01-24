import Hero from "../components/hero";
import Performance from "../components/performance";
import Features from "../components/features";
import Prices from "../components/prices";

export default function Home() {
  return (
    <main className="flex flex-col justify-center overflow-hidden">
      <Hero />
      <Performance />
      <Features />
      <div className="h-[80vh]"></div>
      <Prices />
    </main>
  );
}
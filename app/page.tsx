import Hero from "../components/hero";
import Performance from "../components/performance";

export default function Home() {
  return (
    <main className="flex flex-col justify-center overflow-hidden">
      <Hero />
      <Performance />
    </main>
  );
}
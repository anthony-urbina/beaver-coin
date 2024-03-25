import Image from "next/image";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero";
import { HowToBuy } from "./components/how-to-buy";
import { Tokenomics } from "./components/tokenomics";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className='flex flex-col p-4 md:p-16 relative'>
      <div
        className='absolute top-0 left-0 w-full h-96 -z-10'
        style={{
          background: "linear-gradient(180deg, rgba(171, 240, 255, 0.64) 0%, rgba(171, 240, 255, 0) 100%)",
        }}
      />
      <div
        className='fixed top-1/2 left-0 w-[1730px] h-[1730px] -z-10'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(171, 240, 255, 0.64) 0%, rgba(171, 240, 255, 0) 100%)",
        }}
      />

      <section className='container flex flex-col md:gap-y-40 gap-y-16'>
        <Navbar />
        <HeroSection />
        <HowToBuy />
        <Tokenomics />
        <Footer />
      </section>
    </main>
  );
}

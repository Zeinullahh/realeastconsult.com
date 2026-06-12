import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUAE from "@/components/sections/WhyUAE";
import Referral from "@/components/sections/Referral";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import PersistentVideoBackground from "@/components/PersistentVideoBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <PersistentVideoBackground />
      <Hero />
      <main className="relative z-10 flex flex-col">
        <Services />
        <WhyUAE />
        <Referral />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

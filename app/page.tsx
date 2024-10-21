import { Navbar } from "@/app/(components)/Navbar";
import { Hero } from "@/app/(components)/Hero";
import { About } from "@/app/(components)/About";
import { Statistics } from "@/app/(components)/Statistics";
import { Services } from "@/app/(components)/Services";
import { Portfolio } from "@/app/(components)/Portfolio";
import { Cta } from "@/app/(components)/Cta";
import { Pricing } from "@/app/(components)/Pricing";
import { FAQ } from "@/app/(components)/FAQ";
import { Reviews } from "@/app/(components)/Reviews";
import { Footer } from "@/app/(components)/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Portfolio />
      <Cta />
      <Pricing />
      <FAQ />
      <Reviews />
      <Footer />
    </>
  );
}

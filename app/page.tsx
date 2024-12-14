import { About } from "@/app/(components)/About";
import { Cta } from "@/app/(components)/Cta";
import { FAQ } from "@/app/(components)/FAQ";
import { Footer } from "@/app/(components)/Footer";
import { Hero } from "@/app/(components)/Hero";
import { Navbar } from "@/app/(components)/Navbar";
import { Portfolio } from "@/app/(components)/Portfolio";
import { Pricing } from "@/app/(components)/Pricing";
import { Services } from "@/app/(components)/Services";
import { Statistics } from "@/app/(components)/Statistics";

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
      <Footer />
    </>
  );
}

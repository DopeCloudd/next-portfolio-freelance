import { Confidentialite } from "@/app/(components)/Confidentialite";
import { Footer } from "@/app/(components)/Footer";
import { Navbar } from "@/app/(components)/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Confidentialite />
      <Footer />
    </>
  );
}

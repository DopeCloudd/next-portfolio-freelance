import { Footer } from "@/app/(components)/Footer";
import { Mentions } from "@/app/(components)/Mentions";
import { Navbar } from "@/app/(components)/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mentions />
      <Footer />
    </>
  );
}

import Hero from "@/components/Hero";
import MoreInfo from "@/components/More-info";
import CtaSection from "@/components/Cta-section";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maweb</title>
      </Head>
      <Hero />
      <MoreInfo />
      <CtaSection />
      <Contact />
    </>
  );
}

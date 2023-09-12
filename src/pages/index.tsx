import { Header } from "@/components/Home/header/Header";
import { Hero } from "@/components/Home/Hero/Hero";
import { Cards } from "@/components/Home/Cards";
import { Clients } from "@/components/Home/Clients";
import { Partners } from "@/components/Home/Partners";
import { CTA } from "@/components/Home/CTA";
import { About } from "@/components/Home/About";
import { FAQs } from "@/components/Home/FAQs";
import { Contact } from "@/components/Home/Forms";
import { Footer } from "@/components/Home/Footer";
import Head from "next/head";

const Index = () => {
  return (
    <div className="white-background">
      <Head>
        <title>Creating moments that move people | Motion Wellbeing</title>
        <meta
          property="og:url"
          content="https://www.motionexercise.co.uk"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Creating moments that move people | Motion Wellbeing"
        />
        <meta
          property="og:description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Creating moments that move people | Motion"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
      </Head>

      <Header />
      <Hero videoSrc={"./home/video.mp4"}>
        <h1>Creating moments that move people.</h1>
      </Hero>
      <Cards></Cards>
      <Clients></Clients>
      <CTA></CTA>
      <About></About>
      <FAQs></FAQs>
      <Contact />
      <Partners />
      <Footer></Footer>
    </div>
  );
};

export default Index;

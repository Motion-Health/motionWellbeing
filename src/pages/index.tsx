import Head from 'next/head';
import Script from 'next/script';

import { About } from '@/components/Home/About';
import { Cards } from '@/components/Home/Cards';
import { Clients } from '@/components/Home/Clients';
import { CTA } from '@/components/Home/CTA';
import { FAQs } from '@/components/Home/FAQs';
import { Footer } from '@/components/Home/Footer';
import { Contact } from '@/components/Home/Forms';
import { Header } from '@/components/Home/header/Header';
import Hero from '@/components/Home/Hero/Hero';
import { Partners } from '@/components/Home/Partners';
import { useAccountContext } from '@/context/AccountContext';

const Index = () => {
  const {
    account: { accountStatus },
  } = useAccountContext();

  return (
    <div className="white-background">
      <Head>
        <title>Creating moments that move people | Motion Wellbeing</title>
        <meta property="og:url" content="https://www.motionexercise.co.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Creating moments that move people | Motion Wellbeing"
        />
        <meta
          property="og:description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
        <meta
          name="description"
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
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/zeezy-1?hide_landing_page_details=1&hide_gdpr_banner=1',
            parentElement: document.getElementById('calendly-inline-widget'),
          });
        }}
      />

      <Header />
      <Hero videoSrc={'/assets/home/video.mp4'}>
        <h1>Creating moments that move people.</h1>
      </Hero>
      <Cards></Cards>
      <Clients></Clients>
      <CTA></CTA>
      <About></About>
      <div
        id="calendly-inline-widget"
        style={{ minWidth: 320, height: 650 }}
        data-auto-load="false"
      ></div>
      <FAQs></FAQs>
      <Contact />
      <Partners />

      <Footer></Footer>
    </div>
  );
};

export default Index;

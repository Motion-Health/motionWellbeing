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
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Creating moments that move people | Motion Wellbeing"
        />
        <meta
          property="og:description"
          content="Motion Wellbeing is a digital wellbeing platform empowering care homes to plan, deliver and showcase outstanding, person-centred wellbeing activities."
        />
        <meta
          name="description"
          content="Motion Wellbeing is a digital wellbeing platform empowering care homes to plan, deliver and showcase outstanding, person-centred wellbeing activities."
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
          content="Motion Wellbeing is a digital wellbeing platform empowering care homes to plan, deliver and showcase outstanding, person-centred wellbeing activities."
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/zeezy-1/motion?hide_landing_page_details=1&hide_gdpr_banner=1',
            parentElement: document.getElementById('calendly-inline-widget'),
          });
        }}
      />

      <Header />
      <Hero videoSrc={'/assets/home/video-small.webm'}>
        <h1>Creating moments that move people.</h1>
      </Hero>
      <Cards></Cards>
      <Clients></Clients>
      <CTA></CTA>
      <About></About>
      <div className="discoveryBackground">
        <h1 className="text-center">Book your free discovery call</h1>
        <div className="text-center">
          Not sure where to start? Let us help you by making some personalised
          recommendations for your wellbeing activities and how to use these in
          your marketing!
        </div>

        <div
          id="calendly-inline-widget"
          style={{ minWidth: 320, height: 650 }}
          data-auto-load="false"
        ></div>
      </div>
      <FAQs></FAQs>
      <Contact />
      <Partners />

      <Footer></Footer>
    </div>
  );
};

export default Index;

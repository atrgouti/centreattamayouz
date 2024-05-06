import QuickInfosHeader from "./QuickInfosHeader";
import Nav from "./Nav";
import HomeSlider from "./HomeSlider";
import WhyUs from "./WhyUs";
import Intensive from "./Intensive";
import WhatWeOffer from "./WhatWeOffer";
import HotCollection from "./HotCollection";
import Testemonials from "./Testemonials";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <QuickInfosHeader />
      <Nav ps={"absolute"} tp={"30px"} bc={"transparent"} />
      <HomeSlider />
      <WhyUs />
      <Intensive />
      <WhatWeOffer />
      <HotCollection />
      <Testemonials />
      <Footer />
    </div>
  );
}

export default Home;

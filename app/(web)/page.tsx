import HeroSection from "./sections/hero";
import Stats from "./sections/stats";
import Mission from "./sections/mission";
import Team from "./sections/team";
import Footer from "./sections/footer";
import Features from "./sections/features";
export default function WebPage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Mission />
      <Features />
      <Team />
      <Footer />
    </>
  );
}

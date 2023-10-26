import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Navbar_ from "../../components/Navbar_.js";

const LandingPage = () => {
  return (
    <div className="h-full ">
        {/*<LandingNavbar />*/}
        <Navbar_ />
      <LandingHero />
      <LandingContent />
    </div>
   );
}

export default LandingPage;

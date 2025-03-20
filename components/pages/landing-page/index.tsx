import { HeroSection } from "@/components/pages/landing-page/hero";
import { AppBanner } from "@/components/modules/app-banner";
import { Collections } from "@/components/pages/landing-page/collections";
import { BestSellers } from "@/components/pages/landing-page/best-sellers";
import { Benefits } from "@/components/pages/landing-page/benefits";
import { NewArrival } from "@/components/pages/landing-page/new-arrival";
import { FeaturedProducts } from "@/components/pages/landing-page/featured-products";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AppBanner />
      <Collections />
      <Benefits />
      <BestSellers />
      <NewArrival />
      <FeaturedProducts />
    </div>
  );
};

export default LandingPage;

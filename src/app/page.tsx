import background_image from "./(assets)/main_bg.png";
import HomePageLayout from "./(components)/home/HomePageLayout";
import HeroSection from "./(components)/home/HeroSection";
import SocietyMark from "./(components)/footer/SocietyMark";
import ProfessionalProfile from "./(components)/home/ProfessionalProfile";
import CallToActionBar from "./(components)/home/CallToActionBar";
import ServicesSection from "./(components)/home/ServicesSection";

export default function Home() {
  return (
    <>
      <HomePageLayout backgroundImage={background_image}>
    
        <HeroSection />
        <ProfessionalProfile />
        <CallToActionBar />
      </HomePageLayout>

      <ServicesSection />

    </>
  );
}

import HomePageLayout from "./(components)/home/HomePageLayout";
import HeroSection from "./(components)/home/HeroSection";
import ProfessionalProfile from "./(components)/home/ProfessionalProfile";
import CallToActionBar from "./(components)/home/CallToActionBar";
import ServicesSection from "./(components)/home/ServicesSection";
import Image from "next/image";
import profileImage from "./(assets)/main_bg.png"; // Adjust path to your actual profile image

export default function Home() {
  return (
    <>
      <HomePageLayout
        backgroundImage={profileImage}
      >
       
    
        <HeroSection />
        <ProfessionalProfile />
        <CallToActionBar />
      </HomePageLayout>

      <ServicesSection />
    </>
  );
}

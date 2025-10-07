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
      <main role="main" lang="fr" aria-label="Page d'accueil - Catherine Fabrici Sophrologue">
        <HomePageLayout backgroundImage={profileImage}>
          <section aria-label="Section héro - Présentation principale">
            <HeroSection />
          </section>
          
          <aside aria-label="Profil professionnel de Catherine Fabrici" role="complementary">
            <ProfessionalProfile />
          </aside>
          
          <section aria-label="Appel à l'action - Prendre rendez-vous">
            <CallToActionBar />
          </section>
        </HomePageLayout>

        <section aria-label="Services de sophrologie proposés" id="services">
          <ServicesSection />
        </section>
      </main>
    </>
  );
}

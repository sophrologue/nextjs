import HomePageLayout from "./(components)/home/HomePageLayout";
import HeroSection from "./(components)/home/HeroSection";
import ProfessionalProfile from "./(components)/home/ProfessionalProfile";
import ServicesSection from "./(components)/home/ServicesSection";
import main_bg from "./(assets)/main_bg.webp"; 

export default function Home() {
  return (
    <>
      <main role="main" lang="fr" aria-label="Page d&rsquo;accueil - Catherine Fabrici Sophrologue">
        <HomePageLayout backgroundImage={main_bg}>
          <section aria-label="Section héro - Présentation principale">
            <HeroSection />
          </section>
          
          <aside aria-label="Profil professionnel de Catherine Fabrici" role="complementary">
            <ProfessionalProfile />
          </aside>
          
        
        </HomePageLayout>

        <section aria-label="Services de sophrologie proposés" id="services">
          <ServicesSection />
        </section>
      </main>
    </>
  );
}

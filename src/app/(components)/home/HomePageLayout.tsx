import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import BackgroundOverlay from './BackgroundOverlay';
import ScrollIndicator from './ScrollIndicator';

interface HomePageLayoutProps {
  children: ReactNode;
  backgroundImage: StaticImageData;
}

export default function HomePageLayout({ children, backgroundImage }: HomePageLayoutProps) {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden w-[80%] mx-auto "
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
    >  
      <BackgroundOverlay />
      
      {/* Top Navigation Spacer */}
      <div className="h-16"></div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
      
      <ScrollIndicator />
    </section>
  );
}
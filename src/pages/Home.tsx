import type { ReactElement } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { SiteTitleSection } from '../components/home/SiteTitleSection';
import { NeedsSection } from '../components/home/NeedsSection';
import { HowItWorksCarousel } from '../components/home/HowItWorksCarousel';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { BlogCarousel } from '../components/home/BlogCarousel';
import { JoinSection } from '../components/home/JoinSection';
import { VideoSection } from '../components/home/VideoSection';
import { MejoravitPrograms } from '../components/home/MejoravitPrograms';

export function Home(): ReactElement {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MejoravitPrograms />
      <SiteTitleSection />
      <NeedsSection />
      <VideoSection />
      <HowItWorksCarousel />
      <TestimonialsCarousel />
      <BlogCarousel />
      <JoinSection />
      <Footer />
    </>
  );
}
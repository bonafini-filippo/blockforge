import { CallToActionSection } from '@/sections/CallToAction';
import { FeaturesCardsSection } from '@/sections/FeaturesCards';
import { FeaturesGridSection } from '@/sections/FeaturesGrid';
import { FooterSection } from '@/sections/Footer';
import { HeaderSection } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { LatestPostsSection } from '@/sections/LatestPosts';
import { TestimonialsSection } from '@/sections/Testimonials';

export default function Home() {
   return (
      <div>
         <HeaderSection />
         <HeroSection />
         <FeaturesCardsSection />
         <FeaturesGridSection />
         <LatestPostsSection />
         <TestimonialsSection />
         <CallToActionSection />
         <FooterSection />
      </div>
   );
}

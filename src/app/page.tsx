import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PortfolioShowcase from './components/PortfolioShowcase';
import TrustBadges from './components/TrustBadges';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <PortfolioShowcase />
      <Testimonials />
      <WhyChooseUsSection />
      <TrustBadges />
      <ContactSection />
    </main>
  );
}
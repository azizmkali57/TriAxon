import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
// import AboutSection from "@/components/pages/home/Aboutsection";
import BlogSection from "@/components/pages/home/Blogsection";
import ContactSection from "@/components/pages/home/Contactsection";
import CTABanner from "@/components/pages/home/Ctabanner";
import HeroSection from "@/components/pages/home/HeroSection";
import ProcessTimeline from "@/components/pages/home/ProcessTimeline";
import StatsCounter from "@/components/pages/home/StatsCounter";
import TechStack from "@/components/pages/home/TechStack";
import Testimonials from "@/components/pages/home/TestimonialsSlider";
import WhyusSection from "@/components/pages/home/WhyusSection";
import PortfolioGrid from "@/components/pages/home/PortfolioGrid";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <PortfolioGrid />
      <ProcessTimeline />
      <StatsCounter />
      <TechStack />
      <Testimonials />
      <WhyusSection />
      <CTABanner />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
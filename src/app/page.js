import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MmIsFeaturesSection from "@/components/MmIsFeaturesSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-slate-800 selection:bg-sky-500/20 selection:text-sky-700 overflow-x-hidden">
      {/* 1. Header / Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 2.5. Flagship ERP Product: Smart Madrasah Management System (MMIS) */}
      <MmIsFeaturesSection />

      {/* 3. Services Section */}
      <Services />

      {/* 4. About Us / Why Choose Us */}
      <About />

      {/* 5. Portfolio / Featured Projects */}
      <Portfolio />

      {/* 6. Client Testimonials / Social Proof */}
      <Testimonials />

      {/* 7. Pricing / Engagement Models */}
      <Pricing />

      {/* 8. Contact Us / Lead Form */}
      <Contact />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

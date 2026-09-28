import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0E17] text-white selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] overflow-x-hidden">
      {/* Global Ambient Glow Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00E5FF]/10 via-[#0066FF]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#0066FF]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00E5FF]/10 blur-[150px] rounded-full" />
      </div>

      {/* 1. Header / Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

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

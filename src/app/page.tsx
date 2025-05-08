import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto">
        <Navbar />
      </header>
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Hero />
        <Services />
        <About />
        <Solutions />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

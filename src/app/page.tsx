import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceBlockAccountManagement from '@/components/ServiceBlockAccountManagement';
import ServiceBlockAnalytics from '@/components/ServiceBlockAnalytics';
import MiniAbout from '@/components/MiniAbout';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServiceBlockAccountManagement />
      <ServiceBlockAnalytics />
      <MiniAbout />
      <Partners />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

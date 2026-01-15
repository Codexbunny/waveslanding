import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Certificate from '@/components/Certificate';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Certificate />
      <Partners />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

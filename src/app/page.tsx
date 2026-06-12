import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutDoctor from "@/components/AboutDoctor";
import ConditionsWeTreat from "@/components/ConditionsWeTreat";
import WhyHomeopathy from "@/components/WhyHomeopathy";
import WhyChooseUs from "@/components/WhyChooseUs";
import TreatmentProcess from "@/components/TreatmentProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GoogleMap from "@/components/GoogleMap";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutDoctor />
        <ConditionsWeTreat />
        <WhyHomeopathy />
        <WhyChooseUs />
        <TreatmentProcess />
        <Testimonials />
        <FAQ />
        <AppointmentForm />
        <GoogleMap />
      </main>
      <Footer />
      <StickyButtons />
    </>
  );
}

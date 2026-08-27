import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { VibeSection } from "@/components/home/VibeSection";
import { NextEventSection } from "@/components/home/NextEventSection";
import { EditionsSection } from "@/components/home/EditionsSection";
import { SoundSection } from "@/components/home/SoundSection";
import { DrinksSection } from "@/components/home/DrinksSection";
import { GallerySection } from "@/components/home/GallerySection";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { CulturalPartnerSection } from "@/components/home/CulturalPartnerSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <VibeSection />
        <NextEventSection />
        <EditionsSection />
        <SoundSection />
        <DrinksSection />
        <GallerySection />
        <PartnershipSection />
        <CulturalPartnerSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

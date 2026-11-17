import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityBar } from './components/AuthorityBar';
import { PracticeAreas } from './components/PracticeAreas';
import { Methodology } from './components/Methodology';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCtaAndFooter } from './components/ClosingCtaAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#2B303A]">
      <Header />
      <main className="flex-1">
        <Hero />
        <AuthorityBar />
        <PracticeAreas />
        <Methodology />
        <TeamSection />
        <FaqSection />
        <ClosingCtaAndFooter />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

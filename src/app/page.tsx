import { Navbar } from '@/components/navbar';
import { HomeSection } from '@/components/sections/home-section';
import { FreeSection } from '@/components/sections/free-section';
import { TargetSection } from '@/components/sections/target-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <HomeSection />
      <FreeSection />
      <TargetSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="py-6 border-t bg-primary text-primary-foreground">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Innovation Store. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

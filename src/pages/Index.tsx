import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CategorySection } from '@/components/CategorySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <FeaturesSection />
        
        <CategorySection
          id="damas"
          title="Pijamas para Damas"
          subtitle="Elegancia y comodidad para tus noches de descanso. Diseños exclusivos en los mejores materiales."
          category="damas"
        />
        
        <CategorySection
          id="ninos"
          title="Pijamas para Niños"
          subtitle="Diseños adorables y cómodos para los más pequeños del hogar. Dulces sueños garantizados."
          category="ninos"
          bgColor="accent"
        />
        
        <CategorySection
          id="sabanas"
          title="Sábanas Premium"
          subtitle="Suavidad incomparable para tu descanso. Algodón egipcio y microfibra de la más alta calidad."
          category="sabanas"
        />
        
        <CategorySection
          id="edredones"
          title="Edredones y Cobijas"
          subtitle="Calidez y confort durante todo el año. Edredones esponjosos para noches perfectas."
          category="edredones"
          bgColor="accent"
        />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

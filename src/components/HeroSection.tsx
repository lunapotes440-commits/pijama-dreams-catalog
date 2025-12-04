import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bedroom.jpg';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dulceam DL - Pijamas elegantes y ropa de cama premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-light/80 backdrop-blur-sm rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-dark">
              Nueva Colección 2024
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            La Elegancia y{' '}
            <span className="text-primary">Comodidad</span>{' '}
            de Nuestros Pijamas
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Descubre nuestra exclusiva colección de pijamas para damas y niños, 
            sábanas y edredones premium. Diseñados para brindarte el máximo confort 
            en cada momento de descanso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Ver Catálogo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contactar por WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
            <div className="space-y-1">
              <p className="font-display text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Clientes felices</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Productos únicos</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Calidad garantizada</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

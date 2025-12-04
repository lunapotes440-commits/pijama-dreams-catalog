import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const whatsappNumber = '1234567890'; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre los productos de Dulceam DL. 🌹'
  );

  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-to-b from-background to-rose-light/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest">
                Contáctanos
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                ¿Tienes alguna pregunta?
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Estamos aquí para ayudarte. Contáctanos por WhatsApp y te
                atenderemos con gusto.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium text-foreground">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">contacto@dulceamdl.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium text-foreground">Tu ciudad, País</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - WhatsApp CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant-lg space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
              <MessageCircle className="h-10 w-10 text-green-500" />
            </div>

            <div className="text-center space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Escríbenos por WhatsApp
              </h3>
              <p className="text-muted-foreground">
                Respuesta rápida y atención personalizada. Te ayudamos a encontrar
                el producto perfecto para ti.
              </p>
            </div>

            <Button
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Iniciar Conversación
              </a>
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Horario de atención: 9:00 AM - 9:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

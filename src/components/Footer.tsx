import { Heart } from 'lucide-react';

const footerLinks = {
  productos: [
    { name: 'Pijamas Damas', href: '#damas' },
    { name: 'Pijamas Niños', href: '#ninos' },
    { name: 'Sábanas', href: '#sabanas' },
    { name: 'Edredones', href: '#edredones' },
  ],
  informacion: [
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Guía de Tallas', href: '#' },
    { name: 'Envíos y Entregas', href: '#' },
    { name: 'Devoluciones', href: '#' },
  ],
  legal: [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#inicio" className="flex items-center gap-2">
              <span className="text-2xl">🌹</span>
              <span className="font-display text-xl font-semibold text-foreground">
                Dulceam DL
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              La elegancia y comodidad de nuestros pijamas, sábanas y edredones
              para toda la familia.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Productos
            </h4>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Información
            </h4>
            <ul className="space-y-2">
              {footerLinks.informacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dulceam DL. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-primary fill-primary" /> para tu comodidad
          </p>
        </div>
      </div>
    </footer>
  );
}

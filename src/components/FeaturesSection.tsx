import { Truck, Shield, CreditCard, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Envío Gratis',
    description: 'En pedidos mayores a $100',
  },
  {
    icon: Shield,
    title: 'Calidad Garantizada',
    description: 'Productos premium seleccionados',
  },
  {
    icon: CreditCard,
    title: 'Pago Seguro',
    description: 'Múltiples métodos de pago',
  },
  {
    icon: MessageCircle,
    title: 'Soporte 24/7',
    description: 'Atención personalizada por WhatsApp',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-rose-light/30 border-y border-border/50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center space-y-3 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

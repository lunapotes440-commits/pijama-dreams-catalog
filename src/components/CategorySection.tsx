import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  category: Product['category'];
  bgColor?: 'default' | 'accent';
}

export function CategorySection({
  id,
  title,
  subtitle,
  category,
  bgColor = 'default',
}: CategorySectionProps) {
  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${
        bgColor === 'accent' ? 'bg-accent/30' : 'bg-background'
      }`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest">
            Catálogo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categoryProducts.map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

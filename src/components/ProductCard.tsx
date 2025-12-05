import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';

// Import all product images
import pajamaDamasMinnie from '@/assets/pajama-damas-minnie.jpg';
import pajamaDamasLove from '@/assets/pajama-damas-love.jpg';
import pajamaDamasGatito from '@/assets/pajama-damas-gatito.jpg';
import pajamaDamasHelloKitty from '@/assets/pajama-damas-hellokitty.jpg';
import pajamaDamasCupcakeCrema from '@/assets/pajama-damas-cupcake-crema.jpg';
import pajamaDamasCupcakeMorado from '@/assets/pajama-damas-cupcake-morado.jpg';
import pajamaDamasStitch from '@/assets/pajama-damas-stitch.jpg';
import pajamaNinosBluey from '@/assets/pajama-ninos-bluey.jpg';
import pajamaNinosMickey from '@/assets/pajama-ninos-mickey.jpg';
import pajamaNinosCapybara from '@/assets/pajama-ninos-capybara.jpg';
import pajamaNinosSonic from '@/assets/pajama-ninos-sonic.jpg';
import pajamaNinosGoku from '@/assets/pajama-ninos-goku.jpg';
import pajamaNinosAvengers from '@/assets/pajama-ninos-avengers.jpg';
import pajamaNinasCandy from '@/assets/pajama-ninas-candy.jpg';
import pajamaNinasPowerpuff from '@/assets/pajama-ninas-powerpuff.jpg';
import pajamaNinasRapunzel from '@/assets/pajama-ninas-rapunzel.jpg';
import pajamaNinasVanellope from '@/assets/pajama-ninas-vanellope.jpg';
import sabana1 from '@/assets/sabana-1.jpg';
import sabana2 from '@/assets/sabana-2.jpg';
import edredon1 from '@/assets/edredon-1.jpg';
import edredon2 from '@/assets/edredon-2.jpg';

const imageMap: Record<string, string> = {
  'pajama-damas-minnie': pajamaDamasMinnie,
  'pajama-damas-love': pajamaDamasLove,
  'pajama-damas-gatito': pajamaDamasGatito,
  'pajama-damas-hellokitty': pajamaDamasHelloKitty,
  'pajama-damas-cupcake-crema': pajamaDamasCupcakeCrema,
  'pajama-damas-cupcake-morado': pajamaDamasCupcakeMorado,
  'pajama-damas-stitch': pajamaDamasStitch,
  'pajama-ninos-bluey': pajamaNinosBluey,
  'pajama-ninos-mickey': pajamaNinosMickey,
  'pajama-ninos-capybara': pajamaNinosCapybara,
  'pajama-ninos-sonic': pajamaNinosSonic,
  'pajama-ninos-goku': pajamaNinosGoku,
  'pajama-ninos-avengers': pajamaNinosAvengers,
  'pajama-ninas-candy': pajamaNinasCandy,
  'pajama-ninas-powerpuff': pajamaNinasPowerpuff,
  'pajama-ninas-rapunzel': pajamaNinasRapunzel,
  'pajama-ninas-vanellope': pajamaNinasVanellope,
  'sabana-1': sabana1,
  'sabana-2': sabana2,
  'edredon-1': edredon1,
  'edredon-2': edredon2,
};

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const imageSrc = imageMap[product.image] || '';
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <article
      className={cn(
        'group relative bg-card rounded-xl overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:-translate-y-1',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full shadow-lg"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full shadow-lg"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full shadow-lg"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground">Nuevo</Badge>
          )}
          {product.isBestseller && (
            <Badge variant="secondary" className="bg-gold text-card">
              Más Vendido
            </Badge>
          )}
          {hasDiscount && (
            <Badge variant="destructive">-{discountPercent}%</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Material Tag */}
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {product.material}
        </span>

        {/* Name */}
        <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Sizes */}
        {product.sizes && (
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-xs px-2 py-0.5 bg-muted rounded-md text-muted-foreground"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs px-2 py-0.5 text-muted-foreground">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 pt-2">
          <span className="font-display text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice!.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

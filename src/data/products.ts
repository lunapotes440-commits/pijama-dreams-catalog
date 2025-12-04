export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'damas' | 'ninos' | 'sabanas' | 'edredones';
  sizes?: string[];
  colors?: string[];
  material: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  // Pijamas para Damas
  {
    id: 'pd-001',
    name: 'Pijama Seda Rosa Elegante',
    description: 'Conjunto de pijama en seda premium con acabado satinado. Camisa con botones y short cómodo.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'pajama-damas-1',
    category: 'damas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rosa', 'Negro', 'Champagne'],
    material: 'Seda 100%',
    isNew: true,
    isBestseller: true,
  },
  {
    id: 'pd-002',
    name: 'Pijama Satín Crema Clásico',
    description: 'Elegante conjunto en satín color crema. Perfecto para noches especiales y descanso lujoso.',
    price: 79.99,
    image: 'pajama-damas-2',
    category: 'damas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Crema', 'Blanco', 'Rosa Pálido'],
    material: 'Satín Premium',
    isBestseller: true,
  },
  {
    id: 'pd-003',
    name: 'Pijama Algodón Lavanda',
    description: 'Conjunto cómodo en algodón suave color lavanda. Ideal para el día a día con estilo.',
    price: 59.99,
    originalPrice: 75.99,
    image: 'pajama-damas-3',
    category: 'damas',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Lavanda', 'Menta', 'Durazno'],
    material: 'Algodón 100%',
    isNew: true,
  },
  // Pijamas para Niños
  {
    id: 'pn-001',
    name: 'Pijama Osito Tierno',
    description: 'Adorable pijama con estampado de osito. Suave al tacto y perfecto para dulces sueños.',
    price: 39.99,
    image: 'pajama-ninos-1',
    category: 'ninos',
    sizes: ['2-3', '4-5', '6-7', '8-9', '10-12'],
    colors: ['Rosa', 'Celeste', 'Amarillo'],
    material: 'Algodón Orgánico',
    isBestseller: true,
  },
  {
    id: 'pn-002',
    name: 'Enterizo Estrellas y Luna',
    description: 'Enterizo con pies en diseño espacial. Mantiene a tu bebé calientito toda la noche.',
    price: 34.99,
    originalPrice: 44.99,
    image: 'pajama-ninos-2',
    category: 'ninos',
    sizes: ['0-3m', '3-6m', '6-12m', '12-18m'],
    colors: ['Celeste', 'Gris', 'Blanco'],
    material: 'Algodón Térmico',
    isNew: true,
  },
  {
    id: 'pn-003',
    name: 'Mameluco Conejito',
    description: 'Mameluco con capucha de conejito. El más adorable para los más pequeños de la casa.',
    price: 44.99,
    image: 'pajama-ninos-3',
    category: 'ninos',
    sizes: ['0-3m', '3-6m', '6-12m', '12-18m', '18-24m'],
    colors: ['Crema', 'Rosa', 'Gris'],
    material: 'Polar Ultra Suave',
    isNew: true,
    isBestseller: true,
  },
  // Sábanas
  {
    id: 'sb-001',
    name: 'Sábanas Algodón Egipcio Blanco',
    description: 'Juego de sábanas premium en algodón egipcio de 400 hilos. Suavidad incomparable.',
    price: 149.99,
    originalPrice: 199.99,
    image: 'sabana-1',
    category: 'sabanas',
    sizes: ['Individual', 'Matrimonial', 'Queen', 'King'],
    colors: ['Blanco', 'Marfil', 'Gris Perla'],
    material: 'Algodón Egipcio 400TC',
    isBestseller: true,
  },
  {
    id: 'sb-002',
    name: 'Sábanas Microfibra Rosa Suave',
    description: 'Juego de sábanas en microfibra premium. Frescas, suaves y fáciles de cuidar.',
    price: 89.99,
    image: 'sabana-2',
    category: 'sabanas',
    sizes: ['Individual', 'Matrimonial', 'Queen', 'King'],
    colors: ['Rosa', 'Lavanda', 'Menta', 'Blanco'],
    material: 'Microfibra Premium',
    isNew: true,
  },
  // Edredones
  {
    id: 'ed-001',
    name: 'Edredón Nube Crema',
    description: 'Edredón esponjoso como una nube. Relleno hipoalergénico de máxima calidez.',
    price: 189.99,
    originalPrice: 249.99,
    image: 'edredon-1',
    category: 'edredones',
    sizes: ['Individual', 'Matrimonial', 'Queen', 'King'],
    colors: ['Crema', 'Blanco', 'Gris'],
    material: 'Plumón Sintético Premium',
    isBestseller: true,
  },
  {
    id: 'ed-002',
    name: 'Edredón Acolchado Rosa Dusty',
    description: 'Elegante edredón acolchado en rosa dusty. El complemento perfecto para tu habitación.',
    price: 169.99,
    image: 'edredon-2',
    category: 'edredones',
    sizes: ['Matrimonial', 'Queen', 'King'],
    colors: ['Rosa Dusty', 'Azul Cielo', 'Verde Salvia'],
    material: 'Algodón con Relleno Térmico',
    isNew: true,
    isBestseller: true,
  },
];

export const categories = [
  {
    id: 'damas',
    name: 'Pijamas para Damas',
    description: 'Elegancia y comodidad para tus noches',
    icon: '👗',
  },
  {
    id: 'ninos',
    name: 'Pijamas para Niños',
    description: 'Diseños adorables para los pequeños',
    icon: '🧸',
  },
  {
    id: 'sabanas',
    name: 'Sábanas',
    description: 'Suavidad premium para tu descanso',
    icon: '🛏️',
  },
  {
    id: 'edredones',
    name: 'Edredones',
    description: 'Calidez y confort durante todo el año',
    icon: '☁️',
  },
];

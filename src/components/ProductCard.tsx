import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  badge?: string;
}

const ProductCard = ({ image, title, description, price, rating, badge }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      {badge && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
          {badge}
        </Badge>
      )}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name={i < Math.floor(rating) ? 'Star' : i < rating ? 'StarHalf' : 'Star'}
                size={16}
                className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

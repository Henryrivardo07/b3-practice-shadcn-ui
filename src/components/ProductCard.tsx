import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <img src={product.image} alt={product.title} className="h-32 object-contain mb-4" />
          <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

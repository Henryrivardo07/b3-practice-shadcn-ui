import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../lib/api";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import { type Product } from "../types/index";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetchProductById(Number(id))
        .then(setProduct)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.title} className="h-64 object-contain mx-auto" />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-muted-foreground mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>
        <Button
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
export default ProductDetail;

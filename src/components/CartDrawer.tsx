import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Cart ({cart.length})
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[350px] p-4" side="right">
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            ))}

            <div className="border-t pt-4 mt-4">
              <p className="font-bold">Total: ${total.toFixed(2)}</p>
              <Button variant="destructive" onClick={clearCart} className="mt-2 w-full">
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

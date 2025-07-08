import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          🛍️ ShadShop
        </Link>
        <CartDrawer />
      </div>
    </header>
  );
}

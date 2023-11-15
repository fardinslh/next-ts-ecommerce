import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          setProductQuantity={setProductQuantity}
          key={cartItem.id}
        />
      ))}
      {!cart?.items.length && <p>Your Cart is Empty</p>}
      <div className="flex flex-col">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}

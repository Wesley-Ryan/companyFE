import { CartContainer } from "../styles/Styles";
import { useStore } from "../hooks/useStore";

import CartItem from "./CartItem";
const Cart = () => {
  const { cart, removeFromCart } = useStore((state) => state);
  return (
    <CartContainer>
      {cart.length >= 1
        ? cart.map((product) => {
            return (
              <>
                <CartItem product={product} removeFromCart={removeFromCart} />
              </>
            );
          })
        : null}
    </CartContainer>
  );
};

export default Cart;
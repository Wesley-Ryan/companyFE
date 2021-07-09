import { CartContainer } from "../styles/Styles";
import { useStore } from "../hooks/useStore";

import CartItem from "./CartItem";
const Cart = () => {
  const { cart, removeFromCart, selected } = useStore((state) => state);
  return (
    <CartContainer>
      {cart.length >= 1
        ? cart.map((product) => {
            return (
              <>
                <CartItem
                  product={product}
                  removeFromCart={removeFromCart}
                  key={product.id}
                  selected={selected}
                />
              </>
            );
          })
        : null}
    </CartContainer>
  );
};

export default Cart;

import create from "zustand";

export const useStore = create((set, get) => ({
  products: [],
  cart: [],
  setProducts: (allProducts) => set({ products: allProducts }),
  addProduct: (product) => set({ products: [...get().products, product] }),
  removeProduct: (requestedProduct) => {
    const products = get().products;
    let currentProducts = products.filter(
      (product) => product.id !== requestedProduct.id
    );
    set({ products: currentProducts });
  },
  addToCart: (product) => {
    const inCart = get().cart;
    if (inCart.includes(product)) {
      return;
    } else {
      set({ cart: [...get().cart, product] });
    }
  },
  removeFromCart: (requestedProduct) => {
    const cart = get().cart;
    let inCart = cart.filter((product) => product.id !== requestedProduct.id);
    set({ cart: inCart });
  },
}));

import create from "zustand";



export const useStore = create((set, get) => ({
  products: [],
  cart: [],
  selected: [],
  isBlueActive: false,
  isPurpleActive: false,
  isPinkActive: false,

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
  addSelected: (color, id) => {
    const products = get().products;
    const selected = get().selected;
    let [selectedProduct] = products.filter((product) => product.id === id);
    const current = selected.filter((product) => product.id !== id);
    selectedProduct = { ...selectedProduct, selectedColor: color };
    current.push(selectedProduct);
    set({ selected: current });
  },
  toggleBlueActive: (select) => set({ isBlueActive: select }),
  togglePurpleActive: (select) => set({ isPurpleActive: select }),
  togglePinkActive: (select) => set({ isPinkActive: select }),
}));

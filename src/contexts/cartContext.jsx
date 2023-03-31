import { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const isInCart = (item) => {
    return cart.some((prod) => prod.id === item.id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item)) {
      //si ya existía en el carrito
      let newCart = [...cart];
      let productAdded = newCart.find((prod) => prod.id === item.id);
      let productAddedIndex = newCart.indexOf(productAdded);
      //busco la posicion del producto existente
      newCart[productAddedIndex].quantity =
        newCart[productAddedIndex].quantity + parseInt(quantity);
      setCart(newCart);
    } else {
      //si no existía en el carrito
      let newProductAdded = { ...item };
      newProductAdded.quantity = parseInt(quantity);
      let newCart = [...cart, newProductAdded];
      setCart(newCart);
    }
    const totalProductPrice = item.price * quantity;
    setTotalPrice(totalPrice + totalProductPrice);

    setTotalProducts(totalProducts + quantity);
  };

  const removeItemFromCart = (id, price, quantity) => {
    //elimino de a un producto
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    setTotalPrice(totalPrice - price * quantity);
    setTotalProducts(totalProducts - quantity);
  };

  const cleanCart = () => {
    //elimino todos los productos
    setCart([]);
    setTotalPrice(0);
    setTotalProducts(0);
  };

  const contextValue = {
    cleanCart,
    removeItemFromCart,
    addToCart,
    cart,
    totalProducts,
    totalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

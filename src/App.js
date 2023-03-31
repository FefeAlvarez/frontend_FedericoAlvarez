import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Products } from "./pages/products";
import { PurchaseDetail } from "./pages/purchaseDetails";
import { Cart } from "./pages/cart";
import { Category } from "./pages/category";
import { Checkout } from "./pages/checkout";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { CartProvider } from "./contexts/cartContext";

export const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/category/:categoryID">
              <Category />
            </Route>
            <Route path="/products/:productID">
              <PurchaseDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="*">
              <Error />
            </Route>

            <Redirect to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

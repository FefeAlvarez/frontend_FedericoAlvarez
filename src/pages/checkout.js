import { styles } from "./pageStyles/checkout.styles";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/cartContext";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "@douyinfe/semi-ui";
import { Link } from "react-router-dom";
import { LoadingSpin } from "../components/LoadingSpin/LoadingSpin";
import { CheckoutCard } from "../components/CheckoutCard/CheckoutCard";
import { CheckoutForm } from "../components/CheckoutForm/CheckoutForm";

export const Checkout = () => {
  const { totalPrice, cart, cleanCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [showComponent, setShowComponent] = useState(true);
  const [orderId, setOrderId] = useState("");

  const generateOrder = (buyer, totalPrice) => {
    const newOrder = {
      buyer: buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      date: new Date(),
      total: totalPrice,
    };
    const createOrder = async () => {
      const orderRef = await addDoc(collection(db, "orders"), newOrder);
      setOrderId(orderRef.id);
    };
    createOrder();
    cleanCart();
    setShowComponent(false);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setBuyer({ ...buyer, [name]: value });
  };

  useEffect(() => {
    const newDisableButton = [
      buyer.name,
      buyer.surname,
      buyer.phone,
      buyer.email,
    ].includes("");
    setIsDisabled(newDisableButton);
  }, [buyer]);
  return showComponent ? (
    <section>
      <CheckoutForm
        buyer={buyer}
        handleOnChange={handleOnChange}
        isDisabled={isDisabled}
        generateOrder={generateOrder}
        totalPrice={totalPrice}
      />
    </section>
  ) : orderId ? (
    <div style={styles.cardContainer}>
      <CheckoutCard
        buyerName={buyer.name}
        buyerSurname={buyer.surname}
        orderId={orderId}
      />
      <Button style={styles.button}>
        <Link to="/products" style={styles.link}>
          Back to full catalog
        </Link>
      </Button>
    </div>
  ) : (
    <LoadingSpin />
  );
};

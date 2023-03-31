import styles from "./ItemListContainer.module.css";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const products = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setItems(products);
    };
    try {
      getItems();
    } catch (error) {
      console.log("we have this error: ", error);
    }
  }, []);
  return (
    <div className={styles.itemListContainer}>
      <h1 className={styles.title}>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

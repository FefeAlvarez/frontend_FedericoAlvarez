import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const { productID } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const prodCollection = collection(db, "items");
    const docRef = doc(prodCollection, `${productID}`);
    const getItem = async () => {
      const response = await getDoc(docRef);
      const itemId = response.id;
      const itemData = response.data();
      const data = { id: itemId, ...itemData };
      setItem(data);
    };
    getItem();
  }, [productID]);

  return (
    <div className={styles.itemsContainer}>
      <ItemDetail item={item} />
    </div>
  );
};

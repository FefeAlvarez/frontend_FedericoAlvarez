import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";
import { LoadingSpin } from "../LoadingSpin/LoadingSpin";

export const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList}>
      {items.length ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
          />
        ))
      ) : (
        <LoadingSpin />
      )}
    </div>
  );
};

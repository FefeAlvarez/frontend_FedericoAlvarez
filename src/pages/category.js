import { styles } from "./pageStyles/category.styles";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Item } from "../components/Item/Item";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Button, Breadcrumb } from "@douyinfe/semi-ui";
import { IconHome } from "@douyinfe/semi-icons";
export const Category = () => {
  const { categoryID } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const prodCollection = collection(db, "items");
      const q = query(prodCollection, where("category", "==", `${categoryID}`));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategories(data);
    };
    getCategories();
  }, [categoryID]);
  return (
    <div>
      <Breadcrumb
        separator={">"}
        routes={[
          {
            path: "/",
            href: "/",
            icon: <IconHome />,
          },
          {
            path: "/products",
            href: "/products",
            name: "catalog",
          },
          `${categoryID}`,
        ]}
      />
      <h1 style={styles.title}>
        <b>{categoryID}</b>
      </h1>
      {categories.map((cat, i) => (
        <div key={i}>
          <Item
            id={cat.id}
            title={cat.title}
            image={cat.image}
            category={cat.category}
          />
        </div>
      ))}
      <Button style={styles.button}>
        <Link to="/products" style={styles.link}>
          Back to full catalog
        </Link>
      </Button>
    </div>
  );
};

import { styles } from "./ItemDetail.styles";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Button, Card, Space, Tag, Typography } from "@douyinfe/semi-ui";
import { IconPriceTag } from "@douyinfe/semi-icons";
import Meta from "@douyinfe/semi-ui/lib/es/card/meta";
import Paragraph from "@douyinfe/semi-ui/lib/es/typography/paragraph";

export const ItemDetail = ({ item }) => {
  const { Title } = Typography;
  const { addToCart } = useContext(CartContext);
  const [showComponent, setShowComponent] = useState(true);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (e) => {
    setShowComponent(false);
    setQuantity(e.target.value);
    let quantity = parseInt(e.target.value);
    addToCart(item, quantity);
  };

  const alertmsg = `Congrats! You added to the cart: ${quantity} product`;

  return (
    <div style={styles.container}>
      <Card shadows="hover">
        <Space>
          <Space>
            <img style={styles.image} src={item.image} alt={item.title} />
          </Space>
          <Space vertical>
            <Meta title={item.title} />
            <Title heading={3} style={styles.priceTitle}>
              <IconPriceTag /> USD {item.price}
            </Title>
            <Paragraph>{item.description}</Paragraph>
            <Link to="/products" style={styles.link}>
              <Button style={styles.button}>Back to catalog</Button>
            </Link>
          </Space>
          <Space vertical>
            <div style={styles.countContainer}>
              <Link to={`/category/${item.category}`}>
                <Tag color="orange" type="ghost">
                  {item.category}
                </Tag>
              </Link>

              {showComponent ? (
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
              ) : (
                <div>
                  <p style={styles.paragraph}>
                    {quantity > 1 ? `${alertmsg}s` : `${alertmsg}`}
                  </p>

                  <Link to="/cart" style={styles.link}>
                    Go to Cart
                  </Link>
                </div>
              )}
            </div>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

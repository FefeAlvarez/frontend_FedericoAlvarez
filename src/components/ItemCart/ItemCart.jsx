import { Fragment, useContext } from "react";
import { styles } from "./ItemCart.styles.js";
import { IconMinusCircle } from "@douyinfe/semi-icons";
import { Card, Button, Descriptions } from "@douyinfe/semi-ui";
import Typography from "@douyinfe/semi-ui/lib/es/typography/typography";
import { CartContext } from "../../contexts/cartContext.jsx";

export const ItemCart = ({ image, id, name, price, quantity }) => {
  const { removeItemFromCart } = useContext(CartContext);
  const { Title } = Typography;
  const data = [
    //data for cards' descriptions
    { key: "Price", value: `USD ${price}` },
    { key: "Quantity", value: quantity },
  ];
  return (
    <Fragment>
      <Card
        cover={<img alt="example" src={image} style={styles.cover} />}
        style={styles.card}
        shadows="hover"
      >
        <Title style={styles.title} heading={5}>
          {name}
        </Title>
        <Descriptions data={data} style={styles.descriptions} />
        <Button
          style={styles.button}
          id={id}
          onClick={() => removeItemFromCart(id, price, quantity)}
        >
          Remove <IconMinusCircle style={styles.icono} />
        </Button>
      </Card>
    </Fragment>
  );
};

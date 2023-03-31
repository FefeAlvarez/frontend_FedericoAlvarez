import { Badge } from "@douyinfe/semi-ui";
import { IconCart } from "@douyinfe/semi-icons";
import { styles } from "./CartWidget.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
export const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <Badge count={totalProducts} style={styles.badge}>
      <IconCart size="large" style={styles.iconCart} />
    </Badge>
  );
};

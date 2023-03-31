import { useState } from "react";
import { IconPlus, IconMinus, IconCart } from "@douyinfe/semi-icons";
import { Button, Space, Typography } from "@douyinfe/semi-ui";
import { styles } from "./ItemCount.styles";
export const ItemCount = ({ initial, stock, onAdd }) => {
  const { Title } = Typography;
  const [count, setCount] = useState(initial);
  const onDecrease = () => {
    const newAmount = count - 1;
    if (newAmount >= initial) {
      setCount(newAmount);
    }
  };

  const onIncrease = () => {
    const newAmount = count + 1;
    if (newAmount <= stock) {
      setCount(newAmount);
    }
  };

  return (
    <div style={styles.countContainer}>
      <Space vertical spacing="tight">
        <Title style={styles.title} heading={5}>
          Quantity: {count}
        </Title>
        <Space horizontal>
          <Button
            size="large"
            theme="solid"
            style={styles.button}
            onClick={onDecrease}
          >
            <IconMinus style={styles.icon} />
          </Button>
          <Button
            size="large"
            theme="solid"
            style={styles.button}
            onClick={onIncrease}
          >
            <IconPlus style={styles.icon} />
          </Button>
        </Space>

        <button style={styles.button} onClick={onAdd} value={count}>
          Add to cart
          <IconCart style={styles.icon} />
        </button>
      </Space>
    </div>
  );
};

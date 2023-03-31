import { Link } from "react-router-dom";
import { styles } from "./Item.styles.js";
import { Card, Space, Button, Tag } from "@douyinfe/semi-ui";

export const Item = ({ id, title, image, category }) => {
  const { Meta } = Card;

  return (
    <div>
      <Card
        style={styles.card}
        title={<Meta title={title} style={styles.meta} />}
        cover={<img alt="example" src={image} style={styles.cover} />}
        footerLine={true}
        footerStyle={styles.footer}
        footer={
          <Space style={styles.space}>
            <Link to={`/category/${category}`}>
              <Tag>{category}</Tag>
            </Link>

            <Link to={`/products/${id}`} style={styles.link}>
              <Button style={styles.button} theme="solid" type="primary">
                More details
              </Button>
            </Link>
          </Space>
        }
      ></Card>
    </div>
  );
};

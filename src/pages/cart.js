import { styles } from "./pageStyles/cart.styles.js";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { ItemCart } from "../components/ItemCart/ItemCart.jsx";
import {
  CardGroup,
  Button,
  Empty,
  Breadcrumb,
  Row,
  Col,
} from "@douyinfe/semi-ui";
import { IconDelete, IconChevronLeft, IconHome } from "@douyinfe/semi-icons";
import { IllustrationNoContent } from "@douyinfe/semi-illustrations";

export const Cart = () => {
  const { totalProducts, totalPrice, cart, cleanCart } =
    useContext(CartContext);

  return (
    <Fragment>
      <Breadcrumb
        separator={">"}
        routes={[
          {
            path: "/",
            href: "/",
            icon: <IconHome />,
          },

          "cart",
        ]}
      />
      <h1>CART</h1>
      <div className="cartContainer">
        {totalProducts === 0 ? (
          <div style={styles.emptyContainer}>
            <Empty
              image={<IllustrationNoContent style={styles.emptyIlustration} />}
              description={"The cart is empty, go back to the store"}
            />
            <Link to="/products" style={styles.link}>
              <Button style={styles.button}>Back to store</Button>
            </Link>
          </div>
        ) : (
          <Fragment>
            <Row>
              <Col span={10} offset={2}>
                <CardGroup>
                  {cart.map((item) => (
                    <ItemCart
                      key={item.id}
                      image={item.image}
                      id={item.id}
                      name={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  ))}
                </CardGroup>
              </Col>
              <Col span={10} offset={2}>
                {totalProducts > 1 ? (
                  <p style={styles.paragraph}>
                    There are {totalProducts} products in total
                  </p>
                ) : (
                  <p style={styles.paragraph}>
                    There is {totalProducts} product in total
                  </p>
                )}

                <p style={styles.paragraph}>Total price: u$D {totalPrice}</p>
                <Button style={styles.buttonCheckout}>
                  <Link to="/checkout" style={styles.linkCheckout}>
                    Checkout
                  </Link>
                </Button>

                <Button style={styles.button}>
                  <Link to="/products" style={styles.link}>
                    <IconChevronLeft /> <br />
                    Continue shopping
                  </Link>
                </Button>

                <Button onClick={cleanCart} style={styles.button}>
                  <IconDelete style={styles.icon} />
                  <br />
                  Delete cart
                </Button>
              </Col>
            </Row>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

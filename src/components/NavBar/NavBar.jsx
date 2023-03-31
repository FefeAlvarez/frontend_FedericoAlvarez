import styles from "./NavBar.module.css";
import guitar from "../../assets/guitar.png";
import { semiStyles } from "./NavBar.styles";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";
import { Dropdown } from "@douyinfe/semi-ui";

export const NavBar = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoIcon} src={guitar} alt="guitar icon" />
        <p className={styles.logoText}>Fede's Guitars</p>
      </Link>
      <nav className={styles.categories}>
        <NavLink
          exact
          className={styles.category}
          activeClassName={styles.activeCategory}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={styles.category}
          activeClassName={styles.activeCategory}
          to="/products"
        >
          <Dropdown
            render={
              <Dropdown.Menu style={semiStyles.dropdown}>
                <Dropdown.Item>
                  <Link to="/category/electric guitars" style={semiStyles.link}>
                    Electric guitars
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/category/acoustic guitars" style={semiStyles.link}>
                    Acoustic guitars
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/category/bass" style={semiStyles.link}>
                    Basses
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/category/amplifiers" style={semiStyles.link}>
                    Amplifiers
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            Catalog
          </Dropdown>
        </NavLink>

        <NavLink
          className={styles.category}
          activeClassName={styles.activeCategory}
          to="/cart"
        >
          Cart
        </NavLink>
      </nav>
      {totalProducts >= 1 && (
        <Link to="/cart">
          <CartWidget />
        </Link>
      )}
    </header>
  );
};

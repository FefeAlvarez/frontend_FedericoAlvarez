import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./pageStyles/home.styles";

export const Home = () => {
  const [buttonChange, setButtonChange] = useState(true);
  const handleMouseEvent = () => {
    setButtonChange(!buttonChange);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.homeTitle}>Welcome to the best guitars' store!</h1>
      <Link
        to="/products"
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
        style={buttonChange ? styles.mainButton : styles.mouseHover}
      >
        Enter the store
      </Link>
    </div>
  );
};

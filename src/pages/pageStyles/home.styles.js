import background from "../../assets/landing+page.jpg";
import { colors } from "../../globals.styles";

const buttonText = {};
const container = {
  width: "100%",
  height: "85vh",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const homeTitle = {
  color: colors.white,
};
const mainButton = {
  color: colors.orange,
  fontSize: "4em",
  padding: "10px",
  margin: "5px",
  border: `1px ${colors.orangeDark} solid`,
  borderRadius: "10px",
  textDecoration: "none",
};

const mouseHover = {
  color: colors.white,
  backgroundColor: colors.orange,
  fontSize: "4em",
  padding: "10px",
  margin: "5px",
  border: `1px ${colors.orangeDark} solid`,
  borderRadius: "10px",
  textDecoration: "none",
};

export const styles = {
  buttonText,
  container,
  homeTitle,
  mainButton,
  mouseHover,
};

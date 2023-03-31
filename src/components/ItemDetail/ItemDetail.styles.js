import { colors } from "../../globals.styles";
const button = {
  backgroundColor: colors.orange,
  margin: 10,
  color: colors.white,
  padding: 10,
  borderRadius: 5,
};
const container = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  padding: "2em",
};
const countContainer = {
  marginRight: "1em",
};
const description = {
  fontStyle: "italic",
};
const image = {
  width: 200,
};
const imageContainer = {
  marginLeft: "1em",
};
const link = {
  textDecoration: "none",
  backgroundColor: colors.orange,
  margin: 10,
  color: colors.white,
  padding: 10,
  borderRadius: 5,
};
const paragraph = {
  borderRadius: 5,
  border: `1px ${colors.orange} solid`,
  margin: "1em",
  fontWeight: "bold",
};
const priceTitle = {
  border: `1px ${colors.orange} solid`,
  backgroundColor: colors.white,
  color: colors.black,
  borderRadius: 12,
  padding: "1em",
};
const title = {
  fontSize: 20,
};

export const styles = {
  button,
  container,
  countContainer,
  description,
  image,
  imageContainer,
  link,
  paragraph,
  priceTitle,
  title,
};

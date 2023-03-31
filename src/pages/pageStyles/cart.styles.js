import { colors } from "../../globals.styles";
const button = {
  textDecoration: "none",
  color: colors.orange,
  padding: "2em",
  margin: 5,
};
const buttonCheckout = {
  backgroundColor: colors.orangeDark,
  color: colors.orange,
  padding: "2em",
  margin: 5,
  border: `2px ${colors.orange} solid`,
};
const emptyContainer = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const emptyIlustration = {
  width: 150,
  height: 150,
};
const icon = {
  color: colors.orange,
};
const link = {
  textDecoration: "none",
  color: colors.orange,
};
const linkCheckout = {
  textDecoration: "none",
  color: colors.white,
};
const paragraph = {
  borderRadius: 5,
  border: `1px ${colors.orange} solid`,
  margin: "1em",
  fontWeight: "bold",
};

export const styles = {
  button,
  buttonCheckout,
  emptyContainer,
  emptyIlustration,
  icon,
  link,
  linkCheckout,
  paragraph,
};

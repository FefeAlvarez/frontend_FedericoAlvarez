import { colors } from "../../globals.styles";

const button = {
  backgroundColor: colors.orange,
  margin: 10,
  color: colors.white,
  padding: 10,
  borderRadius: 5,
};
const countContainer = {
  backgroundColor: colors.white,
  border: `1px ${colors.orange} solid`,
  borderRadius: 12,
};

const icon = {
  color: colors.white,
  backgroundColor: colors.orange,
  margin: 2,
};
const text = {
  color: colors.white,
};
const title = {
  marginTop: 10,
  color: colors.black,
  border: `1px ${colors.orange} solid`,
  borderRadius: 4,
  padding: 3,
};

export const styles = {
  button,
  countContainer,
  icon,
  text,
  title,
};

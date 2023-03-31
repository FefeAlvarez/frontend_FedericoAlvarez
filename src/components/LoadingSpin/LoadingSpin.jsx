import { Spin } from "@douyinfe/semi-ui";
import { styles } from "./LoadingSpin.styles";

export const LoadingSpin = () => {
  return (
    <div>
      <Spin size="large" />
      <p style={styles.messageText}>Loading...</p>
    </div>
  );
};

import { IconTick } from "@douyinfe/semi-icons";
import { styles } from "./CheckoutCard.styles";
export const CheckoutCard = ({ buyerName, buyerSurname, orderId }) => {
  return (
    <div style={styles.card}>
      <div style={styles.checkoutPhraseContainer}>
        <p>
          <IconTick style={styles.icon} />
          <b>
            {buyerName} {buyerSurname}
          </b>{" "}
          you've successfully buyed in our store!
        </p>
      </div>
      <br />
      <br />
      <div style={styles.checkoutPhraseContainer}>
        <p>
          Your order ID is <b>{orderId}</b>, you'll be contacted soon.
        </p>
      </div>
      <br />
      <br />
      <div style={styles.checkoutPhraseContainer}>
        <p>
          Thanks for buying in <b> Fede's Guitars </b>!
        </p>
      </div>
    </div>
  );
};

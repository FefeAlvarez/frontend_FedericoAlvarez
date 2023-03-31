import { styles } from "./CheckoutForm.styles";
import { IconTick } from "@douyinfe/semi-icons";

export const CheckoutForm = ({
  buyer,
  handleOnChange,
  isDisabled,
  generateOrder,
  totalPrice,
}) => {
  return (
    <div style={styles.formContainer}>
      <h1 style={styles.title}>Buyer Data</h1>
      <div style={styles.formInput}>
        <label>
          Name:
          <br />
          <input
            name="name"
            type="text"
            value={buyer.name}
            onChange={handleOnChange}
            style={styles.input}
            placeholder="write your name"
          />
        </label>
        <label>
          Surname:
          <br />
          <input
            name="surname"
            type="text"
            value={buyer.surname}
            onChange={handleOnChange}
            style={styles.input}
            placeholder="write your surname"
          />
        </label>
        <label>
          Phone:
          <br />
          <input
            name="phone"
            type="number"
            value={buyer.phone}
            onChange={handleOnChange}
            style={styles.input}
            placeholder="1100220033"
          />
        </label>
        <label>
          e-Mail:
          <br />
          <input
            name="email"
            type="text"
            value={buyer.email}
            onChange={handleOnChange}
            style={styles.input}
            placeholder="abc@email.com"
          />
        </label>

        <button
          type="submit"
          disabled={isDisabled}
          onClick={() => generateOrder(buyer, totalPrice)}
          style={isDisabled ? styles.buttonFinishDisabled : styles.buttonFinish}
        >
          Click to finish <br />
          <IconTick />
        </button>
      </div>
    </div>
  );
};

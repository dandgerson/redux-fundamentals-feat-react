import { useEffect, useState } from "react";
import { formatPrice } from "../formatPrice";
import CurrencyInput from "./CurrencyInput";

const MenuItem = ({ item, removeItem, updatePrice, updateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    updateQuantity(Number.parseInt(quantity, 10));
  }, [quantity]);

  useEffect(() => {
    updatePrice(Number.parseInt(price, 10));
  }, [price]);

  return (
    <div className="item">
      <h2>{item.name}</h2>

      <div className="formContainer">
        <form>
          <CurrencyInput
            htmlFor={`price${item.uuid}`}
            id={`price${item.uuid}`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor={`quantity${item.uuid}`}>
            Quantity
            <input
              type="number"
              id={`quantity${item.uuid}`}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </form>

        <div className="total">
          <div>Total</div>
          <div>{formatPrice(price * quantity)}</div>
        </div>
      </div>

      <button className="button button-remove" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default MenuItem;

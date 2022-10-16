import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";

const formatPrice = (price) => `$${price.toFixed(2)}`;

const MenuItem = ({ item }) => {
  const [quantity, setQuanity] = useState(1);

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <div className="formContainer">
        <form>
          <CurrencyInput
            htmlFor={`price${item.uuid}`}
            id={`price${item.uuid}`}
            value={item.price}
            isReadOnly
          />
          <label htmlFor={`quantity${item.uuid}`}>
            Quantity
            <input
              type="number"
              id={`quantity${item.uuid}`}
              value={quantity}
              onChange={(e) => setQuanity(e.target.value)}
            />
          </label>
        </form>
        <div className="total">
          <div>Total</div>
          <div>{formatPrice(item.price * quantity)}</div>
        </div>
      </div>
      <button className="button button-remove">Remove</button>
    </div>
  );
};

export default MenuItem;

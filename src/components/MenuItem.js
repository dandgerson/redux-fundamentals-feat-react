import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";

const formatPrice = (price) => `$${price.toFixed(2)}`;

const MenuItem = ({ item, removeItem, updatePrice, updateQuantity }) => {
  return (
    <div className="item">
      <h2>{item.name}</h2>

      <div className="formContainer">
        <form>
          <CurrencyInput
            htmlFor={`price${item.uuid}`}
            id={`price${item.uuid}`}
            value={item.price}
            onChange={(e) => updatePrice(e.target.value)}
          />
          <label htmlFor={`quantity${item.uuid}`}>
            Quantity
            <input
              type="number"
              id={`quantity${item.uuid}`}
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(Number.parceInt(e.target.value, 10))
              }
            />
          </label>
        </form>

        <div className="total">
          <div>Total</div>
          <div>{formatPrice(item.price * item.quantity)}</div>
        </div>
      </div>

      <button className="button button-remove" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default MenuItem;

import { useEffect, useState } from "react";

const formatPrice = (price) => `$${price.toFixed(2)}`;

const MenuItem = ({ item }) => {
  const [quantity, setQuanity] = useState(1);

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <div className="formContainer">
        <form>
          <label htmlFor={`price${item.uuid}`}>
            Price
            <div className="currencyinput">
              <span>$</span>
              <input
                type="number"
                id={`price${item.uuid}`}
                readOnly
                value={item.price}
              />
            </div>
          </label>
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
      <button className="button remove">Remove</button>
    </div>
  );
};

export default MenuItem;

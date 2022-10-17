import { useState } from "react";
import { addItem } from "../store/itemsReducer";
import CurrencyInput from "./CurrencyInput";

const NewItemForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="newItemForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!itemName && typeof onSubmit !== "function") return;

          onSubmit(itemName, price);

          setItemName("");
          setPrice(0);
        }}
      >
        <label htmlFor="item-name">
          Item Name
          <input
            type="text"
            id="item-name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>

        <CurrencyInput
          htmlFor={"price"}
          id={"price"}
          value={price}
          onChange={(e) => setPrice(Number.parseInt(e.target.value, 10))}
        />

        <button className="button button-add" disabled={!itemName}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItemForm;

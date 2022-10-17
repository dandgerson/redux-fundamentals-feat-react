import produce from "immer";

const t = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_PRICE: "UPDATE_PRICE",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

let id = 1;

export const initialItems = [
  { uuid: id++, name: "WTF", price: 12, quantity: 1 },
  { uuid: id++, name: "LOL", price: 10, quantity: 1 },
];

export const itemsReducer = produce((state = initialItems, action) => {
  if (action.type === t.ADD_ITEM) {
    state.push({
      uuid: id++,
      quantity: 1,
      ...action.payload,
    });
  }

  if (action.type === t.REMOVE_ITEM) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === t.UPDATE_PRICE) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = action.payload.price;
  }

  if (action.type === t.UPDATE_QUANTITY) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = action.payload.quantity;
  }
}, initialItems);

export const addItem = ({ name, price }) => ({
  type: t.ADD_ITEM,
  payload: { name, price },
});

export const removeItem = (uuid) => ({
  type: t.REMOVE_ITEM,
  payload: { uuid },
});

export const updatePrice = ({ uuid, price }) => ({
  type: t.UPDATE_PRICE,
  payload: { uuid, price },
});

export const updateQuantity = ({ uuid, quantity }) => ({
  type: t.UPDATE_QUANTITY,
  payload: { uuid, quantity },
});

export default itemsReducer;

const t = {
  ADD_ITEM: "ADD_ITEM",
};

let id = 1;

export const initialItems = [
  { uuid: id++, name: "WTF", price: 12, quantity: 1 },
  { uuid: id++, name: "LOL", price: 10, quantity: 1 },
];

export const itemsReducer = (state = initialItems, action) => {
  if (action.type === t.ADD_ITEM) {
    return [
      ...state,
      {
        uuid: id++,
        quantity: 1,
        ...action.payload,
      },
    ];
  }
  return state;
};

export const addItem = ({ name, price }) => ({
  type: t.ADD_ITEM,
  payload: { name, price },
});

export default itemsReducer;

export const t = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SET: "SET",
};

export const increment = () => ({ type: t.INCREMENT });
export const decrement = () => ({ type: t.DECREMENT });
export const set = (amount) => ({ type: t.SET, payload: amount });

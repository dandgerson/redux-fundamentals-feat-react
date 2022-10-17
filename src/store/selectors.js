import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
export const selectItem = (state, ownProps) =>
  state.items.find((item) => item.uuid === ownProps.item.uuid);

export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((acc, current) => acc + current.price * current.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => (subTotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (total, tipAmount) => total + tipAmount
);

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);

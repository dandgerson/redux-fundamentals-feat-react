const t = {
  UPDATE_TIP: "UPDATE_TIP",
};

const initialState = 10;

const tipPercentageReducer = (state = initialState, action) => {
  if (action.type === t.UPDATE_TIP) {
    return action.payload.tip;
  }

  return state;
};

export const updateTip = (tip) => ({ type: t.UPDATE_TIP, payload: { tip } });

export default tipPercentageReducer;

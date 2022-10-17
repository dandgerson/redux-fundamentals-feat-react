import { connect } from "react-redux";
import Summary from "../components/Summary";

const mapStateToProps = (state) => {
  const subTotal = state.items.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  const tipAmount = (subTotal * state.tipPercentage) / 100;

  const total = subTotal + tipAmount;

  return {
    subTotal,
    tipAmount,
    total,
  };
};

export default connect(mapStateToProps, null)(Summary);

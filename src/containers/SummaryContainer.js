import { connect } from "react-redux";
import Summary from "../components/Summary";
import {
  selectSubTotal,
  selectTipAmount,
  selectTotal,
} from "../store/selectors";

const mapStateToProps = (state) => {
  return {
    subTotal: selectSubTotal(state),
    tipAmount: selectTipAmount(state),
    total: selectTotal(state),
  };
};

export default connect(mapStateToProps, null)(Summary);

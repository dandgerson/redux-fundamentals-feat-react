import { connect } from "react-redux";
import TipSelect from "../components/TipSelect";
import { updateTip } from "../store/tipPercentageReducer";

const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tipPercentage,
  };
};
const mapDispatchToProps = {
  updateTip,
};

export default TipSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);

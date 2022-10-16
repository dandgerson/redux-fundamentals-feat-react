import { connect } from "react-redux";
import { updateTip } from "../store/tip-percentage/actions";
import TipSelect from "../components/TipSelect";

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

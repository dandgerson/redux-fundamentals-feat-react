import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";
import { removeItem, updatePrice, updateQuantity } from "../store/itemsReducer";

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(removeItem(ownProps.item.uuid)),
  updatePrice: (price) =>
    dispatch(updatePrice({ uuid: ownProps.item.uuid, price })),
  updateQuantity: (quantity) =>
    dispatch(updateQuantity({ uuid: ownProps.item.uuid, quantity })),
});

export default MenuItemsContainer = connect(null, mapDispatchToProps)(MenuItem);

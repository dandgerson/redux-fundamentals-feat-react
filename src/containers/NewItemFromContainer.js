import { connect } from "react-redux";
import NewItemForm from "../components/NewItemForm";
import { addItem } from "../store/itemsReducer";

const mapDispatchToProps = {
  onSubmit: (name, price) => addItem({ name, price }),
};

export default MenuItemsContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);

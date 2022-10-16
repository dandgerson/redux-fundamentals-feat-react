import Card from "./Card";
import TipSelectContainer from "../containers/TipSelectContainer";
import Summary from "./Summary";
import { MenuItemsContainer } from "../containers/MenuItemsContainer";
import NewItemFormContainer from "../containers/NewItemFromContainer";

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;

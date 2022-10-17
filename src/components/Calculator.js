import Card from "./Card";
import TipSelectContainer from "../containers/TipSelectContainer";
import Summary from "./Summary";
import { MenuItemsContainer } from "../containers/MenuItemsContainer";
import NewItemFormContainer from "../containers/NewItemFromContainer";
import SummaryContainer from "../containers/SummaryContainer";

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;

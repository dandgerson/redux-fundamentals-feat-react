import Card from "./Card";
import NewItemForm from "./NewItemForm";
import TipSelectContainer from "./TipSelectContainer";
import Summary from "./Summary";
import { MenuItemsContainer } from "../containers/MenuItemsContainer";

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;

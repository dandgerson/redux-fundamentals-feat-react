import MenuItemContainer from "../containers/MenuItemContainer";

const MenuItems = ({ items }) => {
  return (
    <div className="menuItems">
      {items.map((item) => (
        <MenuItemContainer key={item.uuid} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;

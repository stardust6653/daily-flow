import { MenuItemStyle } from "./MenuItem.css";

interface MenuItemProps {
  item: {
    key: string;
    href: string;
    element: React.ReactNode;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <li className={MenuItemStyle} key={item.key}>
      <a href={item.href}>{item.element}</a>
    </li>
  );
};

export default MenuItem;

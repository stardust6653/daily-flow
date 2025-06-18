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
      <a onClick={() => alert("현재 기능을 준비 중입니다.")}>{item.element}</a>
    </li>
  );
};

export default MenuItem;

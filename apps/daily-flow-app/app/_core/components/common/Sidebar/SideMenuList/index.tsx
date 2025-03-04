import {
  SideMenuListStyle,
  SideMenuListTitleStyle,
  SideMenuListWrapperStyle,
} from "./SideMenuList.css";

interface SideMenuListProps {
  children: React.ReactNode;
  title: string;
}

const SideMenuList = ({ children, title }: SideMenuListProps) => {
  return (
    <div className={SideMenuListWrapperStyle}>
      <p className={SideMenuListTitleStyle}>{title}</p>
      <ul className={SideMenuListStyle}>{children}</ul>
    </div>
  );
};

export default SideMenuList;

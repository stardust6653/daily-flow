// constants/menuItems.ts

import {
  SideMenuIconStyle,
  SideMenuItemStyle,
} from "@/app/_core/components/common/Sidebar/SideMenuList/SideMenuList.css";
import { CiCalendar } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";

export const MENU_ITEMS = [
  {
    key: "calendar",
    element: (
      <span className={SideMenuItemStyle}>
        <CiCalendar className={SideMenuIconStyle} /> 캘린더
      </span>
    ),
    href: "/calendar",
  },
  {
    key: "analysis",
    element: (
      <span className={SideMenuItemStyle}>
        <IoAnalytics className={SideMenuIconStyle} /> 분석
      </span>
    ),
    href: "/analysis",
  },
] as const;

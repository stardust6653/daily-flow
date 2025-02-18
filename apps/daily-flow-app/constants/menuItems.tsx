// constants/menuItems.ts
import {
  SidebarMenuItemIconStyle,
  SidebarMenuItemStyle,
} from "@/app/components/common/Sidebar/Sidebar.css";
import { CiCalendar } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";

export const MENU_ITEMS = [
  {
    key: "calendar",
    element: (
      <span className={SidebarMenuItemStyle}>
        <CiCalendar className={SidebarMenuItemIconStyle} /> 캘린더
      </span>
    ),
    href: "/calendar",
  },
  {
    key: "analysis",
    element: (
      <span className={SidebarMenuItemStyle}>
        <IoAnalytics className={SidebarMenuItemIconStyle} /> 분석
      </span>
    ),
    href: "/analysis",
  },
] as const;

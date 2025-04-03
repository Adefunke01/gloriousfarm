import { SideBarItemsList } from "../../types/base";
import { SidebarItem } from "./SidebarItem";
import styles from "./sidebar.module.css";
import dashboard from "../../assets/sidebarIcons/dashboard.svg";
import dashboardActive from "../../assets/sidebarIcons/dashboardActive.svg";
import { useLocation } from "react-router-dom";
import searchIcon from "../../assets/images/searchicon.png";
import titleLogo from "../../assets/images/Logomark.png";
import { useState } from "react";

const sidebarItemsList: SideBarItemsList = [
  {
    title: "Dashboard",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/dashboard",
  },
  {
    title: "Customer",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/customer",
  },
  {
    title: "All reports",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/reports",
  },
  {
    title: "Geography",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/geography",
  },
  {
    title: "Conversations",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/conversations",
  },
  {
    title: "Deals",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/deals",
  },
  {
    title: "Export",
    iconLink: dashboard,
    iconLinkActive: dashboardActive,
    url: "/export",
  },
];
export const Sidebar: React.FunctionComponent = () => {
  const [sidebarList, setSidebarList] =
    useState<SideBarItemsList>(sidebarItemsList);
  const [inputValue, setInputValue] = useState("");
  // const path = window.location.pathname
  const { pathname } = useLocation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if(!value){
      setSidebarList(sidebarItemsList)
      return
    }
  
      const newList = sidebarItemsList.filter((item) => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.url.toLowerCase().includes(value.toLowerCase())
        );
      });
      setSidebarList(newList);
  };

  return (
    <div className={styles.sidebarContainer}>
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img className={styles.titleLogo} src={titleLogo} alt="" />
        <p className={styles.titleText}>GloriousFarm</p>
      </div>
      <div className={styles.inputContainer}>
        <img src={searchIcon} className={styles.searchIcon} alt="" />
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div className={styles.itemsContainer}>
        {sidebarList.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            iconLink={
              item.url === pathname ? item.iconLinkActive : item.iconLink
            }
            url={item.url}
            active=  {item.url === pathname}
          />
        ))}
      </div>
    </aside>
    </div>
  );
};
